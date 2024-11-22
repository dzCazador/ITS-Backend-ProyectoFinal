import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto, LoginDto} from './dto';
import { AuthService } from './auth/auth.service';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly auth: AuthService
  ){}


  async register(createUserDto: CreateUserDto) {
    // Desestructuramos el Objeto
    const {email, password} = createUserDto
    // Buscamos el usuario
    const user = await this.prismaService.user.findFirst({where: {email}})
    if (user) throw new BadRequestException('El correo ya está registrado')
    // Hasheamos la contraseña
    const hashedPassword = await this.auth.hashPassword(password)
    // Creamos el usuario
    const newUser = await this.prismaService.user.create({
      data: {...createUserDto, password: hashedPassword}})
      delete newUser['password']
      return newUser;
  }


  async login(credential: LoginDto) {
    // Desestructuramos el Objeto
    const {email, password} = credential
    // Buscamos el usuario
    const user = await this.prismaService.user.findFirst({where: {email}})
    //Si no lo encuentra responde no encontrado
    if (!user) throw new UnauthorizedException('Usuario no Encontrado')
    //Comparamos password si no coincide responde Password Incorrecta
    const passwordOk = await this.auth.passwordCompare(password, user.password)
    if (!passwordOk) throw new UnauthorizedException('Password Incorrecta')
    // creamos el JWT a partir del usuario
    const token = this.auth.createJWT(user)
    // Eliminar las contrasenia del token
    delete user['password']
    return {token, user}
  }
  async findOne(id: number) {
    const user = await this.prismaService.user.findFirst({where: {id: id}})
    if (!user) throw new NotFoundException();
    return user
  }

/*
  findAll() {
    return `This action returns all users`;
  }



  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }*/
}
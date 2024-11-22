import { HttpStatus,Controller, Get, Post, Body, Patch, Param, Delete,ParseIntPipe, UseGuards,Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto, LoginDto} from './dto';
import { PayloadInterface, Public,User} from '../common'
import {  Response } from 'express';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

/*  @Post()
  @Public()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.register(createUserDto);
  }
*/
  @Post('auth/register')
  @Public()
  async register(@Body() createUserDto: CreateUserDto,
        @Res()
        response:Response) {
    //return this.usersService.register(createUserDto);
    const result = await this.usersService.register(createUserDto);
    response.status(HttpStatus.CREATED).json({ok:true, result, msg:'Created'})


  }

  @Post('auth/login')
  @Public()
  logtin(@Body() loginUserDto: LoginDto) {
    return this.usersService.login(loginUserDto);
  }

  /*
  @Get()
  //@Public()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @Public()
    findOne(@Param('id',ParseIntPipe) 
          id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id',ParseIntPipe) 
         id: string, 
         @Body() 
         updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id',ParseIntPipe) 
         id: string) {
    return this.usersService.remove(+id);
  }*/
 
}

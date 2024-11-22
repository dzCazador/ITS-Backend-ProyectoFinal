import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Res,HttpStatus, ParseIntPipe } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto,UpdateProductDto } from './dto';
import { PaginatorDto,Product,Roles } from '../common';
import { Response } from 'express';


@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  @Roles('admin', 'superadmin')
  async findAll(
      @Query()
      paginator: PaginatorDto,
      @Res()
      response: Response) {
    const result = await this.productsService.findAll(paginator);
    response.status(HttpStatus.OK).json({ok:true, result, msg: 'Listado de Productos'})
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number, @Res() response: Response) {
    const result = await this.productsService.findOne(id);
    response.status(HttpStatus.OK).json({ok:true, result, msg: 'Producto Encontrado'})
  }

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) 
                id: number, 
                @Body()
                @Product()
                updateProductDto: UpdateProductDto,
                @Res() response:Response) {
    const result = await this.productsService.update(id,updateProductDto);
    response.status(HttpStatus.OK).json({ok:true, result, msg: 'Producto Modificado'})
  }

  @Delete(':id')
  async remove( @Param('id', ParseIntPipe) 
            id: number, 
            @Res() response:Response) {
      const result = await this.productsService.remove(id);
      response.status(HttpStatus.OK).json({ok:true, result, msg: 'Producto Eliminado'})
  }
}

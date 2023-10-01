import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
    constructor(private readonly carsService: CarsService) { }
    @Get()
    getAllCars() {
        return this.carsService.findAll();
    }
    @Get(":id")
    getOneCars(@Param("id", ParseUUIDPipe) id: string) {
        return this.carsService.findOneById(id);
    }

    @Post()
    createCar(@Body() body : any){
        return body
        return this.carsService.createCar();
    }
    @Patch(":id")
    update(@Param("id", ParseIntPipe) id: number){
        return "update en car"
    }

    @Delete(":id")
    delete(@Param("id", ParseIntPipe) id: number){
        return `delete en car ${id}`;
    }
}

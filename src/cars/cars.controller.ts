import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto';

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
    createCar(@Body() createCarDto: CreateCarDto) {
        // return createCarDto
        const response = this.carsService.createCar(createCarDto);
        return response
    }
    @Patch(":id")
    update(
        @Param("id", ParseUUIDPipe) id: string,
        @Body() updateCarDto: UpdateCarDto) {
        const updateCar = this.carsService.updateCar(id, updateCarDto);
        return updateCar
    }
    @Delete(":id")
    delete(@Param("id", ParseUUIDPipe) id: string) {
        return `delete en car ${id}`;
    }
}

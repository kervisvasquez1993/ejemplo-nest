import { Controller, Get } from '@nestjs/common';

@Controller('cars')
export class CarsController {
    @Get()
    getAllCars() {
        return "esto es un cars"
    }
}

import { Injectable, NotFoundException, Body } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from "uuid";
import { CreateCarDto } from './dto/create-car.dto';

@Injectable()
export class CarsService {

    private cars: Car[] = [
        { id: uuid(), brand: "Toyota", model: "carro1" },
        { id: uuid(), brand: "Honda", model: "honda1" },
        { id: uuid(), brand: "Jeeper", model: "jeeper1" },
    ]
    public findAll() {
        return this.cars
    }
    public findOneById(id: string) {
        const car = this.cars.find(car => car.id === id)
        if (!car) throw new NotFoundException(`Car with id ${id} not found`);
        return car
    }
    public createCar(body: CreateCarDto) {
        // const respuesta = [ ...this.cars, {id: uuid(), brand, model} ]
        const { brand, model } = body;
        const car: Car = {
            id: uuid(),
            brand,
            model,
        }
        this.cars.push(car);
        return car;
    }

    public updateCar(id: string, body: CreateCarDto) {
        const car = this.cars.find(car => car.id === id)
        if (!car) throw new NotFoundException(`Car with id ${id} not found`);

        return "update el car " + car 
    }
}

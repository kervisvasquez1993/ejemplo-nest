import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
    private cars = [
        { id: 1, brand: "Toyota", model : "carro1" },
        { id: 2, brand: "Honda" , model : "honda1" },
        { id: 3, brand: "Jeeper", model : "jeeper1" },
    ]

    public findAll() {
        return this.cars
    }

    public findOneById(id: number) {
        const car = this.cars.find(car => car.id === id)
        if (!car) throw new NotFoundException(`Car with id ${id} not found`);
        return car
    }

    public createCar(){
        return {
            ok :  true,
            method : "post"
        }
    }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {
    private cars = [
        { id: 1, name: "Toyota" },
        { id: 2, name: "Honda" },
        { id: 3, name: "Jeeper" }
    ]

    public findAll() {
        return this.cars
    }

    public findOneById(id: number) {
        const response = this.cars.find(car => car.id == id)
        return response
    }
}

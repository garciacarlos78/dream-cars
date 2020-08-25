import { Injectable } from '@angular/core';
import { Car } from '../cars/car';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private cars: Car[] =
    [
      new Car
        (
          1, "Porsche", "959",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Porsche_959_%E2%80%93_Frontansicht_%281%29%2C_21._M%C3%A4rz_2013%2C_D%C3%BCsseldorf.jpg/800px-Porsche_959_%E2%80%93_Frontansicht_%281%29%2C_21._M%C3%A4rz_2013%2C_D%C3%BCsseldorf.jpg",
          1986, 450, 315, 3.9
        ),
      new Car
        (
          2, "Ferrari", "Testarossa",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/1986_Ferrari_Testarossa_being_unloaded.jpg/800px-1986_Ferrari_Testarossa_being_unloaded.jpg",
          1984, 390, 290, 5.3
        ),
      new Car
        (
          3, "Lamborghini", "Countach LP5000 QV",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Lamborghini_Countach_US_spec_5000QV.jpg/800px-Lamborghini_Countach_US_spec_5000QV.jpg",
          1985, 455, 310, 4.9
        )
    ];

  constructor() { }

  getCars() {
    return this.cars;
  }

  getCarById(id: Number) {
    return this.cars.filter(car => car.id === id);
  }
}

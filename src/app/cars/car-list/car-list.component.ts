import { Component, OnInit } from '@angular/core';
import {DataService} from '../../shared/data.service';
import {Car} from '../car';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  public cars: Car[];

  constructor(private dataSvc:DataService) { }

  ngOnInit(): void {
    this.cars = this.dataSvc.getCars();
  }

}

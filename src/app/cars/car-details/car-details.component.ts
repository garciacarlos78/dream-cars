import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  public car:any;

  constructor(
    private route: ActivatedRoute,
    private dataSvc: DataService,
    private location: Location) { }

  ngOnInit(): void {
    const carId = this.route.snapshot.paramMap.get('id');
    [this.car] = this.dataSvc.getCarById(parseInt(carId));
  }

  onGoBack(): void {
    this.location.back();
  }

}

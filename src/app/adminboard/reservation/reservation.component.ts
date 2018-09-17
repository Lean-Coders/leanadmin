import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {TableDataSource, ValidatorService} from "angular4-material-table";
import {MatSort, MatTableDataSource} from "@angular/material";
import {PersonValidatorService} from "./person-validator.service";
import {Person} from "./person";

@Component({
  selector: 'app-reservation',
  providers: [
      {provide: ValidatorService, useClass: PersonValidatorService }
  ],
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {


  constructor(private personValidator: ValidatorService) { }
  displayedColumns = ['date', 'name', 'age', 'actionsColumn'];

    @Input() personList = [
        { date: 25.08, name: 'Mark', age: 15 },
        { date: 25.08, name: 'Brad', age: 50 },
    ] ;
    @Output() personListChange = new EventEmitter<Person[]>();

    dataSource: TableDataSource<Person>;

  ngOnInit() {
      this.dataSource = new TableDataSource<any>(this.personList, Person, this.personValidator);

      this.dataSource.datasourceSubject.subscribe(personList => this.personListChange.emit(personList));
  }



}

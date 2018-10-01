import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit{

    displayedColumns = ['name', 'email', 'tel', 'person', 'type', 'goodie', 'date', 'time', 'state', 'actionsColumn'];
    dataSource = new MatTableDataSource<ReservationDetails>(ELEMENT_DATA);

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;


    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    doFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}

export interface ReservationDetails {
    name: string;
    email: string;
    tel: string;
    person: string;
    type: string;
    goodie: string;
    date: string;
    time: string;
    state: string;
}

const ELEMENT_DATA: ReservationDetails[] = [
    {name: 'Test Daten', email: 'test@daten.com', tel: '069912345678', person: '4', type: 'Normal', goodie: '-', date: '06.08', time: '18:45', state: 'abgeschlossen'},
    {name: 'Test Daten', email: 'test@daten.com', tel: '069912345678', person: '6', type: 'Normal', goodie: '-', date: '06.08', time: '18:45',  state: 'storniert'},
    {name: 'Test Daten', email: 'test@daten.com', tel: '069912345678', person: '8', type: 'Geburtstag', goodie: 'Torte', date: '06.08', time: '18:45',  state: 'abgeschlossen'},
    {name: 'Test Daten', email: 'test@daten.com', tel: '069912345678', person: '2', type: 'Normal', goodie: '-', date: '06.08', time: '18:45',  state: 'storniert'},
    {name: 'Test Daten', email: 'test@daten.com', tel: '069912345678', person: '10', type: 'Geburtstag', goodie: 'Prosecco', date: '06.08', time: '18:45',  state: 'abgeschlossen'},
    {name: 'Test Daten', email: 'test@daten.com', tel: '069912345678', person: '3', type: 'Normal', goodie: '-', date: '06.08', time: '18:45',  state: 'storniert'}
];



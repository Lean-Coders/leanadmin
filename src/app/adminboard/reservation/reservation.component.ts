import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";

export interface ReservationDetails {
    date: string;
    name: string;
    email: string;
    person: string;
    type: string;
    state: string;
}

const ELEMENT_DATA: ReservationDetails[] = [
    {date: '06.08', name: 'Test Daten', email: 'test@daten.com', person: '4', type: 'Normal', state: 'abgeschlossen'},
    {date: '06.08', name: 'Test Daten', email: 'test@daten.com', person: '6', type: 'Normal', state: 'storniert'},
    {date: '06.08', name: 'Test Daten', email: 'test@daten.com', person: '8', type: 'Geburtstag', state: 'abgeschlossen'},
    {date: '06.08', name: 'Test Daten', email: 'test@daten.com', person: '2', type: 'Normal', state: 'storniert'},
    {date: '06.08', name: 'Test Daten', email: 'test@daten.com', person: '10', type: 'Geburtstag', state: 'abgeschlossen'},
    {date: '06.08', name: 'Test Daten', email: 'test@daten.com', person: '3', type: 'Normal', state: 'storniert'}
    ];

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit{

    displayedColumns: string[] = ['date', 'name', 'email', 'person', 'type', 'state', 'actionsColumn'];
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

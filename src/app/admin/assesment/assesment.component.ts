import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  valid: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Test1', valid: '2/04/2021' },
  { position: 2, name: 'Test 2', valid: '2/04/2021' },
  { position: 3, name: 'Test3', valid: '2/04/2021' },
  { position: 4, name: 'Test4', valid: '2/04/2021' },
  { position: 5, name: 'Test5', valid: '2/04/2021' },
];

@Component({
  selector: 'app-assesment',
  templateUrl: './assesment.component.html',
  styleUrls: ['./assesment.component.scss']
})
export class AssesmentComponent implements OnInit {
  displayedColumns: string[] = ['name', 'valid'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;



  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}

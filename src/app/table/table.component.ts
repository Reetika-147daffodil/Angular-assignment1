import { Component, Input, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() isAddressAvailable:boolean=true;
  @Input() tableData: any = [];
  @Input() isDataAvailable: boolean = false;
  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'age',
    'empCode',
    'company',
    'address',
  ];
 
  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {}

  onView(data: any): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '550px',
      height: '400px',
      data: data.address,
    });
  }
}

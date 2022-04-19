import { Component, Input, OnInit, Output,EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import {
  MatDialog,
} from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit ,OnChanges{
  @Input() isAddressAvailable:boolean=false;
  @Input() tableData: any = [];
  @Input() isDataAvailable: boolean = false;

  @Output() deleteEvent = new EventEmitter<number>();
  @Output() editEvent= new EventEmitter<number>();

  tableData1:any;
  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'age',
    'empCode',
    'company',
    'address',
    'action'
  ];
 
  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {}

  ngOnChanges(): void {
    this.tableData1=new MatTableDataSource(this.tableData);
  }

  onView(data: any): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '550px',
      height: '400px',
      data: data.address,
    });
  }
 
  deleteData(value: number) {
    // this.tableData.splice(value, 1);
    this.deleteEvent.emit(value);
  }

  editData(value: number) {
    this.editEvent.emit(value);
  }

 
}

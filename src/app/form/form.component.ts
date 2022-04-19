import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormArray ,Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  index: number = -1;
  tableData: any=[];
  newTableData: any = [];
  isSave:boolean=false;
  isDataAvailable:boolean=false;
  isAddressAvailable:boolean=false;
  empForm=new FormGroup({
    firstName:new FormControl("",[Validators.required]),
    lastName:new FormControl("",[Validators.required]),
    age:new FormControl("",[Validators.required]),
    empCode:new FormControl("",[Validators.required]),
    company:new FormControl("",[Validators.required]),
    address:new FormArray([
      this.createAddress()
    ])
  })
  constructor(private snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }

  get address() {
    return this.empForm.controls["address"] as FormArray;
  }

 save()
 { 
  console.log("index value" , this.index)
  this.isSave=true;
  this.isDataAvailable=true;
  if(this.index !== -1){
    this.newTableData[this.index]=this.empForm.value;
    this.index=this.tableData.length;
  }
  else{
    this.newTableData.push(this.empForm.value);
  }
  this.tableData = [...this.newTableData];
  console.log("tableData",this.tableData);
  this.empForm.reset();
  this.index = -1;
 }

 openSnackBar()
 {
  this.snackBar.open("Entry Saved!!", "ok",{duration:2000});
 }

 createAddress():FormGroup{
   return new FormGroup({
    state:new FormControl(""),
    city:new FormControl(""),
    pincode:new FormControl(""),
  })
 }

 addAddress(){
   (<FormArray>this.empForm.get("address")).push(this.createAddress());
 }
 removeAddress(i:number):void{
  this.address.removeAt(i);
}
deleteTableData(Index: any){
  // console.log("Index" , Index)
  if (Index > -1) {
    console.log("Index",Index)
  this.newTableData.splice(Index,1);
  this.tableData=[...this.newTableData];
  }
  
  console.log("newtabledata-",this.newTableData);

   if(this.tableData.length==0){
     this.isDataAvailable=false;
   }
}

editTableData(Index:any)
{
  this.index=Index;
  console.log("value of tabledata",this.tableData[Index]);
  this.empForm.patchValue(
    {
      firstName:this.tableData[Index].firstName,
      lastName:this.tableData[Index].lastName,
      empCode:this.tableData[Index].empCode,
      age:this.tableData[Index].age,
      company:this.tableData[Index].company,
      address:this.tableData[Index].address  
    }
  )
}


}


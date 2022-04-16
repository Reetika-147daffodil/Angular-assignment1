import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  tableData: any=[];
  isAdd:boolean=false;
  isDataAvailable:boolean=false;
  isAddressAvailable:boolean=false;
  empForm=new FormGroup({
    firstName:new FormControl(""),
    lastName:new FormControl(""),
    age:new FormControl(""),
    empCode:new FormControl(""),
    company:new FormControl(""),
    address:new FormArray([
      this.createAddress()
    ])
  })
  constructor() { }

  ngOnInit(): void {
  }
  get address() {
    return this.empForm.controls["address"] as FormArray;
  }
 save()
 { 
   if(this.empForm?.value.address!=[])
   {
    this.isAddressAvailable=true;
   }
  console.log(this.empForm.value.address);
  
  this.isDataAvailable=true;
  this.tableData=[];
  this.tableData.push(this.empForm.value);

 }

 createAddress():FormGroup{
   return new FormGroup({
    state:new FormControl(""),
    city:new FormControl(""),
    pincode:new FormControl(""),
  })
 }

 addAddress(){
   this.isAdd=true;
   (<FormArray>this.empForm.get("address")).push(this.createAddress());
 }
 removeAddress(i:number):void{
  this.address.removeAt(i);
}
}


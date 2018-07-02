import { Component, OnInit, Inject, SystemJsNgModuleLoader } from '@angular/core';
import { Item } from './documentState';
import {
  trigger,
  transition,
  animate,
  style,
  state
} from '@angular/animations';
import { MatDialog } from '@angular/material';
import { VerifyDialogComponent } from './verify-dialog/verify-dialog.component';


@Component({
  selector: 'app-documents-suppliers',
  templateUrl: './documents-suppliers.component.html',
  styleUrls: ['./documents-suppliers.component.css'],
  animations: [
    trigger('clicked', [
      state('inactive', style({
        backgroundColor: '#423737',
        color: '#fff',
        transform: 'scale(1)'
      })),
      state('active', style({
        backgroundColor: '#34a346',
        color: '#fff',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ]),
  ],
})
export class DocumentsSuppliersComponent implements OnInit {

  dialogResult="";

  constructor(public dialog: MatDialog) {
    for (let i = 0; i < 3; i++) {
      // console.log(i);
      this.states[i] = new Item('inactive', 'Rechazado');
      // console.log(this.states[i]);
    }
  }

  public states = new Array(3);

  toggleState(n: number) {
    let dialogRef=this.dialog.open(
      VerifyDialogComponent, {
        width:'600px',
        data: this.states[n].state
      });
    
      dialogRef.afterClosed().subscribe(result=>{
      this.dialogResult=result;
      console.log(this.dialogResult);
      if(this.dialogResult=='yes'){
        if (this.states[n].state === 'active') {
          this.states[n].state = 'inactive';
          this.states[n].status='Rechazado';
          this.states[n].faType='fa fa-close';
        } else if (this.states[n].state === 'inactive') {
          this.states[n].state = 'active';
          this.states[n].status='Aceptado';
          this.states[n].faType='fa fa-check';
        }
      }
      });

  }

  ngOnInit() {
  }

}

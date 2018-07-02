import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-verify-dialog',
  templateUrl: './verify-dialog.component.html',
  styleUrls: ['./verify-dialog.component.css']
})
export class VerifyDialogComponent implements OnInit {

  message="";
  typeMessage="";
  typeButton="";

  constructor(public thisDialogRef: MatDialogRef<VerifyDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: string) { 
    if(data=='active'){
      this.message="¿Rechazar el documento?";
      this.typeMessage="Rechazar";
      this.typeButton="danger";
    }else if(this.data=='inactive'){
      this.message="¿Aceptar el documento?"
      this.typeMessage="Aceptar";
      this.typeButton="success";
    }
  }

  onCloseConfirm(){
    this.thisDialogRef.close('yes');
  }

  onCloseCancel(){
    this.thisDialogRef.close('no');
  }

  ngOnInit() {
  }
}

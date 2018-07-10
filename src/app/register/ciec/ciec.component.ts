import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciec',
  templateUrl: './ciec.component.html',
  styleUrls: ['./ciec.component.css'],

 
})


export class CIECComponent implements OnInit {

  

  constructor() { 
    
  }

  ngOnInit() {
    (function() {
      'use strict';
      window.addEventListener('load', function() {
          // Fetch all the forms we want to apply custom Bootstrap validation styles to
          var forms = document.getElementsByClassName('needs-validation');
          // Loop over them and prevent submission
          var validation = Array.prototype.filter.call(forms, function(form) {
              form.addEventListener('submit', function(event) {
                  if (form.checkValidity() === false) {
                      event.preventDefault();
                      event.stopPropagation();
                  }
                  form.classList.add('was-validated');
              }, false);
          });
      }, false);
  })();
   
  
  }
  

}
export class NgIfComponent {
  show = false;
}



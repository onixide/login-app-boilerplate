import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor() {}

  ngOnInit() {
    this.registerForm = new FormGroup({
      login: new FormControl(''),
      password: new FormControl('')
    });
  }

  onSubmit() {
    console.log('SUBMIT REGISTER');
    console.warn(this.registerForm.value);
  }
}

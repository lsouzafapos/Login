import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginServiceService } from './login-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  error = false;
  errorMessage = '';

  constructor(private fb: FormBuilder, private authService: LoginServiceService) {
  }

  ngOnInit(): any {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSignIn() {
    this.authService.signIn(this.form.value);
  }

}

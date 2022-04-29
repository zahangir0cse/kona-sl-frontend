import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/services/auth.service';
import {Login} from '../../../shared/model/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  errorMessage = '';

  constructor(
    private router: Router,
    private fb: FormBuilder,
    public auth: AuthService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      username: ['', [
        Validators.required
      ]],
      password: ['', Validators.required]
    });
  }

  onLogoClick() {
    this.router.navigateByUrl('');
  }

  submit() {
    this.errorMessage = '';
    if (this.form.valid) {
      const login = {username: this.form.controls.username.value, password: this.form.controls.password.value} as Login;
      this.auth
        .authenticate(login)
        .subscribe(
          data => {
            if (data.statusCode === 200) {
              data = data.content;
              this.auth.saveToken(data);
              this.router.navigate(['/dashboard']);
            } else {
              this.errorMessage = 'Invalid Username or password';
            }
          },
          error => {
            this.errorMessage = 'Invalid Username or password';
          }
        );
    }
  }
}

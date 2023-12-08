import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('myForm') myForm!: NgForm;

  public isSubmitted = false;
  public errorMessage: string | null = null;

  constructor(private router: Router) { }

  ngOnInit(): void { }

  public onSubmit(form: NgForm) {
    this.isSubmitted = true;

    const allowedEmail = 'prueba@gmail.com';
    const allowedPassword = '12345';

    if (form.valid && form.value.email === allowedEmail && form.value.password === allowedPassword) {
      this.router.navigate(['a1']);
    } else {
      this.errorMessage = 'Invalid email or password. Please try again.';
    }
  }
}

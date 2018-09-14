import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "./auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  private formSubmitAttempt: boolean;

  constructor(private fb: FormBuilder,
              private authService: AuthService) { }

  ngOnInit() {
      this.loginForm = this.fb.group({
          email: ['', Validators.required],
          password: ['', Validators.required]
      });
  }

    isFieldInvalid(field: string) {
        return (
            (!this.loginForm.get(field).valid && this.loginForm.get(field).touched) ||
            (this.loginForm.get(field).untouched && this.formSubmitAttempt)
        );
    }

    onSubmit() {
        if (this.loginForm.valid) {
            this.authService.login(this.loginForm.value);
        }
        this.formSubmitAttempt = true;
    }


}

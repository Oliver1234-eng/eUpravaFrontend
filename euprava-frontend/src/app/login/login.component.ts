import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  success = false;
  error: string;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    const username = this.loginForm.controls.username.value;
    const password = this.loginForm.controls.password.value;

    if (username === 'katastar' && password === 'katastar') {
      this.router.navigate(['katastar-home']);
    } else if (username === 'gradjanin' && password === 'gradjanin') {
      this.router.navigate(['gradjanin-home']);
    } else {
      this.error = "Neispravno korisničko ime i/ili lozinka. Molimo pokušajte ponovo.";
    }
  }

}

import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,

  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  errorMessage: string = '';

  router = inject(Router);

  login(): void {
    if (this.username === 'admin' && this.password === 'admin') {
      
      console.log('Login successful');
      

      this.router.navigateByUrl('home');

    } else {
      this.errorMessage = 'Invalid email or password!';
    }
  }

}

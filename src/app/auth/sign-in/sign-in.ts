import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  imports: [CommonModule, FormsModule],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.scss',
})
export class SignIn {
  email = '';
  password = '';
  message = '';

  constructor(private auth: Auth) {}

  async onSignIn() {
    try {
      const userCredential = await signInWithEmailAndPassword(
        this.auth,
        this.email,
        this.password
      );
      this.message = `Bienvenido ${userCredential.user.email}`;
    } catch (error: any) {
      this.message = error.message;
    }
  }
}

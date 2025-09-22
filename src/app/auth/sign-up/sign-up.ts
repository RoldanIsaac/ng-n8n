import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  imports: [CommonModule, FormsModule],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.scss',
})
export class SignUp {
  email = '';
  password = '';
  message = '';

  constructor(private auth: Auth) {}

  async onSignUp() {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        this.auth,
        this.email,
        this.password
      );
      this.message = `Usuario creado: ${userCredential.user.email}`;
    } catch (error: any) {
      this.message = error.message;
    }
  }
}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Form } from './auto/form/form';
import { SignIn } from './auth/sign-in/sign-in';
import { SignUp } from './auth/sign-up/sign-up';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Form, SignIn, SignUp],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('ng-n8n');
}

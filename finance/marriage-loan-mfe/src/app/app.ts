import { Component } from '@angular/core';
import { MarriageLoan }  from './marriage-loan/marriage-loan';

@Component({
  selector: 'app-root',

  standalone: true,

  imports: [
    MarriageLoan
  ],

  templateUrl: './app.html',

  styleUrls: ['./app.css']
})
export class App {

}

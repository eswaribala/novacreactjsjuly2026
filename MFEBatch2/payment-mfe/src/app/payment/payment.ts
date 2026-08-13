import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './payment.html',
  styleUrls: ['./payment.css']
})
export class Payment {

  @Input() amount: number = 0;

  cardNumber: string = '';
  cardHolderName: string = '';
  expiryDate: string = '';
  cvv: string = '';

  @Output() paymentSuccess = new EventEmitter<any>();

  makePayment() {

    const paymentResult = {
      status: 'SUCCESS',
      amount: this.amount,
      transactionId: 'TXN-' + Date.now()
    };

    console.log('Payment completed:', paymentResult);

    this.paymentSuccess.emit(paymentResult);
  }
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-marriage-loan',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './marriage-loan.html',
  styleUrl: './marriage-loan.css'
})
export class MarriageLoan {

  applicantName = '';
  mobileNo = '';
  marriageDate = '';
  loanAmount = 0;
  monthlyIncome = 0;
  employmentType = '';
  city = '';

  applyLoan() {

    console.log('Applicant Name:', this.applicantName);
    console.log('Mobile No:', this.mobileNo);
    console.log('Marriage Date:', this.marriageDate);
    console.log('Loan Amount:', this.loanAmount);
    console.log('Monthly Income:', this.monthlyIncome);
    console.log('Employment Type:', this.employmentType);
    console.log('City:', this.city);

    alert('Marriage Loan Application Submitted');
  }
}
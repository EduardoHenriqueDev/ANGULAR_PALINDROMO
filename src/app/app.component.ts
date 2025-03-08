import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,  // Standalone
  imports: [FormsModule, CommonModule, NgbTooltipModule]
})
export class AppComponent {
  inputValue: string = '';
  isPalindrome: boolean | null = null;

  checkPalindrome(value: string): void {
    console.log('Valor digitado:', value);
    if (value.trim().length === 0) {
      this.isPalindrome = null;
      return;
    }
    const cleanedValue = value.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    this.isPalindrome = cleanedValue === cleanedValue.split('').reverse().join('');
    console.log('É palíndromo?', this.isPalindrome);
  }

}

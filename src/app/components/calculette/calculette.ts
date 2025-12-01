import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculette',
  imports: [CommonModule, FormsModule],
  templateUrl: './calculette.html',
  styleUrl: './calculette.css',
})
export class CalculetteComponent {
  value1: number = 0;
  value2: number = 0;
  result: number = 0;
  op: string = '';
  operators: Operation[] = [];

  constructor() {
    this.operators.push({ symbol: '+', opMethod: this.onAddClick.bind(this) });
    this.operators.push({ symbol: '-', opMethod: this.onMinusClick.bind(this) });
    this.operators.push({ symbol: '*', opMethod: this.onMultClick.bind(this) });
    this.operators.push({ symbol: '/', opMethod: this.onDivClick.bind(this) });
  }

  onAddClick() {
    this.result = this.value1 + this.value2;
  }

  onMinusClick() {
    this.result = this.value1 - this.value2;
  }

  onMultClick() {
    this.result = this.value1 * this.value2;
  }

  onDivClick() {
    this.result = this.value1 / this.value2;
  }

  onOperationClick(operation: Operation) {
    this.op = operation.symbol;
    operation.opMethod();
  }
}

export interface Operation {
  opMethod: () => void;
  symbol: string;
}

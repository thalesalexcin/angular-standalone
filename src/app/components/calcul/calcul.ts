import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-calcul',
  imports: [],
  templateUrl: './calcul.html',
  styleUrl: './calcul.css',
})
export class CalculComponent implements OnInit {
  a = 0;
  b = 0;
  result = 0;
  op = '';
  opSymbol = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    combineLatest([this.route.paramMap, this.route.queryParamMap]).subscribe(
      ([params, queries]) => {
        this.a = parseFloat(queries.get('value1') ?? '0');
        this.b = parseFloat(queries.get('value2') ?? '0');
        this.op = params.get('op') ?? '+';

        switch (this.op) {
          case 'plus':
            this.result = this.a + this.b;
            this.opSymbol = '+';
            break;
          case 'moins':
            this.result = this.a - this.b;
            this.opSymbol = '-';
            break;
          case 'fois':
            this.result = this.a * this.b;
            this.opSymbol = '*';
            break;
          case 'div':
            this.result = this.a / this.b;
            this.opSymbol = '/';
            break;
        }
      },
    );
  }
}

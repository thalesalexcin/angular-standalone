import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-tableau',
  imports: [RouterLink],
  templateUrl: './tableau.html',
  styleUrl: './tableau.css',
})
export class TableauComponent implements OnInit {
  numbers = [2, 3, 8, 5, 1];
  current = 0;
  currentValue = 0;
  next = 0;
  previous = 0;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.current = Number(params.get('indice'));
      if (isNaN(this.current)) {
        this.error = 'Indice doit être un nombre';
      } else if (this.current < 0 || this.current >= this.numbers.length) {
        this.error = `Indice doit être entre 0 et ${this.numbers.length - 1}`;
      }
      this.previous = (this.current + this.numbers.length - 1) % this.numbers.length;
      this.next = (this.current + 1) % this.numbers.length;
      this.currentValue = this.numbers[this.current];
    });
  }

  goToNext() {
    this.router.navigate(['/tableau', this.next]);
  }
  goToPrevious() {
    this.router.navigate(['/tableau', this.previous]);
  }
}

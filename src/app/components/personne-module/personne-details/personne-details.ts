import { Component, inject, input, OnInit, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonneFormComponent } from '../personne-form/personne-form';
import { PersonneService } from '../../../services/personne-service';
import { PersonneModel } from '../../../models/personne';

@Component({
  selector: 'app-personne-details',
  imports: [FormsModule, PersonneFormComponent],
  templateUrl: './personne-details.html',
  styleUrl: './personne-details.css',
})
export class PersonneDetailsComponent implements OnInit {
  id = input.required<number>();
  ps = inject(PersonneService);
  router = inject(Router);
  personneView = viewChild.required(PersonneFormComponent);

  ngOnInit(): void {
    this.ps.findById(this.id()).subscribe((res) => (this.personneView().personne = res));
  }

  onSubmit(personne: PersonneModel) {
    this.ps.update(this.id(), personne).subscribe((res) => this.router.navigate(['/personne']));
  }
}

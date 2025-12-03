import {
  AfterViewInit,
  Component,
  OnInit,
  QueryList,
  viewChild,
  ViewChild,
  viewChildren,
  ViewChildren,
} from '@angular/core';
import { FilsComponent } from '../fils/fils';

@Component({
  selector: 'app-pere',
  imports: [FilsComponent],
  templateUrl: './pere.html',
  styleUrl: './pere.css',
})
export class PereComponent implements OnInit, AfterViewInit {
  filsSignal = viewChild.required(FilsComponent);
  allFillsSignal = viewChildren(FilsComponent);
  @ViewChild(FilsComponent) fils!: FilsComponent;
  @ViewChildren(FilsComponent) allFils!: QueryList<FilsComponent>;

  //fils = viewChild.required(FilsComponent);
  nom = 'John Wick';
  ville = 'Marseille';

  premierEnfant() {
    console.log(this.fils);
    console.log(this.fils.ville);
  }

  ngOnInit(): void {
    console.log(this.fils);
  }

  ngAfterViewInit(): void {
    console.log(this.fils);

    console.log('All fils');
    this.allFils.forEach((f) => console.log(f.ville));
  }
}

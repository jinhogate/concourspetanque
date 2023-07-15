import { Component, Input } from '@angular/core';
import { Concours } from '../models/concours/concours.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-one-concours',
  templateUrl: './one-concours.component.html',
  styleUrls: ['./one-concours.component.css'],
})
export class OneConcoursComponent {
  @Input() itemConcours!: Concours;

  constructor(private route: Router) {}

  onViewConcours(): void {
    this.route.navigateByUrl(`concours/${this.itemConcours.idConcours}`);
  }
}

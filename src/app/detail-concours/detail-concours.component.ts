import { Component, OnInit } from '@angular/core';
import { Concours } from '../models/concours/concours.model';
import { ActivatedRoute } from '@angular/router';
import { ConcoursService } from '../services/concours.service';

@Component({
  selector: 'app-detail-concours',
  templateUrl: './detail-concours.component.html',
  styleUrls: ['./detail-concours.component.css'],
})
export class DetailConcoursComponent implements OnInit {
  concours!: Concours;

  constructor(private routeActive: ActivatedRoute, private concoursService: ConcoursService) {}

  ngOnInit(): void {
    const idParam = +this.routeActive.snapshot.params['id'];
    this.concours = this.concoursService.getConcoursById(idParam);
  }
}

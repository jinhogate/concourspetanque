import { Component, OnInit } from '@angular/core';
import { TypeConcours } from '../models/concours/type-concours.model';
import { Concours } from '../models/concours/concours.model';
import { ConcoursService } from '../services/concours.service';

@Component({
  selector: 'app-list-concours',
  templateUrl: './list-concours.component.html',
  styleUrls: ['./list-concours.component.css'],
})
export class ListConcoursComponent implements OnInit {
  concours!: Concours[];

  constructor(private concoursService: ConcoursService) {}

  ngOnInit(): void {
    this.concours = this.concoursService.getAllConcours();  
  }
}

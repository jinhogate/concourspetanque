import { Address } from './address.model';
import { CategorieConcours } from './categorie-concours.model';
import { Club } from './club.model';
import { NiveauJoueur } from './niveau-joueur.model';
import { Organisateur } from './organisateur.model';
import { TypeConcours } from './type-concours.model';

export class Concours {
  idConcours!: number;
  libelleConcours!: string;
  createdDateConcours!: Date;
  concoursDate!: Date;
  club?: Club;
  organisateur!: Organisateur;
  addressConcours!: Address;
  niveauJoueur!: NiveauJoueur;
  categorieConcours!: CategorieConcours;
  imageConcours!: string;
  typeConcours!: TypeConcours[];
}

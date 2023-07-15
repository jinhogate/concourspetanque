import { Injectable } from '@angular/core';
import { TypeConcours } from '../models/concours/type-concours.model';
import { Concours } from '../models/concours/concours.model';

@Injectable({ providedIn: 'root' })
export class ConcoursService {
  tabTypeConcours: TypeConcours[] = [
    {
      idTypeConcours: 1,
      libelleTypeConcours: 'TETE-A-TETE',
      lot: 'machine à laver, triplette de boule',
      mise: 10,
    },
    {
      idTypeConcours: 2,
      libelleTypeConcours: 'DOUBLETTE',
      lot: 'voyage à lomé',
      mise: 30,
    },
    {
      idTypeConcours: 3,
      libelleTypeConcours: 'TRIPLETTE',
      lot: 'saucisson, saumon',
      mise: 5,
    },
  ];

  concours: Concours[] = [
    {
      idConcours: 1,
      libelleConcours: 'Association pétanque LEMBRAS',
      createdDateConcours: new Date(),
      concoursDate: new Date(2023, 8, 15, 9, 30),
      addressConcours: {
        idAddress: 1,
        numRue: 13,
        nameRue: 'rue andromède',
        city: 'Bordeaux',
        country: 'France',
        codePostal: '33800',
        lieuDit: 'Terrain de pétanque proche de la mairie',
      },
      categorieConcours: {
        idCategorieConcours: 1,
        libelleCategorie: 'SAUVAGE',
      },
      niveauJoueur: {
        idNiveauJoueur: 1,
        libelleNiveau: 'SENIOR',
      },
      organisateur: {
        idPerson: 1,
        firstNamePerson: 'kossi',
        lastNamePerson: 'GBEGNON',
        birthDayDatePerson: new Date(1994, 9, 3),
        sexPerson: 'M',
        emailPerson: 'kossi@gmail.com',
        telPerson: '0456640256',
      },
      club: {
        idClub: 1,
        nameClub: 'Bassens',
        presidentClub: 'M. Anthony',
        dateCreatedClub: new Date(2003, 10, 15),
        addressClub: {
          idAddress: 1,
          numRue: 13,
          nameRue: 'rue andromède',
          city: 'Bordeaux',
          country: 'France',
          codePostal: '33800',
          lieuDit: 'Terrain de pétanque proche de la mairie',
        },
      },
      imageConcours:
        'https://images.lanouvellerepublique.fr/image/upload/t_1020w/5d2dcf84c37431b3618b4583.jpg',
      typeConcours: this.tabTypeConcours,
    },
    {
      idConcours: 2,
      libelleConcours: "Concours en l'honneur de bertrand",
      createdDateConcours: new Date(),
      concoursDate: new Date(2023, 8, 15, 9, 30),
      addressConcours: {
        idAddress: 1,
        numRue: 13,
        nameRue: 'rue andromède',
        city: 'Bordeaux',
        country: 'France',
        codePostal: '33800',
        lieuDit: 'Terrain de pétanque proche de la mairie',
      },
      categorieConcours: {
        idCategorieConcours: 1,
        libelleCategorie: 'LICENCIE',
      },
      niveauJoueur: {
        idNiveauJoueur: 1,
        libelleNiveau: 'VETERAN',
      },
      organisateur: {
        idPerson: 1,
        firstNamePerson: 'kossi',
        lastNamePerson: 'GBEGNON',
        birthDayDatePerson: new Date(1994, 9, 3),
        sexPerson: 'M',
        emailPerson: 'kossi@gmail.com',
        telPerson: '0456640256',
      },
      club: {
        idClub: 1,
        nameClub: 'Bassens',
        presidentClub: 'M. Anthony',
        dateCreatedClub: new Date(2003, 10, 15),
        addressClub: {
          idAddress: 1,
          numRue: 13,
          nameRue: 'rue andromède',
          city: 'Bordeaux',
          country: 'France',
          codePostal: '33800',
          lieuDit: 'Terrain de pétanque proche de la mairie',
        },
      },
      imageConcours:
        'https://france3-regions.francetvinfo.fr/image/LOREi-Jb_d2jqXgWm89-n1bUhAY/600x400/regions/2020/06/09/5edf8e1e10b6f_la_marseillaise_a_petanque_2019_a_marseille_capitale_de_la_petanque_mondiale_du_7_au_11_juillet_2019-4310714.jpg',
      typeConcours: this.tabTypeConcours,
    },
    {
      idConcours: 3,
      libelleConcours: 'Fête des boules',
      createdDateConcours: new Date(),
      concoursDate: new Date(2023, 8, 15, 9, 30),
      addressConcours: {
        idAddress: 1,
        numRue: 13,
        nameRue: 'rue andromède',
        city: 'Bordeaux',
        country: 'France',
        codePostal: '33800',
        lieuDit: 'Terrain de pétanque proche de la mairie',
      },
      categorieConcours: {
        idCategorieConcours: 1,
        libelleCategorie: 'LICENCIE',
      },
      niveauJoueur: {
        idNiveauJoueur: 1,
        libelleNiveau: 'SENIOR',
      },
      organisateur: {
        idPerson: 1,
        firstNamePerson: 'kossi',
        lastNamePerson: 'GBEGNON',
        birthDayDatePerson: new Date(1994, 9, 3),
        sexPerson: 'M',
        emailPerson: 'kossi@gmail.com',
        telPerson: '0456640256',
      },
      club: {
        idClub: 1,
        nameClub: 'Bassens',
        presidentClub: 'M. Anthony',
        dateCreatedClub: new Date(2003, 10, 15),
        addressClub: {
          idAddress: 1,
          numRue: 13,
          nameRue: 'rue andromède',
          city: 'Bordeaux',
          country: 'France',
          codePostal: '33800',
          lieuDit: 'Terrain de pétanque proche de la mairie',
        },
      },
      imageConcours:
        'https://lopinion.com/storage/articles/2WcNHVSC40uIPQPVhGol93QOuslegnbFKB08lbJ5.jpg',
      typeConcours: this.tabTypeConcours,
    },
  ];

  getAllConcours(): Concours[] {
    return this.concours;
  }

  getConcoursById(idConcours: number): Concours {
    const concours: Concours | undefined = this.concours.find(
      (elt) => elt.idConcours === idConcours
    );
    if (concours) {
      return concours;
    } else {
      throw new Error('Le numéro concours ' + idConcours + ' nexiste pas!');
    }
  }
}

export class TypeConcours {
  idTypeConcours!: number;
  libelleTypeConcours!:
    | 'TRIPLETTE'
    | 'DOUBLETTE'
    | 'TETE-A-TETE'
    | 'TIR DE PRECISION'
    | 'PRECISION POINT'
    | 'TRIPLETTE MIXTE'
    | 'DOUBLETTE MIXTE'
    | 'TRIPLETTE FEMME'
    | 'DOUBLETTE FEMME'
    | 'TETE-A-TETE FEMME';
    lot!: string;
    mise!: number;
}

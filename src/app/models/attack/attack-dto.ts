class NameDTO {
    name: string;
    language: {
        name: string;
    }
}

export class AttackDTO {
    power: number;
    names: NameDTO[];
}

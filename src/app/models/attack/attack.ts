import { AttackDTO } from './attack-dto';
import { AttackInterface } from './attack-interface';

export class Attack {
    name: string;
    basePower: number;
    url?: string;

    constructor (i?: AttackInterface)
    {
        this.name = i && i.name;
        this.basePower = i && i.basePower;
        this.url = i && i.url;
    }

    public static fromDto(dto: AttackDTO): Attack {
        return new Attack({
            name: dto.names.find(n => n.language.name === 'fr').name,
            basePower: dto.power,
            url: null
        })
    }

}

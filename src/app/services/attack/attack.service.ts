import { Pokemon, Attack } from "../../models";

export default class AttackService {
    public calculateAttackDammages(off: Pokemon, attack: Attack, target: Pokemon): number {
        return Math.floor(Math.floor(Math.floor(2 * off.level / 5 + 2) * off.offStat * attack.basePower / target.defStat) / 50) + 2
    }

    public attack (off: Pokemon, attack: Attack, target: Pokemon): number {
        let dammages = this.calculateAttackDammages(off, attack, target);
        target.loseHealth(dammages);
        return dammages
    }
}

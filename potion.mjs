export { Potion }
class Potion{

    constructor (name, weigth, value, time){

        this.name = name,
        this.weigth = weigth
        this.value = value,
        this.time = time

    }

    static with(effect, weight, value){
        const potionType = effect.type === "Benefitial" ? 'Potion' : 'Poison';
        const potionName = ` ${potionType} Of ${effect.name} `;
        const time = 10;
        return new Potion( potionName, weight, value, time)

    }

    static failed(){
        return new FailedPotion();
    }

    static sanity(){
        return new PotionOfSanity();  
    }
}

class PotionOfSanity extends Potion{

    constructor( ){
        super("Potion of Sanity", 1000, 1, 50);
    }
}

class FailedPotion extends Potion{

    constructor() {
        super ("Failed Potion", 0, 0, 0 )
    }

}
import { Ingredients} from './ingredients.mjs'
import { Cauldron } from './cauldron.mjs'
import { getData } from './service.mjs'

const execute = async () => {

        const data = await getData();
        const ingredients = Ingredients.load(data);

        const cauldron = new Cauldron(ingredients);

        const potion1 = cauldron.createPotion("Bear Claws", "Bee");
        showPotion(potion1);

        const potion2 = cauldron.createPotion("Chicken's Egg", "Chaurus Eggs");
        showPotion(potion2);
        
        const potion3 = cauldron.createPotion("Chaurus Eggs", "Bleeding Crown");
        showPotion(potion3);

        const potion4 = cauldron.createPotion("Nightshade", "Ectoplasm");
        showPotion(potion4);
}

execute()



const showPotion = (potion) => {
console.log(`${potion.name}`);
console.log(`Weight             ${potion.weigth}`);
console.log(`value              ${potion.value}`);
console.log(`time               ${potion.time}`);
console.log(`------------------`);
}



// const showIngredients = async () => {
//     try{
//         const information = await getData();
//         console.log(information.ingredients);

//     }catch(error){
//         console.log(error);
//     }
// }

// showIngredients()
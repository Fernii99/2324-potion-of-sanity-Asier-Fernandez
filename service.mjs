
const getData = async () => {
    try{
        const data = await fetch('https://raw.githubusercontent.com/zsiciarz/skyrim-alchemy-toolbox/master/data/ingredients.json');
        return data.json();
    }
    catch (error){
        return error;
    }

}

export { getData }
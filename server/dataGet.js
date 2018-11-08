


// let theExampleData = require("./exampleData");
let theExampleData = require("../data/rubbishData");
let theFormat = require("./exampleFormat")


function itemInfo(itemName){

    let item = theExampleData.find((data)=> data[theFormat.item] == itemName)
    //console.log("the (first) item with name "+itemName+" is ",item)

    return item;
}
function categorieInfo(){

    let theCategories = theExampleData.reduce( (categories,item) => {
        if(categories.filter( (categorie) => (categorie == item[theFormat.type])).length == 0){
            //This just feels wrong though as its not stateless
            categories.push(item[theFormat.type]);
        }

        return categories;
    },[])
    //console.log("the categories are ",theCategories)

    return theCategories;
}
function categorieItems(categorieName){

    let theItems =  theExampleData.filter( (item) => {
            return categorieName == item[theFormat.type]
    },[]);
    //console.log("the items of "+categorieName+" are ",theItems)

    return theItems;
}
function instructions(itemName){
    let theInstructions = []

    let anItem = itemInfo(itemName);

    if(anItem){
        //theInstructions = Array.from(anItem[theFormat.instructions], (instruction)=>(instruction[theFormat.instructionsValue]));
        theInstructions = anItem[theFormat.instructions]
    }
    //console.log("the instructions for "+itemName+" are ",theInstructions)

    return theInstructions;
}

function addItem(name,type,instructions){

    let newItem = {}

    newItem[theFormat.item] = name;
    newItem[theFormat.type] = type;

    // newItem[theFormat.instructions] = instructions.map( (instruction,index)=>{
    //     let newInstruction = {}
    //     newInstruction[theFormat.instructionsKey] = index + 1;
    //     newInstruction[theFormat.instructionsValue] = instruction;
    //     return newInstruction;
    // })
    newItem[theFormat.instructions] = instructions

    if(itemInfo(name) == null){
        theExampleData.push(newItem);
        //console.log("the new item added is ",newItem)

        return newItem
    }
    else{
        //console.log("the item " +name+ " already exists")
        return null;
    }
}

//Bit of a pipe dream
    //currently done whats needed with itemInfo
function searchItems(){

    let theItems = [];

    let theResult = {
        found: "false",
        item: theItem
    }

    //theExampleData.filter();

    return theResult;

}

module.exports = {
    itemInfo,
    categorieInfo,
    categorieItems,
    instructions,

    //Under construction, not all done yet
    addItem,
    searchItems
}
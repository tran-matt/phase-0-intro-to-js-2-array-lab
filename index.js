const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
cats.push("Ralph")
}

function destructivelyPrependCat(name){
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(name){
    cats.pop()
}

function destructivelyRemoveFirstCat(name){
    cats.shift()
}

function appendCat(name){
    const newCatsArray = cats.concat(name);
    return newCatsArray;
}

function prependCat(name){
    const newCatsArray = [name, ...cats];
    return newCatsArray;
}

function removeLastCat(){
    const newCatsArray = cats.slice(0,-1);
    return newCatsArray
}

function removeFirstCat(){
    const newCatsArray = cats.slice(1);
    return newCatsArray
}
// 1. var

function ejemploVar(): void {
    //console.log(variableVar); //si estuvieramos en JS, imprimiría undefined
    var variableVar = "Soy una variable de tipo var";
    console.log(variableVar); 
}

ejemploVar();

// 2. let

function ejemploLet(): void {
    //console.log(variableLet); //si estuvieramos en JS, imprimiría ...
    let variableLet = "Soy una variable de tipo let";
    console.log(variableLet);    
}

ejemploLet();

// 3. const

function ejemploConst(): void {
    //console.log(variableConst); //en  JS el error saltarpia recien cuando compilo
    const variableConst = "Soy una variable de tipo const"
    console.log(variableConst);
    //variableConst = "otro valor"; //no se puede reasignar un valor a una variable de tipo const
}

ejemploConst();
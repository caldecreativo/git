function printVariable(variable) {
    console.log(variable)
}

function printName(name, callback) {
    callback("hello " + name) 
}

printName("marco", printVariable);

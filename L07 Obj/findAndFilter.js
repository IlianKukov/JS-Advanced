let arr1 = [5, 12, 8, 130, 44]

let found = arr1.find( function(element){
    return element>10;
});

console.log(found);

let foundFilter = arr1.filter( function(element){
    return element>10;
});

console.log(foundFilter.join(" - "));
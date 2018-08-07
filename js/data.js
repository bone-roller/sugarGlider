// used to model data. this covers classes and database.
// Mocha or Jasmine




// For classes use a function / prototype
//Example:
function Apple (type) {
    this.type = type;
    this.color = "red";
}
 
Apple.prototype.getInfo = function() {
    return this.color + ' ' + this.type + ' apple';
};


function Store(){
    this.storeNumber = 1,
    this.storeLabel = 'first store'
}
Store.prototype.getInfo = function () {
    return this.storeNumber + ' ' + this.storeLabel;
}
Store.prototype.getNumber = function (store) {
    return store.storeNumber;
} 
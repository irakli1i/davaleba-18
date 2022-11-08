

function Car (mMake, mModel, mYear){
    this.make = mMake;
    this.model = mModel;
    this.year = mYear;
    this.getCarinfo = function() {
        document.write (this.make + this.model + "released in" + this.year )
    }
}
function Person (pName, pAge) {
    this.name = pName;
    this.age = pAge;
    this.driveCar = function(car) {
        document.write("yavs manqana" + " " + car.make + " " + car.model + " " + car.year)
    }
    this.displayinfo = function() {
        document.write(this.name + " " + "aris" + " " + this.age)
    }
}
var tom = new Person("Tomi",24);
tom.displayinfo();

var tesla = new Car("Tesla", "Model S", "released in 2015");

tom.driveCar(tesla);



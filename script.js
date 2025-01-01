// Complete the js code
function Car(make, model) {
	this.make = make;
	this.model = model;
}
Car.prototype.getMakeModel = function () {
    return `${this.make} ${this.model}`;
};

function SportsCar(make, model, topSpeed) {
	Car.call(this, make, model);
	this.topSpeed = topSpeed;
}
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

SportsCar.prototype.getTopSpeed = function () {
    return this.topSpeed;
};
function createCar() {
            const car = new Car("Toyota", "Corolla");
            document.getElementById("output").innerText = car.getMakeModel();
        }

        function createSportsCar() {
            const sportsCar = new SportsCar("Ferrari", "Testarossa", 200);
            document.getElementById("output").innerText =
                `${sportsCar.getMakeModel()}, Top Speed: ${sportsCar.getTopSpeed()} km/h`;
        }
// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;

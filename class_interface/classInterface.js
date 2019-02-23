var ClassInterface = /** @class */ (function () {
    function ClassInterface(msg) {
        this.msg = "Hello";
    }
    ClassInterface.prototype.printMsg = function () {
        console.log(this.msg);
    };
    return ClassInterface;
}());
var example = new ClassInterface();
example.printMsg();
var dog = ({
    name: 'Reksio',
    age: 3,
    color: 'grey'
});
console.log(dog);
console.log(dog.name);
var json = '{ "name": "Max", "age": 4, "color": "red", "date": "2018-04-17" }';
var myDog = JSON.parse(json);
console.log(myDog);

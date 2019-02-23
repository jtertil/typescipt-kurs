var ThisProblem = /** @class */ (function () {
    function ThisProblem() {
        this.msg = 'Hello world!';
    }
    ThisProblem.prototype.printFunction = function () {
        return function () {
            console.log(this.msg);
        };
    };
    ThisProblem.prototype.printFunction2 = function () {
        var _this = this;
        return function () {
            console.log(_this.msg);
        };
    };
    return ThisProblem;
}());
var example = new ThisProblem();
var fun = example.printFunction();
fun();
var fun2 = example.printFunction2();
fun2();

var LetConstVar = /** @class */ (function () {
    function LetConstVar() {
    }
    LetConstVar.prototype.printNumber = function () {
        var i = 99;
        for (var i = 0; i < 3; i++) {
            console.log("iteration(var): " + i);
        }
        console.log("result(var): " + i);
    };
    LetConstVar.prototype.printNumber2 = function () {
        var i = 99;
        for (var i_1 = 0; i_1 < 3; i_1++) {
            console.log("iteration(let): " + i_1);
        }
        console.log("result(let): " + i);
    };
    LetConstVar.prototype.checkIf = function () {
        var a = "hello, A!";
        if (true) {
            var b = "hello, B!";
            console.log(a);
            console.log(b);
            // both in scope
        }
        console.log(b);
        // b still in scope
    };
    LetConstVar.prototype.showConst = function () {
        var num = 100;
        console.log(num);
    };
    return LetConstVar;
}());
var example = new LetConstVar();
example.printNumber();
example.printNumber2();
example.checkIf();
example.showConst();

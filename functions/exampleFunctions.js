var ExampleFunctions = /** @class */ (function () {
    function ExampleFunctions() {
        this.msg = 'Hello world!';
        this.hello4 = function (message) { return console.log('Hello world, tu funkcja hello4' + ' ' + message); };
        this.hello5 = function () { return console.log('Hello world, tu funkcja hello5.'); };
        this.hello6 = function (message) { return 'Hello world, tu funkcja' + ' ' + message; };
    }
    ExampleFunctions.prototype.showMsg = function () {
        console.log(this.msg);
    };
    ExampleFunctions.prototype.hello = function () {
        return 'Hello world, tu funkcja hello.';
    };
    ExampleFunctions.prototype.hello1 = function (message) {
        console.log(message);
    };
    ExampleFunctions.prototype.hello2 = function (message, message2) {
        console.log(message + ' ' + message2);
    };
    ExampleFunctions.prototype.hello3 = function (message, message2) {
        if (message2 === void 0) { message2 = 'domyślna wartość.'; }
        console.log(message + ' ' + message2);
    };
    return ExampleFunctions;
}());
var example = new ExampleFunctions();
example.showMsg();
console.log(example.hello());
example.hello1('Hello world, tu funkcja hello1.');
example.hello2('Hello world, tu funkcja hello2, której drugi argument jest opcjonalny:');
example.hello3('Hello world, tu funkcja hello3, mam argument opcjonalny z domyślną wartością: ');
example.hello4('- wywołana przy użyciu "fat arrow".');
example.hello5();
console.log(example.hello6('hello6.'));

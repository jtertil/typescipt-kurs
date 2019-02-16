class ExampleFunctions {

	msg: string = 'Hello world!';

	showMsg(): void{
		console.log(this.msg);
	}

	hello(): string {
		return 'Hello world, tu funkcja hello.'
	}

	hello1(message: string) {
		console.log(message)
	}

	hello2(message: string, message2?: string) {
		console.log(message + ' ' + message2);
	}

	hello3(message: string, message2 = 'domyślna wartość.') {
		console.log(message + ' ' + message2);
	}

	hello4 = message => console.log('Hello world, tu funkcja hello4' + ' ' +message);

	hello5 = () => console.log('Hello world, tu funkcja hello5.');

	hello6 = (message: string): string => { return 'Hello world, tu funkcja' + ' ' + message};

}

var example = new ExampleFunctions();
example.showMsg();
console.log(example.hello());
example.hello1('Hello world, tu funkcja hello1.');
example.hello2('Hello world, tu funkcja hello2, której drugi argument jest opcjonalny:');
example.hello3('Hello world, tu funkcja hello3, mam argument opcjonalny z domyślną wartością: ');
example.hello4('- wywołana przy użyciu "fat arrow".');
example.hello5();
console.log(example.hello6('hello6.'));



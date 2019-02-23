class ClassInterface{

	msg: string = "Hello"

	constructor(msg?:string){

	}

	printMsg(){
		console.log(this.msg);
	}
}

let example = new ClassInterface();
example.printMsg();

interface Dog {
	name: string;
	age: number;
	color: string;
	date?: Date;
}

let dog: Dog =({
	name: 'Reksio', 
	age: 3, 
	color: 'grey',
})

console.log(dog)
console.log(dog.name)

let json = '{ "name": "Max", "age": 4, "color": "red", "date": "2018-04-17" }';
let myDog: Dog = JSON.parse(json);
console.log(myDog)

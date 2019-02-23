class LetConstVar {
	
	printNumber(){
		var i = 99;
		for (var i = 0; i < 3; i++) {
			console.log("iteration(var): " + i)
		}
		console.log("result(var): " + i)
	}

	printNumber2(){
		let i = 99;
		for (let i = 0; i < 3; i++) {
			console.log("iteration(let): " + i)
		}
		console.log("result(let): " + i)
	}

	checkIf() {
		let a = "hello, A!"

		if (true) {
			var b = "hello, B!"
			console.log(a);
			console.log(b);
			// both in scope
		}
		console.log(b)
		// b still in scope
	}

	showConst() {
		const num = 100;
		console.log(num);
	}

}

let example = new LetConstVar();
example.printNumber();
example.printNumber2();
example.checkIf();
example.showConst();

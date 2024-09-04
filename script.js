function makeid(l) {
  // write your code here
	let all = "123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	let id = "";
	for(let i = 0; i < l; i++){
		id = id + all[Math.floor(Math.random() * all.length)];
	}
	return id;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));

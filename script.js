const makeChange = (c) => {
  // your name here
	const quarterValue = 25;
    const dimeValue = 10;
    const nickelValue = 5;
    const pennyValue = 1;

    let q = 0, d = 0, n = 0, p = 0;

    q = Math.floor(amount / quarterValue);
    amount %= quarterValue;

    d = Math.floor(amount / dimeValue);
    amount %= dimeValue; 
    n = Math.floor(amount / nickelValue);
    amount %= nickelValue;
    p = amount;
	 return { "q": q, "d": d, "n": n, "p": p };
	
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));

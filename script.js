const makeChange = (c) => {
  // your name here
	const quarterValue = 25;
    const dimeValue = 10;
    const nickelValue = 5;
    const pennyValue = 1;

    let q = 0, d = 0, n = 0, p = 0;

    q = Math.floor(c / quarterValue);
    c %= quarterValue;

    d = Math.floor(c / dimeValue);
    c %= dimeValue; 
    n = Math.floor(c / nickelValue);
    c %= nickelValue;
    p = c;
	 return { "q": q, "d": d, "n": n, "p": p };
	
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));

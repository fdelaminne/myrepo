#!/usr/bin/env node
var fs = require('fs');
var outfile = "hw_1_2.txt";

var primes= new Array;
max=100;

primesList="";
for (i=2; primes.length<max; i++)
{	// prime 
	isPrime = true; // until proved otherwise
	for (j=2;j<i;j++)
	{	if (i%j ==0)
		{	isPrime = false;
			break;
		}
	}
	if (isPrime)
	{	primes.push(i);
	}
	
}
primesList=primes.join(",");

fs.writeFileSync(outfile, primesList);  
console.log("Final prime list "+primesList);

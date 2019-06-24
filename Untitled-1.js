function canForm(arr) {
	console.log(Math.max(...arr.length))
}

console.log();
console.log(canForm(["mast", "manifest", "met", "fan"]))//, true)
console.log(canForm(["may", "master", "same", "reams"]))//, false)
console.log(canForm(["may", "same", "reams", "mastery"]))//, true)
console.log(canForm(["kerfuffle", "fluke", "fluff", "ruffle", ]))//, true)
console.log(canForm(["monument", "momento", "moment", "tome"]))//, false)
console.log(canForm(["shape", "shapers", "raps", "saps"]))//, true)
const convertCtoF = (celsius) => {
    let farenheit = (celsius * 9 / 5) + 32;
    return farenheit;
}
console.log(convertCtoF(30))
console.log(convertCtoF(-30))
console.log(convertCtoF(20))
const patten = /^[a-z_][a-z-_0-9]{6,}/;
const str = "_it1912a";
const check = patten.test(str);
console.log(check);

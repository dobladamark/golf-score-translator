const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, str) {
if (str === 1) {
  return `${names[0]}`;
}else if(str <= par - 2){
return `${names[1]}`;
}else if(str === par - 1) {
  return `${names[2]}`;
}else if(str === par) {
  return `${names[3]}`;
}else if(str === par + 1) {
  return `${names[4]}`;
}else if(str === par + 2) {
  return `${names[5]}`;
}else {
  return `${names[6]}`;
}
}

console.log(golfScore(5,1));
console.log(golfScore(5,3));
console.log(golfScore(5,4));
console.log(golfScore(5,5));
console.log(golfScore(4,5));
console.log(golfScore(4,6));

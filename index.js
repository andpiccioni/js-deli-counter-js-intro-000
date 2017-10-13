var katzDeli = [];

function takeANumber(name) {
  var katzDeliLine = katzDeli.length;
  do{
    katzDeli.push(name);
    return `Welcome, ${name}. You are number ${katzDeliLine + 1} in line.`;
    katzDeliLine++;
  }
  while (katzDeliLine > 0)
  return katzDeli
  return katzDeliLine
}



function nowServing(array){
  for (let i = 0; i < array.length + 1; i++){
    return `Currently serving ${array[0]}.`
    array.shift();
    return array
  }
    return "There is nobody waiting to be served!"
}

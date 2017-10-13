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
  do{
    return `Currently serving ${array[0]}.`;
    array.shift();
  }
  while (array.length > 0);
}
return "There is nobody waiting to be served!"

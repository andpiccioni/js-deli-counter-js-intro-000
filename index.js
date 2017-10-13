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
  for(var i = 0; i < array.length; i++){
    return array[i]
    array.shift()
  } else {
    return "There is nobody waiting to be served!"
  }
}

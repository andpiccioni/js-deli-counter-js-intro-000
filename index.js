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


var array = ["joe", "fred"];
function nowServing(array) {
  while (array.length > 0) {
    return `Currently serving ${array[0]}.`;

  }
  return array.shift();
  return "There is nobody waiting to be served!"
}


function takeANumber(katzDeliLine, name) {
  var katzDeli = [];
  var katzDeliLine = katzDeli.length + 1;

  do{
    katzDeli.push(name);
    return `Welcome, ${name}. You are number ${katzDeliLine} in line.`;
    katzDeliLine++;
  }
  while (katzDeliLine > katzDeli.length)
}

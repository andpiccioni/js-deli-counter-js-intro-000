
function takeANumber(name) {
  var katzDeli = [];
  var katzDeliLine = katzDeli.length;

  do{
    katzDeli.push(name);
    return `Welcome, ${name}. You are number ${katzDeliLine + 1} in line.`;
    katzDeliLine++;
  }
  while (katzDeliLine > katzDeli.length)
}

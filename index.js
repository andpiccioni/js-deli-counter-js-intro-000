var katzDeli = [];
var katzDeliLine = katzDeli.length;

function takeANumber(name) {
  do{
    katzDeli.push(name);
    return `Welcome, ${name}. You are number ${katzDeliLine + 1} in line.`;
    katzDeliLine++;
  }
  while (katzDeliLine > katzDeli.length)
  return katzDeli
  return katzDeliLine
}

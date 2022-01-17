const ftoc = function(temp) {
  return round((temp - 32) * 5 / 9);
  
};

const ctof = function(temp) {
  return round(temp * 9 / 5 + 32);
};

const round = function(num) {
  return +(Math.round(num + "e+1")  + "e-1");
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

function roundToOne(temp) {
  return Math.round(temp * 10) / 10;
}

const convertToCelsius = function(fahrenheit) {
  const celsius = (fahrenheit - 32) * 5/9;
  if (celsius > 0 || celsius < 0) {
    return roundToOne(celsius);
  }
  else {
    return celsius;
  }  
};

const convertToFahrenheit = function(celsius) {
  const fahrenheit = celsius * 9/5 + 32;
  if(fahrenheit > 0 || fahrenheit < 0) {
    return roundToOne(fahrenheit);
  }
  else {
    return fahrenheit;
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

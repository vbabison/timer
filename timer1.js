const delays = process.argv.slice(2)
const spinner = function(delay) {
  delay.forEach(element => {
    if (Number.isInteger(parseInt(element)) && (parseInt(element) > 0)) {
      setTimeout(() => process.stdout.write('\x07'), element * 1000);
    }});
};
spinner(delays)
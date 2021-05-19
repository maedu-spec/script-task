function checkYuGiOh(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    switch (i) {
      case 2:
        i = "yu";
        result.push(i);
      case 3:
        i = "gi";
        result.push(i);

      case 5:
        i = "oh";
        result.push(i);
      case 6:
      case 7:
      case 8:
      case 9:
        i = 7;
        result.push(i);
      case 10:
        i = "yu-oh";
        result.push(i);
      case "fizzbuzz is meh":
        return `invalid parameter: fizzbuzz is meh`;

      default:
        result.push(i);
    }
  }
  return result;
}

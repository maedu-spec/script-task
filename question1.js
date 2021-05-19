function convertFahrToCelsius(fah) {
  if (typeCheck(fah) === "object") {
    return ` {${fah}} is not a valid number but an object`;
  } else if (typeCheck(fah) === "array") {
    return `[${fah}] is not a valid number but an array`;
  } else if (!isInteger(fah)) {
    return `"${fah}" is not a valid number`;
  } else {
    return (fah - 32) * (5 / 9);
  }
}

function isInteger(val) {
  return /^\d+$/.test(val);
}

function typeCheck(value) {
  const return_value = Object.prototype.toString.call(value);
  const type = return_value.substring(
    return_value.indexOf(" ") + 1,
    return_value.indexOf("]")
  );

  return type.toLowerCase();
}

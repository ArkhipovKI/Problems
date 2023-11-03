import * as problem2 from "./problem2";

function getStringCount(object) {
  let count = 0;
  for (let key in object) {
    if (typeof object[key] === "string") {
      count++;
    } else if (typeof object[key] === "object") {
      count = count + problem2.getStringCount(object[key]);
    }
  }
  return count;
}

export { getStringCount };

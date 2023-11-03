import * as problem1 from "./problem1";

export const sequenceSum = (begin, end) => {
  if (typeof begin !== "number" || typeof end !== "number") {
    return NaN;
  }

  if (!Number.isInteger(begin) || !Number.isInteger(end)) {
    return NaN;
  }

  if (begin > end) {
    return NaN;
  }

  if (begin === end) {
    return begin;
  } else {
    return begin + problem1.sequenceSum(begin + 1, end);
  }
};

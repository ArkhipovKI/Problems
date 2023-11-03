const createObjectCalculator = (initialA, initialB) => {
  let calculator = {
    read: function (a, b) {
      this.initialA = a;
      this.initialB = b;
    },
    sum: function () {
      return this.initialA + this.initialB;
    },
    mul: function () {
      return this.initialA * this.initialB;
    },
  };

  calculator.initialA = initialA;
  calculator.initialB = initialB;

  return calculator;
};

export { createObjectCalculator };

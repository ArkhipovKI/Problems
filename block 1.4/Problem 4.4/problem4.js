const getMostSenior = (humans) => {
  if (!humans || humans.length === 0) {
    // добавляем проверку на пустой или неопределенный массив
    return [];
  }

  const max = [...humans].sort((a, b) => b.age - a.age)[0].age; // находим наибольший возраст
  return humans.filter((human) => human.age === max); // возвращаем всех, у кого возраст максимален
};

export { getMostSenior };

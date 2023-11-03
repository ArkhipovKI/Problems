const createUsernames = (data) => {
  const currentYear = new Date().getFullYear();
  return data.map((user) => {
    const birthYear = currentYear - user.age;
    const username = `${user.firstName}${user.lastName.charAt(
      0
    )}${birthYear}`.toLowerCase();
    return { ...user, username };
  });
};

export { createUsernames };

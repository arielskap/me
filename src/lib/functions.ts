export const calcBirthday = (birthday: string) => {
  const birthdayDate = new Date(birthday);
  const ageTime = Date.now() - birthdayDate.getTime();
  const ageDate = new Date(ageTime);
  return Math.abs(ageDate.getUTCFullYear() - 1971);
};

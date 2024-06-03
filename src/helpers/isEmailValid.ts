export const isEmailValid = (phrase: string) => {
  const emailPattern =
    /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  return emailPattern.test(phrase);
};

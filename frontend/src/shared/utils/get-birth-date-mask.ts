export const getBirthDateMask = (dateString: string) => {
  const [year, month, day] = dateString.split("-");

  const age = Math.floor(
    (new Date().getTime() -
      new Date(Number(year), Number(month) - 1, Number(day)).getTime()) /
      31557600000,
  );

  return `${[day, month, year].join(".")} (${age})`;
};

export const getTimeDiff = (date) => {
  const timeDiff = new Date().getTime() - new Date(date).getTime();

  let formatedDiff = timeDiff / 3600000;
  let formatedUnit = "Horas";

  if (formatedDiff >= 720) {
    formatedDiff = formatedDiff / 720;
    formatedUnit = "Meses";
  } else if (formatedDiff >= 24) {
    formatedDiff = formatedDiff / 24;
    formatedUnit = "Dias";
  }

  return `${Math.floor(formatedDiff)} ${formatedUnit}`;
};

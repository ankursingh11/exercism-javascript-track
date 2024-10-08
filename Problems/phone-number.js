// https://exercism.org/tracks/javascript/exercises/phone-number/edit

const VALID_NUMBER_LENGTH = 10;
const MAX_NUMBER_LENGTH = 11;
const VALID_COUNTRY_CODE = "1";
const COUNTRY_CODE_INDEX = 0;
const AREA_CODE_INDEX = 0;
const EXCHANGE_CODE_INDEX = 3;

export const clean = (phoneNumber) => {
  const cleanedNumber = phoneNumber.replace(/[\s.\-()+]/g, "");
  if (/[A-Za-z]/.test(cleanedNumber)) throw new Error("Letters not permitted");
  if (/\D/.test(cleanedNumber)) throw new Error("Punctuations not permitted");
  if (cleanedNumber.length < VALID_NUMBER_LENGTH)
    throw new Error("Incorrect number of digits");
  if (cleanedNumber.length > MAX_NUMBER_LENGTH)
    throw new Error(`More than ${MAX_NUMBER_LENGTH} digits`);
  if (
    cleanedNumber.length === MAX_NUMBER_LENGTH &&
    cleanedNumber[COUNTRY_CODE_INDEX] !== VALID_COUNTRY_CODE
  )
    throw new Error(
      `${MAX_NUMBER_LENGTH} digits must start with ${VALID_COUNTRY_CODE}`
    );

  const cleanedNumberLessCountry = cleanedNumber.slice(-VALID_NUMBER_LENGTH);
  if (cleanedNumberLessCountry[AREA_CODE_INDEX] === "0")
    throw new Error("Area code cannot start with zero");
  if (cleanedNumberLessCountry[AREA_CODE_INDEX] === "1")
    throw new Error("Area code cannot start with one");
  if (cleanedNumberLessCountry[EXCHANGE_CODE_INDEX] === "0")
    throw new Error("Exchange code cannot start with zero");
  if (cleanedNumberLessCountry[EXCHANGE_CODE_INDEX] === "1")
    throw new Error("Exchange code cannot start with one");
  return cleanedNumberLessCountry;
};

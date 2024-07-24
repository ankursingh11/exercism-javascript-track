
// https://exercism.org/tracks/javascript/exercises/bob/edit

//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const isQuestion = (str) => str.trim().endsWith('?');
const isShouting = (str) => /[a-z]/i.test(str) && str === str.toUpperCase();
const isShoutingQuestion = (str) => isQuestion(str) && isShouting(str);
const isSilence = (str) => str.trim().length === 0;
const isDefault = () => true;

const rules = [
  {test : isSilence, response : "Fine. Be that way!"},
  {test : isShoutingQuestion, response : "Calm down, I know what I'm doing!"},
  {test : isQuestion, response : "Sure."},
  {test : isShouting, response : "Whoa, chill out!"},
  {test : isDefault, response : "Whatever."}
]

export const hey = message => rules
  .find(({ test }) => test(message))
  .response;

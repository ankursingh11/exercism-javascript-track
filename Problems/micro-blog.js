// https://exercism.org/tracks/javascript/exercises/micro-blog/edit

export const truncate = (input) => {
  return Array.from(input).slice(0, 5).join("");
};

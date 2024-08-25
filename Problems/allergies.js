// https://exercism.org/tracks/javascript/exercises/allergies/edit

//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Allergies {
  static ALLERGENS = [
    "eggs",
    "peanuts",
    "shellfish",
    "strawberries",
    "tomatoes",
    "chocolate",
    "pollen",
    "cats",
  ];

  #allergens;
  constructor(score = 0) {
    this.#allergens = Allergies.ALLERGENS.filter((_, i) => (score >> i) & 1);
  }

  list() {
    return this.#allergens;
  }

  allergicTo(allergen) {
    return this.#allergens.includes(allergen);
  }
}

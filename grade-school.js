// https://exercism.org/tracks/javascript/exercises/grade-school/edit

//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  constructor() {
    this.db = {};
  }

  roster() {
    return JSON.parse(JSON.stringify(this.db));
  }

  add(name, standard) {
    for (let key in this.db) {
      // if the name already exists in db
      let index = this.db[key].indexOf(name);
      if (index !== -1) {
        this.db[key].splice(index, 1);
      }
    }

    if (this.db[standard] === undefined) {
      this.db[standard] = [name];
    } else {
      this.db[standard].push(name);
      this.db[standard].sort();
    }
  }

  grade(standard) {
    return this.db[standard] !== undefined ? [...this.db[standard]] : [];
  }
}


// https://exercism.org/tracks/javascript/exercises/food-chain/edit

//
// This is only a SKELETON file for the 'Food Chain' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Song {
	constructor() {
		this.swallowed = [
			"I don't know why she swallowed the fly. Perhaps she'll die.\n",
			"She swallowed the spider to catch the fly.\n",
			"She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n",
			"She swallowed the cat to catch the bird.\n",
			"She swallowed the dog to catch the cat.\n",
			"She swallowed the goat to catch the dog.\n",
			"She swallowed the cow to catch the goat.\n",
			"I know an old lady who swallowed a horse.\nShe's dead, of course!\n",
		];
		this.opener = [
			"I know an old lady who swallowed a fly.\n",
			`I know an old lady who swallowed a spider.
It wriggled and jiggled and tickled inside her.\n`,
			`I know an old lady who swallowed a bird.
How absurd to swallow a bird!\n`,
			`I know an old lady who swallowed a cat.
Imagine that, to swallow a cat!\n`,
			`I know an old lady who swallowed a dog.
What a hog, to swallow a dog!\n`,
			`I know an old lady who swallowed a goat.
Just opened her throat and swallowed a goat!\n`,
			`I know an old lady who swallowed a cow.
I don't know how she swallowed a cow!\n`,
		];
	}

	verse(num) {
		if (num === 8) {
			return this.swallowed[num - 1];
		}

		let result = this.opener[num - 1];
		for (let i = num - 1; i >= 0; i--) {
			result += this.swallowed[i];
		}

		return result;
	}

	verses(from, upto) {
		let result = "";

		for (let i = from; i <= upto; i++) {
			result += this.verse(i) + "\n";
		}

		return result;
	}
}
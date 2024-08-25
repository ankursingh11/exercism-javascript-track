
// https://exercism.org/tracks/javascript/exercises/ozans-playlist/edit

// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Removes duplicate tracks from a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} new playlist with unique entries
 */
export function removeDuplicates(playlist) {
  const result = [];
  const set = new Set();
  for(let song of playlist){
    if(!set.has(song)){
      set.add(song);
      result.push(song);
    }
  }

  return result;
}

/**
 * Checks whether a playlist includes a track.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {boolean} whether the track is in the playlist
 */
export function hasTrack(playlist, track) {
  const set = new Set();
  playlist.map(song => set.add(song));

  return set.has(track);
}

/**
 * Adds a track to a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function addTrack(playlist, track) {
  const set = new Set();
  for(let song of playlist) set.add(song);
  if(!set.has(track)) playlist.push(track);
  return playlist;
}

/**
 * Deletes a track from a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function deleteTrack(playlist, track) {
  return playlist.filter(song => song !== track);
}

/**
 * Lists the unique artists in a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} list of artists
 */
export function listArtists(playlist) {
  const set = new Set();
  const result = [];
  playlist.map(song => {
    const artist = song.split('-')[1].trim();
    if(!set.has(artist)){
      set.add(artist);
      result.push(artist);
    }
  })

  return result;
}

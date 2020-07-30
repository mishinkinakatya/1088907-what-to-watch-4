import NameSpace from "../../name-space.js";


const NAME_SPACE = NameSpace.CINEMA;

export const getActiveMovie = (state) => {
  return state[NAME_SPACE].activeMovie;
};

export const getActiveGenre = (state) => {
  return state[NAME_SPACE].activeGenre;
};

export const getIsVideoPlayerPageOpen = (state) => {
  return state[NAME_SPACE].isVideoPlayerPageOpen;
};

export const getMaxCountOfVisibleMovies = (state) => {
  return state[NAME_SPACE].maxCountOfVisibleMovies;
};

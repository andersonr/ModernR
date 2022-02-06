import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "No Scrubs", duration: "4:05" },
    { title: "Macarena", duration: "2:30" },
    { title: "All Starts", duration: "3:45" },
    { title: "I Want it That Way", duration: "1:45" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  switch (action.type) {
    case "SONG_SELECTED":
      return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
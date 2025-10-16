export const exerciseOptions = {
  method: "GET",
  headers: {
    // HOST: Standard ExerciseDB host (Ensure your components use this host)
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    // HOST: YouTube Search and Download host (Correct)
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    // **FIXED KEY:** Replaced the hardcoded, expired key with your new key from the screenshot.
    "X-RapidAPI-Key": "87eb6aea84mshe590b584978262ap189d06jsnd6245895ce35",
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};

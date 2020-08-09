axios
  .get("https://www.googleapis.com/youtube/v3/search?", {
    params: {
      part: "snippet",
      q: "inception trailer",
      key: "AIzaSyAZBAbJoIj3gqbaT-Cazl4-4hpIPqSEM30",
    },
  })
  .then((response) => {
    console.log(response.data.items);
  });

axios
  .get("http://www.omdbapi.com/", {
    params: {
      t: "Coolie No. 1",
      apikey: "98368116",
    },
  })
  .then((response) => {
    console.log(response.data);
  });

//   Image base URl http://image.tmdb.org/t/p/w600_and_h900_bestv2//kLTa7pajPnFSWQOCqhgpVbiamIY.jpg

import React from "react";
import Row from "./Rows";

function MovieRow() {
  return (
    <Row
      title="My Movies"
      fetchUrl="https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&query=The+Lion+King"
      isPoster={true}
    />
  );
}

export default MovieRow;

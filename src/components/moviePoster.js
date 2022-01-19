const MoviePoster = (props) => {
  const { title, imageUrl, realseDate, description } = props;

  const backgroundImage = {
    backgroundImage: `url(${imageUrl})`,
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    height: "500px",
    width: "200px",
  };

  const transformTimestampToDate = (date) => {
    date = date * 1000;
    let year = new Date(date).getFullYear();
    let day = new Date(date).getDate();
    let month = new Date(date).getMonth();
    return day + "/" + month + "/" + year;
  };

  return (
    <>
      <div className="movie">
        <div className="movie-image" style={backgroundImage}></div>
        <p>{title}</p>
        <p>{transformTimestampToDate(realseDate)}</p>
        <p>{description}</p>
      </div>
    </>
  );
};

export default MoviePoster;

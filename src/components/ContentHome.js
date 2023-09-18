import Poster from "./Poster";
import TrendingMovies from "./TrendingMovies";
import UpcomingMovies from "./UpcomingMovies";
import PopularMovies  from "./PopularMovies";
import Footer from "../layouts/Footer";
import TopShows from "./TopShows";

function ContentHome() {
  return (
    <div className="content">
      <Poster />
      <TrendingMovies />
      <UpcomingMovies />
      <PopularMovies />
      <TopShows />
      <Footer/>
    </div>
  );
}

export default ContentHome;

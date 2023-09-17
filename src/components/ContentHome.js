import Poster from "./Poster";
import TrendingList from "./TrendingList";
import ComingList from "./ComingList";
import ShowsList from "./ShowsList";
import MoviesList from "./MoviesList";
import Footer from "../layouts/Footer";

function ContentHome() {
  return (
    <div className="content">
      <Poster />
      <TrendingList />
      <ComingList />
      <MoviesList />
      <ShowsList />
      <Footer/>
    </div>
  );
}

export default ContentHome;

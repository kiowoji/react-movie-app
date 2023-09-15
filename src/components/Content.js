import Poster from "./Poster";
import TrendingList from "./TrendingList";
import ComingList from "./ComingList";
import ShowsList from "./ShowsList";
import MoviesList from "./MoviesList";

function Content() {
  return (
    <div className="content">
      <Poster />
      <TrendingList />
      <ComingList />
      <MoviesList />
      <ShowsList />
    </div>
  );
}

export default Content;

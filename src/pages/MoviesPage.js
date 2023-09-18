import Sidebar from "../layouts/Sidebar";
import Poster from "../components/Poster";
import Footer from "../layouts/Footer";
import PopularMovies from "../components/PopularMovies";
import TopMovies from "../components/TopMovies";
import NowPlayingMovies from "../components/NowPlayingMovies";
import UpcomingMovies from "../components/UpcomingMovies";

function MoviesPage() {
  return (
    <>
      <Sidebar />
      <div className="content">
        <Poster />
        <PopularMovies/>
        <TopMovies />
        <NowPlayingMovies />
        <UpcomingMovies/>
        <Footer />
      </div>
    </>
  );
}

export default MoviesPage;

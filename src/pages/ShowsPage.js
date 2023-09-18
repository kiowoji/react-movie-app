import Sidebar from "../layouts/Sidebar";
import Poster from "../components/Poster";
import Footer from "../layouts/Footer";
import PopularShows from "../components/PopularShows";
import AnimeShows from "../components/AnimeShows";
import TopShows from "../components/TopShows";

function ShowsPage() {
  return (
    <>
      <Sidebar />
      <div className="content">
        <Poster />
        <TopShows />
        <PopularShows />
        <AnimeShows />
        <Footer />
      </div>
    </>
  );
}

export default ShowsPage;

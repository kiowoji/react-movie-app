import Sidebar from "../layouts/Sidebar";
import UpcomingMovies from "../components/UpcomingMovies";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

function ComingSoonPage() {
  return <>
    <Sidebar />
    <div className="content">
      <Header/>
      <UpcomingMovies/>
      <Footer/>
    </div>
  </>;
}

export default ComingSoonPage;

import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
import TrendingMovies from "../components/TrendingMovies";
import Footer from "../layouts/Footer";

function TrendingPage() {
    return (
      <>
        <Sidebar />
        <div className="content">
          <Header />
          <TrendingMovies/>
          <Footer/>
        </div>
      </>
    );
}

export default TrendingPage;
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
import TrendingList from "../components/TrendingList";
import Footer from "../layouts/Footer";

function TrendingPage() {
    return (
      <>
        <Sidebar />
        <div className="content">
          <Header />
          <TrendingList />
          <Footer/>
        </div>
      </>
    );
}

export default TrendingPage;
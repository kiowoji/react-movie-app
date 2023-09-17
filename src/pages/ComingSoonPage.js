import Sidebar from "../layouts/Sidebar";
import ComingList from "../components/ComingList";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

function ComingSoonPage() {
  return <>
    <Sidebar />
    <div className="content">
      <Header/>
      <ComingList />
      <Footer/>
    </div>
  </>;
}

export default ComingSoonPage;

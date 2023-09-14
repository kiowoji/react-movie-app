import './styles.css';
import './components/Sidebar';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;

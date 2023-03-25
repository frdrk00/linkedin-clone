import './App.css';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';


function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />

      
      {/* App Body */}
        {/* Sidebar */}
        <div className="app__body">
        <Sidebar />
        </div>
        {/* Feed */}
        {/* Widgets */}
    </div>
  );
}

export default App;

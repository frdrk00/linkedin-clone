import './App.css';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Feed from './Feed/Feed';



function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />

      {/* Login */}
      
      {/* App Body */}
        <div className="app__body">
        <Sidebar />
        <Feed />
        
        {/* Widgets */}
        </div>
    </div>
  );
}

export default App;

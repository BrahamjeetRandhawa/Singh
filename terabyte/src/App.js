
import Top from './Top';
import Mainpage from './Mainpage';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Top className= "Topbar" />
      </header>
      <main className="App-main">
        <div className="Main-content">
      
      <Mainpage className= "Mainpageterabyte" />
        </div>
      </main>
        
    </div>
  );
}

export default App;

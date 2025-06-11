
import Top from './Top';
import Mainpage from './Mainpage';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Top className= "Topnav" />
      </header>
      <main className="App-main">
      
      <Mainpage className= "Mainpageterabyte" />
      </main>
      
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/navbar'
import { Content } from './components/content';
import { Footer } from './components/footer';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Content></Content>
      <Footer></Footer>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;

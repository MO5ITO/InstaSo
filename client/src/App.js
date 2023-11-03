import logo from './assets/logo.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
            <img src={logo} alt="logoInstaSo" class="d-inline-block align-text-top logoNav"/>
        
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>
      
    </div>
  );
}

export default App;

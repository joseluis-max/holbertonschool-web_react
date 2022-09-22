// import logo from './logo.svg';
import holbertonLogo from './Holberton-logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={holbertonLogo} className="App-logo" alt="logo" />

        <h1>School dashboard</h1>
      </div>

      <div className="App-body">
        <p>
          Login to access the full dashboard
        </p>

        <label for="email">email</label><br />
        <input type="email" id="email" name="email"></input><br />
        <br />

        <label for="password">password</label><br />
        <input type="password" id="password" name="password"></input><br />
        <br />

        <button>OK</button>
      </div>

      <div className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </div>
    </div>
  );
}

export default App;

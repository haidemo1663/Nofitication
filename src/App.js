import React from 'react';
import './App.css';
import Menu from './components/Menu'

function App() {
  return (
    <div className="App">
      <div className="Menu">
          <Menu items={[
            {icon:"fas fa-home" ,title:"HOME"}
          ]}/>
          <Menu items={[
            {icon:"fas fa-gift" ,title:"DEALS"}
          ]}/>
          <Menu items={[
            {icon:"fas fa-cloud-upload-alt" ,title:"UPLOAD"}
          ]}/>
          <Menu items={[
            {icon:"fas fa-coffee", title:"WORK"}
          ]}/>
          <Menu items={[
            {icon:"fas fa-cog" ,title:"SETTING"}
          ]}/>
      </div>
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

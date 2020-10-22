import React from 'react';
import './css/App.css';
import './css/props.css';

//Components
import Header from './component/header';
import Body from './component/body';
import Footer from './component/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;

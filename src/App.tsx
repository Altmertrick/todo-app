import './App.css';

import React from 'react';

import Todos from './componets/Todos/Todos';
import Footer from './componets/Footer/Footer';

function App(props: any) {
  return (
    <div className="appWrapper">
      <Todos />
      <Footer />
    </div>
  );
}

export default App;

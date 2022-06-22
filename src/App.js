


import React from 'react';
import './App.css';
import Child from './child'
// import {TransactionContext} from './transContext'
import { TransactionProvider } from './transContext';

function App() {
  return (
    <div className="App">
      {/* <TransactionProvider>
      <Child />
      </TransactionProvider> */}
       <Child />
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import DataTable from './components/DataTable'
function App() {
  return (
    <div className="App">
      <DataTable></DataTable>
    </div>
  );
}

export default App;

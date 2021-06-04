import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Nav from './components/Nav'
import DataTable from './components/DataTable'
import styled from 'styled-components'
function App() {
  return (
    <div className="App">
      <Nav />
      <DataTable />

    </div>
  );
}

export default App;

// const Table = styled.div`
// background: blue;
// `
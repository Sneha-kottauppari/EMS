import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header/Navbar';
import './App.css';

import React, { useState, useEffect } from 'react';
import Table from './components/Table/Table';
import Navbar from './components/header/Navbar';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/persons/');
      const persons = await response.json();
      setData(persons);
    }
    fetchData();
  }, []);

  return (
    <div>
      <Navbar/>
      <Table data={data} />
    </div>
  );
};

export default App;
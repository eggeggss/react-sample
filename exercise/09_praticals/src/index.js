import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ImageSlider from './components/ImageSlider';
import repos from './data/repos.json';
import streamers from './data/streamers.json';

const items = [
  'About', 'Products', 'Contact',
];

ReactDOM.render(<ImageSlider imgs={streamers} />,
  document.getElementById('root'));

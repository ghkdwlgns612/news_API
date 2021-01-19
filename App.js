import React,{useCallback,useState} from 'react';
import {Route} from 'react-router-dom'
import NewsPage from './newsPage'


const App = () => {
  return <Route path="/:category?" component={NewsPage} />;
};

export default App;


//1b7ba487d23e4abd8a8f6366d36af245
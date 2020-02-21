import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import './static/main.css'
import './static/shared.css'


import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import { withTranslation } from 'react-i18next';

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default withTranslation("translations")(App);


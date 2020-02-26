import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import './static/main.css'
import './static/shared.css'


import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import { withTranslation } from 'react-i18next';
import SideBar from "./sidebar";

function App() {
  return (
    <>

      <div id="App">
        {/*       
        <header className="main-header">
          <SideBar right pageWrapId={"page-wrap"} outerContainerId={"App"} />
        </header> */}
        <Header />
        <div id="page-wrap">

          <Main />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default withTranslation("translations")(App);


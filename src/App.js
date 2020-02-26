import React from 'react';
import './static/main.css'
import './static/shared.css'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import { withTranslation } from 'react-i18next';
// import Amplify from 'aws-amplify';
// import amplify from './YOUR-PATH-TO/aws-exports';
// // Amplify.configure(amplify);

function App() {
  return (
    <>

      <div id="App">
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


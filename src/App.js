import React, { Component } from 'react';
import Header from './components/header/header';
import About from './components/about/about';

import Portfolio from './components/portfolio/portfolio';
import Article from './components/article/article';
import ContactUs from './components/contactus/contactus';
import Footer from './components/footer/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />

        <Portfolio />
        <Article />
        <ContactUs />
        <Footer />
      </div>
    );
  }
}

export default App;


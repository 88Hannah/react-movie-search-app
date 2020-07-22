import React from 'react';
import Header from './Header';
import SearchMovies from './SearchMovies';
import Footer from './Footer';

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <SearchMovies />
      </div>
      <Footer />
    </>
  )
}

export default App;

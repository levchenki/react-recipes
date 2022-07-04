import React from 'react';
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
import AppRouter from "./components/AppRouter/AppRouter";

function App() {
  return (
    <div className="App">
      <Header/>
      <AppRouter/>
      <Footer/>
    </div>
  );
}

export default App;

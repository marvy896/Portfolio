import React from 'react'
import "./index.css";
import Nav from './nav';
import BodySection from './bodySection'
import Footer from './footer';
import Body from './body';

export default function App() {
  return (
    <div>
      <Nav />
      <Body/>
      <BodySection />
      <Footer />
    </div>
  )
}

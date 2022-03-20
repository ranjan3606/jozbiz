import './App.css';

import Navbar from './component/Navbar/Navbar';
import Header from './component/Header/Header';
import Section from './component/Header/Section'
import Works from './component/Header/Works'
import WorkGroup from './component/Header/WorkGroup'
import CardSection from './component/Header/CardSection';
import Footer from './component/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Section />
      <Works />
      <WorkGroup />
      <CardSection />
      <Footer />
    </div>
  );
}

export default App;

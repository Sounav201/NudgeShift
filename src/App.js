import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom'
import Main from './components/Main/Main';
import Card from './components/Card/Card';
import Brand from './components/Brands/Brand';
function App() {
  return (
    <Router>
    <Navbar></Navbar>
    <Main />
    <div className="wrapper">
      <div className="brand-logos">
        <ul className="grid-4">

          <Brand 
          name="Apple"
          image = "https://shiftnudge.com/_assets/img/logo/apple.svg"
          />
          <Brand 
          name="EA Sports"
          image= "https://shiftnudge.com/_assets/img/logo/ea.svg"
          />
          <Brand 
          name="WebFlow"
          image="https://shiftnudge.com/_assets/img/logo/webflow.svg"
          />
          <Brand 
          name="Microsoft"
          image="https://shiftnudge.com/_assets/img/logo/microsoft.svg"
          />

        </ul>
      </div>
    </div>

    <div className="sn-review-section grid grid-cols-3" id="reviews">
    <Card 
    name="LILIIA MANDRINO"
    experience="I often refer young and aspiring designers to Shift Nudge as it has the foundation you need to kickstart a career or fine-tune the craft of product design."
    emphasis="MDS has put together the most valuable program you can find out there."
    position="DIRECTOR OF UX • EA"
    image="https://shiftnudge.com/_assets/img/students/liliia.jpg"
    />

    <Card
    name="RAMON GILABERT"
    experience="I've taken many courses—recently a masters in interaction design—and I've read every book, but your course is by far the most comprehensive, well explained, well structured, and "
    emphasis="most actionable resource in design I've ever taken."
    position="MICROSOFT"
    image="https://shiftnudge.com/_assets/img/students/ramon.jpg"
    
    />
    <Card
    name="BOMA JOSIA"
    experience="This is the most impactful design course I've ever taken. I especially love the tasks for each lesson and personal feedback from MDS"
    emphasis="It's all been incredibly worthwhile!"
    position="PRODUCT DESIGNER"
    image="https://shiftnudge.com/_assets/img/students/boma.jpg"
    />

    </div>
    
  </Router>    
    );
}

export default App;

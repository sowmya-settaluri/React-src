import { Route, Router, Switch } from 'react-router';

import CoursePage from './components/course1/CoursePage';
 import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Aboutus from './components/Aboutus';
import Pricing from './components/Pricing';


import Gallery from './components/Gallery'; 
import Login from './components/Login';
import Services from './components/Services'; 
import Blog from './components/Blog';
import Homes from './components/Homes';



function App() {
  const switchers = [...document.querySelectorAll('.switcher')]

  switchers.forEach(item => {
    item.addEventListener('click', function() {
      switchers.forEach(item => item.parentElement.classList.remove('is-active'))
      this.parentElement.classList.add('is-active')
    })
  })
  return (
    <>
    <Navbar/>
      <Switch>
      <Route exact path="/courses" component={CoursePage}></Route>
      <Route exact path="/aboutus" component={Aboutus}></Route>
      <Route exact path="/pricing" component={Pricing}></Route>
        
        <Route exact path="/" component={Homes}></Route>
        <Route exact path="/blog" component={Blog}></Route>
        <Route exact path="/gallery" component={Gallery}></Route>
        <Route exact path="/services" component={Services}></Route> 
        <Route exact path="/login" component={Login}></Route>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;

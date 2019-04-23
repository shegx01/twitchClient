import React from "react";
import {BrowserRouter, Route, Link} from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header/>
          <Route path='/' exact component={PageOne}/>
          <Route path='/pagetwo' exact component={PageTwo}/>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;


const PageOne = () => {
  return (
    <div>
      <div className="ui header">
        <Link to='/pagetwo'>
          <button className="ui tiny button">to go page 2</button>
        </Link>
      </div>
    </div>
  )
};
const PageTwo = () => {
  return (
    <div>
      <div className="ui header">
        <Link to='/'>
          <button className="ui tiny button">go to page 1</button>
        </Link>
      </div>
    </div>
  )
};


const Header = () => {
  return (
    <div className="ui secondary menu">
      <div className="ui item">
        <Link to='/'>
          <button className="ui green medium button">go to page 2</button>
        </Link>
        <Link to='/pagetwo'>
          <button className="ui yellow medium button">go to page 1</button>
        </Link>
      </div>
    </div>
  )
};
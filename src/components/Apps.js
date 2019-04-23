import React from "react";
import {BrowserRouter, Route, Link} from "react-router-dom";
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import StreamList from './streams/StreamList';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path='/' exact component={StreamList}/>
        <Route path='/streams/edit' exact component={StreamEdit}/>
        <Route Path='/Streams/delete' exact component={StreamDelete}/>
        <Route Path='/Streams/create' exact component={StreamCreate}/>
        <Route Path='/Streams/show' exact component={StreamShow}/>
      </BrowserRouter>
    </div>
  );
};

export default App;



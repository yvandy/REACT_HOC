import React, { Component } from 'react';
import './App.css';
// import Parent from './Parent';
// import Home from './HOC/Home';
// import CommentList from './hoc_1/comment';
// import BlogPost from './hoc_1/blogpost';
// import SinglePage from './hoc_1/singlePage'
// import SecondPage from './hoc_1/secondPage'
import FirstComp from './hoc_2/firstComp';
import SecondComp from './hoc_2/secondComp';

class App extends Component {


  render() {
    return (

      <React.Fragment>
        {/* <Parent /> */}
        {/* <Home status="coder" /> */}
        {/* <CommentList type="comments" />
        <BlogPost type="blogs" id={10} /> */}
        {/* <SinglePage />
        <SecondPage /> */}
        <SecondComp name={'yogesh'} />
        <FirstComp name={'vandana'} />
      </React.Fragment>


    )
  }
}


export default App;

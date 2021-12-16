import './App.css';
import React from 'react';
import feedbackData from './data/feedbackData';
import ReviewFeedback from './components/ReviewFeedback';
import {Routes, Route, Link} from "react-router-dom"
import MainPage from './components/MainPage'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      allFeedback: feedbackData
    }
  }

  handleAllFeedback = (feedback) =>{
    this.setState({allFeedback : [...this.state.allFeedback, feedback]})
  } 
 
  render(){
    let {allFeedback} =this.state;
    return (
      <>
        <header>
          <h2>Youtube React Project Feedback</h2>
          <Link to="/" className="nav-link survey">Survey</Link>
          <Link to="/ReviewFeedback" className="nav-link review-feedback">All Feedback</Link>
        </header>
        <Routes>
          <Route exact path="/" element={<MainPage handleAllFeedback={this.handleAllFeedback}/>}/>
          <Route path="/ReviewFeedback" element={<ReviewFeedback allFeedback={allFeedback}/>}/>
        </Routes>
      </>
    );
  }
}

export default App;

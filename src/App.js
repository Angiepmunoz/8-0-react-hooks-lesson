import './App.css';
import React from 'react';
import FeedbackForm from './components/FeedbackForm';
import ReviewFeedback from './components/ReviewFeedback';
import {Routes, Route, Link} from "react-router-dom"
import feedbackData from './data/feedbackData';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      allFeedback: feedbackData
    }
  }

  handleAllFeedback = (feedback) =>{
    console.log(feedback)
    this.setState({allFeedback : [...this.state.allFeedback, feedback]})
  }
 
  render(){
    let {allFeedback} =this.state;
    return (
      <>
        <nav>
        <header>Youtube React Project Feedback</header>
        <Link to="/">Survey</Link>
        <Link to="/ReviewFeedback">All Feedback</Link>
        </nav>
        <Routes>
          <Route exact path="/" element={<FeedbackForm handleAllFeedback={this.handleAllFeedback}/>}/>
          <Route path="/ReviewFeedback" element={<ReviewFeedback allFeedback={allFeedback}/>}/>
        </Routes>
      </>
    );
  }
}

export default App;

import React from "react";
import FeedbackForm from "./FeedbackForm";
import Confirmation from "./Confirmation";

class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {
      projectExp: 0,
      instFeedback: "",
      fellowFeedback: "",
      didSubmit: false
    };
  }

  handleForm = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAllFeedback(this.state);
    this.setState({didSubmit: !this.state.didSubmit})
    e.target.reset();
  };

  render (){
      return (
        <>
            {this.state.didSubmit ? <Confirmation/> : (<FeedbackForm handleForm={this.handleForm} handleSubmit={this.handleSubmit}/>)}
        </>  
      )
  }

}

export default MainPage;

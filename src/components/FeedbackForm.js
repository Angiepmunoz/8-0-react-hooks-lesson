import React from "react";

class FeedbackForm extends React.Component {
  constructor() {
    super();
    this.state = {
        projectExp: 0,
        instFeedback: "",
        fellowFeedback: ""
    };
  }

  handleForm = (e) => {
     this.setState({[e.target.name] : e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAllFeedback(this.state)
    e.target.reset();
   
  }

  render() {

    return (
        <form onSubmit={(e)=>this.handleSubmit(e)}>
            <p>Rate your overall experience on the Youtube Project:</p>
            <label for="exp-1">1</label>
            <input id="exp-1" type="radio" name="projectExp" value="1" onChange={(e) => this.handleForm(e)}/>
            <label for="exp-2">2</label>
            <input id="exp-2" type="radio" name="projectExp" value="2" onChange={(e) => this.handleForm(e)}/>
            <label for="exp-3">3</label>
            <input id="exp-3" type="radio" name="projectExp" value="3" onChange={(e) => this.handleForm(e)}/>
            <label for="exp-4">4</label>
            <input id="exp-4" type="radio" name="projectExp" value="4" onChange={(e) => this.handleForm(e)}/>
            <p>Provide feedback for your instructors:</p>
            <textarea id="instFeedback" name="instFeedback" onInput={(e) => this.handleForm(e)}></textarea >
            <p>Provide feedback for your group members:</p>
            <textarea id="fellowFeedback" name="fellowFeedback" onInput={(e) => this.handleForm(e)}></textarea>
            {/* <Link to="/confirmation"> */}
                <button type="submit">Submit</button>
                {/* </Link> */}
        </form>
    );
  }
}


export default FeedbackForm;

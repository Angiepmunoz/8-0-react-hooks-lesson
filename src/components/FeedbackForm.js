import React from "react";
import "./FeedbackForm.css"

const FeedbackForm = (props) => {
    return (
        <form onSubmit={(e)=>props.handleSubmit(e)}>
            <p>Rate your overall experience on the Youtube Project:</p>
            <label for="exp-1">1
                <input className="" id="exp-1" type="radio" name="projectExp" value="1" onChange={(e) => props.handleForm(e)}/>
            </label>
            <label for="exp-2">2
                <input id="exp-2" type="radio" name="projectExp" value="2" onChange={(e) => props.handleForm(e)}/>
            </label>
            <label for="exp-3">3
                <input id="exp-3" type="radio" name="projectExp" value="3" onChange={(e) => props.handleForm(e)}/>
            </label>
            <label for="exp-4">4
                <input id="exp-4" type="radio" name="projectExp" value="4" onChange={(e) => props.handleForm(e)}/>
            </label>
            <p>Provide feedback for your instructors:</p>
            <textarea id="instFeedback" name="instFeedback" onChange={(e) => props.handleForm(e)}></textarea >
            <p>Provide feedback for your group members:</p>
            <textarea id="fellowFeedback" name="fellowFeedback" onChange={(e) => props.handleForm(e)}></textarea>
            {/* <Link to="/confirmation"> */}
                <button type="submit">Submit</button>
                {/* </Link> */}
        </form>
    );
}


export default FeedbackForm;

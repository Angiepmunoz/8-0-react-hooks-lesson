const ReviewFeedback = (props) => {
    let appAverage = props.allFeedback.reduce((acc, curr) => {
        return acc + Number(curr.projectExp);
    }, 0)/ props.allFeedback.length

    let instructorFeedback = props.allFeedback.map((feedback, i) => {
        return(
            <article className="instructor-feedback-card" key={i}>
                <p>{feedback.instFeedback}</p>
            </article>
        )
    })

    let fellowFeedback = props.allFeedback.map((feedback, i) => {
        return(
            <article className="fellow-feedback-card" key={i}>
                <p>{feedback.fellowFeedback}</p>
            </article>
        )
    })

    return (
        <>
            <h2>Youtube Project Experience Average: {appAverage}</h2>
            <h3>Instructor Feedback:</h3>
            {instructorFeedback}
            <h3>Fellow Feedback:</h3>
            {fellowFeedback}
        </>
    )
}


export default ReviewFeedback;
import React from "react";

class Confirmation extends React.Component {
  constructor() {
    super();
    this.state = {
      joke: ""
    };
  }

  componentDidMount() {
    fetch("https://geek-jokes.sameerkumar.website/api?format=json")
      .then((response) => response.json())
      .then((joke) =>{ 
          this.setState({joke: joke.joke})
        })
      .catch((err) => console.log(err));
  }

  render() {
      const {joke} = this.state;
    return (
      <div>
        <p>Thank you for your honest review!</p>
        <p>As a token of our appreciation here is a joke:</p>
        <p>{joke}</p>
      </div>
    );
  }
}

export default Confirmation
import React from "react";

class Confirmation extends React.Component {
  constructor() {
    super();
    this.state = {
      dadJoke: {},
      reveal: false
    };
  }

  componentDidMount() {
      console.log(process.env.X_RapidAPI_Key)
    fetch("https://dad-jokes.p.rapidapi.com/random/joke", {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
        "X-RapidAPI-Key": "8516b90232msh83894e48979e2e9p11f143jsn6dace3a72ddc",
      },
    })
      .then((response) => response.json())
      .then((joke) =>{ 
          this.setState({dadJoke: joke.body[0]})
        })
      .catch((err) => console.log(err));
  }

  render() {
      const {dadJoke, reveal} = this.state;
    return (
      <div>
        <p>Thank you for your honest review!</p>
        <p>As a token of our appreciation here is a dad joke:</p>
        <p>{dadJoke.setup}</p>
        <button onClick={() => this.setState({reveal: !reveal})} type="button">Reveal Punchline</button>
        {reveal && <p>{dadJoke.punchline}</p>}
      </div>
    );
  }
}

export default Confirmation
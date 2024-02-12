import React from "react";
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Tanishq Doke",
      email: "tanishq.doke@gmail.com",
    };
  }
  changeName = () => {
    this.setState({ name: document.getElementById("name").value });
  };
  changeEmail = () => {
    this.setState({ email: document.getElementById("email").value });
  };

  render() {
    return (
      <div>
        <h4>Enter the new Name</h4>
        <input type="text" placeholder="Name" id="name"></input>
        <button onClick={this.changeName}>Change It</button>

        <h4>Enter the new Email</h4>
        <input type="text" placeholder="Email" id="email"></input>
        <button onClick={this.changeEmail}>Change Now</button>

        <h4>Name: {this.state.name}</h4>
        <h4>Email : {this.state.email}</h4>
      </div>
    );
  }
}
export default Form;

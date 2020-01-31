import React from 'react';

function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
  }
  
  function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
  }

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }

function LoginButton(props) {
    return (
      <button onClick={props.onClick}>
        Login
      </button>
    );
  }
  
  function LogoutButton(props) {
    return (
      <button onClick={props.onClick}>
        Logout
      </button>
    );
  }

class LoginControl extends React.Component {
    constructor(props) {
      super(props);
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.state = {isLoggedIn: false};
    }
    handleLoginClick() {
      this.setState({isLoggedIn: true});
    }
    handleLogoutClick() {
      this.setState({isLoggedIn: false});
    }
    render() {
      const isLoggedIn = this.state.isLoggedIn;
      let button;
      //alternativa menos codigo
      {isLoggedIn ?(
        button = <LogoutButton onClick={this.handleLogoutClick} />)
      :(
        button = <LoginButton onClick={this.handleLoginClick} />
      )}
    //   if (isLoggedIn) {
    //     button = <LogoutButton onClick={this.handleLogoutClick} />;
    //   } else {
    //     button = <LoginButton onClick={this.handleLoginClick} />;
    //   }
      return (
        <div>
          <Greeting isLoggedIn={isLoggedIn} />
          {button}
        </div>
      );
    }
  }



class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('El nombre enviado: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name: 
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  };

class Greeting2 extends React.Component {
    constructor(props) {
        super(props);
        this.click = this.click.bind(this);
        // Set initial state (ONLY ALLOWED IN CONSTRUCTOR)
        this.state = {
            greeting: 'Hello!asdas'
        };
    }
    click(e) {
        this.setState({
              greeting: 'Hola'
        });
    }
    render() {
        return(
            <div>
                <p>{this.state.greeting}</p>
                <button onClick={this.click}>Haz Click</button>
            </div>
        );
    }
    
}

const Formulario = () => (  
    <>
    <LoginControl />

    <NameForm />
    <Greeting2 />
    </>
);

export default Formulario;
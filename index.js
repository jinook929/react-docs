// 1. Hello World
ReactDOM.render(
  <h1>01. Hello, world!</h1>,
  document.getElementById('root01')
);



// 2. Introducing JSX
const name = 'Jinook Jung';
const user = {
  firstName: 'Jinook',
  lastName: 'Jung',
  avatarUrl: './ninja.ico'
}

function formatName(user) {
  return `${user.firstName} ${user.lastName}`;
}

function getGreeting(user) {
  if(user) {
    return `Hello, {formatName(user)}!`;
  }
  return `Hello, Stranger.`;
}

const element02 = (
  <div>
    <h1>02. Introducing JSX</h1>
    <h2>Hello, {name}</h2>
    <h3>Hello, {formatName(user)}!</h3>
    <h3>Good to see you here.</h3>
    <h3>{getGreeting()}</h3>
    <div tabIndex="0"><a href="https://reactjs.org">Visit React Website</a></div>
    <img src={user.avatarUrl} />
  </div>
);

// // Babel compiles JSX down to React.createElement() calls.
// // These two examples are identical:
// ====================================
// const element = (
//   <h1 className="greeting">
//     Hello, world!
//   </h1>
// );
// ====================================
// const element = React.createElement(
//   'h1',
//   {className: 'greeting'},
//   'Hello, world!'
// );

// // React.createElement() essentially creates an object like this (Note: this structure is simplified):
// ====================================
// const element = {
//   type: 'h1',
//   props: {
//     className: 'greeting',
//     children: 'Hello, world!'
//   }
// };

ReactDOM.render(
  element02,
  document.getElementById('root02')
);



// 3. Rendering Elements
function tick() {
  const element = (
    <div>
      <h1>03. Rendering Elements</h1>
      <h2>Hello, world! It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root03'));
}

setInterval(tick, 1000);



// 4. Components and Props

// // “function components”
// fuction Welcome(props) {
//   return <h1>Hello, {props.name}</h1>
// }

// // ES6 class
// class Welcome extends React.Components {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>
//   }
// }

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <h1>04. Components and Props</h1>
        <h2>Hello, {this.props.name}</h2>
      </div>
    );
  }
}

const element04 = <Welcome name="Jenna" />;

ReactDOM.render(
  element04,
  document.getElementById('root04')
);

function Hi(props) {
  return (
    <div>
      <h2>Hello, {props.name}</h2>
    </div>
  );
}

function App() {
  return (
    <div>
      <Hi name="Sara" />
      <Hi name="Cahal" />
      <Hi name="Edite" />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root04_')
);

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
};

function formatDate(date) {
  return date.toLocaleDateString();
}

// function Comment(props) {
//   return (
//     <div className="Comment">
//       <div className="UserInfo">
//         <img className="Avatar"
//           src={props.author.avatarUrl}
//           alt={props.author.name}
//         />
//         <div className="UserInfo-name">
//           {props.author.name}
//         </div>
//       </div>
//       <div className="Comment-text">
//         {props.text}
//       </div>
//       <div className="Comment-date">
//         {formatDate(props.date)}
//       </div>
//     </div>
//   );
// }

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo author={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.author.avatarUrl}
      alt={props.author.name}
    />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar author={props.author} />
      <div className="UserInfo-name">
        {props.author.name}
      </div>
    </div>
  );
}

ReactDOM.render(
  <Comment 
    date={comment.date} 
    text={comment.text} 
    author={comment.author} 
  />, 
  document.getElementById('root04__')
);



// 5. State and Lifecycle
// function Clock(props) {
//   return (
//     <div>
//       <h2>Hello, world!</h2>
//       <h3>It is {props.date.toLocaleTimeString()}.</h3>
//     </div>
//   );
// }

// function tick5() {
//   ReactDOM.render(
//     <Clock date={new Date()} />,
//     document.getElementById('root05')
//   );
// }

// setInterval(tick5, 1000);

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  tick = () => {
    console.log(this.timerID);
    this.setState({date: new Date()});
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <h1>05. State and Lifecycle</h1>
        <h2>Hello, world!</h2>
        <h3>It is {this.state.date.toLocaleTimeString()}.</h3>
      </div>
    );
  }
}

ReactDOM.render(<Clock />, document.getElementById('root05'));



// 6. Handling Events
// // HTML ======================
// <button onclick="activateLasers()">
//   activate Lasers
// </button>
// // JSX ======================
// <button onClick={activateLasers}>
//   Activate Lasers
// </button>

// // HTML ======================
// <a href="#" onclick="return false">Click me</a>
// JSX ======================
function ActionLink() {

  function activateLasers(e, message) {
    console.log(e.type, e.target)
    console.log(message)
    document.getElementById("handleClickMsg").innerHTML = (message);
    // "<strong>Lasers Activated!!!</strong>";
  }

  function handleClick(event) {
    event.preventDefault();
  }

  return (
    <div>
      <h1>06. Handling Events</h1>
      {/* how to add eventhandler in JSX */}
      <button onClick={(e)=>activateLasers(e, "<strong>Lasers Activated!!!</strong>")}>
        Activate Lasers
      </button>
      <div id="handleClickMsg">Lasers ready</div>
      {/* how to prevent default behavior in React (Create a function 'handleClick' with 'event.preventDefault()') */}
      <a href="#" onClick={handleClick}>
        Click me
      </a>
    </div>
  );
}

ReactDOM.render(<ActionLink />, document.getElementById('root06'));

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor')
    this.state = {isToggleOn: true}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = () => {
    console.log('handleClick')
    this.setState(state => ({
      isToggleOn: !this.state.isToggleOn
    }))
  }

  render() {
    console.log('render')
    console.log(this.state.isToggleOn)
    return (
      <div>
        <h3>Toggle Button</h3>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Toggle />, document.getElementById('root06_'));



// 7. Conditional Rendering
function UserGreeting (props) {
  return (
    <div>
      <h2>Welcome Back!</h2>
    </div>
  );
}

function GuestGreeting (props) {
  return (
    <div>      
      <h2>Please Sign Up.</h2>
    </div>
  );
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if(isLoggedIn) {
    return <UserGreeting />;
  } else {
    return <GuestGreeting />;
  }
}

ReactDOM.render((
  <div>
    <h1>07. Conditional Rendering</h1>
    <Greeting isLoggedIn={true}/>
    <p>(Fixed Response)</p>
  </div>), 
  document.getElementById('root07'))

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  )
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  )
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    // this.handleLoginClick = this.handleLoginClick.bind(this);
    // this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false}
  }

  handleLoginClick = () => {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick = () => {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if(isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />
    }
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

ReactDOM.render(<LoginControl />, document.getElementById('root07_'))

function Mailbox(props) {
  const unreadMessages = props.unreadMessages;

  return (
    <div>
      <h2>Hello!</h2>
      {unreadMessages.length > 0 && 
        <div>
          <h3>You have {unreadMessages.length} unread messages.</h3>
      <p>The title of your most recent message is "{unreadMessages[(unreadMessages.length - 1)]}"</p>
        </div>
      }
    </div>
  );
}

const messages = ['React', 'Re: React', 'Re: Re: React', 'Hello', 'Good Morning Friend'];

ReactDOM.render(<Mailbox unreadMessages={messages} />, document.getElementById('root07__'))

class LoginStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLoggedIn: false}
  }

  handleLoginBtnClick = () => {
    this.setState({isLoggedIn: !this.state.isLoggedIn})
  }

  render() {
    let isLoggedIn = this.state.isLoggedIn
    console.log('this.state.isLoggedIn @ LoginStatus render():', this.state.isLoggedIn)
    return (
      <div>
        {isLoggedIn ? (
          <p>The user is <strong>currently</strong> logged in.</p>
        ) : (
          <p>The user is <strong>not</strong> logged in.</p>
        )}
        <button onClick={this.handleLoginBtnClick}>Login</button>
      </div>
    )
  }
}

ReactDOM.render(<div><LoginStatus /></div>, document.getElementById('root07___'))

function WarningBanner(props) {
  console.log("WarningBanner function")
  if(!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      warning!
    </div>
  );
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: false}
    console.log('constructor')
  }

  handleToggleClick = () => {
    console.log('handleToggleClick')
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }

  render() {
    console.log('render')
    console.log(this.state.showWarning)
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    )
  }
}

ReactDOM.render(<Page />, document.getElementById('root07____'))
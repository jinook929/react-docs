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



// 8. Lists and Keys
const numbers = [1, 2, 3, 4, 5];
const doubles = numbers.map(num => num * 2);
console.log(doubles)

const listItems = numbers.map((num, index) => {
  console.log('listItem', index)
  return (
    <li key={index}>{num}</li>
  )
})

ReactDOM.render(<div><h1>08. Lists and Keys</h1><ul style={{textAlign:'left'}}>{listItems}</ul></div>, document.getElementById('root08'))

function ListItem(props) {
  const value = props.value;
  console.log('ListItem', props)
  return (
    <li>{value}</li>
  )
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((num) => {
    console.log('key & value:', num.toString(), '&', num); 
    return <ListItem key={num.toString()} value={num} />
  });

  return (
    <ul>{listItems}</ul>
  );
}

ReactDOM.render(<NumberList numbers={numbers} />, document.getElementById('root08_'))

// function Blog (props) {
//   const sidebar = (
//     <ul>
//       {props.posts.map(post => 
//         <li key={post.id}>{post.title}</li>
//       )}
//     </ul>
//   );

//   const content = props.posts.map(post => 
//     <div key={post.id}>
//       <h3>{post.title}</h3>
//       <p>{post.content}</p>
//     </div>
//   );

//   return (
//     <div>
//       {sidebar}
//       <hr />
//       {content}
//     </div>
//   );
// }

class Blog extends React.Component {
  sidebar = (
    <ul>
      {this.props.posts.map(post => 
        <li key={post.id}>{post.title}</li>
      )}
    </ul>
  );

  content = (this.props.posts.map(post => 
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  ));

  render() {
    return (
      <div>
        {this.sidebar}
        <hr />
        {this.content}
      </div>
    );
  }
}

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

ReactDOM.render(<Blog posts={posts} />, document.getElementById('root08__'))



// 9. Forms
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ""};
  }

  handleChange = (event) => {
    return this.setState({value: event.target.value})
  }

  handleSubmit = (event) => {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render(){
    return (
      <div>
        <h1>09. Forms</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Name: </label>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="SUBMIT" />
        </form>
      </div>
    );
  }
}

ReactDOM.render(<NameForm />, document.getElementById('root09'))

class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: "Write your essay here."}
  }

  handleChange = (e) => {
    return this.setState({value: e.target.value})
  }

  handleSubmit = (e) => {
    alert('An essay was submitted: ' + this.state.value)
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Essay: </label>
        <textarea value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="SUBMIT" />
      </form>
    );
  }
}

ReactDOM.render(<EssayForm />, document.getElementById('root09_'))

class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};
  }

  handleChange = (e) => {
    this.setState({value: e.target.value});
  }

  handleSubmit = (e) => {
    alert('Your favorite flavor is ' + this.state.value);
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Favorite Flavor: </label>
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
        <input type="submit" value="SUBMIT" />
      </form>
    );
  }
}

ReactDOM.render(<FlavorForm />, document.getElementById('root09__'))

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };
  }

  handleInputChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <form>
          <label>Is Going? </label>
          <input type="checkbox" name="isGoing" checked={this.state.isGoing} onChange={this.handleInputChange} />
          <br />
          <label>Number of Guests: </label>
          <input type="number" name="numberOfGuests" value={this.state.numberOfGuests} onChange={this.handleInputChange} />
        </form>
      </div>
    );
  }
}

ReactDOM.render(<Reservation />, document.getElementById('root09___'))



// 10. Lifting State Up
function BoilingVerdict(props) {
  if(props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {temperature: ""}
  }

  handleChange = (e) => {
    this.setState({temperature: e.target.value})
  }

  render() {
    const temperature = this.state.temperature;
    return (
      <div>
        <fieldset>
          <legend>Enter temperature in Celsius</legend>
          <input type="text" value={temperature} onChange={this.handleChange} />
          <BoilingVerdict celsius={parseFloat(temperature)} />
        </fieldset>
        <br /><br />
      </div>
    );
  }
}

ReactDOM.render(<Calculator />, document.getElementById('root10'));

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {
  handleChange = (e) => {
    // before: this.setState({temperature: e.target.value});
    this.props.onTemperatureChange(e.target.value);console.log('handleChange', this.props)
  }

  render() {console.log('TemperatureInput',this.props)
    // before: const temperature = this.state.temperature;
    const temperature = this.props.temperature;
    const scale = this.props.scale; console.log('render(TemperatureInput)')
    return (
      <fieldset>{console.log('render(TemperatureInput(return))')}
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}
function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if(Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;console.log('tryConvert')
  return rounded.toString();
}

class Calculator_ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {scale: '', temperature: ''};
  }

  handleCelsiusChange = (temperature) => {
    this.setState({scale: 'c', temperature: temperature});console.log('handleCelsiusChange', this.state)
  }

  handleFahrenheitChange = (temperature) => {
    this.setState({scale: 'f', temperature: temperature});console.log('handleFahrenheitChange', this.state)
  }

  render() {
    const scale = this.state.scale;console.log(scale)
    const temperature = this.state.temperature;console.log(temperature)
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
console.log('render(Calculator_)')
    return (
      <div>{console.log('render(Calculator_(return))')}
        <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange} />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    )
  }
}

ReactDOM.render(<Calculator_ />, document.getElementById('root10_'))



// 11. Composition vs Inheritance
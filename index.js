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

  tick() {
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
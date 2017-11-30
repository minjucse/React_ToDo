import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           Hello World!
//         </p>
//       </div>
//     );
//   }
// }
// class ShoppingList extends React.Component {
//   render() {
//     return (
//       <div className="shopping-list">
//         <h1>Shopping List for {this.props.name}</h1>
//         <ul>
//           <li>Instagram</li>
//           <li>WhatsApp</li>
//           <li>Oculus</li>
//         </ul>
//       </div>
//     );
//   }
// }
// export default ShoppingList;
// class HelloMessage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: ''};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   handleChange(event) {

//     this.setState({value: event.target.value.toUpperCase()});
//   }
//   handleSubmit(event) {
//     alert('A name was submitted: ' + this.state.value);
    
//   }

//   render() {
  
//     return (
//       <div>
//         <div>
//         <label>
//           Name:
//         <input type="text" value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <br/>
//         <input type="submit" value="Submit" onClick={this.handleSubmit} />
//       </div>
      
//       </div>
//     );
//   }
// }
// ReactDOM.render(
//   <HelloMessage />,
//   document.getElementById('root')
// );
// export default HelloMessage;
// const mountNode = document.getElementById('root');
// ReactDOM.render(
//   <HelloMessage name="Taylor" />,
//   mountNode
//  );

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], name: '' };
    //this.state = { items: [], roll: '' };
    this.nameChange = this.nameChange.bind(this);
    this.rollChange = this.rollChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }
  handleDelete(event){
    var newItems=this.state.items.filter((_item) =>{
      
    return _item !=event
    });
    this.setState({items:newItems});
}
  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList
        handleDelete={this.handleDelete.bind(this)}
         items={this.state.items}  />
        <label>
        Name:
          <input
            onChange={this.nameChange}
            value={this.state.text}
          /></label>
          
          <label>
            Roll:
            <input type="number" onChange={this.rollChange} value={this.state.text} />
          </label>
          
          <button onClick={this.handleSubmit}>
            Add #{this.state.items.length }
          </button>
        
      </div>
    );
  }
  nameChange(e) {
    this.setState({ name: e.target.value });
  }
  rollChange(e) {
    
    this.setState({ roll: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.name.length) {
      return;
    }
    
    const newItem = {
      name: this.state.name,
      roll:this.state.roll,
      id: Date.now()
    };
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      name: '',
      //roll:''
    }));
  }
  
}

class TodoList extends React.Component {
 
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.name}
          <button onClick={this.props.handleDelete.bind(null, item)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  }
}
const mountNode = document.getElementById('root');
ReactDOM.render(<TodoApp />, mountNode);
export default TodoApp;

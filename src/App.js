import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import TodoList from './TodoList'


class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = { items: [], text: '' };

      this.deleteItem = this.deleteItem.bind(this)
  }

  handleChange = (event) => {
    this.setState ({
      text: event.target.value

    })
   
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
      if(!this.state.text.length) {
        return;
      }

      const newItem = {
        text: this.state.text,
        id: Date.now()
      }

      this.setState ({
        items: this.state.items.concat(newItem),
        text: ''
      })
  }

  deleteItem(id) {
    this.setState(prevState => ({
      items: prevState.items.filter(item => item.id !== id)
    }));

  }

  render() {
    return(
      <div className="container">
        <h1>Todo App</h1>
          <form onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            placeholder="Add Todo"
            onChange={this.handleChange}
            value={this.state.text}
            />
          <button className="add">
            <i className="fa fa-plus-circle fa-gradient"></i>
          </button>
        <TodoList 
          items={this.state.items}
          deleteItem={this.deleteItem}
        />
        </form>
        </div>
    )
  }
}
export default App;

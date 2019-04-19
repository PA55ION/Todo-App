import React from 'react';

class TodoList extends React.Component {

    deleteItem(id) {
        this.props.deleteItem(id);
    }
    render() {
        return(
            <div>
                <ul>
                    {this.props.items.map(item => (
                        <li key={item.id}>
                            {item.text}
                            <button onClick={this.deleteItem.bind(this, item.id)}
                            className="remove"
                           >
                            <i className="fa fa-trash fa-gradient"></i>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        )
     }
}



export default TodoList;
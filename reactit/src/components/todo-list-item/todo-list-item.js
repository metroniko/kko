import React from 'react';

import './todo-list-item.css';

// eslint-disable-next-line react/require-render-return
export default class TodoListItem extends React.Component {

  OnMarkImportant = () => {
    this.setState(({important}) => {
      return {
        important: !important
      }
    })  
  }

  onLabelClick = () => {
    this.setState(({done}) => {
      return {
        done: !done
      }
    }) 
  }
  state ={
    done: false,
    important: false
  }
  render() {

    const {onDeleted, label} =  this.props
    const {done, important} = this.state

    let classNames = "todo-list-item"

    if (important) {
      classNames += " important"
    }

    if(done) {
      classNames += " done"
    }
    return (
      <span className= { classNames }>
        <span
          className="todo-list-item-label"
          onClick={ this.onLabelClick }>
          {label}
        </span>
  
        <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick = { this.OnMarkImportant }>
          <i className="fa fa-exclamation"
           />
        </button>
  
        <button type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick = {onDeleted}>
          <i className="fa fa-trash-o" 
          />
        </button>
      </span>
    );
  } 

}
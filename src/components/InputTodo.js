import React from "react"

class InputTodo extends React.Component {

  state = {
    title: "",
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodoProps(this.state.title);
    this.setState({
      title: ""
    });
  };

  render () {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input type="text" placeholder="Add todo..." 
          value={this.state.title}
          name="title"
          onChange={this.onChange}
          className="input-text"s
        />
        <input type="submit" value="Submit" className="input-submit"/>
      </form>
    )
  }
}

export default InputTodo;
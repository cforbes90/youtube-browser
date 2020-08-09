import React from "react";
class SearchBar extends React.Component {
  //initialize the state object

  state = { term: "" };

  onInputChange = (event) => {
    //In order to change state, you MUST USE setState method! You can't just say equals!
    //Also don't forget to use destructuring for actually assigning the value to the key set in state.
    this.setState({ term: event.target.value });

    console.log(this.state.term);
  };
  onFormSubmit = (event) => {
    //stops the form from being submitted prematurely when hitting Enter
    event.preventDefault();

    //TODO Make sure we call c
    //callback from parent component
  };

  render() {
    return (
      <div className=" search-bar ui segment">
        <form className=" ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label> Video Search</label>
            <input
              type="text"
              value={this.state.term}
              //also could have been onChange = {e =>this.setState({term: e.target.value})}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;

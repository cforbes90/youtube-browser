import React from "react";
class SearchBar extends React.Component {
  //initialize the state object
  //Is state only on this one component? Or is state available throughout the whole app? DOes the whole app have access to the "term" state property/object?
  state = { term: "" };

  onInputChange = (event) => {
    //In order to change state, you MUST USE setState method! You can't just say equals!
    //Also don't forget to use destructuring for actually assigning the value to the key set in state.
    this.setState({ term: event.target.value });

    // console.log(this.state.term);
  };
  onCHILDSubmit = (event) => {
    //stops the form from being submitted prematurely when hitting Enter
    event.preventDefault();
    console.log("This is within the child component submitting");
    //TODO Make sure we call c
    //callback from parent component
    console.log("We are right above sending it to the TUrkey parent!");
    this.props.onTURKEYSubmit(this.state.term);
  };

  render() {
    return (
      <div className=" search-bar ui segment">
        <form className=" ui form" onSubmit={this.onCHILDSubmit}>
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

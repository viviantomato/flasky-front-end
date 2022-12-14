import "./Breakfast.css";
import PropTypes from "prop-types";
import { useState } from "react";

// const Breakfast = (props) => {
// version 1, 12/09
// const name = "cereal";
// const description = "tasty";
// const prep = 2;
// const rating = 5;

// version 2, 12/13
//props pass variables to function
// const name = props.name;
// const description = props.description;
// const prep = props.prep;
// const rating = props.rating;

// version 3, 12/13
// version 4, 12/14 update rating as state
// destructure the props object, variable name has to be same as the key
const Breakfast = ({ name, prep, description }) => {
  const [rating, setRating] = useState(0);
  // the other way:
  // const stateArray = useState(0);
  // const rating = stateArray[0];
  // const setRating = stateArray[1];

  const handleClick = () => {
    setRating(rating + 1);
    console.log("rating", rating);
  };

  // hook
  const [breakfastName, setBreakfastName] = useState("");

  // update a piece of code for what is changing
  // set breakfast name to whatever typed in a form
  //const handleChange = event => console.log("event", event.target.value)
  // add s set to my hook
  const handleChange = (event) => setBreakfastName(event.target.value);

  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <p className="emphasizedText">{prep} minutes</p>
      <p className="emphasizedText">{rating} stars</p>
      <p>Your {breakfastName} is cool!</p>
      {/* add a form */}
      <form>
        <input onChange={handleChange} />
      </form>

      {/* add a button and event listener */}
      {/* <button onClick={() => console.log("HI")}>Click Me!</button> */}
      <button onClick={handleClick}>Update Rating</button>
    </div>
  );
};

Breakfast.propTypes = {
  name: PropTypes.string.isRequired, //we have to have it as string
  description: PropTypes.string.isRequired,
  prep: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Breakfast;

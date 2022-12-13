import './Breakfast.css';
import PropTypes from "prop-types";

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
// destructure the props object, variable name has to be same as the key
const Breakfast = ({name, description, prep, rating}) => {
  return (
    <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <p className="emphasizedText">{prep} minutes</p>
        <p className="emphasizedText">{rating} stars</p>
    </div>
  );
};

Breakfast.propTypes = {
    name:PropTypes.string.isRequired, //we have to have it as string
    description:PropTypes.string.isRequired,
    prep: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired
}   

export default Breakfast;

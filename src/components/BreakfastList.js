import Breakfast from "./Breakfast";
import PropTypes from "prop-types";

// version 1
// const BreakfastList = (props) => {
//     const breakfastData = props.breakfastData;

// version 2
// destructure the props object, variable name has to be same as the key
const BreakfastList = ({breakfastData}) => {

    // version 1 create object
    // const breakfastData  = [
    //     {id:1, name:"Eggs Benedict", description:"great", prep:"3", rating:"4"},
    //     {id:2, name:"French Toast", description:"heavy but good", prep:"10", rating:"5"},
    //     {id:3, name:"Mango Dafu", description:"sweet", prep:"20", rating:"5"}
    // ];

    // calling the map function, convert each breakfast to the output format and return it
    const breakfastComponents = breakfastData.map((breakfast) => {
        return(
            <li key={breakfast.id}>
                <Breakfast name={breakfast.name} description ={breakfast.description} prep={breakfast.prep} rating={breakfast.rating} />
            </li>
        )
    });
    // render
    return (
        <ul>
            {breakfastComponents}
        </ul>
    )
}


BreakfastList.propTypes = {
    breakfastData:PropTypes.arrayOf(PropTypes.object).isRequired
}
export default BreakfastList;
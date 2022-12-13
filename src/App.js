// import logo from './logo.svg';
import "./App.css";
import BreakfastList from "./components/BreakfastList";

function App() {
  const name = "Cheetahs";

  const breakfastData1  = [
    {id:1, name:"Eggs Benedict", description:"great", prep:"3", rating:"4"},
    {id:2, name:"French Toast", description:"heavy but good", prep:"10", rating:"5"},
    {id:3, name:"Mango Dafu", description:"sweet", prep:"20", rating:"5"}
];

  const breakfastData2  = [
    
    {id:2, name:"French Toast", description:"heavy but good", prep:"10", rating:"5"},
    {id:4, name:"Stawberry Dafu", description:"sweet", prep:"20", rating:"5"}
  ];


  return (
    <div className="App">
      <h1>{name} Vivian Breakfast</h1>
      <h2>Breakfast List 1</h2>
      <BreakfastList breakfastData={breakfastData1}/>
      <h2>Breakfast List 2</h2>
      <BreakfastList breakfastData={breakfastData2}/>
      {/* <ul>
        <li>
          <h2>Cereal</h2>
          <p>Tasty</p>
          <p>500 cal</p>
        </li>
      </ul> */}
    </div>
  );
}

export default App;

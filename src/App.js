// import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  console.log("render");

  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filterMonsters, setFilteredMonsters] = useState(monsters);
  const [nothing, setNothing] = useState("");
  console.log(monsters);
  console.log(filterMonsters);
  useEffect(() => {
    console.log("useEffect");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setMonsters(users);
      });
  }, []);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  useEffect(() => {
    console.log("newfilterarray event is firing");
    // console.log(monsters);
    const newfilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    // console.log(newfilteredMonsters);
    setFilteredMonsters(newfilteredMonsters);
  }, [monsters, searchField]);

  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchBox
        className={"monsters-search-box"}
        onChangeHander={onSearchChange}
        placeholder={"search monster"}
      />
      <CardList monsters={filterMonsters} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     console.log("constructor");
//     super();

//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     console.log("componentDidMount");
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) => {
//         this.setState(() => {
//           return { monsters: users };
//         });
//       });
//   }

// onSearchChange = (event) => {
//   const searchField = event.target.value.toLocaleLowerCase();
//   this.setState(() => {
//     return { searchField };
//   });
// };
//   render() {
//     console.log("render");
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;
//     const filterMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });
//     return (
//       <div className="App">
//         <h1 className="app-title">Monster Rolodex</h1>
// <SearchBox
//   className={"monsters-search-box"}
//   onChangeHander={onSearchChange}
//   placeholder={"search monster"}
// />
//         <CardList monsters={filterMonsters} />
//       </div>
//     );
//   }
// }

export default App;

import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import './App.css'; 
 
  const App = () => { 
    const [searchField, setsearchField] = useState('');
    const [monsters, setMonsters ] = useState([]);
    const [filteredMonsters, setFilteredMonsters] = useState(monsters);


    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>  setMonsters(users)); 
    }, []);
 
    useEffect(() => {
      const newFilteredMonsters = monsters.filter((monster) => {
        return monster.name.toLocaleLowerCase().includes(searchField);
      });

      setFilteredMonsters(newFilteredMonsters);
    }, [monsters, searchField]);


    const onSearchChange = (event) => {
        const setsearchFieldString =  event.target.value.toLocaleLowerCase(); 
        setsearchField(setsearchFieldString);
      };  
 
    return (
      <div className="App">
        <h1 className='app-title'>Monster Rolodex</h1>
 

        <SearchBox 
        className='search-box'
        onChangeHandler={onSearchChange}
        placeholder='search monsters'
        /> 
        <CardList monsters={filteredMonsters} />
      </div>
    );
  };

  export default App;

//   constructor() {
//      super();


//      this.state = {
//       monsters: [],
//       searchField: '',
//      };
//   }


//   componentDidMount() {
  
//   }



//   render(){

//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;


//     return (
//       <div className="App">
//         <h1 className='app-title'>MOnster Rolodex</h1>

//        <SearchBox 
//         className='search-box'
//         onChangeHandler={onSearchChange}
//         placeholder='search monsters'
//         />
//        <CardList monsters={filteredMonsters}/>
//       </div>
//     );
//   } 

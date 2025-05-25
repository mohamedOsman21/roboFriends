import React, { useState, useEffect }  from 'react';
import CardList from '../components/CardList';
import {robots} from '../components/robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';


function App () {
    const [robot, setrobot] = useState([])
    const [searchField, setSearchField] = useState('')

    // did mount function
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(jfile => setrobot(jfile))
    },[])


    function onSearchChange (event) {
        setSearchField(event.target.value);
    }


    const filterrobot = robot.filter(u => {
            return u.name.toLowerCase().includes(searchField.toLowerCase());
    })

        if(robot.length === 0){
            return (
                <div> 
                    <h1>Loading</h1>
                </div>
            )
        }else {
            return (
                <div className = "tc">
                <h1 className='f1'>RobotFriends</h1>
                <SearchBox  searchChange = {onSearchChange}/> 
                <Scroll>
                    <CardList robots = { filterrobot }/>
                </Scroll>
                </div>
            )
        }
    

}

export default App; 
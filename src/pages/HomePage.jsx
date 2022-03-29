import React from 'react';
import AddContact from '../components/AddContact';
import Search from '../components/Search';
import List from '../components/List';
import { useSelector } from 'react-redux';

const HomePage = () => {
    const statePage = useSelector(state => state.statePage.statePage)
    if (statePage === 'not authorized') {
        return null;
    }
    return (
       <div className="App">
     <AddContact />
     <Search />
     <List />
     </div>
    );
}

export default HomePage;
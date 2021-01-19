import React from "react";
import Categories from './components/categories'
import NewsList from './components/newsList'

const NewPage = ({match}) => {
    
    const category = match.params.category || 'all';
    return(
        <>
        <Categories/>
        <NewsList category={category}/>
        </>
    );
}

export default NewPage;
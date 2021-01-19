import React, {useEffect,useState} from 'react';
import styled from 'styled-components';
import NewsItem from './newsItem';
import axios from 'axios';

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    @media screen and (max-width: 768px){
        width:100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;



const NewsList = ({category}) => {
    const [articles,setArticles] = useState(null);
    const [loading,setLoading] = useState(false);

    useEffect(()=>{
        const fetchData = async () =>{
            setLoading(true);
            try{
                const query = category === 'all'?'':`&category=${category}`;
                const response = await axios.get(`http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=1b7ba487d23e4abd8a8f6366d36af245`,);
                setArticles(response.data.articles);
            }catch(e){
                console.log(e);
            }
            setLoading(false);
        };
        fetchData();},[category]);
        
     if(loading){
         return <NewsListBlock>대기중...</NewsListBlock>
     }   

     if(!articles){
         return null;
     }

     return(
         <NewsListBlock>
             {articles.map(article => (
                 <NewsItem key={article.url} article={article} />
             ))}
         </NewsListBlock>
     );
}

export default NewsList;
 


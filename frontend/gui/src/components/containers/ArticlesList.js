import React, {useState, useEffect} from 'react';
import axios from 'axios'
import ArticlesComponent from '../Articles';


const ArticleListComponent = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/").then(res => {
            setArticles(res.data)
        })

    });
    return <ArticlesComponent data={articles} />;
}
 
export default ArticleListComponent;

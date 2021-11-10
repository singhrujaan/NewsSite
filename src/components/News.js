import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
    const [articles, setarticles] = useState([]);
    const [totalResults, settotalResults] = useState(0);
    const [page, setpage] = useState(1)
    const updateNews = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=249bbd24d7a2415f9b5e53fa38ebe027&page=${page}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setarticles(parsedData.articles);
        settotalResults(parsedData.totalResults);
    };

    useEffect(() => {
        updateNews();
    }, []);
    
    const fetchMoreData=async()=>{
        setpage(page+1)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=249bbd24d7a2415f9b5e53fa38ebe027&page=${page+1}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setarticles(articles.concat(parsedData.articles));
        settotalResults(parsedData.totalResults);
    }

    return (
        <div>
            <h2 className="text-center">Top Headlines</h2>
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length!==totalResults}
                loader={<h4>Loading...</h4>}
            >
            <div className="row">
                {articles.map((element) => {
                    return (
                        <div className="col-md-4" key={element.url}>
                            <NewsItem
                                title={element.title ? element.title : ""}
                                text={element.description}
                                image={element.urlToImage}
                                newsUrl={element.url}
                            />
                        </div>
                    );
                })}
            </div>
            </InfiniteScroll>
        </div>
    );
}

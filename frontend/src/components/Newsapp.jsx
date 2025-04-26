import React, { useEffect, useState } from 'react'
import Cardapp from './Cardapp'
const Newsapp = () => {
    const [search, setSearch] = useState("india")
    const [newsData, setNewsData] = useState(null);
    const API_KEY = "5a3251b673d4477db0236395a706b5c7";
    const getData = async () => {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
        const jsonData = await response.json();
        console.log(jsonData.articles);
        setNewsData(jsonData.articles)
    }

    const handleInput = (e) => {
        console.log(e.target.value);
        setSearch(e.target.value)
    }
    useEffect(() => {
        getData()
    }, [])
    const userInput = (event) => {
        setSearch(event.target.value)
    }

    return (
        <div>
            <nav>
                <div>
                    <h1>Trendy News</h1>
                </div>
                <ul>
                    <a>All News </a>
                    <a>Trending</a>
                </ul>
                <div className='searchBar'>
                    <input type="text" placeholder='Search News' value={search} onChange={handleInput} />
                    <button onClick={getData}>Search News</button>
                </div>
            </nav>
            <div>
                <p className='head'>Stay Updated With Trendy News</p>
            </div>
            <div className='categoryBtn'>
                <button onClick={userInput} value="sports">Sports</button>
                <button onClick={userInput} value="politics">Politics</button>
                <button onClick={userInput} value="entertainment">Entertainment</button>
                <button onClick={userInput} value="health">Health</button>
                <button onClick={userInput} value="fitness">Fitness</button>
            </div>
            <div>
                {newsData ? <Cardapp data={newsData} /> : null}

            </div>
        </div>

    )
}

export default Newsapp
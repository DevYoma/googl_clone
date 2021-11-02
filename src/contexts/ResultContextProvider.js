import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1'

export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState("Elon Musk")

    // videos, /search, /images(tyep)
    const getResults = async (type) => {
        setIsLoading(true)

        const response = await fetch(`${baseUrl}${type}`, {
            method: 'GET', 
            headers: {
                'x-user-agent': 'desktop',
                'x-rapidapi-host': 'google-search3.p.rapidapi.com',
                'x-rapidapi-key': 'ef479af64emshec1f75e0c1c45ddp13ea88jsn1a6bda3664ba'
            }
        })

        const data = await response.json();

        // console.log({type, data});
        if(type.includes('/news')){
             setResults(data.entries);
        }
        else if(type.includes('/images')){
             setResults(data.image_results);
        }else{
             setResults(data.results);
        }

        setIsLoading(false)
    }

    return(
        <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}>
            {children}
        </ResultContext.Provider>
    )

}

// using value from context
export const useResultContext = () => useContext(ResultContext)
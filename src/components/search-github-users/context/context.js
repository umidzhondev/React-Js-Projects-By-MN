import React, {useState, useEffect, Children} from 'react';
import axios from 'axios'; 

const rootUrl = 'https://api.github.com';

const GithubContext = React.createContext();

const GithubProvider = ({children}) => {
    
    const [isLoading, setIsLoading] = useState(false);
    
    
    return (
        <GithubContext.Provider value={isLoading}>
            {children}
        </GithubContext.Provider>
    )
}

export { GithubProvider, GithubContext };
import React, {useState, useEffect, Children} from 'react';
import axios from 'axios'; 
import mockUser from './mockData/mockUser';
import mockRepos from './mockData/mockRepos';
import mockFollowers from './mockData/mockFollowers';

const rootUrl = 'https://api.github.com';

const GithubContext = React.createContext();

const GithubProvider = ({children}) => {
    
    const [isLoading, setIsLoading] = useState(false);
    const [githubUser, setGithubUser] = useState(mockUser);
    const [repos, setRepos] = useState(mockRepos);
    const [followers, setFollowers] = useState(mockFollowers);
    const [requests, setRequests] = useState(0);
    
    const [error, setError] = useState( {show: false, msg:''});
    
    const searchGithubUser = async(user) => {
        toggleError();
        setIsLoading(true);
        const response = await axios(`${rootUrl}/users/${user}`).catch((err) => console.log(err));
        
        if(response) {
            setGithubUser(response.data)
            const {login, followers_url} = response.data;
            
            await Promise.allSettled([
                axios(`${rootUrl}/users/${login}/repos?per_page=100`), 
                axios(`${followers_url}?per_page=100`),
            ])
            .then((results) => {
                const [repos, followers] = results;
                
                const status = 'fulfilled';
                
                if(repos.status === status) {
                    setRepos(repos.value.data);
                } 
                if(followers.status === status) {
                    setFollowers(followers.value.data)
                }
            })
            .catch((err) => console.log(err))
        } else {
            toggleError(true, ' Bunday user mavjud emas ')
        } 
        checkRequests();
        setIsLoading(false)
    }
    
    const checkRequests = () => {
        axios(`${rootUrl}/rate_limit`)
        .then(({data}) => {
            let {
                rate: {remaining},
            } = data;
            setRequests(remaining); 
            if(remaining === 0) {
                toggleError(true, 'kechirasiz limit tugadi')
            }
        })
        .catch((err) => console.log(err));
    }
    
    function toggleError (show = false, msg = '') {
        setError({show, msg});
    } 
    useEffect(checkRequests, []);
    
    useEffect(() => {
        searchGithubUser('umidzhondev');
    }, []);
    
    return (
        <GithubContext.Provider value={{ githubUser, repos, followers, requests, error, searchGithubUser, isLoading }}>
            {children}
        </GithubContext.Provider>
    )
}

export { GithubProvider, GithubContext };
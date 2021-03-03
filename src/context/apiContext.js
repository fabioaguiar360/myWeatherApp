import React, { createContext, useState, useEffect } from 'react';
import weatherApi from '../services/weatherApi';

export const ApiContext = createContext();

const ApiProvider =  ( { children } ) => { 
    const [weatherData, setWeatherData] = useState([]); 
    const [main, setMain] = useState([]);
    const [sys, setSys] = useState([]);
    const [wind, setWind] = useState([]);
    const [theme, setTheme] = useState('dark');

    async function getData(){
        await weatherApi.get().then((data) => {
             setWeatherData(data.data);
             setMain(data.data.main);
             setSys(data.data.sys);
             setWind(data.data.wind);
         });
       }
   
    useEffect(() => {
        getData();
      },[]);

    return (
        <ApiContext.Provider
            value={
                {
                   main,
                   weatherData,
                   sys,
                   theme,
                   wind,
                   setTheme
                }
            }
        >
            { children }
        </ApiContext.Provider>
    );
} 

export default ApiProvider;


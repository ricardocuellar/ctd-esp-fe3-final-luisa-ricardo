
import React from 'react';
import { useEffect, useState } from "react";
import { getDentists } from '../helpers/getDentists';

export default function useFetchDentists() {
    const [dentists, setDentists] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    
    const getDentistsList = async()=>{
        const dentists = await getDentists();
        setDentists(dentists)
        setIsLoading(false);
        console.log("DENTISTAS: ", dentists)
      }

      useEffect( () => {
        getDentistsList();
      }, [])

    return {
        dentists: dentists,
        isLoading
    }
}

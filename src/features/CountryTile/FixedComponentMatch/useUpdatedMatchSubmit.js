import { supabase } from '../../../API/ApiKey';
import { useState } from "react";

export const useUpdatedMatchSubmit = () => {

    const [matchResultsCountry1, setMatchResultsCountry1] = useState('');
    const [matchResultsCountry2, setMatchResultsCountry2] = useState('');
    const [countryId1, setCountryId1] = useState('');
    const [countryId2, setCountryId2] = useState('');

    const handleMatchResultUpdatedSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data, error } = await supabase
                .from('results')
                .insert({country_1: countryId1, country_2: countryId2, points_1: matchResultsCountry1, points_2: matchResultsCountry2})

                window.location.reload();
            
                if (error) throw error;
            
        } catch (error) {
            console.error('Error in update process:', error);
        }

    }

    return{ 
        countryId1, 
        countryId2,
        setCountryId1, 
        setCountryId2, 
        matchResultsCountry1, 
        matchResultsCountry2, 
        setMatchResultsCountry1, 
        setMatchResultsCountry2, 
        handleMatchResultUpdatedSubmit,
    }
}
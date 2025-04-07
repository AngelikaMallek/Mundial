import { supabase } from '../../../API/ApiKey';
import { useState } from "react";

export const useAddedMatchSubmit = () => {

    const [addedMatchResultsCountry1, setAddedMatchResultsCountry1] = useState('');
    const [addedMatchResultsCountry2, setAddedMatchResultsCountry2] = useState('');
    const [addedCountryId1, setAddedCountryId1] = useState('');
    const [addedCountryId2, setAddedCountryId2] = useState('');

    const handleMatchResultAddedSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data, error } = await supabase
                .from('results')
                .insert({country_1: addedCountryId1, country_2: addedCountryId2, points_1: addedMatchResultsCountry1, points_2: addedMatchResultsCountry2})

                window.location.reload();
            
                if (error) throw error;
            
        } catch (error) {
            console.error('Error in update process:', error);
        }

    }

    return{ 
        addedCountryId1, 
        addedCountryId2,
        setAddedCountryId1, 
        setAddedCountryId2, 
        addedMatchResultsCountry1, 
        addedMatchResultsCountry2, 
        setAddedMatchResultsCountry1, 
        setAddedMatchResultsCountry2, 
        handleMatchResultAddedSubmit,
    }
}
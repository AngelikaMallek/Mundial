import { supabase } from '../../../API/ApiKey';
import { useState } from "react";

export const useUpdatedMatchSubmit = () => {

    const [updatedMatchResultsCountry1, setUpdatedMatchResultsCountry1] = useState('');
    const [updatedMatchResultsCountry2, setUpdatedMatchResultsCountry2] = useState('');
    const [updatedCountryId1, setUpdatedCountryId1] = useState('');
    const [updatedCountryId2, setUpdatedCountryId2] = useState('');

    const handleMatchResultUpdatedSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data, error } = await supabase
                .from('results')
                .update({country_1: updatedCountryId1, country_2: updatedCountryId2, points_1: updatedMatchResultsCountry1, points_2: updatedMatchResultsCountry2})
                .eq('country_1', updatedCountryId1)
                .eq('country_2', updatedCountryId2)

                window.location.reload();
            
                if (error) throw error;
            
        } catch (error) {
            console.error('Error in update process:', error);
        }

    }

    return{ 
        updatedCountryId1, 
        updatedCountryId2,
        setUpdatedCountryId1, 
        setUpdatedCountryId2, 
        updatedMatchResultsCountry1,
        updatedMatchResultsCountry2, 
        setUpdatedMatchResultsCountry1, 
        setUpdatedMatchResultsCountry2,
        handleMatchResultUpdatedSubmit,
    }
}
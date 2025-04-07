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
            const { data: data1, error: error1 } = await supabase
                .from('results')
                .select('*')
                .eq('country_1', updatedCountryId1)
                .eq('country_2', updatedCountryId2)
                .single();

            const { data: data2, error: error2 } = await supabase
                .from('results')
                .select('*')
                .eq('country_1', updatedCountryId2)
                .eq('country_2', updatedCountryId1)
                .single();

            if (error1 && error2) {
                throw new Error('Error fetching data from Supabase');
            }

            if (data1) {
                const { data, error } = await supabase
                    .from('results')
                    .update({
                        points_1: updatedMatchResultsCountry1,
                        points_2: updatedMatchResultsCountry2,
                    })
                    .eq('id', data1.id); 

                if (error) throw error;

            } else if (data2) {
                const { data, error } = await supabase
                    .from('results')
                    .update({
                        points_1: updatedMatchResultsCountry2,
                        points_2: updatedMatchResultsCountry1,
                    })
                    .eq('id', data2.id);
                if (error) throw error;
                
            } else {
                console.error('No matching rows found');
            }

            window.location.reload();

        } catch (error) {
            console.error('Error in update process:', error);
        }

    }

    return { 
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

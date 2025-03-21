import supabase from '../../../API/ApiKey';
import { useState } from "react";

export const useUpdatedItem = () => {

    const [newCountry, setNewCountry] = useState('');
    const [newCountryId, setNewCountryId] = useState('');

    const handleUpdatedSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data, error } = await supabase
                .from('teams')
                .update({ country: newCountry })
                .eq('id', newCountryId);

                window.location.reload();

                if (error) throw error;
            
        } catch (error) {
            console.error('Error in update process:', error);
        }

    }

    return{ newCountry, setNewCountry, newCountryId, setNewCountryId, handleUpdatedSubmit}
}
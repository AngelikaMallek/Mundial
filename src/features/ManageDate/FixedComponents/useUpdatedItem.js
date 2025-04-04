import { supabase } from '../../../API/ApiKey';
import { useState } from "react";
import { useApiToSelectCountrys } from "../../../API/useApiToSelectCountrys";

export const useUpdatedItem = () => {

    const [newCountry, setNewCountry] = useState('');
    const [newCountryId, setNewCountryId] = useState('');
    const [validationError, setValidationError] = useState('');
    const { teams } = useApiToSelectCountrys();

    const handleUpdatedSubmit = async (e) => {
        e.preventDefault();

        const validationCountryName = newCountry.replace(/[^a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]/g, '').toLowerCase();
        const teamExists = teams.some((existingTeam) => existingTeam.country.toLowerCase() === validationCountryName.toLowerCase());

        if (teamExists) {
            setValidationError('Drużyna o tej nazwie kraju już istnieje!');
            return;
        }

        if (!newCountry) {
            setValidationError('Wszystkie pola muszą być wypełnione!');
            return;
        }

        try {
            const { data, error } = await supabase
                .from('teams')
                .update({ country: validationCountryName.charAt(0).toUpperCase() + validationCountryName.slice(1) })
                .eq('id', newCountryId);

                window.location.reload();

                if (error) throw error;
            
        } catch (error) {
            console.error('Error in update process:', error);
        }

    }

    return{ newCountry, setNewCountry, newCountryId, setNewCountryId, handleUpdatedSubmit, validationError}
}
import supabase from '../../../API/ApiKey';
import { useState } from "react";

export const useUpdatedItem = () => {

    const [newCountry, setNewCountry] = useState('');

    const handleUpdatedSubmit = async (e) => {
        e.preventDefault();

        console.log(newCountry);
    }

    return{ newCountry, setNewCountry, handleUpdatedSubmit}
}
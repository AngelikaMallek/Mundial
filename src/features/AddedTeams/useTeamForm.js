import { useState, useEffect } from "react";
import supabase from "../../API/ApiKey";

export const useTeamForm = () => {
        
    const [team, setTeam] = useState('');
    const [points, setPoints] = useState('');
    const [country, setCountry] = useState('');
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [validationError, setValidationError] = useState('');
        
    const handleSubmit = async (e) => {
        e.preventDefault();

        setSuccess(false);

        if (!team || !points || !country) {
            setValidationError('Wszystkie pola muszą być wypełnione!');
            return;
        }

        setValidationError('');
        
        const { data, error } = await supabase
            .from('teams')  
            .insert([{
                team,
                points: parseInt(points),
                country,
                },
            ]);
        
            if (error) {
                setError(true);
            } else {
                setTeam('');
                setPoints('');
                setCountry('');
                setSuccess(true);
            }
        };

        return {
            team,
            setTeam,
            points,
            setPoints,
            country,
            setCountry,
            error,
            success,
            handleSubmit,
            validationError,
        };
}
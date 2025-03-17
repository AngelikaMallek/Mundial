import { useState } from "react";
import supabase from "../../API/ApiKey";
import { useApi } from "../../API/useAPI";

export const useTeamForm = () => {
        
    const [team, setTeam] = useState('');
    const [points, setPoints] = useState('');
    const [country, setCountry] = useState('');
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [validationError, setValidationError] = useState('');
    const { teams } = useApi();
        
    const handleSubmit = async (e) => {
        e.preventDefault();

        setSuccess(false);

        if (!team || !points || !country) {
            setValidationError('Wszystkie pola muszą być wypełnione!');
            return;
        }

        const teamExists = teams.some((existingTeam) => existingTeam.country.toLowerCase() === country.toLowerCase());

        if (teamExists) {
            setValidationError('Drużyna o tej nazwie i kraju już istnieje!');
            return;
        }

        const count = teams.filter((countTeam) => countTeam.team.toLowerCase() === team.toLowerCase()).length; 
        
        if (count >=5) {
            setValidationError('Grupa już posiada 5 drużyn!');
            return;
        }

        if(team.length != 1) {
            setValidationError('Grupa musi być jedną literą, np: A!');
            return;
        }

        if(points < 0) {
            setValidationError('Punkty nie mogą być ujemne!');
            return;
        }

        setValidationError('');
        
        const { data, error } = await supabase
            .from('teams')  
            .insert([{
                team: team.toUpperCase(),
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
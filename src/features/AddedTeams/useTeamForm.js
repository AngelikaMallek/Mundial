import { useState, useEffect } from "react";
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

    useEffect(() => {
        if (success) {
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        }
    }, [success]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationCountryName = country.replace(/[^a-zA-Z]/g, '').toLowerCase();
        const teamExists = teams.some((existingTeam) => existingTeam.country.toLowerCase() === validationCountryName.toLowerCase());
        const count = teams.filter((countTeam) => countTeam.team.toLowerCase() === team.toLowerCase()).length;
        const isLetter = (str) => /^[a-zA-Z]$/.test(str);

        setSuccess(false);

        if (!team || !points || !country || validationCountryName === "") {
            setValidationError('Wszystkie pola muszą być wypełnione!');
            return;
        }

        if (teamExists) {
            setValidationError('Drużyna o tej nazwie i kraju już istnieje!');
            return;
        }

        if (count >= 5) {
            setValidationError('Grupa już posiada 5 drużyn!');
            return;
        }

        if (isLetter(team) === false || team.length !== 1) {
            setValidationError('Grupa musi być literą, np: A!');
            return;
        }

        if (points < 0) {
            setValidationError('Punkty nie mogą być ujemne!');
            return;
        }

        setValidationError('');

        const { data, error } = await supabase
            .from('teams')
            .insert([{
                team: team.toUpperCase(),
                points: parseInt(points),
                country: validationCountryName.charAt(0).toUpperCase() + validationCountryName.slice(1),
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
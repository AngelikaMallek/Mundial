import { useState, useEffect } from "react";
import supabase from "./ApiKey";

export const useApi = () => {

	const [teams, setTeams] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

	useEffect(() => {
        const fetchTeams = async () => {
            try {
                const { data, error } = await supabase
                .from('teams')
                .select('*')
                setTeams(data);
                setLoading(false);

                if(error) {
                    setError(true);
                }

            } catch (err) {
                setError(true);
                setLoading(false);
            }
        }
        setLoading(true);
        setTimeout(fetchTeams, 2000);
    },[]);

	return { teams, loading, error };
};
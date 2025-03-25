import { useState, useEffect } from "react";
import supabase from "./ApiKey";

export const useApiToMatch = () => {

	const [matchResults, setMatchResults] = useState(null);

	useEffect(() => {   
        const fetchMatch = async () => {
            try {
                const { data, error } = await supabase
                .from('results')
                .select('*')
                setMatchResults(data)

            } catch (err) {
            }
        }
        setTimeout(fetchMatch, 1);
    },[]);

	return { matchResults };
};
import axios from 'axios';
import { useState, useEffect } from "react";


export const useApi = () => {

    const URL = "api.json";

	const [teams, setTeams] = useState(null);

	useEffect(() => {
        const fetchTeams = async () => {
            try {
                const response = await axios.get(URL)
                setTeams(response.data)
            } catch {
                console.log("Błąd połączenia z API")
            }
    }

        setTimeout(fetchTeams, 2000);
    },[]);

	return { teams };
};
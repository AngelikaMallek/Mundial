import axios from "axios";
import { useState, useEffect } from "react";
import { countryApiUrl } from "./ApiKey";

export const useCountryApi = (countryId) => {
	const [ flags, setFlags ] = useState(null);
    const [ loading, setLoadnig ] = useState(true);
    const [ error, setError ] = useState(false);

	useEffect(() => {
        const fetchCountry = async () => {
            try {
                const response = await axios.get(countryApiUrl)
                setFlags(response.data);
                setLoadnig(false)
            } catch {
                setError(true)
                setLoadnig(false)
            }
    }

        setTimeout(fetchCountry, 1);
    },[countryId]);

	return { flags, loading, error };
};

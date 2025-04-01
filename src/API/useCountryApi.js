import axios from "axios";
import { useState, useEffect } from "react";
import { countryApiUrl } from "./ApiKey";

export const useCountryApi = (countryId) => {
	const [ flags, setFlags ] = useState(null);

	useEffect(() => {
        const fetchCountry = async () => {
            try {
                const response = await axios.get(countryApiUrl)
                setFlags(response.data)
            } catch {
                
            }
    }

        setTimeout(fetchCountry, 2);
    },[countryId]);


	return { flags };
};

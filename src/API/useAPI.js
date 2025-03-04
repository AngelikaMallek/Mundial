import { useState, useEffect } from "react";
import { createClient } from '@supabase/supabase-js'


export const useApi = () => {

    const supabaseUrl = 'https://ewrwniaqrrxkcmizibyu.supabase.co'
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV3cnduaWFxcnJ4a2NtaXppYnl1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDExMDA3OTEsImV4cCI6MjA1NjY3Njc5MX0.kFAl3-lnMEI8DmoPnEWlMiMYKRTprn4fCcSueppE8Go'
    const supabase = createClient(supabaseUrl, supabaseKey)

	const [teams, setTeams] = useState(null);

	useEffect(() => {
        const fetchTeams = async () => {
            try {
                const { data } = await supabase
                .from('teams')
                .select('*')
                setTeams(data);
            } catch {
                console.log("Błąd połączenia z API")
            }
    }

        setTimeout(fetchTeams, 2000);
    },[]);

	return { teams };
};
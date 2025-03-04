import { useState, useEffect } from "react";
import { createClient } from '@supabase/supabase-js'


export const useApi = () => {

    const supabaseUrl = 'https://ewrwniaqrrxkcmizibyu.supabase.co'
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV3cnduaWFxcnJ4a2NtaXppYnl1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEwMTM3NTgsImV4cCI6MjA1NjU4OTc1OH0.8JscCEaTrMU0BtclcnFN_LMOdPYCcRZDC67j99HieM8'
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
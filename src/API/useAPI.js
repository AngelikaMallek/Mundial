import axios from 'axios';
import { useState, useEffect } from "react";
import { createClient } from '@supabase/supabase-js'


export const useApi = () => {

    const supabaseUrl = 'https://ewrwniaqrrxkcmizibyu.supabase.co'
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV3cnduaWFxcnJ4a2NtaXppYnl1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0MTAxMzc1OCwiZXhwIjoyMDU2NTg5NzU4fQ.fFRGvC_HdiILsHq7r8iXMAXtKTERcsfPa5G1PCxQu10'
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
import { createClient } from '@supabase/supabase-js'

    const supabaseUrl = 'https://ewrwniaqrrxkcmizibyu.supabase.co'
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV3cnduaWFxcnJ4a2NtaXppYnl1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDExMDA3OTEsImV4cCI6MjA1NjY3Njc5MX0.kFAl3-lnMEI8DmoPnEWlMiMYKRTprn4fCcSueppE8Go'
    const supabase = createClient(supabaseUrl, supabaseKey)

    export default supabase;

    export const countryApiUrl = "https://restcountries.com/v3.1/all"

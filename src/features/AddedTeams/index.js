import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import Error from "../../common/Error";
import { Container } from "../../common/Container";
import { Title, Form, FormLabel, FormInput, FormButton, Wrapper, InputContainer, FeetbackInform } from './styled';

const AddedTeams = () => {
    const supabaseUrl = 'https://ewrwniaqrrxkcmizibyu.supabase.co';
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV3cnduaWFxcnJ4a2NtaXppYnl1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDExMDA3OTEsImV4cCI6MjA1NjY3Njc5MX0.kFAl3-lnMEI8DmoPnEWlMiMYKRTprn4fCcSueppE8Go';
    const supabase = createClient(supabaseUrl, supabaseKey);
    
    const [team, setTeam] = useState('');
    const [points, setPoints] = useState('');
    const [country, setCountry] = useState('');
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const { data, error } = await supabase
            .from('teams')  
            .insert([{
                    team,
                    points: parseInt(points),
                    country,
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

    if(error) {
        return <Error />
    }

    return (
        <Container>
            <Wrapper>
                <Title>Dodaj swoją drużynę</Title>
                <Form onSubmit={handleSubmit}>
                    <InputContainer>
                        <FormLabel htmlFor="team">Nazwa drużyny:</FormLabel>
                        <FormInput
                            type="text"
                            id="team"
                            value={team}
                            onChange={(e) => setTeam(e.target.value)}
                            required
                        />
                    </InputContainer>
                    <InputContainer>
                        <FormLabel htmlFor="points">Punkty:</FormLabel>
                        <FormInput
                            type="number"
                            id="points"
                            value={points}
                            onChange={(e) => setPoints(e.target.value)}
                            required
                        />
                    </InputContainer>
                    <InputContainer>
                    <FormLabel htmlFor="country">Kraj:</FormLabel>
                        <FormInput
                            type="text"
                            id="country"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            required
                        />
                    </InputContainer>
                    <FormButton type="submit">Dodaj drużynę</FormButton>
                </Form>
                <FeetbackInform>{success ? "Gratulacje! Drużyna została dodana!": ""}</FeetbackInform>
            </Wrapper>
        </Container>
    );
    };

    export default AddedTeams;

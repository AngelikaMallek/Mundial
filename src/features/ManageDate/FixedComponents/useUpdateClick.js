import { useState, useEffect } from "react";
import { DeletedFixed, FixedButton, Parahraph, Form, FormInput, FormInputDisplay } from ".";
import { List, ListInternalItem } from "../styled"
import { useUpdatedItem } from "./useUpdatedItem";

export const useUpdateClick = () => {
    const [showUpdatedConfirm, setShowUpdatedConfirm] = useState(false);
    const [updatedCountry, setUpdatedCountry] = useState(null);
    const [updatedCountryId, setUpdatedCountryId] = useState(null);

    const handleUpdatedClick = (id, team) => {
        setShowUpdatedConfirm(true);
        setUpdatedCountry(team);
        setUpdatedCountryId(id);
    };

    return {
        showUpdatedConfirm,
        setShowUpdatedConfirm,
        updatedCountry,
        setUpdatedCountry,
        updatedCountryId,
        setUpdatedCountryId,
        handleUpdatedClick,
    }
}

export const FixedComponentUpdated = ({id, name, setShowUpdatedConfirm}) => {

    const { newCountry, setNewCountry, newCountryId, setNewCountryId, handleUpdatedSubmit } = useUpdatedItem();

    useEffect(() => {
        setNewCountryId(id);
    }, [id, setNewCountryId]);

    return (
    <DeletedFixed>
        <Parahraph>Podaj nową wersję elementu:<br/> {name}.</Parahraph>
        <Form onSubmit={handleUpdatedSubmit}>
            <FormInput
                type="text"
                id="team"
                value={newCountry}
                onChange={(e) => setNewCountry(e.target.value)}
                required
            />
            <FormInputDisplay 
                type="number"
                id="id"
                value={newCountryId}
                onChange={(e) => {setNewCountryId(e.target.value)}}
            />
            <List>
            <ListInternalItem>
                <FixedButton type="submit">Zapisz</FixedButton>
                <FixedButton onClick={() => setShowUpdatedConfirm(false)}>Anuluj</FixedButton>
            </ListInternalItem>
        </List>
        </Form>
    </DeletedFixed>
)}
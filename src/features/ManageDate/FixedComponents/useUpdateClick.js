import { useState, useEffect } from "react";
import { FixedWrapper, ToggleFixedButton, Parahraph, Form, FormInput, FormInputDisplay, List, ListInternalItem } from "../../../common/FixedComponents";
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

    const { newCountry, setNewCountry, newCountryId, setNewCountryId, handleUpdatedSubmit, validationError } = useUpdatedItem();

    useEffect(() => {
        setNewCountryId(id);
    }, [id, setNewCountryId]);

    return (
    <FixedWrapper>
        <Parahraph>Podaj nową wersję elementu:<br/> {name}.</Parahraph>
        <Form onSubmit={handleUpdatedSubmit}>
            <FormInput
                type="text"
                id="team"
                value={newCountry}
                onChange={(e) => setNewCountry(e.target.value)}
            />
            <FormInputDisplay 
                type="number"
                id="id"
                value={newCountryId}
                onChange={(e) => {setNewCountryId(e.target.value)}}
            />
            <List>
                <ListInternalItem>
                    <ToggleFixedButton type="submit">Zapisz</ToggleFixedButton>
                    <ToggleFixedButton onClick={() => setShowUpdatedConfirm(false)}>Anuluj</ToggleFixedButton>
                </ListInternalItem>
            </List>
            <Parahraph>{validationError}</Parahraph>
        </Form>
    </FixedWrapper>
)}
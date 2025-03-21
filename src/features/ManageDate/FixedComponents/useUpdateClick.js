import { useState } from "react";
import { DeletedFixed, FixedButton, Parahraph } from ".";
import { List, ListInternalItem } from "../styled"

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

export const FixedComponentUpdated = ({id, name, setShowUpdatedConfirm}) => (
    <DeletedFixed>
        <Parahraph>Podaj nową wersję elementu:<br/> {name}.</Parahraph>
        <List>
            <ListInternalItem>
                <FixedButton>Tak</FixedButton>
                <FixedButton onClick={() => setShowUpdatedConfirm(false)}>Nie</FixedButton>
            </ListInternalItem>
        </List>
    </DeletedFixed>
)
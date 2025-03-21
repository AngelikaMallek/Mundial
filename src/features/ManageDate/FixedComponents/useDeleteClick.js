import { useState } from "react";
import { DeletedFixed, FixedButton, Parahraph } from "../FixedComponents";
import { List, ListInternalItem } from "../styled";
import { deleteItem } from "./useDeleteItem";

export const useDeleteClick = () => {
    const [showConfirm, setShowConfirm] = useState(false);
    const [deletedCountry, setDeletedCountry] = useState(null);
    const [deletedCountryId, setDeletedCountryId] = useState(null);

    const handleDeleteClick = (id, team) => {
        setShowConfirm(true);
        setDeletedCountry(team);
        setDeletedCountryId(id);
    };

    return {
        showConfirm,
        setShowConfirm,
        deletedCountry,
        setDeletedCountry,
        deletedCountryId,
        setDeletedCountryId,
        handleDeleteClick,
    }
}

export const FixedComponentDeleted = ({id, name, setShowConfirm}) => (
    <DeletedFixed>
        <Parahraph>Czy napewno chcesz usunąć kraj:<br/> {name}?</Parahraph>
        <List>
            <ListInternalItem>
                <FixedButton onClick={() => deleteItem(id)}>Tak</FixedButton>
                <FixedButton onClick={() => setShowConfirm(false)}>Nie</FixedButton>
            </ListInternalItem>
        </List>
    </DeletedFixed>
)

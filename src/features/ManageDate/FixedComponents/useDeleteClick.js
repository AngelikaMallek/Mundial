import { useState } from "react";
import { FixedWrapper, ToggleFixedButton, Parahraph, List, ListInternalItem } from "../../../common/FixedComponents";
import { useDeletedItem } from "./useDeleteItem";

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

export const FixedComponentDeleted = ({id, name, setShowConfirm}) => {
 
    const {deleteItem, validationError} = useDeletedItem();

    return (
        <FixedWrapper>
            <Parahraph>Czy napewno chcesz usunąć kraj:<br/> {name}?</Parahraph>
            <List>
                <ListInternalItem>
                    <ToggleFixedButton onClick={() => deleteItem(id)}>Tak</ToggleFixedButton>
                    <ToggleFixedButton onClick={() => setShowConfirm(false)}>Nie</ToggleFixedButton>
                </ListInternalItem>
            </List>
            <Parahraph>{validationError}</Parahraph>
        </FixedWrapper>
    )
}

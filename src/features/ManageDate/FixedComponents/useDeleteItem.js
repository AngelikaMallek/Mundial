import { useState } from 'react';
import { supabase } from '../../../API/ApiKey';


export const useDeletedItem = () => {

    const [ validationError, setValidationError ] = useState("");

    const deleteItem = async (itemId) => {

        try {
            const { error } = await supabase
                .from('teams')
                .delete()
                .eq('id', itemId);

                if (error) {
                    setValidationError("Nie można usunąć drużyny, która już posiada rozegrane mecze!")
                } else {
                    window.location.reload();
                }
                
        } catch (error) {
            console.error('Error in delete process:', error);
        }
    }

    return { deleteItem, validationError }
}

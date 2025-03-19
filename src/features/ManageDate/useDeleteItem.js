import supabase from '../../API/ApiKey';

export const deleteItem = async (itemId) => {

    try {
        const { error } = await supabase
            .from('teams')
            .delete()
            .eq('id', itemId);

            window.location.reload();
        if (error) throw error;
    } catch {

    }
}

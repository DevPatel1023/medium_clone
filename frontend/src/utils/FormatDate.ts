export const formatDate = (dateString : string) : string => {
    if (!dateString) return "Unknown date";
    const date = new Date(dateString);
    return date.toLocaleDateString('en-Us',{
        month : 'short',
        day : 'numeric'
    });
}
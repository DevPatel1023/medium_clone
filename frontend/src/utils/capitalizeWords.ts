export function capitalizeWords(content : string) : string{
    return content.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
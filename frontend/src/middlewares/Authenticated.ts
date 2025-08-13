export const getAccessToken = (): string | null => {
    const token = localStorage.getItem("token");
    
    if (!token) return null;

    return token; // Return only the actual token
};

export const isAuthenticated = (): boolean => {
    return getAccessToken() !== null;
};

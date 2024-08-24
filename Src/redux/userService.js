export const fetchUsers = async (page, limit) => {
    try {
        const response = await fetch(`https://randomuser.me/api/?results=${limit}&page=${page}`);
        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error; 
    }
};

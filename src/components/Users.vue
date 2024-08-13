<template>
    <div>
        <h1>Users</h1>
        <ul v-if="users.length">
            <li v-for="user in users" :key="user.id">{{ user.name }} - {{ user.email }}</li>
        </ul>
        <p v-else>No users found.</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            users: []
        };
    },
    async created() {
        try {
            // Retrieve the token from localStorage
            const idToken = localStorage.getItem('idToken');

            if (!idToken) {
                console.error('No token found in localStorage');
                return;
            }

            const response = await fetch('http://localhost:3000/users', {
                headers: {
                    'Authorization': `${idToken}`
                }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch users');
            }

            const data = await response.json();
            this.users = data.users;
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    }
};
</script>
class Github {
    constructor() {
        this.client_id = 'c3db6dc4284e37599626';
        this.client_secret = 'dd5fd669012d0475914d62ef2508e6947a43d942';
        this.repos_count = 5;
        this.repos_sort = 'created : asc'; 
    }
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}? client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profileData = await profileResponse.json();
        const reposData = await repoResponse.json();

        return {
            profileData,
            reposData
        }
    }
}
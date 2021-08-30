export class User {
    username: string;
    profile_pic: string;
    repos: number;
    followers: number;
    following: number;

    constructor(username: string, profile_pic: string, repos: number, followers: number, following: number) {
        this.username = username;
        this.profile_pic = profile_pic;
        this.repos = repos;
        this.followers = followers;
        this.following = following;
    }
}

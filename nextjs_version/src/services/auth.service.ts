import { ApiService } from "./api.service";

export default class AuthService {
    private readonly apiService: ApiService;
    constructor() {
        this.apiService = new ApiService(true);
    }
    async logout() {
        await this.apiService.get("/auth/logout");
    }
}
import { ApiResponse, ApiService } from "./api.service";

export default class AuthService {
    private readonly apiService: ApiService;
    constructor() {
        this.apiService = new ApiService(true);
    }
    async logout() {
        await this.apiService.get("/auth/logout");
    }
    async login(username: string, password: string) {
        const response: ApiResponse<ApiResponse<void>> = await this.apiService.post("/auth/login", { username, password });
        return response;
    }
}
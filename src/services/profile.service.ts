import { User } from "@/types/user.types";
import { ApiService } from "./api.service";

import { ApiResponse } from "./api.service";

export default class ProfileService {
    private readonly apiService: ApiService;
    constructor() {
        this.apiService = new ApiService(true);
    }
    async getProfile() {
        const response: ApiResponse<User> = await this.apiService.get("/profile");
        return response;
    }
}
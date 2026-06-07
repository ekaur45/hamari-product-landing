import { User } from "@/old/types/user.types";
import { ApiService } from "./api.service";

import { ApiResponse } from "./api.service";
import { Subject } from "@/old/types/teacher.types";

export default class PublicService {
    private readonly apiService: ApiService;
    constructor() {
        this.apiService = new ApiService(false);
    }
    async getSubjects() {
        const response: ApiResponse<Subject[]> = await this.apiService.get("/subjects");
        return response;
    }
}
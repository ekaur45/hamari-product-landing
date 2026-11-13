import { Teacher } from "@/types/teacher.types";
import { ApiResponse, ApiService } from "./api.service";

export default class TeacherService {
    private readonly apiService: ApiService;
    constructor() {
        this.apiService = new ApiService(false);
    }

    async getTeachers(search: URLSearchParams, page: number = 1, limit: number = 10) {
        console.log((Object.fromEntries(search.entries())));
        return await this.apiService.getPaginated<Teacher>(`/teacher`, page, limit, { params: { ...(Object.fromEntries(search.entries()) as unknown as Record<string, string>) } });
    }
    async getFeaturedTeachers() {
        return await this.apiService.getPaginated<Teacher>(`/teacher/featured`);
    }
    async getTeacherById(id: string): Promise<ApiResponse<Teacher>> {
        return await this.apiService.get<Teacher>(`/teacher/${id}`);
    }
    
}
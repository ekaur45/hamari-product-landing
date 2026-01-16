import { ApiService } from "./api.service";

export default class TeacherService {
    private readonly apiService: ApiService;
    constructor() {
        this.apiService = new ApiService();
    }

    async getTeachers(search: string, page: number = 1, limit: number = 10) {
        return await this.apiService.getPaginated<any>(`teacher`, page, limit, { params: { search } });
    }
    async getFeaturedTeachers() {
        return await this.apiService.getPaginated<any>(`teacher/featured`);
    }
}
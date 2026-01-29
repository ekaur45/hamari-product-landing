import { ApiService } from "./api.service";

import { ApiResponse } from "./api.service";

export default class ChatService {
    private readonly apiService: ApiService;
    constructor() {
        this.apiService = new ApiService(true);
    }
    async sendMessage(message: string, teacherId: string) {
        const response: ApiResponse<void> = await this.apiService.post("/chats/initiate", {
            message: message,
            receiverId: teacherId
        });
        return response;
    }
}
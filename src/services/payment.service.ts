import { CreatePaymentIntentData, CreatePaymentIntentResponse } from "@/types/payment.types";
import { ApiResponse, ApiService } from "./api.service";

export default class PaymentService {
    private readonly apiService: ApiService;
    constructor() {
        this.apiService = new ApiService(true);
    }
    async createPaymentIntent(paymentData: CreatePaymentIntentData) {
        const response: ApiResponse<CreatePaymentIntentResponse> = await this.apiService.post("/payments/intent", paymentData);
        return response;
    }
}
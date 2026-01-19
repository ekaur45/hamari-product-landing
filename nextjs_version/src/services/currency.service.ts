import { ICurrency } from "@/types/currency";
import { ApiService } from "./api.service";

export default class CurrencyService {
    private readonly apiService: ApiService;
    constructor() {
        this.apiService = new ApiService(false);
    }
    async getCurrencies(): Promise<ICurrency[]> {
        const response = await this.apiService.get<ICurrency[]>("/currencies/list");
        return response.data;
    }
}
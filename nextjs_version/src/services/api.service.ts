import axios, {
    AxiosInstance,
    AxiosRequestConfig,
    AxiosError,
    AxiosResponse,
} from 'axios';

/* =======================
   Types
======================= */

export interface ApiConfig {
    baseUrl: string;
    timeout: number;
    retryAttempts: number;
}

export interface ApiResponse<T> {
    statusCode: number;
    message: string;
    data: T;
    error?: any;
}

export interface ApiErrorResponse {
    statusCode: number;
    message: string;
    data: null;
    error: {
        code: string;
        details: string;
        timestamp: string;
        path: string;
    };
}
export interface Pagination {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
}
export interface PaginatedApiResponse<T = any> {
    data: T[];
    pagination: Pagination;
}
export interface RequestOptions {
    headers?: Record<string, string>;
    params?: Record<string, any>;
    responseType?: AxiosRequestConfig['responseType'];
}

/* =======================
   Api Service
======================= */

export class ApiService {
    private axiosInstance: AxiosInstance;
    private loading = false;
    private isPrivate: boolean = false;
    private config: ApiConfig = {
        baseUrl: this.isPrivate ? process.env.NEXT_PUBLIC_PRIVATE_API_URL || '' : process.env.NEXT_PUBLIC_API_URL || '',
        timeout: 30000,
        retryAttempts: 3,
    };

    constructor(isPrivate: boolean = false) {
        this.isPrivate = isPrivate;
        this.axiosInstance = axios.create({
            baseURL: this.config.baseUrl,
            timeout: this.config.timeout,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        });
    }    

    /* =======================
       Loading State
    ======================= */

    private setLoading(value: boolean) {
        this.loading = value;
    }

    isLoading(): boolean {
        return this.loading;
    }

    /* =======================
       Error Handling
    ======================= */

    private handleError(error: AxiosError): never {
        const response = error.response;

        const apiError: ApiErrorResponse = {
            statusCode: response?.status || 0,
            message:
                (response?.data as any)?.message ||
                error.message ||
                'Unknown error',
            data: null,
            error: {
                code:
                    (response?.data as any)?.code ||
                    `HTTP_${response?.status || 'ERROR'}`,
                details: error.message,
                timestamp: new Date().toISOString(),
                path: response?.config?.url || '',
            },
        };

        throw apiError;
    }

    private getUrl(endpoint: string) {
        return this.isPrivate ? `${process.env.NEXT_PUBLIC_PRIVATE_API_URL}${endpoint}` : `${process.env.NEXT_PUBLIC_API_URL}${endpoint}`;
    }

    /* =======================
       Generic Request
    ======================= */

    private async request<T>(
        method: AxiosRequestConfig['method'],
        endpoint: string,
        body?: any,
        options?: RequestOptions
    ): Promise<ApiResponse<T>> {
        this.setLoading(true);

        try {
            const response: AxiosResponse<ApiResponse<T>> =
                await this.axiosInstance.request({
                    method,
                    url: this.getUrl(endpoint),
                    data: body,
                    params: options?.params,
                    headers: options?.headers,
                    responseType: options?.responseType,
                    withCredentials: true,
                });

            return response.data;
        } catch (error) {
            this.handleError(error as AxiosError);
        } finally {
            this.setLoading(false);
        }
    }

    /* =======================
       HTTP Methods
    ======================= */

    get<T>(endpoint: string, options?: RequestOptions) {
        return this.request<T>('get', endpoint, undefined, options);
    }

    post<T>(endpoint: string, body?: any, options?: RequestOptions) {
        return this.request<T>('post', endpoint, body, options);
    }

    put<T>(endpoint: string, body?: any, options?: RequestOptions) {
        return this.request<T>('put', endpoint, body, options);
    }

    patch<T>(endpoint: string, body?: any, options?: RequestOptions) {
        return this.request<T>('patch', endpoint, body, options);
    }

    delete<T>(endpoint: string, options?: RequestOptions) {
        return this.request<T>('delete', endpoint, undefined, options);
    }

    /* =======================
       Pagination
    ======================= */

    async getPaginated<T>(
        endpoint: string,
        page = 1,
        limit = 10,
        options?: RequestOptions
    ): Promise<PaginatedApiResponse<T>> {
        const response = await this.get<PaginatedApiResponse<T>>(endpoint, {
            ...options,
            params: {
                ...(options?.params || {}),
                page,
                limit,
            },
        });
        return response.data;
    }

    /* =======================
       File Upload
    ======================= */

    uploadFile<T>(
        endpoint: string,
        file: File,
        additionalData?: Record<string, any>
    ): Promise<ApiResponse<T>> {
        const formData = new FormData();
        formData.append('file', file);

        if (additionalData) {
            Object.entries(additionalData).forEach(([key, value]) =>
                formData.append(key, String(value))
            );
        }

        return this.post<T>(endpoint, formData, {
            headers: {
                Accept: 'application/json',
            },
        });
    }

    /* =======================
       File Download
    ======================= */

    async downloadFile(endpoint: string, options?: RequestOptions): Promise<Blob> {
        this.setLoading(true);
        try {
            const response = await this.axiosInstance.get(endpoint, {
                params: options?.params,
                responseType: 'blob',
            });
            return response.data;
        } catch (error) {
            this.handleError(error as AxiosError);
        } finally {
            this.setLoading(false);
        }
    }

    /* =======================
       Helpers
    ======================= */

    isSuccessResponse<T>(response: ApiResponse<T>): boolean {
        return response.statusCode >= 200 && response.statusCode < 300;
    }

    extractData<T>(response: ApiResponse<T>): T {
        return response.data;
    }

    extractError(response: ApiResponse<any>) {
        return response.error;
    }

    updateConfig(newConfig: Partial<ApiConfig>) {
        Object.assign(this.config, newConfig);
    }

    getConfig(): ApiConfig {
        return { ...this.config };
    }
}

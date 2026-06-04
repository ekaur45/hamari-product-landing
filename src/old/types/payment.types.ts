export interface CreatePaymentIntentData {
    paymentMethod: string;
    selectedDate: string;
    slotId: string;
    subjectId: string;
    teacherId: string;
    totalAmount: number;
    couponCode: string;
}
export interface CreatePaymentIntentResponse {
    url: string;
}
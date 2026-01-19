"use client";
import PaymentService from "@/services/payment.service";
import { CreatePaymentIntentData } from "@/types/payment.types";
import { Teacher, TeacherSubject } from "@/types/teacher.types";
import { useState, FormEvent } from "react";

interface CheckoutFormProps {
    teacher: Teacher;
    date: string;
    subject: string;
    subjectName: string;
    availabilityId: string;
    availabilityEndTime: string;
    availabilityStartTime: string;
}

function calculateDuration(startTime: string, endTime: string): number {
    const [startHours, startMinutes] = startTime.split(':').map(Number);
    const [endHours, endMinutes] = endTime.split(':').map(Number);
    
    const startTotalMinutes = startHours * 60 + startMinutes;
    const endTotalMinutes = endHours * 60 + endMinutes;
    
    const durationMinutes = endTotalMinutes - startTotalMinutes;
    return durationMinutes / 60; // Return in hours
}
  const paymentService: PaymentService = new PaymentService();
export default function CheckoutForm({ 
    teacher, 
    subject, 
    date,
    availabilityId,
    availabilityEndTime, 
    availabilityStartTime 
}: CheckoutFormProps) {
    const [couponCode, setCouponCode] = useState<string>("");
    const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
    const [couponDiscount, setCouponDiscount] = useState<number>(0);
    const [isApplying, setIsApplying] = useState<boolean>(false);

    const selectedSubject = teacher.teacherSubjects.find(
        (_subject: TeacherSubject) => _subject.subject.id === subject
    );
    const hourlyRate = selectedSubject?.hourlyRate || 0.0;
    const duration = calculateDuration(availabilityStartTime, availabilityEndTime);
    const subtotal = hourlyRate * duration;
    const discount = couponDiscount > 0 ? (subtotal * couponDiscount) / 100 : 0;
    const total = subtotal - discount;
    const [isCreatingPaymentIntent, setIsCreatingPaymentIntent] = useState<boolean>(false);

    const handleCouponSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!couponCode.trim()) return;

        setIsApplying(true);
        // TODO: Implement actual coupon validation API call
        // Simulate API call
        setTimeout(() => {
            // Mock coupon validation
            if (couponCode.toUpperCase() === "SAVE10") {
                setAppliedCoupon(couponCode.toUpperCase());
                setCouponDiscount(10);
            } else if (couponCode.toUpperCase() === "SAVE20") {
                setAppliedCoupon(couponCode.toUpperCase());
                setCouponDiscount(20);
            } else {
                alert("Invalid coupon code");
            }
            setIsApplying(false);
        }, 500);
    };

    const handleRemoveCoupon = () => {
        setAppliedCoupon(null);
        setCouponDiscount(0);
        setCouponCode("");
    };

    const handleProceedToPayment = async () => {
        setIsCreatingPaymentIntent(true);
        // TODO: Implement payment processing
        console.log("Proceeding to payment with:", {
            teacherId: teacher.id,
            subject,
            total,
            coupon: appliedCoupon
        });
        const d: CreatePaymentIntentData = {
            paymentMethod:"card",
            selectedDate:date,
            slotId:availabilityId,
            subjectId:subject,
            teacherId:teacher.id,
            totalAmount:total,
            couponCode:appliedCoupon || "",
        }
        const response = await paymentService.createPaymentIntent(d);
        if(response.statusCode === 200){
            setIsCreatingPaymentIntent(false);
            const url = response.data.url;
            window.location.href = url;
        } else {
            setIsCreatingPaymentIntent(false);
            alert("Failed to create payment intent");
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sticky top-24 h-fit">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Booking Summary</h1>

            {/* Price Breakdown */}
            <div className="mb-6 space-y-3 pb-6 border-b border-gray-200">
                <div className="flex justify-between items-center">
                    <span className="text-gray-600">Hourly Rate</span>
                    <span className="font-semibold text-gray-900">${hourlyRate}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-semibold text-gray-900">
                        {duration} {duration === 1 ? 'hour' : 'hours'}
                    </span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold text-gray-900">${subtotal}</span>
                </div>
                {appliedCoupon && (
                    <div className="flex justify-between items-center text-green-600">
                        <span className="flex items-center gap-2">
                            <em className="fas fa-tag"></em>
                            Discount ({appliedCoupon} - {couponDiscount}%)
                        </span>
                        <span className="font-semibold">-${discount}</span>
                    </div>
                )}
            </div>

            {/* Total */}
            <div className="mb-6 pb-6 border-b border-gray-200">
                <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">Total</span>
                    <span className="text-2xl font-bold text-primary">${total?.toFixed(2)}</span>
                </div>
            </div>

            {/* Coupon Code Section */}
            <div className="mb-6">
                {appliedCoupon ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <em className="fas fa-check-circle text-green-600"></em>
                            <span className="text-sm font-semibold text-green-800">
                                Coupon {appliedCoupon} applied ({couponDiscount}% off)
                            </span>
                        </div>
                        <button
                            type="button"
                            onClick={handleRemoveCoupon}
                            className="text-green-600 hover:text-green-800 text-sm font-semibold"
                        >
                            Remove
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleCouponSubmit} className="space-y-3">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="coupon" className="text-sm font-semibold text-gray-700">
                                Have a coupon code?
                            </label>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    id="coupon"
                                    name="coupon"
                                    value={couponCode}
                                    onChange={(e) => setCouponCode(e.target.value)}
                                    placeholder="Enter coupon code"
                                    className="flex-1 h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                                />
                                <button
                                    type="submit"
                                    disabled={isApplying || !couponCode.trim()}
                                    className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                                >
                                    {isApplying ? (
                                        <em className="fas fa-spinner fa-spin"></em>
                                    ) : (
                                        "Apply"
                                    )}
                                </button>
                            </div>
                        </div>
                    </form>
                )}
            </div>

            {/* Proceed to Payment Button */}
            <button
                type="button"
                onClick={handleProceedToPayment}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 hover:shadow-lg 
                transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isCreatingPaymentIntent}
            >
                <em className="fas fa-lock"></em>
                Proceed to Payment
                {isCreatingPaymentIntent && (
                    <em className="fas fa-spinner fa-spin"></em>
                )}
            </button>

            {/* Security Note */}
            <p className="mt-4 text-xs text-center text-gray-500 flex items-center justify-center gap-1">
                <em className="fas fa-shield-alt text-primary"></em>
                Secure payment processing
            </p>
        </div>
    );
}
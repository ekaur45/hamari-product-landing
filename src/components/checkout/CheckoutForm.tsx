"use client"
import PaymentService from "@/services/payment.service";
import { CreatePaymentIntentData } from "@/types/payment.types";
import { Teacher, TeacherSubject } from "@/types/teacher.types";
import { exchangeRate } from "@/utils/misc.util";
import { ArrowRight, Loader } from "lucide-react";
import { FormEvent, useState } from "react";
import UiModal from "../ui/UiModal";
import Login from "../auth/Login";

interface CheckoutFormProps {
    teacher: Teacher;
    date: string;
    subject: string;
    subjectName: string;
    availabilityId: string;
    availabilityEndTime: string;
    availabilityStartTime: string;
}

const paymentService: PaymentService = new PaymentService();
export default function CheckoutForm({
    teacher,
    subject,
    subjectName,
    date,
    availabilityId,
    availabilityEndTime,
    availabilityStartTime
}: CheckoutFormProps) {
    const [couponCode, setCouponCode] = useState<string>("");
    const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
    const [couponDiscount, setCouponDiscount] = useState<number>(0);
    const [isApplying, setIsApplying] = useState<boolean>(false);
    const [isCreatingPaymentIntent, setIsCreatingPaymentIntent] = useState<boolean>(false);
    const [isSigninModalVisible, setIsSigninModalVisible] = useState<boolean>(true);


    const selectedSubject = teacher.teacherSubjects.find(
        (_subject: TeacherSubject) => _subject.subject.id === subject
    );
    const hourlyRate = Number(exchangeRate(selectedSubject?.hourlyRate || 0)) || 0.0;
    const subtotal = hourlyRate;// * duration;
    const discount = couponDiscount > 0 ? (subtotal * couponDiscount) / 100 : 0;
    const total = subtotal - discount;


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
            paymentMethod: "card",
            selectedDate: date,
            slotId: availabilityId,
            subjectId: subject,
            teacherId: teacher.id,
            totalAmount: total,
            couponCode: appliedCoupon || "",
        }
        const response = await paymentService.createPaymentIntent(d);
        setIsCreatingPaymentIntent(false);
        if (response.statusCode === 200) {
            const url = response.data.url;
            window.location.href = url;
        } else if (response.statusCode === 401) {
            setIsSigninModalVisible(true);
        } else {

            setIsCreatingPaymentIntent(false);
            alert("Failed to create payment intent");
        }
    };

    return (
        <>
            <UiModal

                open={isSigninModalVisible}
                onClose={() => setIsSigninModalVisible(false)}
                title="Sign In"
                onConfirm={() => { }}
            >
                <Login />
            </UiModal>
            <div className="order-summary">
                <h3 className="font-['Sora',sans-serif] font-bold text-base mb-5">Order Summary</h3>
                <div className="order-line"><span>Session Type</span><span>
                    {subjectName}
                </span></div>
                <div className="order-line"><span>Date</span><span>
                    {date}
                </span></div>
                <div className="order-line"><span>Time</span><span>
                    {availabilityStartTime} - {availabilityEndTime}
                </span></div>
                <div className="order-line"><span>Session fee</span><span>£{teacher.hourlyRate}</span></div>
                <div className="order-line"><span>Platform fee</span><span>£{teacher.hourlyRate * 0.10}</span></div>
                {appliedCoupon ? (
                    <div className="order-line"><span>Promo code</span><span className="text-[var(--teal-l)]">Discount ({appliedCoupon} - {couponDiscount}%)</span> <button
                        type="button"
                        onClick={handleRemoveCoupon}
                        className="text-green-600 hover:text-green-800 text-sm font-semibold"
                    >
                        Remove
                    </button></div>) : (
                    <form onSubmit={handleCouponSubmit} className="space-y-3">
                        <div className="flex flex-col gap-2">
                            {/* <label htmlFor="coupon" className="text-sm font-semibold text-gray-700">
                        Have a coupon code?
                    </label> */}
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    id="coupon"
                                    name="coupon"
                                    value={couponCode}
                                    onChange={(e) => setCouponCode(e.target.value)}
                                    placeholder="Enter coupon code"
                                    className="fi !m-0"
                                />
                                <button
                                    type="submit"
                                    disabled={isApplying || !couponCode.trim()}
                                    className="btn btn-glow btn-sm p-0"
                                >
                                    {isApplying ? (
                                        <Loader className="animate-spin" />
                                    ) : (
                                        "Apply"
                                    )}
                                </button>
                            </div>
                        </div>
                    </form>
                )}
                <div className="order-total"><span>Total Due</span><span>£{(teacher.hourlyRate) + (teacher.hourlyRate * 0.10)}</span></div>
                <div className="btn btn-glow w-full justify-center mt-2">Pay £{(teacher.hourlyRate) + (teacher.hourlyRate * 0.10)} <ArrowRight /></div>
                {/* <div className="trust-row">
            <div className="trust-item">🔒 <span>256-bit SSL</span></div>
            <div className="trust-item">💳 <span>Secure payment</span></div>
            <div className="trust-item">🔄 <span>Money-back policy</span></div>
        </div> */}
            </div>
        </>
    )
}
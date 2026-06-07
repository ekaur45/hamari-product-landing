"use client"


import { ArrowRight, Eye, EyeClosed, EyeOff, Loader2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react"
import { FaGoogle, FaApple } from "react-icons/fa";
import UiCheckbox from "../ui/UiCheckbox";

import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema, RegisterFormData } from './schemas/register.schema';
import UiSelectGroup from "../ui/UiSelectGroup";
import UiConfirmationModal from "../ui/UiConfirmationModal";


export default function Register() {

    const [selectedRole, setSelectedRole] = useState<("student" | "teacher" | "parent")>("student");
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showRepeatPassword, setShowRepeatPassword] = useState<boolean>(false);
    const [checked, setChecked] = useState<boolean>(false);
    const {
        control,
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            role: "student"
        }
    });
    const [open, setOpen] = useState(false);
    const onSubmit = async (data: RegisterFormData) => {
        await new Promise(res => {
            setTimeout(() => {
                res("")
            }, 3000);
        })
    };
    return (<>
        <UiConfirmationModal
            open={open}
            title="Delete Account"
            message="This action cannot be undone. Are you sure you want to continue?"
            destructive
            onCancel={() => setOpen(false)}
            onConfirm={() => {
                console.log("confirmed");
                setOpen(false);
            }}
        />
        <div className="auth-wrap">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="auth-box">
                    <div className="auth-logo">
                        <div className="logo-mark mx-auto mb-3">
                            <svg viewBox="0 0 24 24"
                                className="w-[22px] h-[22px] stroke-white fill-none stroke-2 stroke-linecap-round stroke-linejoin-round">
                                <path d="M12 3L2 8l10 5 10-5-10-5zM2 16l10 5 10-5M2 12l10 5 10-5">
                                </path>
                            </svg>
                        </div>
                    </div>
                    <h2 className="auth-title">Create Your Account</h2>
                    <p className="auth-sub">Join EduConnect free — no credit card required</p>
                    <Controller
                        name="role"
                        control={control}
                        render={({ field }) => (
                            <UiSelectGroup
                                value={field.value}
                                onChange={field.onChange}
                                className="mb-3"
                                options={[
                                    { label: "Student", value: "student" },
                                    { label: "Teacher", value: "teacher" },
                                    { label: "Parent", value: "parent" },
                                ]}
                            />
                        )}
                    />
                    {/* <div className="role-tabs">
                        <div className={`role-tab ${selectedRole === "student" ? 'act' : ''}`} onClick={() => setSelectedRole("student")} >Student</div>
                        <div className={`role-tab ${selectedRole === "teacher" ? 'act' : ''}`} onClick={() => setSelectedRole("teacher")} >Teacher</div>
                        <div className={`role-tab ${selectedRole === "parent" ? 'act' : ''}`} onClick={() => setSelectedRole("parent")} >Parent</div>
                    </div> */}
                    <button className="social-btn">
                        <FaGoogle size={18} />
                        Continue with Google
                    </button>
                    <button className="social-btn">
                        <FaApple size={24} />
                        Continue with Apple</button>
                    <div className="auth-or">
                        or sign up with email
                    </div>

                    <div className="form-row mb-3" >
                        <div>
                            <input className="fi mb-0" type="text" placeholder="First Name"
                                {...register('firstName')}
                            />
                            <p className="mt-1 text-sm text-[var(--red)]">
                                {errors.firstName?.message}
                            </p>
                        </div>
                        <div>
                            <input className="fi mb-0" type="text" placeholder="Last Name"
                                {...register('lastName')}
                            />
                            <p className="mt-1 text-sm text-[var(--red)]">
                                {errors.lastName?.message}
                            </p>
                        </div>
                    </div>
                    <input className="fi" type="email" placeholder="Email Address"
                        {...register('email')}
                    />
                    <p className="mt-1 text-sm text-[var(--red)]">
                        {errors.email?.message}
                    </p>
                    <div className="relative">
                        <input className="fi pr-10" type={showPassword ? "text" : "password"} placeholder="Create Password (8+ chars)"
                            {...register('password')}
                        />
                        <button type="button" className="absolute top-0 bottom-0 right-3 z-1 text-[var(--teal-l)]" onClick={() => setShowPassword(!showPassword)}
                            tabIndex={-1}
                        >
                            {showPassword ? <EyeOff /> : <Eye />}
                        </button>
                    </div>
                    <p className="mt-1 text-sm text-[var(--red)]">
                        {errors.password?.message}
                    </p>
                    <div className="relative">
                        <input className="fi pr-10" type={showRepeatPassword ? "text" : "password"} placeholder="Confirm Password"
                            {...register('repeatPassword')}
                        />
                        <button type="button" className="absolute top-0 bottom-0 right-3 z-1 text-[var(--teal-l)]" onClick={() => setShowRepeatPassword(!showRepeatPassword)}
                            tabIndex={-1}
                        >
                            {showRepeatPassword ? <EyeOff /> : <Eye />}
                        </button>
                    </div>
                    <p className="mt-1 text-sm text-[var(--red)]">
                        {errors.repeatPassword?.message}
                    </p>


                    <div className="flex align-start gap-[10px] mb-[20px] flex-col mt-4" >
                        <Controller
                            name="acceptTerms"
                            control={control}
                            render={({ field }) => (
                                <UiCheckbox
                                    checked={field.value}
                                    onChange={(e) => field.onChange(e.target.checked)}
                                    description={<span className="text-[0.82rem] text-[var(--text-m)]">I agree to the
                                        <a className="text-[var(--teal-l)] cursor-pointer ml-1">Terms of Service</a> and
                                        <a className="text-[var(--teal-l)] cursor-pointer ml-1">Privacy Policy</a>
                                    </span>}
                                />
                            )}
                        />
                        <p className="text-sm text-[var(--red)]">
                            {errors.acceptTerms?.message}
                        </p>
                    </div>
                    <button type="submit" disabled={isSubmitting} className="btn btn-glow w-full justify-center">Create Free Account
                        {isSubmitting ? <Loader2 className="animate-spin" /> : <ArrowRight />}

                    </button>
                    <div className="auth-switch">Already have an account?
                        <Link href={'/login'} className="ml-2">Log in</Link>
                    </div>
                </div>
            </form>
        </div>
    </>)
}
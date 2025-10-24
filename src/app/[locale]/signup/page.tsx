'use client';

import { useState, FormEvent, ChangeEvent } from 'react';

interface FormState {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirm: string;
    phone: string;
    agree: boolean;
}

interface FormErrors {
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    confirm?: string;
    agree?: string;
}

export default function SignupPage() {
    const [form, setForm] = useState<FormState>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirm: '',
        phone: '',
        agree: false,
    });

    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState<FormErrors>({});
    const [submitting, setSubmitting] = useState(false);

    const validate = (): FormErrors => {
        const e: FormErrors = {};
        if (!form.firstName.trim()) e.firstName = 'First name is required';
        if (!form.lastName.trim()) e.lastName = 'Last name is required';
        if (!/\\S+@\\S+\\.\\S+/.test(form.email)) e.email = 'Enter a valid email';
        if (form.password.length < 8) e.password = 'Password must be at least 8 characters';
        if (form.password !== form.confirm) e.confirm = 'Passwords do not match';
        if (!form.agree) e.agree = 'You must agree to the Terms';
        return e;
    };

    const passwordStrength = (pass: string): number => {
        let score = 0;
        if (pass.length >= 8) score++;
        if (/[A-Z]/.test(pass)) score++;
        if (/[0-9]/.test(pass)) score++;
        if (/[^A-Za-z0-9]/.test(pass)) score++;
        return score; // 0..4
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const eobj = validate();
        setErrors(eobj);
        if (Object.keys(eobj).length) return;

        setSubmitting(true);
        await new Promise((r) => setTimeout(r, 900));
        setSubmitting(false);
        alert('Registration successful! (demo)');
    };

    const onChange = (key: keyof FormState, value: string | boolean) => {
        setForm((s) => ({ ...s, [key]: value }));
        setErrors((prev) => ({ ...prev, [key]: undefined }));
    };

    const strength = passwordStrength(form.password);
    const strengthLabels = ['Very weak', 'Weak', 'Fair', 'Good', 'Strong'];
    const strengthColors = ['bg-red-400', 'bg-orange-400', 'bg-yellow-400', 'bg-sky-400', 'bg-green-400'];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 flex items-center justify-center p-6">
            {/* ... keep the same layout & form fields here (no React import needed) */}
            <div className="max-w-4xl w-full bg-white/80 backdrop-blur-md shadow-lg rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
                {/* Left Hero */}
                <div className="hidden md:flex flex-col gap-6 p-10 bg-gradient-to-b from-indigo-600 to-indigo-500 text-white">
                    <h2 className="text-3xl font-extrabold">Welcome to Azura</h2>
                    <p className="text-indigo-100">Create your account for personalized features.</p>
                </div>

                {/* Right Form */}
                <div className="p-8 md:p-10">
                    <h3 className="text-lg font-semibold text-slate-700 mb-6">Create your account</h3>

                    <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                        {/* (Keep all input fields as before) */}
                        {/* Example field: */}
                        <div>
                            <label className="block text-xs font-medium text-slate-500">First name</label>
                            <input
                                className="mt-1 w-full rounded-lg border px-3 py-2"
                                value={form.firstName}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => onChange('firstName', e.target.value)}
                            />
                            {errors.firstName && <p className="text-xs text-red-500 mt-1">{errors.firstName}</p>}
                        </div>

                        <button
                            type="submit"
                            disabled={submitting}
                            className="w-full py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold"
                        >
                            {submitting ? 'Creating...' : 'Create account'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

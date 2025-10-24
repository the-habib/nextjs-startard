'use client';

import { useState, FormEvent, ChangeEvent } from 'react';

interface FormState {
    name: string;
    email: string;
    password: string;
    confirm: string;
    agree: boolean;
}

interface FormErrors {
    name?: string;
    email?: string;
    password?: string;
    confirm?: string;
}

export default function SignupPage() {
    const [form, setForm] = useState<FormState>({
        name: '',
        email: '',
        password: '',
        confirm: '',
        agree: false,
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [submitting, setSubmitting] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const validate = (): FormErrors => {
        const e: FormErrors = {};
        if (!form.name.trim()) e.name = 'Name is required';
        if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email';
        if (form.password.length < 6) e.password = 'Password must be at least 6 characters';
        if (form.password !== form.confirm) e.confirm = 'Passwords do not match';
        return e;
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const eobj = validate();
        setErrors(eobj);
        if (Object.keys(eobj).length) return;

        if (!form.agree) {
            alert('You must agree to terms to continue');
            return;
        }

        setSubmitting(true);
        await new Promise((r) => setTimeout(r, 1000));
        setSubmitting(false);

        alert('Account created successfully! (demo)');
    };

    const onChange = (key: keyof FormState, value: string | boolean) => {
        setForm((s) => ({ ...s, [key]: value }));
        setErrors((prev) => ({ ...prev, [key]: undefined }));
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-slate-50 flex items-center justify-center p-6">
            <div className="max-w-4xl w-full bg-white/80 backdrop-blur-md shadow-lg rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
                {/* Left side illustration */}
                <div className="hidden md:flex flex-col justify-center p-10 bg-gradient-to-b from-indigo-600 to-indigo-500 text-white">
                    <h2 className="text-3xl font-extrabold mb-4">Create Your Account</h2>
                    <p className="text-indigo-100/90 mb-6">
                        Join our platform and unlock access to premium tools, updates, and support.
                    </p>
                    <ul className="space-y-2 text-sm text-indigo-100/90">
                        <li>✓ Manage projects easily</li>
                        <li>✓ Sync across all devices</li>
                        <li>✓ Get notified instantly</li>
                    </ul>
                </div>

                {/* Right side form */}
                <div className="p-8 md:p-10">
                    <h3 className="text-lg font-semibold text-slate-700 mb-6">Sign up for free</h3>

                    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                        {/* Name */}
                        <div>
                            <label className="block text-xs font-medium text-slate-500">Full Name</label>
                            <input
                                type="text"
                                value={form.name}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => onChange('name', e.target.value)}
                                placeholder="Your name"
                                className={`mt-1 w-full rounded-lg border px-3 py-2 bg-white/80 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 ${errors.name ? 'border-red-300' : 'border-slate-200'
                                    }`}
                            />
                            {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-xs font-medium text-slate-500">Email</label>
                            <input
                                type="email"
                                value={form.email}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => onChange('email', e.target.value)}
                                placeholder="you@company.com"
                                className={`mt-1 w-full rounded-lg border px-3 py-2 bg-white/80 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 ${errors.email ? 'border-red-300' : 'border-slate-200'
                                    }`}
                            />
                            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-xs font-medium text-slate-500">Password</label>
                            <div className="mt-1 relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={form.password}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => onChange('password', e.target.value)}
                                    placeholder="Create a password"
                                    className={`w-full rounded-lg border px-3 py-2 bg-white/80 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 ${errors.password ? 'border-red-300' : 'border-slate-200'
                                        }`}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((s) => !s)}
                                    className="absolute right-2 top-2 text-xs text-slate-500"
                                >
                                    {showPassword ? 'Hide' : 'Show'}
                                </button>
                            </div>
                            {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password}</p>}
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label className="block text-xs font-medium text-slate-500">Confirm Password</label>
                            <input
                                type="password"
                                value={form.confirm}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => onChange('confirm', e.target.value)}
                                placeholder="Confirm your password"
                                className={`mt-1 w-full rounded-lg border px-3 py-2 bg-white/80 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 ${errors.confirm ? 'border-red-300' : 'border-slate-200'
                                    }`}
                            />
                            {errors.confirm && <p className="text-xs text-red-500 mt-1">{errors.confirm}</p>}
                        </div>

                        {/* Terms */}
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                checked={form.agree}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => onChange('agree', e.target.checked)}
                                className="rounded mr-2 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label className="text-sm text-slate-600">
                                I agree to the{' '}
                                <a href="#" className="text-indigo-600 hover:text-indigo-700 font-medium">
                                    Terms & Conditions
                                </a>
                            </label>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={submitting}
                            className="w-full py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {submitting ? 'Creating account...' : 'Create account'}
                        </button>

                        {/* Divider */}
                        <div className="flex items-center gap-3 justify-center mt-3">
                            <div className="h-px bg-slate-200 flex-1"></div>
                            <div className="text-xs text-slate-400 uppercase tracking-wider">or continue with</div>
                            <div className="h-px bg-slate-200 flex-1"></div>
                        </div>

                        {/* Social Buttons */}
                        <div className="grid grid-cols-2 gap-3 mt-3">
                            <button type="button" className="flex items-center justify-center gap-2 py-2 rounded-lg border bg-white">
                                Google
                            </button>
                            <button type="button" className="flex items-center justify-center gap-2 py-2 rounded-lg border bg-white">
                                Facebook
                            </button>
                        </div>
                    </form>

                    <p className="mt-6 text-xs text-slate-400">
                        Already have an account?{' '}
                        <a href="/login" className="text-indigo-600 font-medium">
                            Sign in
                        </a>
                    </p>
                </div>
            </div>

            <style>{`input::placeholder { color: rgba(15,23,42,0.35); }`}</style>
        </div>
    );
}

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

const courseOptions = [
  "Programming Fundamentals",
  "Python for AI & Automation",
  "Data Analytics with Power BI",
  "Full Stack MERN Development",
  "Full Stack Python Development",
  "Full Stack Java Development",
  "UI/UX Design with Figma",
  "AI Productivity Specialist",
  "Not sure yet — need guidance"
];

const statusOptions = [
  "College Student",
  "Graduate",
  "Working Professional",
  "Career Switcher",
  "Other"
];

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  course: string;
  status: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  course?: string;
}

export default function EnquiryForm({ preselectedCourse }: { preselectedCourse?: string }) {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    email: "",
    course: preselectedCourse || "",
    status: "",
    message: ""
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = "Please enter your full name.";
    }
    if (!formData.phone.trim() || !/^\+?[0-9\s-]{7,15}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number.";
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.course) {
      newErrors.course = "Please select a course you're interested in.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Mock submission — replace with real API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSuccess) {
    return (
      <div
        className="rounded-2xl p-10 flex flex-col items-center text-center gap-6"
        style={{
          background: "var(--color-surface)",
          border: "1px solid rgba(74, 222, 128, 0.2)"
        }}
        role="status"
        aria-live="polite"
      >
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center"
          style={{ background: "rgba(74, 222, 128, 0.1)" }}
        >
          <CheckCircle size={32} style={{ color: "#4ade80" }} />
        </div>
        <div>
          <h3
            className="text-2xl font-bold"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Enquiry Received!
          </h3>
          <p
            className="mt-2 text-sm leading-relaxed max-w-sm mx-auto"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Thank you! Your enquiry has been received. Our team will contact you shortly to discuss your learning goals.
          </p>
        </div>
        <button
          onClick={() => { setIsSuccess(false); setFormData({ fullName: "", phone: "", email: "", course: preselectedCourse || "", status: "", message: "" }); }}
          className="btn-secondary"
        >
          Submit Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5"
      noValidate
      aria-label="Free counselling enquiry form"
    >
      {/* Full Name */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="fullName" className="text-sm font-semibold text-white">
          Full Name <span aria-hidden="true" style={{ color: "#f87171" }}>*</span>
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Your full name"
          autoComplete="name"
          className="px-4 py-3 rounded-xl text-sm outline-none transition-all"
          style={{
            background: "var(--color-surface)",
            border: `1px solid ${errors.fullName ? "#f87171" : "var(--color-border)"}`,
            color: "var(--color-text-primary)"
          }}
          required
          aria-required="true"
          aria-describedby={errors.fullName ? "fullName-error" : undefined}
          aria-invalid={!!errors.fullName}
        />
        {errors.fullName && (
          <p id="fullName-error" className="text-xs flex items-center gap-1" style={{ color: "#f87171" }} role="alert">
            <AlertCircle size={12} />
            {errors.fullName}
          </p>
        )}
      </div>

      {/* Phone */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="phone" className="text-sm font-semibold text-white">
          Phone Number <span aria-hidden="true" style={{ color: "#f87171" }}>*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+91 00000 00000"
          autoComplete="tel"
          className="px-4 py-3 rounded-xl text-sm outline-none transition-all"
          style={{
            background: "var(--color-surface)",
            border: `1px solid ${errors.phone ? "#f87171" : "var(--color-border)"}`,
            color: "var(--color-text-primary)"
          }}
          required
          aria-required="true"
          aria-describedby={errors.phone ? "phone-error" : undefined}
          aria-invalid={!!errors.phone}
        />
        {errors.phone && (
          <p id="phone-error" className="text-xs flex items-center gap-1" style={{ color: "#f87171" }} role="alert">
            <AlertCircle size={12} />
            {errors.phone}
          </p>
        )}
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-semibold text-white">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          autoComplete="email"
          className="px-4 py-3 rounded-xl text-sm outline-none transition-all"
          style={{
            background: "var(--color-surface)",
            border: `1px solid ${errors.email ? "#f87171" : "var(--color-border)"}`,
            color: "var(--color-text-primary)"
          }}
          aria-describedby={errors.email ? "email-error" : undefined}
          aria-invalid={!!errors.email}
        />
        {errors.email && (
          <p id="email-error" className="text-xs flex items-center gap-1" style={{ color: "#f87171" }} role="alert">
            <AlertCircle size={12} />
            {errors.email}
          </p>
        )}
      </div>

      {/* Course */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="course" className="text-sm font-semibold text-white">
          Course Interested In <span aria-hidden="true" style={{ color: "#f87171" }}>*</span>
        </label>
        <select
          id="course"
          name="course"
          value={formData.course}
          onChange={handleChange}
          className="px-4 py-3 rounded-xl text-sm outline-none transition-all cursor-pointer"
          style={{
            background: "var(--color-navy-600)",
            border: `1px solid ${errors.course ? "#f87171" : "var(--color-border)"}`,
            color: formData.course ? "var(--color-text-primary)" : "var(--color-text-muted)"
          }}
          required
          aria-required="true"
          aria-describedby={errors.course ? "course-error" : undefined}
          aria-invalid={!!errors.course}
        >
          <option value="" disabled>Select a course</option>
          {courseOptions.map(c => (
            <option key={c} value={c} style={{ background: "#0f1629" }}>{c}</option>
          ))}
        </select>
        {errors.course && (
          <p id="course-error" className="text-xs flex items-center gap-1" style={{ color: "#f87171" }} role="alert">
            <AlertCircle size={12} />
            {errors.course}
          </p>
        )}
      </div>

      {/* Current Status */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="status" className="text-sm font-semibold text-white">
          Current Status
        </label>
        <select
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="px-4 py-3 rounded-xl text-sm outline-none transition-all cursor-pointer"
          style={{
            background: "var(--color-navy-600)",
            border: "1px solid var(--color-border)",
            color: formData.status ? "var(--color-text-primary)" : "var(--color-text-muted)"
          }}
        >
          <option value="" style={{ background: "#0f1629" }}>Select your current status</option>
          {statusOptions.map(s => (
            <option key={s} value={s} style={{ background: "#0f1629" }}>{s}</option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-semibold text-white">
          Message <span className="font-normal" style={{ color: "var(--color-text-muted)" }}>(Optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your goals, current background or any questions you have..."
          rows={4}
          className="px-4 py-3 rounded-xl text-sm outline-none transition-all resize-none"
          style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            color: "var(--color-text-primary)"
          }}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary justify-center mt-2"
        aria-label="Submit counselling enquiry"
      >
        {isSubmitting ? (
          <>
            <div
              className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"
              role="status"
              aria-label="Submitting"
            />
            Submitting...
          </>
        ) : (
          <>
            <Send size={16} />
            Request Free Counselling
          </>
        )}
      </button>

      <p className="text-xs text-center" style={{ color: "var(--color-text-muted)" }}>
        By submitting this form, you agree to be contacted by our team regarding your enquiry.
      </p>
    </form>
  );
}

"use client";

import { useState } from "react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
  preferredTime: string;
  agreeContact: boolean;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
  preferredTime?: string;
  agreeContact?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
    preferredTime: "",
    agreeContact: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = () => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = "Invalid phone number (10 digits required)";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (!formData.preferredTime.trim()) newErrors.preferredTime = "Preferred time is required";
    if (!formData.agreeContact) newErrors.agreeContact = "You must agree to be contacted";
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully!");
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
        preferredTime: "",
        agreeContact: false,
      });
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 sm:p-6 bg-white rounded-lg shadow-lg my-8 sm:my-12">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">Get In Touch</h2>
      <p className="text-center text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
        Simply fill out the brief fields below and Dr. Blake will be in touch with you soon, usually within one business day. This form is safe, private, and completely free.
      </p>
      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full p-2 border rounded text-sm sm:text-base"
          />
          {errors.name && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.name}</p>}
        </div>
        <div>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone (e.g., 1234567890)"
            className="w-full p-2 border rounded text-sm sm:text-base"
          />
          {errors.phone && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.phone}</p>}
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-2 border rounded text-sm sm:text-base"
          />
          {errors.email && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.email}</p>}
        </div>
        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="What brings you here?"
            className="w-full p-2 border rounded h-24 text-sm sm:text-base"
          />
          {errors.message && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.message}</p>}
        </div>
        <div>
          <input
            type="text"
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleChange}
            placeholder="Preferred time to reach you"
            className="w-full p-2 border rounded text-sm sm:text-base"
          />
          {errors.preferredTime && (
            <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.preferredTime}</p>
          )}
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="agreeContact"
            checked={formData.agreeContact}
            onChange={handleChange}
            className="mr-2"
          />
          <label className="text-sm sm:text-base">I agree to be contacted</label>
          {errors.agreeContact && (
            <p className="text-red-500 text-xs sm:text-sm ml-2">{errors.agreeContact}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-green-700 text-white p-2 rounded hover:bg-green-800 text-sm sm:text-base"
        >
          Submit
        </button>
        <p className="text-gray-600 text-xs sm:text-sm text-center mt-2">
          By clicking submit you consent to receive texts and emails from Dr. Serena Blake
        </p>
      </form>
    </div>
  );
}

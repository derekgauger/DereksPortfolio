import React, { useState } from "react";
import { EmailSettings } from "../Types/types";
import { sendEmail } from "../Functions/email";
import FloatingLabelInput from "./FloatingLabelInput";
import Alert from "./Alert";


const EmailForm = () => {
  const [formData, setFormData] = useState<EmailSettings>({
    name: "",
    email: "",
    subject: "",
    body: "",
  });

  const [errors, setErrors] = useState<Partial<EmailSettings>>({});
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };

  const handleChange = (field: keyof EmailSettings) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Clear error when user starts typing
    setErrors((prev) => ({ ...prev, [field]: '' }));

    // Validate email format
    if (field === 'email' && value && !validateEmail(value)) {
      setErrors((prev) => ({ ...prev, email: 'Invalid email format' }));
    }
  };

  const validateForm = () => {
    const newErrors: Partial<EmailSettings> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!validateEmail(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.body.trim()) newErrors.body = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const result = await sendEmail(formData);
      if (result.error) {
        setStatus({ type: 'error', message: `Error sending email: ${result.error}` });
      } else {
        setStatus({ type: 'success', message: 'Email sent successfully!' });
        setFormData({ name: "", email: "", subject: "", body: "" });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'An unexpected error occurred. Please try again later.' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4">
        {status.type && (
          <Alert type={status.type} message={status.message} />
        )}
        <div className="flex gap-8 flex-col md:flex-row">
          <FloatingLabelInput
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange("name")}
            error={errors.name}
            maxLength={100}
          />
          <FloatingLabelInput
            placeholder="Your Email"
            type="email"
            value={formData.email}
            onChange={handleChange("email")}
            error={errors.email}
            maxLength={100}
          />
        </div>
        <FloatingLabelInput
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange("subject")}
          error={errors.subject}
          maxLength={100}
        />
        <FloatingLabelInput
          placeholder="Message"
          rows={7}
          value={formData.body}
          onChange={handleChange("body")}
          error={errors.body}
          maxLength={500}
        />
        <button
          type="submit"
          className="bg-green-400 hover:bg-green-500 active:bg-pink-600 text-[--primary-background-color] font-semibold py-2 px-4 rounded-lg w-[10%] mx-auto min-w-fit"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default EmailForm;
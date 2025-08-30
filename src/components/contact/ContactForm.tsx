
"use client";
import { useState } from 'react';
import { toast } from 'react-hot-toast';

const ContactForm: React.FC = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    message: '',
    agreement: false,
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    let fieldValue: string | boolean = value;

    if (type === 'checkbox') {
      fieldValue = (e.target as HTMLInputElement).checked;
    } else {
      // Apply specific validation based on field name
      if (name === 'firstName' || name === 'lastName') {
        // Only allow alphabets and spaces for name fields
        fieldValue = value.replace(/[^a-zA-Z\s]/g, '');
      } else if (name === 'phone') {
        // Only allow digits and limit to 10 digits
        fieldValue = value.replace(/\D/g, '').slice(0, 10);
      } else {
        // For address and message, allow anything
        fieldValue = value;
      }
    }

    setForm((prev) => ({
      ...prev,
      [name]: fieldValue,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');
    setError('');

    // Validate phone number (must be exactly 10 digits if provided)
    if (form.phone && form.phone.length !== 10) {
      toast.error('Phone number must be exactly 10 digits');
      setLoading(false);
      return;
    }

    // Validate name fields contain only alphabets
    if (!/^[a-zA-Z\s]+$/.test(form.firstName)) {
      toast.error('First name can only contain alphabets');
      setLoading(false);
      return;
    }

    if (form.lastName && !/^[a-zA-Z\s]+$/.test(form.lastName)) {
      toast.error('Last name can only contain alphabets');
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          phone: form.phone,
          address: form.address,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        toast.success('Form submitted successfully.');
        setSuccess('');
        setForm({
          firstName: '', lastName: '', email: '', phone: '', address: '', message: '', agreement: false
        });
      } else {
        toast.error(data.message || 'Something went wrong.');
        setError(data.message || 'Something went wrong.');
      }
    } catch (err) {
      toast.error('Something went wrong.');
      setError('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-2xl bg-sky-50/50 p-8 py-20">
      <h2 className="text-4xl font-light text-blue-600 mb-8">Get In Touch</h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={form.firstName}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={form.lastName}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            maxLength={10}
            pattern="[0-9]{10}"
            className="w-full px-4 py-3 border border-gray-200 bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          />
        </div>
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
        />
        <textarea
          rows={4}
          name="message"
          placeholder="Write a message"
          value={form.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
          required
        ></textarea>
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="agreement"
            id="agreement"
            checked={form.agreement}
            onChange={handleChange}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
            required
          />
          <label htmlFor="agreement" className="text-sm text-gray-600">
            I agree that my submitted data is being collected, stored and can be
            used for SMS/WhatsApp/RCS
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg disabled:opacity-60"
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Submit'}
        </button>
        {/* Toast notifications will show for success/error */}
      </form>
    </div>
  );
};

export default ContactForm;

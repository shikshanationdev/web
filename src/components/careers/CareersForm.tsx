"use client";
import { useState } from 'react';
import { toast } from 'react-hot-toast';

const CareersForm: React.FC = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    message: '',
    agreement: false,
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
        // For other fields, allow anything
        fieldValue = value;
      }
    }

    setForm((prev) => ({
      ...prev,
      [name]: fieldValue,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type (only PDF)
      if (file.type !== 'application/pdf') {
        toast.error('Please upload only PDF files');
        e.target.value = '';
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast.error('File size must be less than 5MB');
        e.target.value = '';
        return;
      }

      setSelectedFile(file);
    }
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
      // Create FormData for file upload
      const formData = new FormData();
      formData.append('firstName', form.firstName);
      formData.append('lastName', form.lastName);
      formData.append('email', form.email);
      formData.append('phone', form.phone);
      formData.append('position', form.position);
      formData.append('message', form.message);

      if (selectedFile) {
        formData.append('resume', selectedFile);
      }

      const res = await fetch('/api/careers', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (res.ok) {
        toast.success('Application submitted successfully.');
        setSuccess('');
        setForm({
          firstName: '', lastName: '', email: '', phone: '', position: '', message: '', agreement: false
        });
        setSelectedFile(null);
        // Reset file input
        const fileInput = document.getElementById('resume') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
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
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Mobile heading - only visible on mobile */}
        <div className="lg:hidden mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Submit Your Application to Join Our Talent Pool
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Ready to make a difference in education? We&apos;d love to hear from you!
            Submit your application and become part of our mission to democratize quality education.
          </p>
        </div>

        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Perks & Benefits */}
          <div className="space-y-8 px-10">
            <div className="hidden lg:block">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Submit Your Application to Join Our Talent Pool
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ready to make a difference in education? We&apos;d love to hear from you!
                Submit your application and become part of our mission to democratize quality education.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-sky-700 mb-6">Perks & Benefits</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <div className="text-gray-900 font-medium">
                      Competitive salary and performance incentives.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <div className="text-gray-900 font-medium">
                      Learning-rich environment with mentors and peers from across domains.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <div className="text-gray-900 font-medium">
                      Exposure to AI-driven education innovation, bilingual content strategy, and real-time teaching analytics.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <div className="text-gray-900 font-medium">
                      Opportunity to see the direct impact on student outcomes across school and exam prep journeys.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="rounded-2xl bg-sky-50/50 p-8 ">
            <h2 className="text-4xl font-light text-sky-700 mb-8">Join Our Talent Pool</h2>
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
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  maxLength={10}
                  pattern="[0-9]{10}"
                  className="w-full px-4 py-3 border border-gray-200 bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <select
                name="position"
                value={form.position}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                required
              >
                <option value="">Applying for Position</option>
                <option value="Faculty">Faculty</option>
                <option value="DTP Operator">DTP Operator</option>
                <option value="Counselor">Counselor</option>
                <option value="Mentor">Mentor</option>
                <option value="Video & Reel Editor">Video & Reel Editor</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Others">Others</option>
              </select>

              {/* File Upload */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Upload Resume/CV (PDF only, max 5MB)
                </label>
                <div className="relative">
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="w-full px-4 py-3 border border-gray-200 bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                  {selectedFile && (
                    <div className="mt-2 text-sm text-green-600 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {selectedFile.name} ({Math.round(selectedFile.size / 1024)} KB)
                    </div>
                  )}
                </div>
              </div>

              <textarea
                rows={4}
                name="message"
                placeholder="Why should we hire you?"
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
                  used for recruitment and communication purposes.
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-sky-700 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg disabled:opacity-60"
                disabled={loading}
              >
                {loading ? 'Submitting...' : 'Submit'}
              </button>
              {/* Toast notifications will show for success/error */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersForm;

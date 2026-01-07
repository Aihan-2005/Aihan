'use client';

import { useState } from 'react';
import { X, Send, User, Mail, Phone, MessageSquare, Loader2, CheckCircle } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone: string) => {
    const re = /^09[0-9]{9}$/;
    return re.test(phone);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    const newErrors = {
      name: '',
      email: '',
      phone: ''
    };

    if (!formData.name.trim()) {
      newErrors.name = 'نام الزامی است';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'ایمیل الزامی است';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'ایمیل معتبر نیست';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'شماره تماس الزامی است';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'شماره موبایل باید با 09 شروع شود و 11 رقم باشد';
    }

    setErrors(newErrors);

    // If there are errors, don't submit
    if (newErrors.name || newErrors.email || newErrors.phone) {
      return;
    }

    setIsSubmitting(true);

    try {
      // ارسال به API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        // Reset form after 2 seconds
        setTimeout(() => {
          setFormData({ name: '', email: '', phone: '', message: '' });
          setIsSuccess(false);
          onClose();
        }, 2000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('خطا در ارسال فرم. لطفا دوباره تلاش کنید.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-lg">
        <div className="relative rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 shadow-2xl ring-1 ring-white/10">
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute left-4 top-4 rounded-full p-2 text-gray-400 transition-all hover:bg-white/10 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Success State */}
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center py-8">
              <div className="mb-4 rounded-full bg-green-500/20 p-4">
                <CheckCircle className="h-16 w-16 text-green-400" />
              </div>
              <h3 className="mb-2 text-2xl font-bold text-white">درخواست شما ثبت شد!</h3>
              <p className="text-gray-400">به زودی با شما تماس خواهیم گرفت</p>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="mb-8 text-center">
                <div className="mb-4 inline-flex rounded-full bg-gradient-to-l from-blue-500 to-purple-500 p-3">
                  <Send className="h-8 w-8 text-white" />
                </div>
                <h2 className="mb-2 text-3xl font-bold text-white">شروع همکاری</h2>
                <p className="text-gray-400">اطلاعات خود را وارد کنید تا با شما تماس بگیریم</p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Name Field */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    نام و نام خانوادگی <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full rounded-xl border ${
                        errors.name ? 'border-red-500' : 'border-white/10'
                      } bg-white/5 py-3 pr-11 pl-4 text-white placeholder-gray-500 backdrop-blur-sm transition-all focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50`}
                      placeholder="نام خود را وارد کنید"
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    ایمیل <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full rounded-xl border ${
                        errors.email ? 'border-red-500' : 'border-white/10'
                      } bg-white/5 py-3 pr-11 pl-4 text-white placeholder-gray-500 backdrop-blur-sm transition-all focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50`}
                      placeholder="example@email.com"
                      dir="ltr"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                  )}
                </div>

                {/* Phone Field */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    شماره تماس <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full rounded-xl border ${
                        errors.phone ? 'border-red-500' : 'border-white/10'
                      } bg-white/5 py-3 pr-11 pl-4 text-white placeholder-gray-500 backdrop-blur-sm transition-all focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50`}
                      placeholder="09123456789"
                      dir="ltr"
                      maxLength={11}
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-400">{errors.phone}</p>
                  )}
                </div>

                {/* Message Field (Optional) */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    پیام شما (اختیاری)
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute right-3 top-3 h-5 w-5 text-gray-500" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pr-11 pl-4 text-white placeholder-gray-500 backdrop-blur-sm transition-all focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                      placeholder="توضیحات بیشتر درباره پروژه یا نیاز خود را بنویسید..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-l from-blue-600 via-purple-600 to-pink-600 px-8 py-4 font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        در حال ارسال...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        ارسال درخواست
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 -z-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </button>

              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactModal;

import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle, MessageSquare, MapPin, Clock, Sparkles } from 'lucide-react';
import { ComingSoonBadge } from '../components/ComingSoonBadge';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required.';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!formData.email.includes('@') || !formData.email.includes('.')) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Subject line is required.';
    if (!formData.message.trim()) {
      errs.message = 'Message content cannot be empty.';
    } else if (formData.message.trim().length < 15) {
      errs.message = 'Please provide at least 15 characters describing your inquiry.';
    }
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setIsSubmitting(true);
    try {
      // Simulate real asynchronous submission dispatch
      await new Promise((r) => setTimeout(r, 800));
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setErrors({ form: 'An error occurred while dispatching your message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050B16] text-[#EAF6FF] py-16 px-4 sm:px-6 lg:px-8 bg-cyber-grid">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ComingSoonBadge className="mb-4" />
          <h1 className="text-4xl sm:text-6xl font-black text-white font-['Lexend'] mb-4 tracking-tight">
            Connect with <span className="bg-gradient-to-r from-white to-[#00D9FF] bg-clip-text text-transparent">TERVOX AI</span>
          </h1>
          <p className="text-base sm:text-lg text-[#91A8BD] leading-relaxed">
            Have questions regarding desktop availability, enterprise licensing, or technical integrations? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details & Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#081426] border border-[#00D9FF]/30 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
              <h2 className="text-xl font-bold text-white font-['Lexend'] mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#00D9FF]" />
                <span>Inquiry Channels</span>
              </h2>

              <div className="space-y-6 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#00D9FF]/10 text-[#00D9FF] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-[#91A8BD] block mb-1">Direct Inquiries</span>
                    <a
                      href="mailto:millionairethoughts13@gmail.com"
                      className="text-[#EAF6FF] hover:text-[#00D9FF] font-medium transition-colors break-all"
                    >
                      millionairethoughts13@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#00D9FF]/10 text-[#00D9FF] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-[#91A8BD] block mb-1">Response Window</span>
                    <p className="text-[#EAF6FF]">Typically within 24 business hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#00D9FF]/10 text-[#00D9FF] flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-[#91A8BD] block mb-1">Launch Updates</span>
                    <p className="text-[#EAF6FF]">Subscribe on Download page for automatic build notifications</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Note box */}
            <div className="p-6 rounded-2xl bg-[#050B16] border border-[#00D9FF]/20 text-xs text-[#91A8BD] leading-relaxed">
              <span className="text-[#00D9FF] font-semibold block mb-1">Confidentiality Assured</span>
              Your technical requirements, architectural questions, and contact information are treated strictly in confidence and never shared with advertisers.
            </div>
          </div>

          {/* Form Panel (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#081426] border border-[#00D9FF]/30 shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-3xl bg-[#00D9FF]/15 text-[#00D9FF] flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(0,217,255,0.3)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-['Lexend'] mb-2">Message Dispatched</h3>
                  <p className="text-sm text-[#91A8BD] max-w-md mx-auto mb-8 leading-relaxed">
                    Thank you for reaching out. Your message has been routed to our core engineering team. We will review and respond promptly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl text-xs font-bold text-[#050B16] bg-[#00D9FF] hover:opacity-90 transition-all cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <h2 className="text-xl font-bold text-white font-['Lexend'] mb-2">Send an Inquiry</h2>
                  <p className="text-xs text-[#91A8BD] mb-6">
                    Fill out the form below and our team will get in touch.
                  </p>

                  {errors.form && (
                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-400 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.form}</span>
                    </div>
                  )}

                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#91A8BD] mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Vance"
                      className={`w-full px-4 py-3 rounded-xl bg-[#050B16] border text-sm text-[#EAF6FF] placeholder-[#91A8BD]/50 focus:outline-none transition-all ${
                        errors.name ? 'border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.3)]' : 'border-[#00D9FF]/25 focus:border-[#00D9FF]'
                      }`}
                    />
                    {errors.name && <p className="mt-1 text-[11px] text-red-400 font-mono">{errors.name}</p>}
                  </div>

                  {/* Email field */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#91A8BD] mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-[#050B16] border text-sm text-[#EAF6FF] placeholder-[#91A8BD]/50 focus:outline-none transition-all ${
                        errors.email ? 'border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.3)]' : 'border-[#00D9FF]/25 focus:border-[#00D9FF]'
                      }`}
                    />
                    {errors.email && <p className="mt-1 text-[11px] text-red-400 font-mono">{errors.email}</p>}
                  </div>

                  {/* Subject field */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#91A8BD] mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Enterprise Evaluation / Platform Release Question"
                      className={`w-full px-4 py-3 rounded-xl bg-[#050B16] border text-sm text-[#EAF6FF] placeholder-[#91A8BD]/50 focus:outline-none transition-all ${
                        errors.subject ? 'border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.3)]' : 'border-[#00D9FF]/25 focus:border-[#00D9FF]'
                      }`}
                    />
                    {errors.subject && <p className="mt-1 text-[11px] text-red-400 font-mono">{errors.subject}</p>}
                  </div>

                  {/* Message field */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#91A8BD] mb-1.5">
                      Inquiry Message
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please specify your project scope, questions, or specific deployment requirements..."
                      className={`w-full px-4 py-3 rounded-xl bg-[#050B16] border text-sm text-[#EAF6FF] placeholder-[#91A8BD]/50 focus:outline-none transition-all resize-none ${
                        errors.message ? 'border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.3)]' : 'border-[#00D9FF]/25 focus:border-[#00D9FF]'
                      }`}
                    />
                    {errors.message && <p className="mt-1 text-[11px] text-red-400 font-mono">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl font-bold text-sm text-[#050B16] bg-gradient-to-r from-[#00D9FF] to-[#168BFF] hover:opacity-90 disabled:opacity-50 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_25px_rgba(0,217,255,0.4)]"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-[#050B16] border-t-transparent rounded-full animate-spin" />
                        <span>Dispatching Inquiry...</span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

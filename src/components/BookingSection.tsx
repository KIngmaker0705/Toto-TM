import React, { useState } from 'react';
import { Mail, Phone, Instagram, Send, Info, Calendar, MapPin, User, Tag, MessageSquare } from 'lucide-react';
import { artist, contactConfig } from '../data/config';
import { BookingFormState } from '../types';

export const BookingSection: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormState>({
    name: '',
    email: '',
    phone: '',
    eventType: 'Wedding / Sangeet',
    eventDate: '',
    location: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  // Pre-filled mailto URL with form contents
  const mailtoUrl = `mailto:${contactConfig.email}?subject=Booking Inquiry for DJ TOTO TM - ${encodeURIComponent(
    formData.eventType
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nEvent Type: ${formData.eventType}\nEvent Date: ${formData.eventDate}\nLocation: ${formData.location}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <section
      id="booking"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0c0c10] relative border-t border-zinc-900"
      aria-labelledby="booking-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest uppercase text-purple-400 mb-3 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-800/40">
            Official Bookings & Inquiries
          </span>
          <h2
            id="booking-heading"
            className="font-syne font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight"
          >
            BOOK DJ TOTO TM
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl">
            For live DJ performances, club events, festivals, private celebrations, music production inquiries, and remix collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Direct Artist Contact Details Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div>
              <h3 className="font-syne font-bold text-2xl text-white mb-4">
                Direct Contact Channels
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-8">
                Connect directly with DJ TOTO TM for rapid booking confirmation, date availability, technical requirements, and performance queries.
              </p>

              {/* Direct Info Cards */}
              <div className="space-y-4">
                {/* Email */}
                <a
                  id="contact-email-card"
                  href={`mailto:${contactConfig.email}`}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-[#121217] border border-zinc-800 hover:border-purple-500/50 transition-all group shadow-md"
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-950/50 border border-purple-800/50 flex items-center justify-center text-purple-400 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-zinc-400 uppercase">Official Email</span>
                    <p className="text-sm sm:text-base font-semibold text-white group-hover:text-purple-300 transition-colors break-all">
                      {contactConfig.email}
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  id="contact-phone-card"
                  href={`tel:${contactConfig.phone}`}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-[#121217] border border-zinc-800 hover:border-cyan-500/50 transition-all group shadow-md"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-950/50 border border-cyan-800/50 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-zinc-400 uppercase">Phone & WhatsApp</span>
                    <p className="text-sm sm:text-base font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {contactConfig.phoneDisplay}
                    </p>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  id="contact-instagram-card"
                  href={contactConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-[#121217] border border-zinc-800 hover:border-pink-500/50 transition-all group shadow-md"
                >
                  <div className="w-12 h-12 rounded-xl bg-pink-950/50 border border-pink-800/50 flex items-center justify-center text-pink-400 group-hover:scale-105 transition-transform">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-zinc-400 uppercase">Official Instagram</span>
                    <p className="text-sm sm:text-base font-semibold text-white group-hover:text-pink-300 transition-colors">
                      {contactConfig.instagramHandle}
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Quick Action Action Buttons (Section 17) */}
            <div className="flex flex-wrap gap-3 pt-4 border-t border-zinc-800">
              <a
                id="quick-email-button"
                href={`mailto:${contactConfig.email}?subject=Booking%20DJ%20TOTO%20TM`}
                className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
              >
                <Mail className="w-3.5 h-3.5" />
                Email for Booking
              </a>

              <a
                id="quick-call-button"
                href={`tel:${contactConfig.phone}`}
                className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-bold uppercase tracking-wider transition-colors border border-zinc-700"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                Call / Contact
              </a>

              <a
                id="quick-instagram-button"
                href={contactConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white text-xs font-bold uppercase tracking-wider transition-colors border border-zinc-800"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-400" />
                Instagram @its_shashi_tm
              </a>
            </div>
          </div>

          {/* Professional Booking Form Column */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#121217] border border-zinc-800 shadow-xl">
              <h3 className="font-syne font-bold text-2xl text-white mb-2">
                Booking Request Form
              </h3>
              <p className="text-xs text-zinc-400 mb-8">
                Submit event details below. Direct confirmation will be handled promptly.
              </p>

              {/* Section 18: Contact Form Honesty Notice */}
              {formSubmitted ? (
                <div
                  id="form-honesty-notice"
                  className="p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 text-amber-200 space-y-4 animate-fade-in"
                >
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div className="space-y-2">
                      <h4 className="font-syne font-bold text-base text-amber-100">
                        Notice: Preview Mode Active
                      </h4>
                      <p className="text-xs text-amber-200/90 leading-relaxed">
                        Booking form is currently in preview mode. Please contact DJ TOTO TM directly using the details above.
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-amber-900/50 flex flex-col sm:flex-row gap-3">
                    <a
                      href={mailtoUrl}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold uppercase tracking-wider transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      Send Details via Email Client
                    </a>
                    <button
                      type="button"
                      onClick={() => setFormSubmitted(false)}
                      className="px-4 py-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-medium transition-colors"
                    >
                      Edit Form Details
                    </button>
                  </div>
                </div>
              ) : (
                <form id="booking-request-form" onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                        Your Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-zinc-500 absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Rahul Patil"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-white text-sm focus:outline-none focus:border-purple-500 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-zinc-500 absolute left-3.5 top-3.5" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="name@example.com"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-white text-sm focus:outline-none focus:border-purple-500 transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-zinc-500 absolute left-3.5 top-3.5" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-white text-sm focus:outline-none focus:border-purple-500 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Event Type */}
                    <div>
                      <label htmlFor="eventType" className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                        Event Type *
                      </label>
                      <div className="relative">
                        <Tag className="w-4 h-4 text-zinc-500 absolute left-3.5 top-3.5" />
                        <select
                          id="eventType"
                          name="eventType"
                          value={formData.eventType}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-white text-sm focus:outline-none focus:border-purple-500 transition-colors appearance-none"
                        >
                          <option value="Wedding / Sangeet">Wedding / Sangeet Ceremony</option>
                          <option value="Festival / Public Celebration">Festival / Public Celebration</option>
                          <option value="Club / Lounge Night">Club / Lounge Night</option>
                          <option value="College Festival">College Festival</option>
                          <option value="Private Celebration">Private Celebration</option>
                          <option value="Music Production / Remix Collab">Music Production / Remix Collab</option>
                          <option value="Other Event">Other Event</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Event Date */}
                    <div>
                      <label htmlFor="eventDate" className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                        Event Date *
                      </label>
                      <div className="relative">
                        <Calendar className="w-4 h-4 text-zinc-500 absolute left-3.5 top-3.5" />
                        <input
                          type="date"
                          id="eventDate"
                          name="eventDate"
                          required
                          value={formData.eventDate}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-white text-sm focus:outline-none focus:border-purple-500 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Location */}
                    <div>
                      <label htmlFor="location" className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                        Location / City *
                      </label>
                      <div className="relative">
                        <MapPin className="w-4 h-4 text-zinc-500 absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          id="location"
                          name="location"
                          required
                          value={formData.location}
                          onChange={handleChange}
                          placeholder="e.g. Pune, Mumbai, Kolhapur"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-white text-sm focus:outline-none focus:border-purple-500 transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                      Event Details & Message
                    </label>
                    <div className="relative">
                      <MessageSquare className="w-4 h-4 text-zinc-500 absolute left-3.5 top-3.5" />
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Expected audience size, sound setup, time schedule, or custom requests..."
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-white text-sm focus:outline-none focus:border-purple-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    id="submit-booking-request-btn"
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-xl shadow-purple-900/30 transition-all hover:-translate-y-0.5"
                  >
                    <Send className="w-4 h-4" />
                    SEND BOOKING REQUEST
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

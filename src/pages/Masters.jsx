import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, MapPin, Phone, Mail } from 'lucide-react';

const InstagramIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v3a8 8 0 0 1-8-8H7v14a4 4 0 0 1-4-4z"></path>
  </svg>
);

export default function Masters() {
  return (
    <div className="min-h-screen bg-background text-primary font-sans flex flex-col">
      {/* SIMPLE HEADER */}
      <nav className="flex justify-between items-center px-8 md:px-12 py-6 bg-white/50 backdrop-blur-md sticky top-0 z-50">
        <Link to="/" className="flex items-center gap-2 group">
          <ArrowLeft className="w-5 h-5 text-brand group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-bold uppercase tracking-widest text-primary/80 group-hover:text-brand transition-colors">На главную</span>
        </Link>
        <div className="flex flex-col items-end">
          <div className="font-handwriting text-3xl font-bold text-brand leading-none">Fresh</div>
        </div>
      </nav>

      {/* CONTENT */}
      <main className="flex-1 max-w-[1600px] w-full mx-auto px-12 py-20">
        <div className="text-center mb-16">
          <div className="text-[10px] text-brand font-bold uppercase tracking-[0.25em] mb-4">НАША КОМАНДА</div>
          <h1 className="text-[3rem] md:text-[4.5rem] leading-[1.1] font-serif text-primary tracking-tight">
            Выберите <span className="font-handwriting text-accent">мастера</span>
          </h1>
        </div>

        {/* Placeholder for future Masters List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Master 1 */}
          <div className="bg-white rounded-[2rem] p-8 flex flex-col md:flex-row gap-8 items-center md:items-start shadow-sm border border-primary/5 hover:shadow-md transition-shadow">
            <div className="w-32 h-32 rounded-full overflow-hidden bg-primary/10 shrink-0">
               {/* placeholder image */}
               <img src="/about_1.jpg" alt="Sofia" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-serif font-bold text-primary mb-2">Sofia</h3>
              <p className="text-xs font-bold uppercase tracking-widest text-brand mb-4">Владелица & маникюр/педикюр</p>
              <p className="text-sm text-primary/60 mb-6">Создательница Fresh Nails Studio. Идеальный маникюр и педикюр с любовью к каждой детали.</p>
              <a href="https://book.squareup.com/appointments/wi73dsyypui1e7/location/LMSSF03HF97TK/services" target="_blank" rel="noreferrer" className="bg-brand text-white rounded-full px-6 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-[#d66b53] transition-colors inline-block">
                Записаться к Sofia
              </a>
            </div>
          </div>

          {/* Master 2 */}
          <div className="bg-white rounded-[2rem] p-8 flex flex-col md:flex-row gap-8 items-center md:items-start shadow-sm border border-primary/5 hover:shadow-md transition-shadow">
            <div className="w-32 h-32 rounded-full overflow-hidden bg-primary/10 shrink-0">
               <div className="w-full h-full flex items-center justify-center text-primary/30 font-bold text-3xl">K</div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-serif font-bold text-primary mb-2">Karina</h3>
              <p className="text-xs font-bold uppercase tracking-widest text-brand mb-4">Мастер педикюра</p>
              <p className="text-sm text-primary/60 mb-6">Специалист по идеальному педикюру и уходу за вашими ножками.</p>
              <a href="https://book.squareup.com/appointments/wi73dsyypui1e7/location/LMSSF03HF97TK/services" target="_blank" rel="noreferrer" className="bg-brand text-white rounded-full px-6 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-[#d66b53] transition-colors inline-block">
                Записаться к Karina
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-accent/30 pt-12 pb-6 mt-auto">
        <div className="max-w-[1600px] mx-auto px-12 text-center text-[10px] text-primary/40 uppercase tracking-widest font-bold">
          © 2024 Fresh Nails Studio. Miami Vibes.
        </div>
      </footer>
    </div>
  );
}

import React from 'react';
import { Menu, MapPin, Phone, Mail, Diamond, Heart, Scissors, Sparkles, Footprints, Gift, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

// SVG Icons for Socials
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
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
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
  </svg>
);

export default function App() {
  return (
    <div className="min-h-screen bg-background text-primary font-sans">
      
      {/* --- HEADER --- */}
      <header className="w-full flex justify-between items-center px-12 py-6 border-b border-primary/5">
        <a href="#" className="flex items-center gap-3">
          <img src="/logo.jpg" alt="Logo" className="w-12 h-12 rounded-full shadow-sm" />
          <div className="flex flex-col">
            <div className="font-handwriting text-brand text-3xl leading-none">Fresh</div>
            <div className="text-[9px] tracking-[0.25em] uppercase font-bold mt-1 text-primary">Nails Studio</div>
          </div>
        </a>
        
        <nav className="hidden lg:flex gap-10 text-[11px] font-bold tracking-[0.15em] text-primary/70 uppercase">
          <a href="#" className="hover:text-brand transition-colors">О нас</a>
          <a href="#" className="hover:text-brand transition-colors">Услуги</a>
          <a href="#" className="hover:text-brand transition-colors">Мастера</a>
          <a href="#" className="hover:text-brand transition-colors">Галерея</a>
          <a href="#" className="hover:text-brand transition-colors">Прайс</a>
          <a href="#" className="hover:text-brand transition-colors">Контакты</a>
        </nav>
        
        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center gap-2 bg-brand text-white px-8 py-3 rounded-full text-xs font-bold tracking-wider hover:bg-[#d66b53] transition-colors shadow-sm">
            ЗАПИСАТЬСЯ <span className="text-lg leading-none">+</span>
          </button>
          <button className="w-10 h-10 border border-primary/20 rounded-full flex items-center justify-center hover:bg-accent hover:border-brand/30 transition-colors">
            <Menu size={18} />
          </button>
        </div>
      </header>

      {/* --- HERO GRID --- */}
      <main className="max-w-[1600px] mx-auto px-12 pt-10 pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 relative">
          
          {/* Left curved box */}
          <div className="bg-accent rounded-tr-[5rem] rounded-br-[5rem] p-12 lg:p-16 flex flex-col justify-center relative z-10">
            <div className="text-primary/60 text-[10px] uppercase tracking-[0.3em] font-bold mb-6">Premium Nail Care</div>
            
            <div className="font-serif text-[6rem] lg:text-[7.5rem] leading-[0.8] text-[#D88A88] tracking-tight">FRESH</div>
            <div className="font-serif text-[6rem] lg:text-[7.5rem] leading-[0.8] text-white tracking-tight drop-shadow-sm">NAILS</div>
            
            <div className="font-handwriting text-4xl lg:text-5xl text-brand mt-4 flex items-center gap-3">
              Miami Vibes, Perfect Nails <Heart className="w-8 h-8 text-brand stroke-[1.5]" />
            </div>
            
            <p className="mt-8 text-sm text-primary/80 max-w-sm font-medium leading-relaxed">
              Премиальный маникюр в атмосфере красоты, стиля и безупречного сервиса.
            </p>
            
            <div className="mt-10 mb-16">
              <button className="bg-brand text-white px-8 py-4 rounded-full text-xs font-bold hover:bg-[#d66b53] tracking-widest shadow-md flex items-center gap-2 w-fit">
                ЗАПИСАТЬСЯ ОНЛАЙН <span className="text-lg leading-none">+</span>
              </button>
            </div>

            {/* Features row */}
            <div className="flex gap-8 lg:gap-12 pt-8 border-t border-primary/10">
              <div className="flex items-center gap-3">
                <Diamond className="w-6 h-6 text-brand" strokeWidth={1.5} />
                <div className="text-[8px] lg:text-[9px] uppercase font-bold tracking-[0.15em] leading-tight text-primary/80">Премиальные<br/>материалы</div>
              </div>
              <div className="flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-brand" strokeWidth={1.5} />
                <div className="text-[8px] lg:text-[9px] uppercase font-bold tracking-[0.15em] leading-tight text-primary/80">Стерильность<br/>100%</div>
              </div>
              <div className="flex items-center gap-3">
                <Heart className="w-6 h-6 text-brand" strokeWidth={1.5} />
                <div className="text-[8px] lg:text-[9px] uppercase font-bold tracking-[0.15em] leading-tight text-primary/80">Индивидуальный<br/>подход</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:pl-10 h-[500px] lg:h-[750px] -mt-10 lg:mt-0 z-0">
            <div className="rounded-t-[5rem] rounded-bl-[5rem] overflow-hidden h-full w-full">
              <img src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1200" className="w-full h-full object-cover" alt="Model" />
            </div>
            
            {/* Neon Nails */}
            <div className="absolute top-16 right-16 font-handwriting text-[5rem] text-pink-300 drop-shadow-[0_0_20px_rgba(236,72,153,0.9)] -rotate-12">
              Nails
            </div>
            
            {/* Circular Stamp */}
            <div className="absolute top-1/2 -left-16 w-36 h-36 bg-white rounded-full flex flex-col items-center justify-center p-2 shadow-2xl border-4 border-background animate-[spin_20s_linear_infinite] z-20">
              <span className="font-bold text-[10px] tracking-[0.2em] text-brand uppercase text-center">Fresh Nails • Miami •</span>
              <span className="text-3xl mt-1 rotate-180">🌴</span> {/* rotated back for the spin effect alignment depending on text */}
            </div>
          </div>
        </div>

        {/* --- SERVICES + BANNER ROW --- */}
        <div className="flex flex-col lg:flex-row gap-6 mt-6">
          
          {/* Services Cards (Left ~65%) */}
          <div className="lg:flex-[2.2] grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { icon: <MessageCircle className="w-8 h-8 text-brand/80" strokeWidth={1.5} />, title: "GEL MANICURE MEDIUM", price: "95$" },
              { icon: <Scissors className="w-8 h-8 text-brand/80" strokeWidth={1.5} />, title: "GEL MANICURE LONG NAILS", price: "105$" },
              { icon: <Sparkles className="w-8 h-8 text-brand/80" strokeWidth={1.5} />, title: "ДИЗАЙН НОГТЕЙ", price: "от $20" },
              { icon: <Footprints className="w-8 h-8 text-brand/80" strokeWidth={1.5} />, title: "ПЕДИКЮР", price: "от $80" },
              { icon: <Gift className="w-8 h-8 text-brand/80" strokeWidth={1.5} />, title: "ПОДАРОЧНЫЕ СЕРТИФИКАТЫ", price: "от $50" },
            ].map((card, i) => (
              <div key={i} className="bg-white rounded-[1.5rem] border border-primary/5 p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-6">{card.icon}</div>
                <div className="text-[9px] uppercase font-bold tracking-widest mb-3 leading-tight text-primary/90">{card.title}</div>
                <div className="text-[11px] font-bold text-primary/40">{card.price}</div>
              </div>
            ))}
          </div>

          {/* Banner Image (Right ~35%) */}
          <div className="lg:flex-[1.2] rounded-[1.5rem] overflow-hidden relative min-h-[200px]">
            <img src="https://images.unsplash.com/photo-1541892079-05994f1b4020?q=80&w=800" className="w-full h-full object-cover" alt="Retro vibe" />
            <div className="absolute inset-0 flex items-center justify-center bg-black/10">
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl border-b-[6px] border-brand text-center transform -rotate-3">
                <div className="font-handwriting text-5xl text-brand mb-1">Fresh</div>
                <div className="font-sans font-black text-3xl tracking-widest text-primary/80">NAILS</div>
                <div className="text-[9px] tracking-[0.4em] font-bold bg-[#A8B7A0] text-white px-3 py-1 rounded mt-2 inline-block shadow-sm">STUDIO</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* --- ABOUT (3 COLUMNS) --- */}
      <section className="max-w-[1600px] mx-auto px-12 py-20 grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Col (Girl with phone) */}
        <div className="lg:col-span-4 relative rounded-[2rem] overflow-hidden h-[500px] lg:h-[650px]">
          <img src="https://images.unsplash.com/photo-1516975080661-46bfa332b800?q=80&w=800" className="w-full h-full object-cover" alt="Girl with phone" />
          <div className="absolute top-12 left-10 font-handwriting text-5xl text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.9)] leading-tight -rotate-3">
            Good<br/>Nails<br/>Good<br/>Mood
          </div>
        </div>

        {/* Middle Col (Text) */}
        <div className="lg:col-span-4 flex flex-col justify-center px-4">
          <div className="text-[11px] text-brand font-bold uppercase tracking-[0.2em] mb-6">О НАС</div>
          <h2 className="text-[2.5rem] leading-[1.1] font-serif text-primary mb-8 tracking-tight">
            Маникюр — это<br/><span className="text-brand">искусство</span><br/>заботы о себе
          </h2>
          <p className="text-sm font-medium text-primary/60 leading-relaxed mb-10 max-w-[280px]">
            Мы создаём не просто маникюр, а эмоции, стиль и безупречный образ. 
            Каждый клиент для нас особенный. Добро пожаловать в Fresh Nails Studio 
            — место, где красота становится вашей частью.
          </p>
          <div className="font-handwriting text-4xl text-brand/80 flex items-center gap-3">
            With love,<br/>Fresh Nails <Heart className="w-6 h-6 fill-accent text-brand/50" />
          </div>
        </div>

        {/* Right Col (3 images grid) */}
        <div className="lg:col-span-4 flex flex-col gap-5 h-[500px] lg:h-[650px]">
          <div className="flex-[1.2] rounded-[2rem] overflow-hidden">
            <img src="/salon_people.png" className="w-full h-full object-cover" alt="Nails detail" />
          </div>
          <div className="flex-1 grid grid-cols-2 gap-5">
            <div className="rounded-[2rem] overflow-hidden">
              <img src="/interior_1.png" className="w-full h-full object-cover" alt="Interior" />
            </div>
            <div className="rounded-[2rem] overflow-hidden">
              <img src="/interior_2.png" className="w-full h-full object-cover" alt="Interior" />
            </div>
          </div>
        </div>
      </section>

      {/* --- GALLERY --- */}
      <section className="max-w-[1600px] mx-auto px-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-6">
          <div className="lg:col-span-4 flex flex-col justify-end pb-4">
            <div className="text-[11px] text-brand font-bold uppercase tracking-[0.2em] mb-4 flex items-center gap-1">
              ГАЛЕРЕЯ РАБОТ <span className="text-lg leading-none">+</span>
            </div>
            <h2 className="text-[2.5rem] leading-[1.1] font-serif text-primary tracking-tight mb-8">
              Вдохновение<br/>в каждой детали
            </h2>
            <button className="border border-primary/20 text-primary rounded-full px-8 py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-white transition flex items-center justify-between w-fit gap-6 shadow-sm">
              СМОТРЕТЬ ВСЕ РАБОТЫ <span className="text-brand text-xl leading-none">+</span>
            </button>
          </div>
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "/nail1.jpg",
              "/nail2.jpg",
              "/nail3.jpg",
              "/nail4.jpg"
            ].map((img, i) => (
              <div key={i} className="aspect-[3/4] rounded-[1.5rem] overflow-hidden group shadow-sm">
                <img src={img} alt="Nail work" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA BANNER --- */}
      <section className="max-w-[1600px] mx-auto px-12 pb-24">
        <div className="bg-brand rounded-[3rem] overflow-hidden flex flex-col md:flex-row items-center justify-between relative">
          
          <div className="text-white py-16 px-12 md:px-24 flex-1">
            <h2 className="text-[3rem] font-serif leading-[1.1] mb-6 tracking-tight">Твоя красота<br/>в одном клике</h2>
            <p className="text-white/90 font-medium text-sm mb-12 max-w-[250px] leading-relaxed">Выбери удобное время<br/>и запишись онлайн</p>
            <button className="bg-background text-brand px-10 py-4 rounded-full font-bold shadow-lg text-[11px] tracking-[0.15em] flex items-center gap-3 hover:bg-white transition-colors">
              ЗАПИСАТЬСЯ <span className="text-xl leading-none">+</span>
            </button>
          </div>

          <div className="relative h-[400px] lg:h-[500px] flex-1 w-full">
            <img src="/nail5.jpg" className="w-full h-full object-cover rounded-tl-[4rem] rounded-bl-[4rem]" alt="Master" />
            
            {/* Stamp on right edge */}
            <div className="absolute top-1/2 -right-8 w-28 h-28 border border-white/40 rounded-full flex items-center justify-center -rotate-12 bg-brand/10 backdrop-blur-sm z-10 hidden md:flex">
              <span className="text-[8px] text-white tracking-[0.2em] uppercase font-bold text-center w-16 leading-tight">Book<br/>Online<br/>Now</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-accent/30 pt-20 pb-12">
        <div className="max-w-[1600px] mx-auto px-12 grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* 1. Logo & Flamingo */}
          <div className="md:col-span-3 pr-4">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex flex-col">
                <div className="font-handwriting text-5xl font-bold text-brand leading-none">Fresh</div>
                <div className="font-sans text-[10px] tracking-[0.3em] font-bold text-primary flex items-center gap-2 mt-1">
                  NAILS STUDIO <Sparkles className="w-3 h-3 text-brand"/>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-[10px] font-bold tracking-[0.15em] leading-[1.8] text-primary/80 uppercase">
                MIAMI VIBES.<br/>PERFECT NAILS.
              </div>
              <div className="text-brand text-4xl font-serif rotate-12">🦩</div>
            </div>
          </div>
          
          {/* 2. Nav */}
          <div className="md:col-span-2">
            <h5 className="font-bold mb-6 tracking-[0.15em] text-[10px] text-primary/50 uppercase">Навигация</h5>
            <div className="flex flex-col gap-4 text-xs font-bold text-primary/80">
              <a href="#" className="hover:text-brand transition-colors">О нас</a>
              <a href="#" className="hover:text-brand transition-colors">Услуги</a>
              <a href="#" className="hover:text-brand transition-colors">Мастера</a>
              <a href="#" className="hover:text-brand transition-colors">Галерея</a>
              <a href="#" className="hover:text-brand transition-colors">Прайс</a>
              <a href="#" className="hover:text-brand transition-colors">Контакты</a>
            </div>
          </div>

          {/* 3. Contacts */}
          <div className="md:col-span-2">
            <h5 className="font-bold mb-6 tracking-[0.15em] text-[10px] text-primary/50 uppercase">Контакты</h5>
            <div className="space-y-4 text-[11px] font-bold text-primary/80 leading-relaxed">
              <p className="flex items-start gap-3"><MapPin size={16} className="text-brand shrink-0 stroke-[2]"/> Miami, FL 33139<br/>Biscayne Blvd, 123</p>
              <p className="flex items-center gap-3"><Phone size={16} className="text-brand shrink-0 stroke-[2]"/> +1 (305) 555-0123</p>
              <p className="flex items-center gap-3"><Mail size={16} className="text-brand shrink-0 stroke-[2]"/> hello@freshnails.studio</p>
              <p className="flex items-center gap-3 pt-2">🕒 Ежедневно 10:00 – 21:00</p>
            </div>
          </div>

          {/* 4. Socials */}
          <div className="md:col-span-2">
             <h5 className="font-bold mb-6 tracking-[0.15em] text-[10px] text-primary/50 uppercase">Мы в соцсетях</h5>
             <div className="flex gap-4">
               <a href="#" className="w-10 h-10 border border-primary/20 rounded-full flex items-center justify-center text-brand hover:bg-brand hover:text-white transition-colors"><InstagramIcon /></a>
               <a href="#" className="w-10 h-10 border border-primary/20 rounded-full flex items-center justify-center text-brand hover:bg-brand hover:text-white transition-colors"><WhatsAppIcon /></a>
               <a href="#" className="w-10 h-10 border border-primary/20 rounded-full flex items-center justify-center text-brand hover:bg-brand hover:text-white transition-colors"><TikTokIcon /></a>
             </div>
          </div>

          {/* 5. Postcard */}
          <div className="md:col-span-3 relative">
             <div className="w-full h-40 rounded-xl overflow-hidden relative shadow-lg rotate-2 group">
               <img src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=400" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Palms" />
               <div className="absolute inset-0 bg-[#A8B7A0]/30 flex flex-col items-center justify-center">
                 <div className="font-handwriting text-[2.5rem] text-background drop-shadow-md leading-none">Wish</div>
                 <div className="font-handwriting text-3xl text-background drop-shadow-md leading-none mt-1">you were here!</div>
               </div>
             </div>
          </div>

        </div>
      </footer>
    </div>
  );
}

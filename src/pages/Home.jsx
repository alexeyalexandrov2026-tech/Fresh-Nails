import React from 'react';
import { Menu, MapPin, Phone, Mail, Diamond, Heart, Scissors, Sparkles, Footprints, Gift, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// SVG Icons for Socials
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
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
  </svg>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-primary font-sans">
      
      {/* --- HEADER --- */}
      <header className="w-full flex justify-between items-center px-12 py-6 border-b border-primary/5 sticky top-0 bg-background/90 backdrop-blur-md z-50">
        <a href="/" className="flex items-center gap-3">
          <img src="/logo.jpg" alt="Logo" className="w-12 h-12 rounded-full shadow-sm" />
          <div className="flex flex-col">
            <div className="font-handwriting text-brand text-3xl leading-none">Fresh</div>
            <div className="text-[9px] tracking-[0.25em] uppercase font-bold mt-1 text-primary">Nails Studio</div>
          </div>
        </a>
        
        <nav className="hidden lg:flex gap-10 text-[11px] font-bold tracking-[0.15em] text-primary/70 uppercase">
          <a href="#about" className="hover:text-brand transition-colors">О нас</a>
          <a href="#services" className="hover:text-brand transition-colors">Услуги</a>
          <a href="#masters" className="hover:text-brand transition-colors">Мастера</a>
          <a href="#gallery" className="hover:text-brand transition-colors">Галерея</a>
          <a href="#services" className="hover:text-brand transition-colors">Прайс</a>
          <a href="#contacts" className="hover:text-brand transition-colors">Контакты</a>
        </nav>
        
        <div className="flex items-center gap-4">
          <a href="https://book.squareup.com/appointments/wi73dsyypui1e7/location/LMSSF03HF97TK/services?fbclid=PAVERFWATiGY5wZG9mAmZkaWQWUMDQXBl4RaFtjswzuvFRZnHjrNdzN2V4dG4DYWVtAjEwAHNydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABp40ljKvao7hcVtQuuSCFvL1ZU7KuetCx9G4Lu2pAcDlGOEa8V5kskE3YAix0_aem_BctOpvEhkxo0vcGKs602Wg" target="_blank" rel="noreferrer" className="hidden md:flex items-center gap-2 bg-brand text-white px-8 py-3 rounded-full text-xs font-bold tracking-wider hover:bg-[#d66b53] transition-colors shadow-sm">
            ЗАПИСАТЬСЯ <span className="text-lg leading-none">+</span>
          </a>
          <button className="lg:hidden text-primary">
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <section className="max-w-[1600px] mx-auto px-12 py-12 md:py-24">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="flex-1 flex flex-col items-start z-10">
            <div className="text-[10px] text-brand font-bold uppercase tracking-[0.25em] mb-6 flex items-center gap-2">
              <Sparkles className="w-3 h-3" /> Премиум уход
            </div>
            
            <h1 className="text-[4rem] md:text-[5.5rem] lg:text-[7rem] leading-[0.9] font-serif text-primary tracking-tight mb-8">
              Fresh<br />
              <span className="font-handwriting text-brand text-[5rem] md:text-[7rem] lg:text-[9rem] leading-[0.5] ml-4 md:ml-12 drop-shadow-sm">Nails</span>
            </h1>
            
            <div className="font-handwriting text-3xl md:text-4xl text-primary/40 -mt-6 md:-mt-10 ml-8 md:ml-24 mb-10 -rotate-3">
              Miami Vibes, Perfect Nails
            </div>
            
            <p className="text-primary/70 text-sm md:text-base max-w-sm mb-12 leading-relaxed">
              Идеальный маникюр и педикюр в атмосфере абсолютного расслабления. Мы заботимся о вашей красоте и здоровье.
            </p>
            
            <div className="flex flex-wrap gap-4 items-center">
              <a href="https://book.squareup.com/appointments/wi73dsyypui1e7/location/LMSSF03HF97TK/services?fbclid=PAVERFWATiGY5wZG9mAmZkaWQWUMDQXBl4RaFtjswzuvFRZnHjrNdzN2V4dG4DYWVtAjEwAHNydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABp40ljKvao7hcVtQuuSCFvL1ZU7KuetCx9G4Lu2pAcDlGOEa8V5kskE3YAix0_aem_BctOpvEhkxo0vcGKs602Wg" target="_blank" rel="noreferrer" className="bg-primary text-white rounded-full px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-brand transition-colors flex items-center gap-3 shadow-md">
                ЗАПИСАТЬСЯ ОНЛАЙН <span className="text-lg leading-none">+</span>
              </a>
            </div>
            
            <div className="mt-16 flex gap-10">
              <div className="flex flex-col gap-1">
                <span className="font-bold text-lg text-primary leading-none">10+</span>
                <span className="text-[10px] uppercase tracking-widest text-primary/50 font-bold">Опытных<br/>мастеров</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-bold text-lg text-primary leading-none">100%</span>
                <span className="text-[10px] uppercase tracking-widest text-primary/50 font-bold">Стерильные<br/>инструменты</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 relative w-full aspect-[4/5] md:aspect-square max-w-2xl mx-auto">
            {/* Background Shape */}
            <div className="absolute top-10 right-10 bottom-10 left-10 bg-accent rounded-[3rem] rotate-3 shadow-[0_0_50px_rgba(255,102,178,0.5)]"></div>
            
            {/* Main Image */}
            <div className="absolute inset-0 rounded-[3rem] overflow-hidden shadow-2xl -rotate-2">
              <img src="/hero_girl.png" className="w-full h-full object-cover object-[65%_20%] md:object-center" alt="Model" />
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES (Cards) --- */}
      <section id="services" className="max-w-[1600px] mx-auto px-12 pb-24 relative z-20 -mt-10 md:mt-0">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:flex-1 hidden lg:flex items-center">
             <div className="text-[11px] uppercase tracking-[0.2em] font-bold text-primary/40 rotate-180" style={{ writingMode: 'vertical-rl' }}>
               Наши популярные услуги
             </div>
          </div>
          
          <div className="lg:flex-[2.2] grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { icon: <MessageCircle className="w-8 h-8 text-brand/80" strokeWidth={1.5} />, title: "GEL MANICURE MEDIUM", price: "$90" },
              { icon: <Scissors className="w-8 h-8 text-brand/80" strokeWidth={1.5} />, title: "GEL MANICURE LONG", price: "$110" },
              { icon: <Sparkles className="w-8 h-8 text-brand/80" strokeWidth={1.5} />, title: "HARD GEL EXTENSIONS", price: "$140" },
              { icon: <Footprints className="w-8 h-8 text-brand/80" strokeWidth={1.5} />, title: "GEL PEDICURE", price: "$95" },
              { icon: <Gift className="w-8 h-8 text-brand/80" strokeWidth={1.5} />, title: "REMOVAL (ACRYLIC/GEL/DIP)", price: "$20" },
            ].map((card, i) => (
              <div key={i} className="bg-white rounded-[1.5rem] border border-primary/5 p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-6">{card.icon}</div>
                <div className="text-[9px] uppercase font-bold tracking-widest mb-3 leading-tight text-primary/90">{card.title}</div>
                <div className="text-[11px] font-bold text-primary/40">{card.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ABOUT US --- */}
      <section id="about" className="max-w-[1600px] mx-auto px-12 py-20 grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Col (Girl with phone) */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <div className="w-[85%] aspect-[3/4] rounded-[2rem] overflow-hidden relative shadow-lg">
            <img src="/about_2.jpg" className="w-full h-full object-cover" alt="Nail detail" />
            <div className="absolute inset-0 flex items-center justify-center bg-black/10">
               {/* Play Button visual */}
               <div className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ml-1"><path d="M5 3l14 9-14 9V3z"/></svg>
               </div>
            </div>
          </div>
          
          <div className="absolute top-12 left-10 font-handwriting text-5xl text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.9)] leading-tight -rotate-3">
             Good<br/>Vibes<br/>Only
          </div>
        </div>

        {/* Right Col (Text + Grid) */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="mb-12">
            <div className="text-[10px] text-brand font-bold uppercase tracking-[0.25em] mb-4">О Нашем Салоне</div>
            <h2 className="text-[3rem] md:text-[4rem] leading-[1] font-serif text-primary tracking-tight mb-8">
              Студия <span className="text-primary/30 font-handwriting text-[4rem] md:text-[5rem] block -mt-4">идеального маникюра</span>
            </h2>
            <p className="text-primary/70 text-sm max-w-lg mb-8 leading-relaxed">
              Мы создали место, где профессионализм встречается с расслабляющей атмосферой Майами. Используем только премиум-материалы и гарантируем 100% стерильность.
            </p>
            <button className="border-b border-primary text-xs font-bold uppercase tracking-widest pb-1 hover:text-brand hover:border-brand transition-colors w-fit">
              ПОДРОБНЕЕ О НАС
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-auto">
            <div className="aspect-[4/3] rounded-[1.5rem] overflow-hidden">
              <img src="/about_1.jpg" className="w-full h-full object-cover" alt="Nails detail" />
            </div>
            <div className="aspect-[4/3] rounded-[1.5rem] overflow-hidden hidden md:block">
              <img src="/interior_1.png" className="w-full h-full object-cover" alt="Interior" />
            </div>
          </div>
        </div>
      </section>

      {/* --- GALLERY --- */}
      <section id="gallery" className="max-w-[1600px] mx-auto px-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-6">
          <div className="lg:col-span-4 flex flex-col justify-end pb-4">
            <div className="text-[11px] text-brand font-bold uppercase tracking-[0.2em] mb-4 flex items-center gap-1">
              НАШИ РАБОТЫ <span className="text-lg leading-none">+</span>
            </div>
            <h2 className="text-[2.5rem] leading-[1.1] font-serif text-primary tracking-tight mb-8">
              Галерея<br/>наших работ
            </h2>
            <button className="border border-primary/20 text-primary rounded-full px-8 py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-white transition flex items-center justify-between w-fit gap-6 shadow-sm">
              СМОТРЕТЬ ВСЕ <span className="text-brand text-xl leading-none">+</span>
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

      {/* --- CTA / MASTERS --- */}
      <section id="masters" className="max-w-[1600px] mx-auto px-12 pb-24">
        <div className="bg-brand rounded-[3rem] overflow-hidden flex flex-col md:flex-row items-center justify-between relative">
          
          <div className="p-12 md:p-20 z-20 flex-1">
            <div className="text-[10px] text-white/80 font-bold uppercase tracking-[0.25em] mb-4">НАША КОМАНДА</div>
            <h2 className="text-[3rem] md:text-[4rem] leading-[1.1] font-serif text-white tracking-tight mb-8">
              Лучшие <br/><span className="font-handwriting text-accent text-[4rem] md:text-[5rem] leading-[0.5] font-normal">мастера</span><br/>города
            </h2>
            <p className="text-white/80 text-sm mb-6">Sofia (Владелица & маникюр/педикюр)<br/>Karina (Мастер педикюра)</p>
            <Link to="/masters" className="bg-white text-brand rounded-full px-8 py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-accent hover:text-primary transition-colors flex items-center gap-3 shadow-md mt-6 w-fit">
              ВЫБРАТЬ МАСТЕРА <span className="text-lg leading-none">+</span>
            </Link>
          </div>

          <div className="relative h-[400px] lg:h-[500px] flex-1 w-full">
            <img src="/nail5.jpg" className="w-full h-full object-cover rounded-tl-[4rem] rounded-bl-[4rem]" alt="Master" />
            
            {/* Stamp on right edge */}
            <div className="absolute top-1/2 -right-8 w-28 h-28 border border-white/40 rounded-full flex items-center justify-center -rotate-12 bg-brand/10 backdrop-blur-sm z-10 hidden md:flex">
              <svg viewBox="0 0 100 100" className="w-full h-full text-white overflow-visible animate-spin-slow" style={{ animationDuration: '15s' }}>
                <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                <text className="text-[12.5px] font-bold uppercase tracking-widest fill-current">
                  <textPath href="#circlePath">EST. 2024 • MIAMI • FRESH NAILS •</textPath>
                </text>
              </svg>
            </div>
          </div>
          
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer id="contacts" className="bg-accent/30 pt-20 pb-12">
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
              <div className="text-brand text-4xl font-serif rotate-12">🌴</div>
            </div>
          </div>
          
          {/* 2. Menu */}
          <div className="md:col-span-2">
            <h5 className="font-bold mb-6 tracking-[0.15em] text-[10px] text-primary/50 uppercase">МЕНЮ</h5>
            <div className="flex flex-col gap-4 text-[11px] font-bold tracking-[0.1em] text-primary/80 uppercase">
              <a href="#about" className="hover:text-brand transition-colors">О НАС</a>
              <a href="#services" className="hover:text-brand transition-colors">УСЛУГИ</a>
              <a href="#masters" className="hover:text-brand transition-colors">МАСТЕРА</a>
              <a href="#gallery" className="hover:text-brand transition-colors">ГАЛЕРЕЯ</a>
              <a href="#contacts" className="hover:text-brand transition-colors">КОНТАКТЫ</a>
            </div>
          </div>

          {/* 3. Contact */}
          <div className="md:col-span-2">
            <h5 className="font-bold mb-6 tracking-[0.15em] text-[10px] text-primary/50 uppercase">КОНТАКТЫ</h5>
            <div className="flex flex-col gap-5 text-[12px] font-medium text-primary/80">
              <a href="https://maps.app.goo.gl/atf3pRFWLDR4tZv46?g_st=ic" target="_blank" rel="noreferrer" className="flex items-start gap-2 hover:text-brand transition-colors"><MapPin className="w-4 h-4 text-brand shrink-0" /> 45 NE 1st Ave,<br/>Dania Beach, FL 33004</a>
              <a href="tel:+19546357725" className="flex items-center gap-2 hover:text-brand transition-colors"><Phone className="w-4 h-4 text-brand" /> +1 (954) 635-7725</a>
              <a href="mailto:Freshnailsstudiollc@gmail.com" className="flex items-center gap-2 hover:text-brand transition-colors break-all"><Mail className="w-4 h-4 text-brand shrink-0" /> Freshnailsstudiollc@gmail.com</a>
              <div className="flex flex-col gap-1 text-primary/60 mt-2 text-[11px]">
                <span className="font-bold text-primary/80">By Appointment Only</span>
                <span>Пн-Пт: 10:00 - 18:00</span>
                <span>Сб: 11:00 - 17:00</span>
                <span>Вс: Выходной</span>
              </div>
            </div>
          </div>

          {/* 4. Socials */}
          <div className="md:col-span-2">
             <h5 className="font-bold mb-6 tracking-[0.15em] text-[10px] text-primary/50 uppercase">МЫ В СОЦСЕТЯХ</h5>
             <div className="flex gap-4">
               <a href="https://instagram.com/freshnailsstudiofl" target="_blank" rel="noreferrer" className="w-10 h-10 border border-primary/20 rounded-full flex items-center justify-center text-brand hover:bg-brand hover:text-white transition-colors"><InstagramIcon className="w-5 h-5"/></a>
               <a href="https://wa.me/19546357725" target="_blank" rel="noreferrer" className="w-10 h-10 border border-primary/20 rounded-full flex items-center justify-center text-brand hover:bg-brand hover:text-white transition-colors"><WhatsAppIcon /></a>
               <a href="#" className="w-10 h-10 border border-primary/20 rounded-full flex items-center justify-center text-brand hover:bg-brand hover:text-white transition-colors"><TikTokIcon /></a>
             </div>
          </div>

          {/* 5. Postcard */}
          <div className="md:col-span-3 relative">
             <div className="w-full h-40 rounded-xl overflow-hidden relative shadow-lg rotate-2 group">
               <img src="/palm_neon.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Palms" />
               <div className="absolute inset-0 bg-brand/30 flex flex-col items-center justify-center">
                 <div className="font-handwriting text-[2.5rem] text-white drop-shadow-md leading-none">Wish</div>
                 <div className="font-handwriting text-3xl text-white drop-shadow-md leading-none mt-1">you were here!</div>
               </div>
             </div>
          </div>

        </div>
        
        <div className="text-center mt-12 text-[10px] text-primary/40 uppercase tracking-widest font-bold flex flex-col gap-2">
          <span>Cancellation policy: 30% fee</span>
          <span>Создано на платформе Gorgona One AI</span>
        </div>
      </footer>
    </div>
  );
}

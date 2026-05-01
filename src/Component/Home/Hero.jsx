import React, { useState, useEffect } from 'react';

const features = [
  'দৈনিক ভোকাল প্র্যাকটিস সেশন',
  'সঠিক উচ্চারণ ও নিউট্রাল অ্যাক্সেন্ট',
  'কনফিডেন্স বিল্ডিং মেথডলজি',
  'লাইফটাইম অ্যাক্সেস ও সাপোর্ট',
];

const heroTitle = '১৫ দিনে ইংলিশ ফ্লুয়েন্সি চ্যালেঞ্জ';
const offerLabel = 'আমাদের মূল্য:';
const currentPrice = '৪৯৯ টাকা';
const oldPrice = '৯৯৯ টাকা';
const ctaText = 'প্রথমি যোগ দিন';
const discountText = 'নতুন গ্রাহকদের জন্য ৫০% ছাড়';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    if (displayedText.length < heroTitle.length) {
      const timer = setTimeout(() => {
        setDisplayedText(heroTitle.slice(0, displayedText.length + 1));
      }, 50);
      return () => clearTimeout(timer);
    } else {
      setIsTypingComplete(true);
    }
  }, [displayedText]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#86d3f2] via-[#e2f2fc] to-[#e8f2fb] px-4 py-20 font-sans text-[#082447] sm:px-8 sm:py-32">
      {/* Decorative cloud-like element */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-white opacity-20 blur-3xl" />
        <div className="absolute left-1/4 top-1/2 h-80 w-80 rounded-full bg-white opacity-15 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        <p className="mb-6 max-w-full rounded-full border-2 border-white/30 bg-white/20 px-6 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#003d82] backdrop-blur-sm sm:text-sm">
          Premium Fluency Challenge
        </p>

        <h1 className="max-w-4xl text-4xl font-black leading-[1.2] tracking-tight text-[#003d82] sm:text-5xl lg:text-6xl min-h-24">
          <span>{displayedText}</span>
          <span className={`${isTypingComplete ? 'hidden' : 'inline-block'} animate-pulse ml-1`}>|</span>
        </h1>

        <div className="mt-12 grid w-full max-w-2xl gap-4 sm:grid-cols-2 sm:gap-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex min-h-16 items-center gap-4 rounded-full border-2 border-white/40 bg-white/95 px-6 py-4 text-left text-sm font-semibold text-[#333] shadow-lg backdrop-blur-sm transition-all hover:bg-white sm:text-base"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#4da6e8] text-sm font-black text-white">
                ✓
              </span>
              <span className="min-w-0">{feature}</span>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-baseline justify-center gap-x-3 gap-y-2 sm:mt-16">
          <span className="text-base font-bold text-[#003d82]">{offerLabel}</span>
          <span className="text-4xl font-black text-[#003d82]">{currentPrice}</span>
          <span className="text-sm font-semibold line-through text-[#666]">
            {oldPrice}
          </span>
        </div>

        <a
          href="#enroll"
          className="mt-10 inline-flex min-h-14 w-full max-w-xs items-center justify-center rounded-full bg-gradient-to-r from-[#0672df] to-[#2196F3] px-8 text-center text-base font-bold text-white no-underline shadow-xl transition-all hover:shadow-2xl hover:-translate-y-1 sm:min-h-16 sm:max-w-sm sm:text-lg"
        >
          → {ctaText}
        </a>

        <p className="mt-8 text-sm font-semibold text-[#003d82]">
          {discountText}
        </p>
      </div>
    </section>
  );
};

export default Hero;

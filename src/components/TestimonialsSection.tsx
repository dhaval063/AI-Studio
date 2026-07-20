import React, { useRef, useState, useEffect } from 'react';
import { testimonials } from '../data/products';

export default function TestimonialsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const hasInitializedRef = useRef(false);
  const timeoutRef = useRef<any>(null);

  // We duplicate the testimonials list 3 times to ensure perfect continuous infinite scrolling
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const singleWidth = container.scrollWidth / 3;

    // Set initial scroll position to the start of the middle set exactly once
    if (!hasInitializedRef.current && singleWidth > 0) {
      container.scrollLeft = singleWidth;
      hasInitializedRef.current = true;
    }

    let currentScrollLeft = container.scrollLeft;
    let animationFrameId: number;

    const animate = () => {
      if (!isPaused && !isDragging) {
        // Scroll Right-to-Left: increment scrollLeft (causes cards to enter from right and move left)
        currentScrollLeft += 0.75; // Smooth slow speed

        // Wrap around seamlessly
        if (currentScrollLeft >= 2 * singleWidth) {
          currentScrollLeft -= singleWidth;
        } else if (currentScrollLeft <= 0) {
          currentScrollLeft += singleWidth;
        }

        container.scrollLeft = Math.round(currentScrollLeft);
      } else {
        // Keep scroll tracking in sync during user interaction
        currentScrollLeft = container.scrollLeft;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPaused, isDragging]);

  // Initials generator
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((part) => part.charAt(0))
      .filter((char) => /[A-Za-z]/.test(char))
      .join('')
      .slice(0, 2)
      .toUpperCase();
  };

  // Drag and swipe start
  const handleMouseDown = (e: React.MouseEvent) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    setIsDragging(true);
    startXRef.current = e.pageX - container.offsetLeft;
    scrollLeftRef.current = container.scrollLeft;
  };

  // Drag moving
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const container = scrollContainerRef.current;
    if (!container) return;
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    container.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  // Touch handlers for mobile/tablet native scroll pausing
  const handleTouchStart = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsPaused(true);
  };

  const handleTouchEnd = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 1500);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <section id="home-testimonials" className="py-20 bg-slate-50/50 overflow-hidden border-y border-slate-100/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-[10px] sm:text-[11px] font-extrabold text-teal-800 bg-teal-50 px-3.5 py-1.5 rounded-full uppercase tracking-widest font-mono border border-teal-100/60 inline-block">
            GLOBAL CUSTOMER FEEDBACK
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            What Our International Buyers Say
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            Trusted by importers, distributors, hospitality suppliers, and foodservice businesses across international markets.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative w-screen left-1/2 right-1/2 -ml-[50vw] overflow-hidden py-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            if (!isDragging) setIsPaused(false);
          }}
        >
          {/* Subtle gradient overlays for smooth premium fade effect at edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-r from-slate-50/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-l from-slate-50/90 to-transparent z-10 pointer-events-none" />

          {/* Scrolling Track */}
          <div
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={handleMouseUpOrLeave}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="flex space-x-6 overflow-x-auto scrollbar-none cursor-grab active:cursor-grabbing select-none px-4 sm:px-12"
            style={{
              scrollBehavior: 'auto',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {duplicatedTestimonials.map((t, idx) => (
              <div
                key={`${t.id}-${idx}`}
                className="w-[280px] sm:w-[340px] h-[210px] sm:h-[230px] flex-shrink-0 bg-white border border-slate-100 rounded-2xl p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.015)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.03)] hover:border-slate-200/80 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Five gold stars & Quote text */}
                <div className="space-y-3.5">
                  <div className="flex space-x-1 text-amber-400 text-sm">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="leading-none">★</span>
                    ))}
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed italic line-clamp-4 font-medium">
                    "{t.text}"
                  </p>
                </div>

                {/* Profile Avatar & Country (No designation/company as requested) */}
                <div className="flex items-center space-x-3 pt-4 border-t border-slate-100/80">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-teal-50/80 border border-teal-100/50 flex items-center justify-center text-teal-800 font-black text-xs sm:text-sm flex-shrink-0">
                    {getInitials(t.name)}
                  </div>
                  <div className="text-left leading-tight">
                    <p className="font-bold text-slate-800 text-xs sm:text-sm">{t.name}</p>
                    <p className="text-slate-500 text-[10px] sm:text-xs mt-0.5 flex items-center gap-1.5 font-semibold">
                      <span className="text-xs sm:text-sm">{t.image}</span> {t.country}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

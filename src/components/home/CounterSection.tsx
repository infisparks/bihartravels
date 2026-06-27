import React, { useEffect, useState, useRef } from 'react';
import { counters } from '@/data/homeData';

function AnimateCounter({ targetNumber }: { targetNumber: number }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    let active = true;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && active) {
          let start = 0;
          const end = targetNumber;
          if (start === end) {
            setCount(end);
            return;
          }
          const totalDuration = 1500;
          const stepTime = Math.max(Math.floor(totalDuration / end), 25);
          const increment = Math.max(Math.floor(end / (totalDuration / stepTime)), 1);

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, stepTime);

          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      active = false;
      observer.disconnect();
    };
  }, [targetNumber]);

  return (
    <h2 className="counter" ref={elementRef}>
      {count}
    </h2>
  );
}

export default function CounterSection() {
  const getColClass = (index: number) => {
    if (index === 0) return 'col-lg-3 col-sm-6 divider';
    if (index === counters.length - 1) return 'col-lg-3 col-sm-6 d-flex justify-content-lg-end';
    return 'col-lg-3 col-sm-6 divider d-flex justify-content-lg-center';
  };

  return (
    <div className="counter-section two mb-100">
      <div className="container">
        <div className="row gy-md-5 gy-4">
          {counters.map((counter, index) => {
            const iconClass = `icon ${counter.iconColor !== 'default' ? counter.iconColor : ''}`.trim();
            const target = parseInt(counter.number, 10) || 0;
            return (
              <div className={getColClass(index)} key={counter.id}>
                <div className="single-counter">
                  <div className={iconClass} dangerouslySetInnerHTML={{ __html: counter.iconSvg }} />
                  <div className="content">
                    <div className="number">
                      <AnimateCounter targetNumber={target} />
                      <span>{counter.suffix}</span>
                    </div>
                    <span>{counter.title}</span>
                  </div>
                </div>
                {index < counters.length - 1 && (
                  <svg className="line" width="6" height="215" viewBox="0 0 6 215" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.5 5L5.88675 0H0.113249L2.5 5H3.5ZM2.5 210L0.113249 215H5.88675L3.5 210H2.5ZM2.5 4.5V210.5H3.5V4.5H2.5Z"></path>
                  </svg>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useRef, useState } from 'react';
import { MapPin } from 'lucide-react';
import "./style.css";
import "./slicerslide.css";
import { properties } from '../../data/Property';

const SwipperFind = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const runningTimeRef = useRef<HTMLDivElement>(null);
  
  // Use a single timer ID reference for better control
  const autoTimerRef = useRef<NodeJS.Timeout | null>(null);
  const transitionTimerRef = useRef<NodeJS.Timeout | null>(null);
  
  // Reset animation timer
  const resetTimeAnimation = () => {
    if (runningTimeRef.current) {
      // Stop and restart the animation
      runningTimeRef.current.style.animation = 'none';
      runningTimeRef.current.offsetHeight; // trigger reflow
      runningTimeRef.current.style.animation = 'runningTime 7s linear 1 forwards';
    }
  };

  // Clear all timers
  const clearAllTimers = () => {
    if (autoTimerRef.current) {
      clearTimeout(autoTimerRef.current);
      autoTimerRef.current = null;
    }
    
    if (transitionTimerRef.current) {
      clearTimeout(transitionTimerRef.current);
      transitionTimerRef.current = null;
    }
  };
  
  // Start auto timer
  const startAutoTimer = () => {
    clearAllTimers(); // Make sure we clear existing timers first
    
    autoTimerRef.current = setTimeout(() => {
      showSlider('next');
    }, 7000);
    
    // Reset time animation
    resetTimeAnimation();
  };

  // Handle slide transition
  const showSlider = (type: 'next' | 'prev') => {
    const list = listRef.current;
    const carousel = carouselRef.current;
    
    if (!list || !carousel) return;
    
    // Clear all existing timers
    clearAllTimers();
    
    const sliderItemsDom = list.querySelectorAll('.item');
    
    if (type === 'next') {
      list.appendChild(sliderItemsDom[0]);
      carousel.classList.add('next');
    } else {
      list.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
      carousel.classList.add('prev');
    }

    // Set timer to remove transition class
    transitionTimerRef.current = setTimeout(() => {
      carousel.classList.remove('next');
      carousel.classList.remove('prev');
    }, 3000);
    
    // Restart the auto timer
    startAutoTimer();
  };

  // Initialize slider on component mount
  useEffect(() => {
    // Start initial auto timer
    startAutoTimer();
    
    // Clean up timers on unmount
    return () => {
      clearAllTimers();
    };
  }, []);


  return (
    <section className="relative bg-gray-500">

              <div className="carousel" ref={carouselRef}>
              <div className='h-[540px]'></div>

              <div className="list" ref={listRef}>
                {properties.map((prop, index) => (
                  <div 
                    key={index} 
                    className="item" 
                    style={{ backgroundImage: `url(${prop.image})` }}
                  >
                    <div className="content">
                      <div className="title">{prop.title}</div>
                      <div className="name">{prop.price} Dhs</div>
                      <div className="des flex"><MapPin/>{prop.location}</div>
                      <div className="btn">
                        <button>Voir Plus</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* next prev button */}
              <div className="arrows">
                <button 
                  className="prev" 
                  onClick={() => showSlider('prev')}
                >
                  &lt;
                </button>
                <button 
                  className="next" 
                  onClick={() => showSlider('next')}
                >
                  &gt;
                </button>
              </div>

              {/* time running */}
              <div className="timeRunning" ref={runningTimeRef}></div>
            </div>
    </section>
  );
};

export default SwipperFind;
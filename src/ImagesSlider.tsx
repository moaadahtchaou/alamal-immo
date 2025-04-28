import React, { useState, useEffect, useRef } from 'react';
import './ImagesSlider.css'; // Assuming you have the CSS file

export default function ImagesSlider() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const runningTimeRef = useRef<HTMLDivElement>(null);
  
  // State to track auto-running timers and animation
  const [timers, setTimers] = useState<{ runTimeout: number | null; autoNextTimeout: number | null }>({ runTimeout: null, autoNextTimeout: null });
  
  // Images data to make the component more maintainable
  const images = [
    { 
      url: "../public/image/eagel1.jpg", 
      title: "SLIDER", 
      name: "EAGLE", 
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae." 
    },
    { 
      url: "../public/image/owl1.jpg", 
      title: "SLIDER", 
      name: "OWL", 
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae." 
    },
    { 
      url: "../public/image/crow.jpg", 
      title: "SLIDER", 
      name: "CROW", 
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae." 
    },
    { 
      url: "../public/image/butterfly1.jpeg", 
      title: "SLIDER", 
      name: "BUTTERFLY", 
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae." 
    },
    { 
      url: "../public/image/parrot1.jpg", 
      title: "SLIDER", 
      name: "PARROT", 
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae." 
    }
  ];

  // Reset animation timer
  const resetTimeAnimation = () => {
    if (runningTimeRef.current) {
      runningTimeRef.current.style.animation = 'none';
      runningTimeRef.current.offsetHeight; // trigger reflow
      runningTimeRef.current.style.animation = '';
      runningTimeRef.current.style.animation = 'runningTime 7s linear 1 forwards';
    }
  };

  // Handle slide transition
  const showSlider = (type: 'next' | 'prev') => {
    const list = listRef.current;
    const carousel = carouselRef.current;
    
    if (!list || !carousel) return;
    
    const sliderItemsDom = list.querySelectorAll('.item');
    
    // Clear existing timers
    if (timers.runTimeout) clearTimeout(timers.runTimeout);
    if (timers.autoNextTimeout) clearTimeout(timers.autoNextTimeout);
    
    if (type === 'next') {
      list.appendChild(sliderItemsDom[0]);
      carousel.classList.add('next');
    } else {
      list.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
      carousel.classList.add('prev');
    }

    // Set timer to remove transition class
    const runTimeout = setTimeout(() => {
      carousel.classList.remove('next');
      carousel.classList.remove('prev');
    }, 3000);
    
    // Set timer for auto-next slide
    const autoNextTimeout = setTimeout(() => {
      showSlider('next');
    }, 7000);
    
    // Update timers state
    setTimers({ runTimeout, autoNextTimeout });
    
    // Reset time animation
    resetTimeAnimation();
  };

  // Initialize slider on component mount
  useEffect(() => {
    // Start animation
    resetTimeAnimation();
    
    // Set initial auto-next timer
    const initialAutoNext = setTimeout(() => {
      showSlider('next');
    }, 7000);
    
    setTimers({ runTimeout: null, autoNextTimeout: initialAutoNext });
    
    // Clean up timers on unmount
    return () => {
      if (timers.runTimeout) clearTimeout(timers.runTimeout);
      if (timers.autoNextTimeout) clearTimeout(timers.autoNextTimeout);
    };
  }, []);

  return (
    <div className="carousel" ref={carouselRef}>
      <div className="list" ref={listRef}>
        {images.map((image, index) => (
          <div 
            key={index} 
            className="item" 
            style={{ backgroundImage: `url(${image.url})` }}
          >
            <div className="content">
              <div className="title">{image.title}</div>
              <div className="name">{image.name}</div>
              <div className="des">{image.description}</div>
              <div className="btn">
                <button>See More</button>
                <button>Subscribe</button>
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
  );
}
import React, { useEffect } from 'react';

interface TestimonialItem {
  name: string;
  avatar: string;
  text: string;
}

const testimonialsData: TestimonialItem[] = [
  {
    name: "Felicia Mathew",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Invoice HUB 360 has completely transformed our billing workflow. We can now generate professional invoices in seconds, automated sales tax calculations are 100% accurate, and getting paid takes half the time."
  },
  {
    name: "Jovan Andrew",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "The estimates and invoicing workflow is incredibly smooth. Converting approved estimates into active invoices with one click saves us hours of manual rework every week. I highly recommend it!"
  },
  {
    name: "David Hells",
    avatar: "https://randomuser.me/api/portraits/men/85.jpg",
    text: "We love the role-based user access and audit logging features. They give our finance team complete security and control over our invoicing operations. The custom reports are clean and audit-ready."
  },
  {
    name: "Sarah Jenkins",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Managing customer accounts, product lists, and tracking payments is extremely simple. The clean, modern dashboard gives us instant visibility into outstanding balances and daily cash flows."
  },
  {
    name: "Michael Zhang",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    text: "The API integration and overall developer-friendly setup made it extremely easy to connect Invoice HUB 360 with our customized backend. Our team was up and running in less than an hour."
  },
  {
    name: "Elena Rostova",
    avatar: "https://randomuser.me/api/portraits/women/49.jpg",
    text: "As a product manager, I value clarity and data integrity. Invoice HUB 360's automated tax compliance and location-based state rules took all the guesswork out of our billing operations."
  },
  {
    name: "James Thompson",
    avatar: "https://randomuser.me/api/portraits/men/52.jpg",
    text: "Custom billing templates allow us to maintain consistent brand styling across all client-facing document layouts. It looks premium and sets a highly professional tone from day one."
  },
  {
    name: "Amanda Ross",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    text: "Outstanding balances and overdue reminders are sent automatically, making follow-ups completely stress-free. Our average days-to-pay metric fell from two weeks to under three days."
  }
];

export const Testimonials: React.FC = () => {
  useEffect(() => {
    // Testimonial Scrollbar Auto-Scroll Logic
    const scrollContainer = document.querySelector('.testimonial-scroll-container') as HTMLElement;
    let scrollInterval: any;
    let isMouseOver = false;

    const handleMouseEnter = () => { isMouseOver = true; };
    const handleMouseLeave = () => { isMouseOver = false; };

    if (scrollContainer) {
      const startScroll = () => {
        scrollInterval = setInterval(() => {
          if (!isMouseOver) {
            scrollContainer.scrollTop += 1;

            // Loop back to top once reached the end
            if (scrollContainer.scrollTop + scrollContainer.clientHeight >= scrollContainer.scrollHeight - 2) {
              scrollContainer.scrollTop = 0;
            }
          }
        }, 30);
      };

      scrollContainer.addEventListener('mouseenter', handleMouseEnter);
      scrollContainer.addEventListener('mouseleave', handleMouseLeave);

      startScroll();
    }

    return () => {
      if (scrollContainer) {
        clearInterval(scrollInterval);
        scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
        scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <section className="testimonials-section" id="Testimonials">
      <div className="">
        <div className="row align-items-center">
          {/* Left Column: Heading and Info */}
          <div className="col-lg-5 col-md-12 testimonials-left">
            <h2 className="home-section-title">Customer Give Their <span>Testimonial</span></h2>
            <p className="testimonials-desc">
              Discover how businesses like yours simplify billing, automate tax compliance, and accelerate payments using INVOICE HUB 360's intelligent financial platform.
            </p>
          </div>

          {/* Right Column: Vertically Autoplay Scrolling Testimonials List */}
          <div className="col-lg-7 col-md-12 testimonials-right">
            <div className="testimonial-scroll-container">

              {/* Set 1 */}
              {testimonialsData.map((item, idx) => (
                <div className="testimonial-card" key={`set1-${idx}`}>
                  <div className="card-top">
                    <div className="quote-mark">“</div>
                    <img src={item.avatar} alt={item.name} className="client-avatar" />
                  </div>
                  <div className="card-body">
                    <p className="testimonial-text">"{item.text}"</p>
                    <h4 className="client-name">{item.name}</h4>
                  </div>
                </div>
              ))}

              {/* Set 2 (Duplicate for continuous loop) */}
              {testimonialsData.map((item, idx) => (
                <div className="testimonial-card" key={`set2-${idx}`}>
                  <div className="card-top">
                    <div className="quote-mark">“</div>
                    <img src={item.avatar} alt={item.name} className="client-avatar" />
                  </div>
                  <div className="card-body">
                    <p className="testimonial-text">"{item.text}"</p>
                    <h4 className="client-name">{item.name}</h4>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

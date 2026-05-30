import React from 'react';
import { TestimonialData } from '@/data/homeData';

interface TestimonialCardProps {
  testimonialData: TestimonialData;
}

export default function TestimonialCard({ testimonialData }: TestimonialCardProps) {
  const renderRating = () => {
    if (testimonialData.ratingType === 'trustpilot') {
      return (
        <ul className="rating-area trustpilot">
          {[...Array(5)].map((_, i) => (
            <li key={i}>
              <svg width="11" height="10" viewBox="0 0 11 10" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.25 7.57409L7.53125 6.99627L8.48437 9.93221L5.25 7.57409ZM10.5 3.77924H6.48437L5.25 0L4.01562 3.77924H0L3.25 6.12174L2.01562 9.90097L5.26562 7.55847L7.26562 6.12174L10.5 3.77924Z" />
              </svg>
            </li>
          ))}
        </ul>
      );
    } else {
      const stars = [];
      const fullStars = Math.floor(testimonialData.rating);
      const hasHalf = testimonialData.rating % 1 !== 0;

      for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
          stars.push(<li key={i}><i className="bi bi-circle-fill"></i></li>);
        } else if (i === fullStars && hasHalf) {
          stars.push(<li key={i}><i className="bi bi-circle-half"></i></li>);
        } else {
          stars.push(<li key={i}><i className="bi bi-circle"></i></li>);
        }
      }
      return <ul className="rating-area">{stars}</ul>;
    }
  };

  return (
    <div className="testimonial-card three">
      {renderRating()}
      <h5>{testimonialData.title}</h5>
      <p>{testimonialData.text}</p>
      <div className="author-area">
        <div className="author-img">
          <img src={testimonialData.authorImage} alt={testimonialData.authorName} />
        </div>
        <div className="author-info">
          <h5>{testimonialData.authorName}</h5>
          <span>{testimonialData.authorRole}</span>
        </div>
      </div>
    </div>
  );
}

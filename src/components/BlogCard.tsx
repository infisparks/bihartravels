import React from 'react';
import { BlogData } from '@/data/homeData';

interface BlogCardProps {
  blogData: BlogData;
}

export default function BlogCard({ blogData }: BlogCardProps) {
  return (
    <div className="blog-card2">
      <div className="blog-img-wrap">
        <a href={blogData.detailsLink} className="blog-img">
          <img src={blogData.image} alt={blogData.title} />
        </a>
        <a href={blogData.locationLink} className="blog-date">
          {blogData.date.day} <span>{blogData.date.month}</span>
        </a>
      </div>
      <div className="blog-content">
        <a href={blogData.locationLink} className="location">
          <svg width="14" height="16" viewBox="0 0 14 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.81276 0C3.31734 0 0.473053 2.84433 0.473053 6.34163C0.473053 9.07242 4.2847 13.5258 5.92356 15.3136C6.15052 15.5628 6.47606 15.7042 6.81276 15.7042C7.14946 15.7042 7.475 15.5628 7.70196 15.3136C9.34082 13.5258 13.1525 9.07238 13.1525 6.34163C13.1525 2.84433 10.3082 0 6.81276 0ZM7.35966 14.9991C7.21642 15.1535 7.02297 15.2391 6.81276 15.2391C6.60255 15.2391 6.4091 15.1536 6.26586 14.9991C4.66417 13.2525 0.93812 8.90875 0.93812 6.34167C0.93812 3.10103 3.57221 0.465067 6.81276 0.465067C10.0533 0.465067 12.6874 3.10103 12.6874 6.34167C12.6874 8.90875 8.96135 13.2524 7.35966 14.9991Z" />
            <path d="M6.81277 9.76647C8.6713 9.76647 10.1779 8.25983 10.1779 6.4013C10.1779 4.54277 8.6713 3.03613 6.81277 3.03613C4.95424 3.03613 3.4476 4.54277 3.4476 6.4013C3.4476 8.25983 4.95424 9.76647 6.81277 9.76647Z" />
          </svg>
          {blogData.location}
        </a>
        <h4>
          <a href={blogData.detailsLink}>{blogData.title}</a>
        </h4>
      </div>
    </div>
  );
}

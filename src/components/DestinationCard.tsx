import React from 'react';
import { DestinationData } from '@/data/homeData';

interface DestinationCardProps {
  destinationData: DestinationData;
}

export default function DestinationCard({ destinationData }: DestinationCardProps) {
  return (
    <div className="destination-card2">
      <a href={destinationData.link} className="destination-img">
        <img src={destinationData.image} alt={destinationData.title} />
      </a>
      <div className="destination-content">
        <h5>
          <a href={destinationData.link}>{destinationData.title}</a>
        </h5>
        <span>Tours ({destinationData.toursCount})</span>
      </div>
    </div>
  );
}

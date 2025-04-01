import React from "react";

type HackathonCardProps = {
  title: string;
  date: string;
  location: string;
  description: string;
  link?: string;
};

const HackathonCard: React.FC<HackathonCardProps> = ({
  title,
  date,
  location,
  description,
  link,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
      <h2 className="text-xl font-bold text-gray-800">{title}</h2>
      <p className="text-sm text-gray-600">{date} • {location}</p>
      <p className="mt-2 text-gray-700">{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-blue-600 hover:underline font-medium"
        >
          Learn More
        </a>
      )}
    </div>
  );
};

export default HackathonCard;

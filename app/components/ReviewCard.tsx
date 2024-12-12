import React from 'react';

interface ReviewCardProps {
  text: string;
  authorName: string;
  authorRole: string;
  authorImage: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  text,
  authorName,
  authorRole,
  authorImage,
}) => {
  return (
    <div className="flex flex-col bg-white shadow-md rounded-3xl p-4 sm:p-6 h-full w-full min-w-[300px] md:min-w-0">
      <p className="text-gray-800 text-lg italic mb-4">{text}</p>
      <div className="flex items-center mt-auto">
        <img
          src={authorImage}
          alt={authorName}
          className="w-10 h-10 rounded-full mr-3 object-cover"
        />
        <div className="text-sm">
          <p className="font-semibold text-gray-900">{authorName}</p>
          <p className="text-gray-500">{authorRole}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;

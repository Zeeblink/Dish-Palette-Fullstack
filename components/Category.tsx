// components/CategoryButton.tsx
import React from 'react';

type CategoryButtonProps = {
  name: string;
};

const CategoryButton = ({ name }: CategoryButtonProps) => {
  return (
    <button className="bg-white text-gray-800 px-4 py-2 rounded-md shadow-md hover:bg-primary hover:text-white">
      {name}
    </button>
  );
};

export default CategoryButton;

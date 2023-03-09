import React from 'react';

const Breadcrumb = ({ pages }) => {
  return (
    <div className="flex items-center text-gray-500 text-sm font-medium">
      {pages.map((page, index) => {
        return (
          <div key={index}>
            <a href={page.url} className="hover:text-gray-700">{page.name}</a>
            {index !== pages.length - 1 && <span className="mx-2">/</span>}
          </div>
        );
      })}
    </div>
  );
};

export default Breadcrumb;

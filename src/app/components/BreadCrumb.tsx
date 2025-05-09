"use client";

import React from "react";

interface BreadcrumbProps {
  title: string;
  subtitle?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ title, subtitle }) => {
  return (
    <div className="relative bg-primary min-h-[190px] flex items-end pb-0 mb-24">
      <div className="w-full absolute bottom-[-60px] md:bottom-[-100px] px-4 sm:px-20">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl px-12 py-12 md:py-14 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-800">{title}</h1>
          {subtitle && (
            <p className="mt-4 text-gray-500 font-serif text-sm sm:text-base">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;

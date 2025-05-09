'use client'; // Add this if using App Router and you face hydration issues

import React from "react";

const BookAppointment: React.FC = () => {
  return (
    <section>
      <div className="relative h-screen w-full overflow-hidden mt-32 mb-20">
        {/* Background Layer */}
        <div className="absolute inset-0 bg-gray-200 opacity-50" />

        {/* Content Layer */}
        <div className="relative z-10 flex justify-center items-center min-h-screen w-full">
          <div className="w-full max-w-screen-xl">
            <iframe
              title="Embedded Appointment Booking"
              className="w-full h-screen border-none"
              src="https://meet-my-doctor.firebaseapp.com/#/app?eid=42459"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookAppointment;

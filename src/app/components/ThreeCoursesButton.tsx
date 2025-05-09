// components/ThreeCoursesButton.tsx
"use client"; // Make this a client-side component

import { useRouter } from "next/navigation"; // Import from next/navigation instead of next/router

interface ThreeCoursesButtonProps {
  activeCourse: number; // 1 for Course 1, 2 for Course 2, 3 for Course 3
}

const ThreeCoursesButton: React.FC<ThreeCoursesButtonProps> = ({ activeCourse }) => {
  const router = useRouter();

  const handleCourseClick = (courseId: number) => {
    // Map the courseId to the appropriate URL slug
    const courseSlug = courseId === 1 ? "level-one" : courseId === 2 ? "level-two" : "level-three";
    router.push(`/courses/${courseSlug}`);
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-10">
      {/* Level 1 Button */}
      <button
        onClick={() => handleCourseClick(1)}
        className={`${
          activeCourse === 1
            ? "bg-[#557a1f] hover:bg-[#557a1f]/80"
            : "bg-primary hover:bg-[#90b457]"
        } text-white font-semibold px-6 py-3 rounded-md shadow`}
      >
        Level 1: Launchpad
      </button>

      {/* Level 2 Button */}
      <button
        onClick={() => handleCourseClick(2)}
        className={`${
          activeCourse === 2
            ? "bg-[#557a1f] hover:bg-[#557a1f]/80"
            : "bg-primary hover:bg-[#90b457]"
        } text-white font-semibold px-6 py-3 rounded-md shadow`}
      >
        Level 2: Professional
      </button>

      {/* Level 3 Button */}
      <button
        onClick={() => handleCourseClick(3)}
        className={`${
          activeCourse === 3
            ? "bg-[#557a1f] hover:bg-[#557a1f]/80"
            : "bg-primary hover:bg-[#90b457]"
        } text-white font-semibold px-6 py-3 rounded-md shadow`}
      >
        Level 3: Personal Mentorship
      </button>
    </div>
  );
};

export default ThreeCoursesButton;

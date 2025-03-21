import Image from "next/image";
import Link from "next/link";

const courses = [
  {
    level: "Level 1",
    title: "Hijama Practitioner Launchpad",
    image: "/cup-img.png",
    features: [
      "Human Body, Health & Disease",
      "Metaphysical aspect affecting Wellness",
      "Anatomy & Physiology",
    ],
    link: "/courses/level-one",
  },
  {
    level: "Level 2",
    title: "Hijama Practitioner Pro",
    image: "/cup-img.png",
    features: [
      "Anatomy & Physiology Extended",
      "Disease/Condition diagnosis",
      "Disease/Condition treatment approach",
    ],
    link: "/courses/level-two",
  },
  {
    level: "Level 3",
    title: "Hijama Practitioner Pro Plus",
    image: "/cup-img.png",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    link: "/",
  },
];

export default function CoursesSection() {
  return (
    <div className="container mx-auto p-6">
      <div className="grid lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div key={index} className="border rounded-lg shadow-md p-6 text-center relative">
            <div className="absolute top-0 left-0 w-full h-3 bg-primary rounded-t-lg"></div>
            <h2 className="text-xl font-semibold mt-3">{course.level}</h2>
            
            {/* Title with Link */}
            <h3 className="text-lg font-bold">
              <Link href={course.link} className="text-green-600 underline hover:text-green-700">
                {course.title}
              </Link>
            </h3>

            <div className="flex justify-center my-4">
              <Image src={course.image} alt="Cup Image" width={80} height={80} />
            </div>
            <p className="font-medium">What You Will Learn :-</p>
            <ul className="text-left mt-2 space-y-1">
              {course.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <span className="mr-2">✔</span> {feature}
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <Link href={course.link} className="bg-primary text-white px-4 py-2 rounded-md inline-block">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

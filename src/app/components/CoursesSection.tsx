import Image from "next/image";
import Link from "next/link";

const courses = [
  {
    level: "Level 1",
    title: "Hijama Practitioner Launchpad",
    image: "/cup-img.png",
    features: [
      "Proficiency: Level 1",
      "Duration: 5 days",
      "Format: 3 days Theory + 2 days Practical",
    ],
    link: "/courses/level-one",
  },
  {
    level: "Level 2",
    title: "Hijama Practitioner Pro",
    image: "/cup-img.png",
    features: [
      "Proficiency: Level 2",
      "Duration: 4 days + 7 days internship",
      "Format: Hands-on practice + Advanced theory",
    ],
    link: "/courses/level-two",
  },
  {
    level: "Level 3",
    title: "Hijama Practitioner Pro Plus",
    image: "/cup-img.png",
    features: [
      "Proficiency: Master",
      "Duration: 4 weeks",
      "Format: 15 Hours of One-on-One Training & Mentoring, Live Cases, and Intern experience under supervision",
    ],
    link: "/",
  },
];

export default function CoursesSection() {
  return (
    <section className="bg-white pt-8 md:pt-20 pb-16 px-4 md:px-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl shadow-md flex flex-col justify-between p-6 text-center relative"
          >
            {/* Top Badge */}
            <div className="absolute top-0 left-0 w-full h-2 bg-primary rounded-t-2xl" />

            {/* Card Content */}
            <div className="flex flex-col grow">
              {/* Level Label */}
              <h2 className="text-lg font-semibold mt-4 text-gray-700">
                Level{" "}
                <span className="font-sans font-medium">
                  {course.level.replace("Level ", "")}
                </span>
              </h2>

              {/* Title */}
              <h3 className="text-xl font-bold text-green-700 mt-2 mb-4">
                <Link href={course.link} className="hover:underline">
                  {course.title}
                </Link>
              </h3>

              {/* Image */}
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center shadow-inner">
                  <Image
                    src={course.image}
                    alt="Cup Image"
                    width={50}
                    height={50}
                  />
                </div>
              </div>

              {/* Features List */}
              <p className="font-medium text-gray-800 mb-2">
                What You Will Learn:
              </p>
              <ul className="space-y-2 text-gray-600 text-sm text-left px-4">
                {course.features.map((feature, i) => {
                  const [label, value] = feature.split(":");
                  return (
                    <li key={i} className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1">✓</span>
                      <span>
                        <span className="font-semibold">{label.trim()}:</span>{" "}
                        {value?.trim()}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Button */}
            <div className="mt-8">
              <Link
                href={course.link}
                className="inline-block bg-primary text-white px-5 py-2 rounded-md font-medium hover:bg-primary/90 transition duration-200"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

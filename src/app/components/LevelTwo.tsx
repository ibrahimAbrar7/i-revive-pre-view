import React from "react";

const LevelTwo = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* First Row: Content + Video */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side: Course Content */}
        <div>
          <h2 className="text-2xl font-bold">
            Course Name: <br /> Hijama Practitioner Pro
          </h2>
          <p>
            <span className="font-semibold">Proficiency:</span> Level 2
          </p>
          <p>
            <span className="font-semibold">Duration:</span> 4 days + 7 days as
            intern at i-Revive Wellness Clinic
          </p>
          <p>
            <span className="font-semibold">Format:</span> Hands-on practice +
            Advanced theory
          </p>
          <p>
            Building upon Level One, this course advances practitioners&apos;
            proficiency in Hijama therapy...
          </p>
          <div className="mt-10">
        <h3 className="text-xl font-bold">
          By the conclusion of Level Two, participants will:
        </h3>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>Accurately diagnose and treat various conditions.</li>
          <li>Manage pain and provide relief effectively.</li>
          <li>Implement dry gliding & facial cupping techniques.</li>
          <li>Integrate complementary procedures.</li>
        </ul>

        <h3 className="text-xl font-bold mt-6">Who Is This Course For?</h3>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>Those who have completed Level 1.</li>
          <li>Practitioners looking to master advanced Hijama techniques.</li>
        </ul>

        <h3 className="text-xl font-bold mt-6">What You’ll Learn:</h3>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>Extended Anatomy & Physiology</li>
          <li>Advanced disease diagnosis & treatment.</li>
          <li>Pain Management strategies.</li>
          <li>Facial & Gliding Cupping Techniques</li>
        </ul>

        <h3 className="text-xl font-bold mt-6">Why Choose Our Course?</h3>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            <strong>Expertly Designed Curriculum:</strong> Advanced training
            backed by medical professionals.
          </li>
          <li>
            <strong>Hands-on Experience:</strong> Intern at a real wellness
            clinic.
          </li>
          <li>
            <strong>Globally Certified:</strong> Meets international standards.
          </li>
        </ul>
      </div>
        </div>

        {/* Right Side: Video */}
        <div className="aspect-video">
          <iframe
            src="https://www.youtube.com/embed/8hjUOqhcVd8"
            title="Hijama Practitioner Course"
            allowFullScreen
            className="w-full h-full rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>

      {/* Second Row: Full-width Course Details */}
      <div className="mt-10">
        <h3 className="text-xl font-bold">
          By the conclusion of Level Two, participants will:
        </h3>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>Accurately diagnose and treat various conditions.</li>
          <li>Manage pain and provide relief effectively.</li>
          <li>Implement dry gliding & facial cupping techniques.</li>
          <li>Integrate complementary procedures.</li>
        </ul>

        <h3 className="text-xl font-bold mt-6">Who Is This Course For?</h3>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>Those who have completed Level 1.</li>
          <li>Practitioners looking to master advanced Hijama techniques.</li>
        </ul>

        <h3 className="text-xl font-bold mt-6">What You’ll Learn:</h3>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>Extended Anatomy & Physiology</li>
          <li>Advanced disease diagnosis & treatment.</li>
          <li>Pain Management strategies.</li>
          <li>Facial & Gliding Cupping Techniques</li>
        </ul>

        <h3 className="text-xl font-bold mt-6">Why Choose Our Course?</h3>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            <strong>Expertly Designed Curriculum:</strong> Advanced training
            backed by medical professionals.
          </li>
          <li>
            <strong>Hands-on Experience:</strong> Intern at a real wellness
            clinic.
          </li>
          <li>
            <strong>Globally Certified:</strong> Meets international standards.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LevelTwo;
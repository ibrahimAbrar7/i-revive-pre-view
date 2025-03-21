import Link from "next/link";

export default function LevelOne() {
  return (
    <div className="container mx-auto px-6 py-10">
      {/* First Row: Content + Video */}
      <div className="grid lg:grid-cols-2 gap-10">
        {/* Left Side: Course Content */}
        <div>
          <h2 className="text-2xl font-bold">
            Course Name:- <br /> Hijama Practitioner Launchpad
          </h2>
          <p>
            <span className="font-semibold">Proficiency:</span> Level 1
          </p>
          <p>
            <span className="font-semibold">Duration:</span> 5 days
          </p>
          <p>
            <span className="font-semibold">Format:</span> 3 days Theory + 2 days Hands-on & Practical Training
          </p>
          <p className="mt-4">
            Learn Hijama with our comprehensive Level One course, designed for beginners and aspiring practitioners...
          </p>
          <p className="mt-4">
            Unlike most courses that focus only on history, geography, and basic Hijama procedures, we provide you with a solid foundation...
          </p>
          <div className="mt-10">
        <h3 className="text-xl font-bold">Our curriculum goes beyond the ordinary by covering:</h3>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>The human body from a contemporary medical perspective.</li>
          <li>The metaphysical aspects of the human body.</li>
          <li>All essential and core components of Hijama.</li>
        </ul>
        <p className="mt-4">
          Not only will you gain extensive knowledge through this unique approach, but you will also apply it practically...
        </p>

        <h3 className="text-xl font-bold mt-6">Who Is This Course For?</h3>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Individuals with no prior experience...</li>
          <li>Individuals aspiring to establish a Hijama clinic...</li>
          <li>Individuals interested in learning and applying Hijama...</li>
        </ul>

        <h3 className="text-xl font-bold mt-6">Why Choose Our Course?</h3>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Expertly Designed Curriculum:</strong> Developed under the guidance of leading professionals.</li>
          <li><strong>International Accreditation:</strong> Recognised by esteemed international bodies.</li>
          <li><strong>Globally Certified Provider:</strong> Meets global standards for professional practice.</li>
          <li><strong>Comprehensive Knowledge Base:</strong> Combines medical science, metaphysical understanding, and Hijama practices.</li>
          <li><strong>Proven Clinical Success:</strong> Learn from the expertise behind i-Revive Wellness Clinic.</li>
          <li><strong>Training by an Acclaimed Author:</strong> Learn from the best-selling author of &quot;Hijama Inside&quot;.</li>
          <li><strong>Hands-on Experience:</strong> Every student participates in practical Hijama sessions.</li>
        </ul>

        <h3 className="text-xl font-bold mt-6">What You’ll Learn:</h3>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Human Body, Health & Disease</li>
          <li>Metaphysical aspect affecting Wellness</li>
          <li>Anatomy & Physiology (from a Hijama practitioner’s perspective)</li>
          <li>Hijama Know-How</li>
          <li>Hijama Insights</li>
          <li>Preventative Maintenance through Hijama</li>
          <li>Essential tools, equipment, and preparation techniques</li>
          <li>Practical application of Sunnah points</li>
          <li>Hygiene, sterilization, and safety protocols</li>
        </ul>
        <p className="mt-4">
          By choosing this course, you’re not just gaining theoretical knowledge but embarking on a transformative learning journey...
        </p>

        <div className="mt-6">
          <Link href="#" className="inline-block bg-green-400 text-black px-6 py-2 rounded-lg font-semibold">
            Enroll Now
          </Link>
        </div>
      </div>
        </div>

        {/* Right Side: Video */}
        <div className="aspect-video">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/8hjUOqhcVd8"
            title="Hijama Practitioner Course"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Second Row: Course Details */}
      
    </div>
  );
}
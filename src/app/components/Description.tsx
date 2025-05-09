import React from "react";

const Description = () => {
  return (
    <div className="bg-white text-gray-800 px-6 py-10 max-w-4xl mx-auto leading-relaxed">
      <h1 className="text-3xl font-bold text-primary mb-6">What is Hijama (Cupping Therapy)?</h1>

      <p className="mb-4">
        Hijama, also known as cupping therapy, is a traditional healing practice that dates back thousands of years.
        It involves the use of suction cups placed on specific points of the body to draw out stagnant blood, toxins,
        and impurities. This holistic treatment is rooted in prophetic medicine and is widely used to promote physical
        and mental well-being.
      </p>

      <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">How Does It Work?</h2>
      <p className="mb-4">
        During a Hijama session, sterile cups are applied to the skin to create suction. After a few minutes, small,
        superficial incisions are made, and the cups are reapplied to draw out blood. This process helps improve blood
        circulation, detoxifies the body, and stimulates the immune system.
      </p>

      <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Types of Hijama</h2>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>
          <strong>Dry Cupping:</strong> Suction is applied without making any cuts—commonly used for relaxation and
          muscle relief.
        </li>
        <li>
          <strong>Wet Cupping:</strong> Also known as Hijama. Involves light incisions to draw out impure blood and
          toxins.
        </li>
        <li>
          <strong>Fire Cupping:</strong> Heat is used inside the cup before application to create suction (less common
          but still practiced traditionally).
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Benefits of Hijama</h2>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Detoxifies blood and removes waste from the circulatory system</li>
        <li>Relieves muscle pain, stiffness, and inflammation</li>
        <li>Improves digestion and metabolism</li>
        <li>Boosts energy and strengthens the immune system</li>
        <li>Reduces anxiety, stress, and promotes better sleep</li>
        <li>Helps treat migraines, fatigue, and joint pain</li>
      </ul>

      <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Is Hijama Safe?</h2>
      <p className="mb-4">
        Yes, when performed by a trained and experienced professional using sterilized equipment, Hijama is a safe and
        effective therapy. It is essential to follow pre- and post-care instructions for best results. It is advised to
        avoid eating heavy meals before the session and to rest afterward.
      </p>

      <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Who Should Avoid Hijama?</h2>
      <p className="mb-4">
        Hijama may not be suitable for individuals with:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Severe anemia or bleeding disorders</li>
        <li>Pregnancy (especially in the first trimester)</li>
        <li>Active skin infections or wounds in the treatment area</li>
        <li>People taking blood-thinning medication (consult your doctor)</li>
      </ul>

      <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">When is the Best Time for Hijama?</h2>
      <p className="mb-4">
        According to Sunnah, the best days for Hijama are the 17th, 19th, and 21st of the Islamic lunar month. However,
        it can be performed at any time when the body needs detoxification or healing.
      </p>

      <div className="bg-primary text-white text-center py-6 px-4 mt-10 rounded-md shadow-md">
        <h3 className="text-2xl font-semibold mb-2">Ready to Experience the Healing of Hijama?</h3>
        <p className="mb-4">
          Book your session today with our certified practitioners and take the first step towards better health and
          wellness.
        </p>
        <a
          href="tel:+918009944335"
          className="inline-block bg-white text-primary font-semibold py-2 px-6 rounded hover:bg-hovershed hover:text-white border transition duration-200"
        >
          Call Now: 800-9944-335
        </a>
      </div>
    </div>
  );
};

export default Description;

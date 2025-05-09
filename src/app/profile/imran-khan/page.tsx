import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import TeamProfile from "@/app/components/TeamProfile";

export default function ImranKhanPage() {
  return (
    <>
      <Header />
      <TeamProfile
        name="Imran Khan"
        qualification="Lead Practitioner"
        image="/imrankhan.jpg" // Make sure this path is correct
        description={`A highly skilled Hijama Practitioner with certifications from Turkey, the US, and
the UK, Imran Khan brings a wealth of expertise in traditional healing and
cupping therapy. His specialization extends beyond physical health as he is also a
practicing Raqi, mentored by Sheikh Abu Nadeer of RuqyaHealing (UK),
allowing him to address both the physical and metaphysical aspects of healing.`}
      />
      <Footer />
    </>
  );
}

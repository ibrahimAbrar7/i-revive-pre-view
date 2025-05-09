import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import TeamProfile from "@/app/components/TeamProfile";

export default function AsmamoinuddinPage() {
  return (
    <>
      <Header />
      <TeamProfile
        name="Asma Moinuddin"
        qualification="Director"
        image="/drasmamoinuddin.jpg" // Make sure this path is correct
        description={`(MBBS, Naturopath, USA)
A dedicated healthcare professional, Dr. Asma Moinuddin holds an MBBS degree
and later pursued an MD in Naturopathic Medicine in the USA. She is deeply
committed to helping individuals achieve optimal health through natural healing
and lifestyle transformation. With a compassionate approach, she has guided
countless patients towards sustainable health solutions, addressing both physical
and emotional well-being. Her advocacy for holistic care makes i-Revive a center
that values the connection between mind, body, and healing.`}
      />
      <Footer />
    </>
  );
}

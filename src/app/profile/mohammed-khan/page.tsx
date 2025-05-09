
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import TeamProfile from "@/app/components/TeamProfile";


export default function MohammedKhanPage() {
  return (
    <>
      <Header />
      <TeamProfile
        name="Mohammed Khan"
        qualification="Visionary Leader & CEO"
        image="/mohdkhan.JPG" // Make sure this path is correct
        description={`the CEO of Delta Group of Companies, is a passionate and
        forward-thinking entrepreneur. He sits on the board of several companies in the
        Gulf and India. For him, business isn’t just about making profits — it’s about making
        a real difference in people’s lives. He strongly believes that businesses should help
        bring positive change to the world.

        This belief is what drives his work in the healthcare field. Through i-Revive, he’s
        leading a new way of healing that focuses on the whole person, not just the illness.
        Under his guidance, i-Revive is more than just a clinic — it’s a growing movement
        focused on helping people get better, feel stronger, and live healthier lives.`}
      />
      <Footer />
    </>
  );
}


import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import TeamProfile from "@/app/components/TeamProfile";
;


export default function FareedaaPage() {
  return (
    <>
      <Header />
      <TeamProfile
        name="Fareeda Nikhat"
        qualification="Director"
        image="/drfareeda.jpg" // Make sure this path is correct
        description={`(Fetal Medicine | FRCOG | MRCOG, Dubai)
A highly respected OB-GYN consultant at Latifa Hospital, Dr. Fareeda Nikhat
brings over 19 years of experience specializing in feto-maternal medicine and
high-risk pregnancy care. Her dedication to advancing maternal and fetal health
through innovation and compassionate clinical practice makes her an invaluable
part of i-Revive. She ensures that women receive expert guidance in maternal
health, offering a unique blend of medical expertise and Hijama Cupping.`}
      />
      <Footer />
    </>
  );
}

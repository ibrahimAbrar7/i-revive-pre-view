import CustomPlan from "@/app/components/plans/CustomPlan";
import HeadCupping from "@/app/components/plans/HeadCupping";
import Infertility from "@/app/components/plans/Infertility";
import IRevivePlan from "@/app/components/plans/irevivePlan";
import Lymphatic from "@/app/components/plans/Lymphatic";
import SportsPlus from "@/app/components/plans/SportsPlus";
import SunnahBasic from "@/app/components/plans/SunnahBasic";
import SunnahPlus from "@/app/components/plans/SunnahPlus";
import VitalOrgans from "@/app/components/plans/VitalOrgans";

export const treatmentPlansData = [
  {
    id: 1,
    title: "Sunnah Basic",
    image: "/paana.jpg",
    slug: "sunnah-basic",
    content: (
      <SunnahBasic />
    ),
  },
  {
    id: 2,
    title: "Sunnah Plus",
    image: "/treat2.jpeg",
    slug: "sunnah-plus",
    content: (
       <SunnahPlus />
    ),
  },
  {
    id: 3,
    title: "Vital Organ Cleanse",
    image: "/vital-organ-cleanse.jpg",
    slug: "vital-organ-cleanse",
    content: (
     <VitalOrgans />
    ),
  },
  {
    id: 4,
    title: "Head Cupping",
    image: "/treat4.jpeg",
    slug: "head-cupping",
    content: (
      <HeadCupping />
    ),
  },
  {
    id: 5,
    title: "Lymphatic Cleanse",
    image: "/treat5.jpeg",
    slug: "lymphatic-cleanse",
    content: (
      <Lymphatic />
    ),
  },
  {
    id: 6,
    title: "Infertility Cupping",
    image: "/treat6.jpeg",
    slug: "infertility-cupping",
    content: (
      <Infertility />  
    ),
  },
  {
    id: 7,
    title: "i-Revive Plan",
    image: "/treat7.jpeg",
    slug: "i-revive-plan",
    content: (
      <IRevivePlan />  
    ),
  },
  {
    id: 8,
    title: "Custom Plan",
    image: "/paana.jpg",
    slug: "custom-plan",
    content: (
      <CustomPlan />
    ),
  },
  {
    id: 9,
    title: "Sports Plus",
    image: "/SportPlan.jpg",
    slug: "why-choose-a-female-hijama-specialist-in-hyderabad",
    content: (
      <SportsPlus />  
    ),
  },
];

"use client";

import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Topbar from "@/app/components/Topbar";
import { treatmentPlansData } from "@/data/treatmentPlansData";
import { notFound, useParams } from "next/navigation";

export default function BlogPost() {
  const { slug } = useParams();
  const plan = treatmentPlansData.find((item) => item.slug === slug);

  if (!plan) {
    notFound();
  }

  return (
    <div>
      <Topbar />
      <Header />
      {plan.content}
      <Footer />
    </div>
  );
}

"use client";

import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Topbar from "@/app/components/Topbar";
import { blogPosts } from "@/data/ourBlogData"; // Assuming you have your blog posts here
import { notFound, useParams } from "next/navigation";
export default function BlogPost() {
  const { slug } = useParams();
  console.log("Slug from useParams:", slug); // Log the slug from the URL
  const post = blogPosts.find((item) => item.slug === slug);
  console.log("Found Post:", post); // Log the post object (or undefined if not found)

  if (!post) {
    notFound(); // Display a 404 page if post is not found
  }

  return (
    <div>
      <Topbar />
      <Header />
      <div className="px-4">
      {post.content}
      </div>
      <Footer />
    </div>
  );
}

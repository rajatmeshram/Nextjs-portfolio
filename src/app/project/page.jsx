"use client";
import { useState, useEffect } from "react";
import { ImageGrid } from "@/components/ImageGrid";

const API_BASE_URL =  process.env.NEXT_PUBLIC_BASE_URL;

export default function ProjectPage() {
  const tabs = [
    { id: "wpphp", label: "WordPress / PHP", slug: "wpphp" },
    { id: "shopify", label: "Shopify", slug: "shopify" },
    { id: "javascript", label: "Node.js / Next.js", slug: "javascript" },
    { id: "python", label: "Python / Django", slug: "python" },
  ];

  const [activeTab, setActiveTab] = useState("shopify");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);


  // Fetch projects based on category
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `${API_BASE_URL}/api/projects?filters[project_categories][slug][$eq]=${activeTab}`
        );
        const data = await res.json();
        setProjects(data?.data || []);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [activeTab]);

  return (
    <main className="p-8">
      <h1 className="text-center p-8 font-bold text-4xl mb-2">My Projects</h1>

      {/* --- Tabs --- */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.slug)}
            className={`px-6 py-2 rounded-lg font-medium transition ${
              activeTab === tab.slug
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* --- Content Grid --- */}
      <div className="cards-project flex justify-center">
        {loading ? (
          <p className="text-center text-gray-600">Loading projects...</p>
        ) : projects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {projects.map((project) =>
              project?.Projects_Cards?.map((card) => (
                <ImageGrid
                  key={card.id}
                  title={card.title}
                  description={card.description}
                  image={`${API_BASE_URL}${card.image?.url}`}
                  btn_text={card.btn_text}
                  btn_url={card.btn_url}
                />
              ))
            )}
          </div>
        ) : (
          <p className="text-center text-gray-600">
            No projects found for this category.
          </p>
        )}
      </div>
    </main>
  );
}

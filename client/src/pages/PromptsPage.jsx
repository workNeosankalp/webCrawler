import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import PromptCard from "../components/PromptCard";
import Loader from "../components/Loader";
import Footer from "../components/Footer";

const PromptsPage = () => {
  const [prompts, setPrompts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPrompts();
  }, []);

  const fetchPrompts = async () => {
    const startTime = Date.now();

    try {
      setLoading(true);
      // dev
      // const response = await axios.get("/api/prompts");

      // prod
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/api/prompts`,
      );

      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, 2000 - elapsedTime);

      await new Promise((resolve) => setTimeout(resolve, remainingTime));

      setPrompts(response.data);
      setError(null);
    } catch (err) {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, 2000 - elapsedTime);
      await new Promise((resolve) => setTimeout(resolve, remainingTime));

      setError("Failed to fetch prompts. Please try again later.");
      console.error("Error fetching prompts:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div className="min-h-screen bg-white">
        <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              All{" "}
              <span className="bg-linear-to-r from-[#FF6B6B] to-[#D64639] bg-clip-text text-transparent">
                Prompts
              </span>
            </h1>
            <p className="text-gray-600 text-lg">
              Browse our complete collection of AI prompts
            </p>
          </motion.div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8 text-center">
              <p className="text-red-600">{error}</p>
              <button
                onClick={fetchPrompts}
                className="mt-2 px-4 py-2 bg-[#FF6B6B] text-white rounded-lg hover:bg-[#D64639] transition-colors"
              >
                Retry
              </button>
            </div>
          )}

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12"
          >
            <div className="bg-white backdrop-blur-sm border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-gray-600 text-sm mb-1">Total Prompts</p>
              <p className="text-3xl font-bold text-gray-900">
                {prompts.length}
              </p>
            </div>

            <div className="bg-white backdrop-blur-sm border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-gray-600 text-sm mb-1">Updated</p>
              <p className="text-3xl font-bold text-[#D64639]">Weekly</p>
            </div>
          </motion.div>

          {/* Prompts Grid - 4 columns */}
          {prompts.length === 0 ? (
            <div className="text-center py-20">
              <svg
                className="w-24 h-24 text-gray-300 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
              </svg>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                No Prompts Yet
              </h3>
              <p className="text-gray-600">Check back soon for new content</p>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {prompts.map((item, index) => (
                <motion.div
                  key={item._id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <PromptCard
                    title={item.title}
                    prompt={item.prompt}
                    tags={item.tags}
                    category={item.category}
                    createdAt={item.createdAt}
                    imageUrl={item.imageUrl}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};

export default PromptsPage;

import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import axios from "axios";

const Home = () => {
  const containerRef = useRef(null);
  const [featuredPrompts, setFeaturedPrompts] = useState([]);
  const [copiedId, setCopiedId] = useState(null);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const fetchFeaturedPrompts = async () => {
      try {
        const response = await axios.get("/api/prompts?limit=4");
        setFeaturedPrompts(response.data.slice(0, 4));
      } catch (error) {
        console.error("Error fetching prompts:", error);
      }
    };
    fetchFeaturedPrompts();
  }, []);

  const handleCopyPrompt = (promptText, promptId) => {
    navigator.clipboard
      .writeText(promptText)
      .then(() => {
        setCopiedId(promptId);
        setTimeout(() => {
          setCopiedId(null);
        }, 2000);
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
      });
  };

  return (
    <>
      <div ref={containerRef} className="min-h-screen bg-white overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
          {/* Animated Grid Background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          </div>

          {/* Floating decorative elements */}
          <motion.div className="absolute top-20 left-10 w-72 h-72 bg-[#FF6B6B]/10 rounded-full blur-3xl" />
          <motion.div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FF6B6B]/10 rounded-full blur-3xl" />

          {/* Mobile/Tablet Background Pattern */}
          <div className="absolute inset-0 lg:hidden overflow-hidden pointer-events-none">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-20 -right-20 w-64 h-64 border-4 border-[#FF6B6B]/10 rounded-full"
            />
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, -90, 0],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-20 -left-20 w-64 h-64 border-4 border-[#D64639]/10 rounded-full"
            />
            <motion.div
              animate={{
                y: [0, 30, 0],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 right-8 w-3 h-3 bg-[#FF6B6B] rounded-full"
            />
            <motion.div
              animate={{
                y: [0, -30, 0],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/3 left-8 w-2 h-2 bg-[#D64639] rounded-full"
            />
            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-1/4 right-12 w-2 h-2 bg-[#FF6B6B] rounded-full"
            />
          </div>

          {/* Floating Image - Left Side (Desktop only) */}
          <motion.div
            initial={{ opacity: 0, x: -100, rotate: -15 }}
            animate={{ opacity: 1, x: 0, rotate: -8 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute left-4 top-32 hidden lg:block w-80 h-96 rounded-3xl overflow-hidden shadow-2xl shadow-[#FF6B6B]/20 border-4 border-[#FF6B6B]/30"
          >
            {featuredPrompts[0]?.imageUrl ? (
              <img
                src={
                  featuredPrompts[0].imageUrl.startsWith("http")
                    ? featuredPrompts[0].imageUrl
                    : `${import.meta.env.VITE_API_BASE_URL}${featuredPrompts[0].imageUrl}`
                }
                alt="AI Generated"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[#FF6B6B]/50 via-gray-200/50 to-gray-100/50 flex items-center justify-center">
                <svg
                  className="w-20 h-20 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            )}
          </motion.div>

          {/* Floating Image - Right Side (Desktop only) */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotate: 15 }}
            animate={{ opacity: 1, x: 0, rotate: 8 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="absolute right-4 bottom-32 hidden lg:block w-80 h-96 rounded-3xl overflow-hidden shadow-2xl shadow-[#FF6B6B]/20 border-4 border-[#FF6B6B]/30"
          >
            {featuredPrompts[1]?.imageUrl ? (
              <img
                src={
                  featuredPrompts[1].imageUrl.startsWith("http")
                    ? featuredPrompts[1].imageUrl
                    : `${import.meta.env.VITE_API_BASE_URL}${featuredPrompts[1].imageUrl}`
                }
                alt="AI Generated"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[#FF6B6B]/50 via-gray-200/50 to-gray-100/50 flex items-center justify-center">
                <svg
                  className="w-20 h-20 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            )}
          </motion.div>

          <div className="relative z-10 max-w-7xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 bg-[#FF6B6B]/10 border border-[#FF6B6B]/30 rounded-full mb-6 md:mb-8"
            >
              <span className="w-2 h-2 bg-[#FF6B6B] rounded-full animate-pulse mr-2"></span>
              <span className="text-[#FF6B6B] text-xs md:text-sm font-medium">
                AI-Powered Prompt Library
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 mb-4 md:mb-6 tracking-tight leading-tight px-4"
            >
              Creativity, Unleashed.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4"
            >
              Leverage generative AI with a unique suite of prompts to convey
              your ideas to the world.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4"
            >
              <Link
                to="/prompts"
                className="w-full sm:w-auto px-8 md:px-10 py-3 md:py-4 bg-gradient-to-r from-[#FF6B6B] to-[#D64639] text-white rounded-full font-semibold text-base md:text-lg hover:shadow-2xl hover:shadow-[#FF6B6B]/50 transition-all duration-300 transform hover:scale-105"
              >
                Explore Prompts
              </Link>
              <Link
                to="/learn-more"
                className="w-full sm:w-auto px-8 md:px-10 py-3 md:py-4 bg-transparent text-gray-900 rounded-full font-semibold text-base md:text-lg border-2 border-gray-300 hover:border-[#FF6B6B]/60 backdrop-blur-sm transition-all duration-300"
              >
                Learn More →
              </Link>
            </motion.div>

            {/* Mobile Feature Icons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12 lg:hidden grid grid-cols-3 gap-4 max-w-md mx-auto"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-[#FF6B6B]/10 rounded-full flex items-center justify-center mb-2">
                  <svg
                    className="w-6 h-6 text-[#FF6B6B]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <span className="text-xs text-gray-600 font-medium">Fast</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-[#FF6B6B]/10 rounded-full flex items-center justify-center mb-2">
                  <svg
                    className="w-6 h-6 text-[#FF6B6B]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
                <span className="text-xs text-gray-600 font-medium">
                  AI-Powered
                </span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-[#FF6B6B]/10 rounded-full flex items-center justify-center mb-2">
                  <svg
                    className="w-6 h-6 text-[#FF6B6B]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <span className="text-xs text-gray-600 font-medium">Free</span>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator (Desktop only) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="hidden lg:flex absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center">
              <span className="text-gray-600 text-sm mb-2">
                Scroll to explore
              </span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-6 h-10 border-2 border-[#FF6B6B]/50 rounded-full flex items-start justify-center p-2"
              >
                <div className="w-1 h-3 bg-[#FF6B6B] rounded-full"></div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Featured Prompts Section */}
        <section className="relative py-16 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Featured{" "}
                <span className="bg-linear-to-r from-[#FF6B6B] to-[#D64639] bg-clip-text text-transparent">
                  Prompts
                </span>
              </h2>
              <p className="text-gray-600 text-base md:text-lg">
                Discover our curated collection of AI prompts
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {featuredPrompts.length > 0
                ? featuredPrompts.map((item, index) => (
                    <motion.div
                      key={item._id}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="group"
                    >
                      <div className="bg-white backdrop-blur-sm border border-gray-200 rounded-2xl overflow-hidden hover:border-[#FF6B6B]/60 transition-all duration-500 hover:shadow-2xl hover:shadow-[#FF6B6B]/20 hover:-translate-y-2">
                        {item.imageUrl && (
                          <div className="relative h-56 md:h-56 overflow-hidden bg-gray-100">
                            <img
                              src={
                                item.imageUrl.startsWith("http")
                                  ? item.imageUrl
                                  : `${import.meta.env.VITE_API_BASE_URL}${item.imageUrl}`
                              }
                              alt={item.title || "Prompt image"}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              onError={(e) => {
                                e.target.style.display = "none";
                              }}
                            />
                            {item.category && (
                              <div className="absolute top-3 right-3">
                                <span className="px-3 py-1.5 bg-[#FF6B6B]/90 backdrop-blur-sm text-white rounded-full text-xs font-medium">
                                  {item.category}
                                </span>
                              </div>
                            )}
                          </div>
                        )}

                        <div className="p-5 md:p-6">
                          {!item.imageUrl && item.category && (
                            <div className="mb-4">
                              <span className="px-4 py-1.5 bg-[#FF6B6B]/10 text-[#FF6B6B] rounded-full text-xs font-medium">
                                {item.category}
                              </span>
                            </div>
                          )}

                          {item.title && (
                            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 group-hover:text-[#FF6B6B] transition-colors">
                              {item.title}
                            </h3>
                          )}

                          <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                            {item.prompt}
                          </p>

                          {item.tags && item.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-4">
                              {item.tags.slice(0, 2).map((tag, tagIndex) => (
                                <span
                                  key={tagIndex}
                                  className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
                                >
                                  #{tag}
                                </span>
                              ))}
                            </div>
                          )}

                          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                            <span className="text-xs text-gray-500">
                              {new Date(item.createdAt).toLocaleDateString(
                                "en-US",
                                {
                                  month: "short",
                                  day: "numeric",
                                },
                              )}
                            </span>
                            <button
                              onClick={() =>
                                handleCopyPrompt(item.prompt, item._id)
                              }
                              className="text-[#FF6B6B] hover:text-[#D64639] transition-colors text-sm font-medium flex items-center gap-1"
                            >
                              {copiedId === item._id ? (
                                <>
                                  <svg
                                    className="w-4 h-4"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                  Copied!
                                </>
                              ) : (
                                <>
                                  <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                    />
                                  </svg>
                                  Copy
                                </>
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))
                : [1, 2, 3, 4].map((index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white backdrop-blur-sm border border-gray-200 rounded-2xl overflow-hidden"
                    >
                      <div className="h-48 md:h-56 bg-gray-200 animate-pulse"></div>
                      <div className="p-5 md:p-6">
                        <div className="h-6 bg-gray-200 rounded w-3/4 mb-3 animate-pulse"></div>
                        <div className="space-y-2 mb-4">
                          <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                          <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                          <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="text-center mt-8 md:mt-12"
            >
              <Link
                to="/prompts"
                className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-white text-gray-900 rounded-full font-semibold border-2 border-gray-300 hover:border-[#FF6B6B]/60 hover:bg-[#FF6B6B]/5 transition-all duration-300 hover:shadow-lg hover:shadow-[#FF6B6B]/20"
              >
                View All Prompts
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative py-16 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 md:mb-20"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                One Platform, Infinite{" "}
                <span className="bg-gradient-to-r from-[#FF6B6B] to-[#D64639] bg-clip-text text-transparent">
                  Possibilities
                </span>
              </h2>
              <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
                Access a comprehensive library of AI prompts designed for every
                creative need
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 hover:border-[#FF6B6B]/60 transition-all duration-300 hover:shadow-xl hover:shadow-[#FF6B6B]/20"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-[#FF6B6B]/10 rounded-xl flex items-center justify-center mb-4 md:mb-6">
                  <svg
                    className="w-6 h-6 md:w-7 md:h-7 text-[#FF6B6B]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">
                  Lightning Fast
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Access thousands of prompts instantly with our optimized
                  platform built for speed and performance.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 hover:border-[#FF6B6B]/60 transition-all duration-300 hover:shadow-xl hover:shadow-[#FF6B6B]/20"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-[#FF6B6B]/10 rounded-xl flex items-center justify-center mb-4 md:mb-6">
                  <svg
                    className="w-6 h-6 md:w-7 md:h-7 text-[#FF6B6B]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">
                  AI-Powered
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Curated prompts designed to unlock the full potential of
                  modern AI tools and platforms.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 hover:border-[#FF6B6B]/60 transition-all duration-300 hover:shadow-xl hover:shadow-[#FF6B6B]/20"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-[#FF6B6B]/10 rounded-xl flex items-center justify-center mb-4 md:mb-6">
                  <svg
                    className="w-6 h-6 md:w-7 md:h-7 text-[#FF6B6B]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">
                  Always Updated
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Our library constantly evolves with new prompts added
                  regularly to stay current with AI trends.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-gradient-to-r from-[#FF6B6B]/10 via-[#D64639]/10 to-[#FF6B6B]/10 border border-[#FF6B6B]/30 rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-[#FF6B6B]/5 via-transparent to-transparent"></div>

              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
                  Ready to Unleash Your Creativity?
                </h2>
                <p className="text-gray-700 text-base md:text-lg lg:text-xl mb-8 md:mb-10 max-w-2xl mx-auto">
                  Join thousands of creators using our AI prompts to bring their
                  ideas to life
                </p>
                <Link
                  to="/prompts"
                  className="inline-flex items-center px-8 md:px-10 py-3 md:py-4 bg-gradient-to-r from-[#FF6B6B] to-[#D64639] text-white rounded-full font-semibold text-base md:text-lg hover:shadow-2xl hover:shadow-[#FF6B6B]/50 transition-all duration-300 transform hover:scale-105"
                >
                  Explore All Prompts
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default Home;

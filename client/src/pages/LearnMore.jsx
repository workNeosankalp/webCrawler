import React from "react";
import { Link } from "react-router-dom";

const LearnMore = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            How{" "}
            <span className="bg-linear-to-r from-[#FF6B6B] to-[#D64639] bg-clip-text text-transparent">
              AI Prompts
            </span>{" "}
            Works
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the power of AI-driven prompts and how our intelligent
            library can transform your creative workflow.
          </p>
        </div>

        {/* How It Works Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Simple 3-Step Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-white border border-gray-200 rounded-xl p-8 h-full hover:border-[#FF6B6B]/60 hover:shadow-xl transition-all duration-300">
                <div className="absolute -top-6 left-8 w-12 h-12 bg-linear-to-br from-[#FF6B6B] to-[#D64639] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  1
                </div>
                <div className="mt-4 mb-4">
                  <div className="w-16 h-16 bg-[#FF6B6B]/10 rounded-lg flex items-center justify-center mb-4">
                    <svg
                      className="w-8 h-8 text-[#FF6B6B]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Browse Prompts
                  </h3>
                  <p className="text-gray-600">
                    Explore our extensive library of AI prompts organized by
                    category and use case.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-white border border-gray-200 rounded-xl p-8 h-full hover:border-[#FF6B6B]/60 hover:shadow-xl transition-all duration-300">
                <div className="absolute -top-6 left-8 w-12 h-12 bg-linear-to-br from-[#FF6B6B] to-[#D64639] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  2
                </div>
                <div className="mt-4 mb-4">
                  <div className="w-16 h-16 bg-[#FF6B6B]/10 rounded-lg flex items-center justify-center mb-4">
                    <svg
                      className="w-8 h-8 text-[#FF6B6B]"
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
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Copy Your Prompt
                  </h3>
                  <p className="text-gray-600">
                    Select the perfect prompt and copy it instantly with a
                    single click to your clipboard.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-white border border-gray-200 rounded-xl p-8 h-full hover:border-[#FF6B6B]/60 hover:shadow-xl transition-all duration-300">
                <div className="absolute -top-6 left-8 w-12 h-12 bg-linear-to-br from-[#FF6B6B] to-[#D64639] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  3
                </div>
                <div className="mt-4 mb-4">
                  <div className="w-16 h-16 bg-[#FF6B6B]/10 rounded-lg flex items-center justify-center mb-4">
                    <svg
                      className="w-8 h-8 text-[#FF6B6B]"
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
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Create Amazing Content
                  </h3>
                  <p className="text-gray-600">
                    Use the prompt with your favorite AI tool to generate
                    incredible results instantly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Choose Us
          </h2>
          <div className="bg-white border border-gray-200 rounded-xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Benefits */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Benefits
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start text-gray-700">
                    <svg
                      className="w-6 h-6 text-[#FF6B6B] mr-3 shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Save hours of prompt engineering</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <svg
                      className="w-6 h-6 text-[#FF6B6B] mr-3 shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Get better AI results instantly</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <svg
                      className="w-6 h-6 text-[#FF6B6B] mr-3 shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Learn from expert prompt patterns</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <svg
                      className="w-6 h-6 text-[#FF6B6B] mr-3 shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Access prompts anytime, anywhere</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <svg
                      className="w-6 h-6 text-[#FF6B6B] mr-3 shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Free to use forever</span>
                  </li>
                </ul>
              </div>

              {/* Categories Available */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Categories Available
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start text-gray-700">
                    <svg
                      className="w-6 h-6 text-[#FF6B6B] mr-3 shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Creative Writing & Storytelling</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <svg
                      className="w-6 h-6 text-[#FF6B6B] mr-3 shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Business & Marketing</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <svg
                      className="w-6 h-6 text-[#FF6B6B] mr-3 shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Code & Development</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <svg
                      className="w-6 h-6 text-[#FF6B6B] mr-3 shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Image & Art Generation</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <svg
                      className="w-6 h-6 text-[#FF6B6B] mr-3 shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Education & Learning</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Features Deep Dive */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Powerful Features
          </h2>
          <div className="space-y-6">
            {/* Feature 1 */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-[#FF6B6B]/60 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-[#FF6B6B]/10 rounded-lg flex items-center justify-center shrink-0">
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
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Curated Collection
                  </h3>
                  <p className="text-gray-600">
                    Access a carefully selected library of prompts tested and
                    refined for optimal results across various AI platforms.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-[#FF6B6B]/60 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-[#FF6B6B]/10 rounded-lg flex items-center justify-center shrink-0">
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
                      d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Smart Categorization
                  </h3>
                  <p className="text-gray-600">
                    Find exactly what you need with intelligent tags and
                    categories that make navigation effortless.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-[#FF6B6B]/60 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-[#FF6B6B]/10 rounded-lg flex items-center justify-center shrink-0">
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
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Regular Updates
                  </h3>
                  <p className="text-gray-600">
                    Fresh prompts added weekly to keep up with the latest AI
                    capabilities and trends in creative content generation.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-[#FF6B6B]/60 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-[#FF6B6B]/10 rounded-lg flex items-center justify-center shrink-0">
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
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Instant Copy
                  </h3>
                  <p className="text-gray-600">
                    One-click copy functionality makes it easy to grab prompts
                    and start creating without any friction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Perfect For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-[#FF6B6B]/60 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Content Creators
              </h3>
              <p className="text-gray-600 text-sm">
                Generate engaging content ideas, social media posts, and
                creative narratives.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-[#FF6B6B]/60 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Marketers
              </h3>
              <p className="text-gray-600 text-sm">
                Create compelling ad copy, email campaigns, and marketing
                materials.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-[#FF6B6B]/60 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Developers
              </h3>
              <p className="text-gray-600 text-sm">
                Get code snippets, documentation, and technical writing
                assistance.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-[#FF6B6B]/60 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Designers
              </h3>
              <p className="text-gray-600 text-sm">
                Generate creative briefs, design concepts, and visual
                descriptions.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-[#FF6B6B]/60 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Entrepreneurs
              </h3>
              <p className="text-gray-600 text-sm">
                Create business plans, pitch decks, and strategic content.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-[#FF6B6B]/60 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Students</h3>
              <p className="text-gray-600 text-sm">
                Research assistance, study guides, and creative writing
                projects.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-linear-to-r from-[#FF6B6B]/10 to-[#D64639]/10 border border-[#FF6B6B]/30 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of creators using AI Prompts to accelerate their
              creative workflow and produce amazing results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/prompts"
                className="px-8 py-4 bg-linear-to-r from-[#FF6B6B] to-[#D64639] text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-[#FF6B6B]/50 transition-all duration-300 transform hover:scale-105"
              >
                Browse Prompts
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold text-lg border-2 border-gray-300 hover:border-[#FF6B6B]/60 transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;

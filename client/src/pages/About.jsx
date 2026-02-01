import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const About = () => {
  const [stats, setStats] = useState({
    totalPrompts: 0,
    activeUsers: 0,
    categories: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      // Fetch prompts data
      const promptsResponse = await axios.get('/api/prompts');
      const prompts = promptsResponse.data;

      // Calculate stats
      const totalPrompts = prompts.length;
      
      // Get unique categories count
      const uniqueCategories = new Set(
        prompts.map(p => p.category).filter(Boolean)
      );
      const categoriesCount = uniqueCategories.size;

      setStats({
        totalPrompts,
        activeUsers: 10000,
        categories: categoriesCount
      });
      
      setLoading(false);
    } catch (error) {
      console.error('Error fetching stats:', error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            About{" "}
            <span className="bg-linear-to-r from-[#FF6B6B] to-[#D64639] bg-clip-text text-transparent">
              AI Prompts
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering creators worldwide with a curated library of high-quality AI prompts
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-20">
          <div className="bg-linear-to-r from-[#FF6B6B]/5 to-[#D64639]/5 border border-[#FF6B6B]/20 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
              We believe that everyone should have access to powerful AI tools and know how to use them effectively. 
              AI Prompts was created to bridge the gap between creativity and technology, making it easy for anyone 
              to harness the power of AI through well-crafted prompts.
            </p>
          </div>
        </div>

        {/* Our Story */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                AI Prompts started from a simple observation: while AI tools are becoming incredibly powerful, 
                many people struggle to get the results they want because they don't know how to communicate 
                effectively with AI systems.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We spent months researching, testing, and refining prompts across different AI platforms. 
                What started as a personal collection quickly grew into something that could help thousands 
                of creators, marketers, developers, and students.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, AI Prompts serves as a central hub for anyone looking to unlock the full potential 
                of AI tools, with new prompts added regularly based on community feedback and the latest 
                AI developments.
              </p>
            </div>
            <div className="bg-linear-to-br from-[#FF6B6B]/10 to-[#D64639]/10 rounded-2xl p-12 border border-[#FF6B6B]/20">
              {loading ? (
                <div className="space-y-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center space-x-4 animate-pulse">
                      <div className="w-16 h-16 bg-gray-300 rounded-lg"></div>
                      <div className="flex-1">
                        <div className="h-5 bg-gray-300 rounded w-3/4 mb-2"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 p-10 pl-12 text-center h-16 bg-[#FF6B6B] rounded-lg flex items-center justify-center text-white text-2xl font-bold">
                      {stats.totalPrompts}+
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Curated Prompts</h3>
                      <p className="text-gray-600 text-sm">Tested and optimized</p>
                    </div>
                  </div>
                  
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-[#FF6B6B]/60 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-[#FF6B6B]/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[#FF6B6B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality First</h3>
              <p className="text-gray-600">
                Every prompt is carefully crafted, tested, and refined to ensure optimal results across different AI platforms.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-[#FF6B6B]/60 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-[#FF6B6B]/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[#FF6B6B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Community Driven</h3>
              <p className="text-gray-600">
                We listen to our users and continuously improve our library based on real-world feedback and needs.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-[#FF6B6B]/60 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-[#FF6B6B]/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[#FF6B6B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Always Free</h3>
              <p className="text-gray-600">
                We believe knowledge should be accessible to everyone. Our core library will always remain free to use.
              </p>
            </div>
          </div>
        </div>

        {/* What We Offer */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What We Offer</h2>
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-[#FF6B6B]/60 transition-all">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#FF6B6B]/10 rounded-lg flex items-center justify-center shrink-0 mt-1">
                  <svg className="w-5 h-5 text-[#FF6B6B]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Comprehensive Prompt Library</h3>
                  <p className="text-gray-600">Hundreds of tested prompts covering creative writing, business, coding, design, and more.</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-[#FF6B6B]/60 transition-all">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#FF6B6B]/10 rounded-lg flex items-center justify-center shrink-0 mt-1">
                  <svg className="w-5 h-5 text-[#FF6B6B]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Smart Categorization</h3>
                  <p className="text-gray-600">Find exactly what you need with intuitive categories and powerful search functionality.</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-[#FF6B6B]/60 transition-all">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#FF6B6B]/10 rounded-lg flex items-center justify-center shrink-0 mt-1">
                  <svg className="w-5 h-5 text-[#FF6B6B]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Regular Updates</h3>
                  <p className="text-gray-600">New prompts added weekly based on latest AI developments and user requests.</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-[#FF6B6B]/60 transition-all">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#FF6B6B]/10 rounded-lg flex items-center justify-center shrink-0 mt-1">
                  <svg className="w-5 h-5 text-[#FF6B6B]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Easy to Use</h3>
                  <p className="text-gray-600">One-click copy functionality makes it effortless to grab and use any prompt.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Built by Creators, for Creators</h2>
          <div className="bg-white border border-gray-200 rounded-xl p-8 text-center">
            <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed mb-6">
              Our team consists of AI enthusiasts, developers, designers, and content creators who understand 
              the challenges of working with AI tools. We're passionate about making AI accessible and useful 
              for everyone.
            </p>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have questions or suggestions? We'd love to hear from you!
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-linear-to-r from-[#FF6B6B]/10 to-[#D64639]/10 border border-[#FF6B6B]/30 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Start Creating Today</h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Join our growing community and discover how the right prompts can transform your AI experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/prompts"
                className="px-8 py-4 bg-linear-to-r from-[#FF6B6B] to-[#D64639] text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-[#FF6B6B]/50 transition-all duration-300 transform hover:scale-105"
              >
                Explore Prompts
              </Link>
              <Link 
                to="/learn-more"
                className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold text-lg border-2 border-gray-300 hover:border-[#FF6B6B]/60 transition-all duration-300"
              >
                Learn How It Works
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

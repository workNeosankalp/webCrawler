import React, { useState } from "react";

const PromptCard = ({ prompt, title, tags, category, createdAt, imageUrl }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="bg-white backdrop-blur-sm border border-gray-200 rounded-xl overflow-hidden hover:border-[#FF6B6B]/60 transition-all duration-300 hover:shadow-xl hover:shadow-[#FF6B6B]/20 hover:-translate-y-1 h-full flex flex-col">
      {/* Image Section */}
      {imageUrl && (
        <div className="relative h-64 overflow-hidden bg-gray-100">
          <img
            src={
              imageUrl.startsWith("http")
                ? imageUrl
                : `${import.meta.env.VITE_API_BASE_URL}${imageUrl}`
            }
            alt={title || "Prompt image"}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
          {category && (
            <div className="absolute top-3 right-3">
              <span className="px-3 py-1.5 bg-[#FF6B6B] backdrop-blur-sm text-white rounded-full text-xs font-medium shadow-lg">
                {category}
              </span>
            </div>
          )}
        </div>
      )}

      <div className="p-6 flex-1 flex flex-col">
        {/* Category Badge (if no image) */}
        {!imageUrl && category && (
          <div className="mb-4">
            <span className="px-3 py-1.5 bg-[#FF6B6B]/10 text-[#FF6B6B] rounded-full text-xs font-medium">
              {category}
            </span>
          </div>
        )}

        {/* Title */}
        {title && (
          <div className="mb-4">
            <h2 className="text-xl font-bold text-gray-900 hover:text-[#FF6B6B] transition-colors line-clamp-2">
              {title}
            </h2>
          </div>
        )}

        {/* Prompt */}
        <div className="mb-4 flex-1">
          <h3 className="text-sm font-semibold text-[#FF6B6B] mb-2 flex items-center">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
            Prompt
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
            {prompt}
          </p>
        </div>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium hover:bg-[#FF6B6B]/10 hover:text-[#FF6B6B] transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between text-xs pt-4 border-t border-gray-200 mt-auto">
          <span className="flex items-center text-gray-500">
            <svg
              className="w-3 h-3 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {new Date(createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span>
          <button
            onClick={handleCopyPrompt}
            className="px-3 py-1.5 bg-[#FF6B6B]/10 text-[#FF6B6B] hover:bg-[#FF6B6B] hover:text-white rounded-full text-xs font-medium transition-all duration-300 flex items-center gap-1.5"
          >
            {copied ? (
              <>
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Copied!
              </>
            ) : (
              <>
                <svg
                  className="w-3.5 h-3.5"
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
                Copy Prompt
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromptCard;

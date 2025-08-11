import axios from "axios";
import { useState } from "react";
import { backend_url } from "../../config";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isPublishing, setIsPublishing] = useState(false);
  const [isDraft, setIsDraft] = useState(false);
  const navigate = useNavigate();

  const handlePublish = async () => {
    setIsPublishing(true);
    // api call
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("Token not found");
      return;
    }
    axios.post(`${backend_url}/api/v1/blog/create`, {
      title,
      content
    },{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    navigate('/blogs')
    setTimeout(() => {
      setIsPublishing(false);
      // Redirect or show success message
    }, 2000);
  };

  const handleSaveDraft = () => {
    setIsDraft(true);
    // the save draft is stored
    setTimeout(() => {
      setIsDraft(false);
    }, 1000);
  };

  const wordCount = content
    .split(" ")
    .filter((word) => word.trim() !== "").length;
  const readTime = Math.max(1, Math.ceil(wordCount / 200));

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-gray-100 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button className="text-gray-500 hover:text-gray-700 transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <h1 className="text-xl font-medium text-gray-900">
                Write your story
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-500">
                {wordCount > 0 && `${wordCount} words • ${readTime} min read`}
              </span>
              <button
                onClick={handleSaveDraft}
                disabled={isDraft}
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors disabled:opacity-50"
              >
                {isDraft ? "Saved" : "Save draft"}
              </button>
              <button
                onClick={handlePublish}
                disabled={isPublishing || !title.trim() || !content.trim()}
                className="px-6 py-2 bg-green-600 text-white text-sm font-medium rounded-full hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isPublishing ? "Publishing..." : "Publish"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Editor */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-8">
          {/* Title Input */}
          <div>
            <textarea
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              className="w-full text-4xl md:text-5xl font-bold text-gray-900 placeholder-gray-300 border-none outline-none resize-none bg-transparent leading-tight font-serif"
              rows={2}
              style={{
                minHeight: "120px",
                fontFamily: "Georgia, serif",
              }}
            />
          </div>

          {/* Content Input */}
          <div className="flex justify-between gap-3">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Tell your story..."
              className="w-full text-xl text-gray-800 placeholder-gray-400 border-none outline-none resize-none bg-transparent leading-relaxed"
              rows={20}
              style={{
                minHeight: "600px",
                lineHeight: "1.8",
                fontFamily: "Georgia, serif",
              }}
            />
          </div>

          {/* Floating Toolbar */}
          {content && (
            <div className="fixed right-6 top-1/2 transform -translate-y-1/2">
              <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-2 space-y-2">
                <button className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </button>
                <button className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded transition-colors">
                  <svg
                    className="w-5 h-5"
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
                </button>
                <button className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 4V2a1 1 0 011-1h4a1 1 0 011 1v2m-6 0h8m-8 0a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V6a2 2 0 00-2-2m-8 0V4"
                    />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Publish Modal/Overlay (when publishing) */}
      {isPublishing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md mx-4">
            <div className="text-center">
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <svg
                    className="w-8 h-8 text-green-600 animate-spin"
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
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Publishing your story
              </h3>
              <p className="text-gray-600">
                Please wait while we publish your article...
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Stats */}
      <div className="fixed bottom-6 right-6">
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm px-4 py-2">
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>{wordCount} words</span>
            <span>•</span>
            <span>{readTime} min read</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;

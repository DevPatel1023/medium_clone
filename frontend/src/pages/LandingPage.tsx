import { Link } from "react-router-dom";
import { isAuthenticated } from "../middlewares/Authenticated";

const LandingPage = () => {
   const isAuth : boolean = isAuthenticated();
   
  return (
    <div className="min-h-screen bg-white ">

      {/* Hero Section */}
      <section className="bg-yellow-400 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl lg:text-8xl font-bold text-black mb-8 leading-tight">
                Human
                <br />
                stories & ideas
              </h1>
              <p className="text-2xl text-black mb-8 leading-relaxed">
                A place to read, write, and deepen your understanding
              </p>
              <Link
                to="/blogs"
                className="inline-block bg-black text-white px-12 py-4 rounded-full text-xl font-medium hover:bg-gray-800 transition-colors"
              >
                Start reading
              </Link>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                {/* Decorative M logo */}
                <div className="text-[20rem] font-bold text-black/10 leading-none">
                  M
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Read without limits
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Discover stories, thinking, and expertise from writers on any topic. 
                Read at your own pace with a clean, distraction-free experience.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Write your story
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Share your thinking on any topic and connect with millions of readers. 
                Grow your audience with built-in distribution and engagement tools.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Join the conversation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Engage with writers and readers through responses, highlights, and 
                follows. Be part of a community that values thoughtful discourse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Start reading and writing today
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Join millions of people who turn to Medium every month to learn 
            something new and share their own ideas.
          </p>
          {!isAuth && <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="bg-black text-white px-12 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Get started
            </Link>
            <Link
              to="/signin"
              className="border-2 border-black text-black px-12 py-4 rounded-full text-lg font-medium hover:bg-black hover:text-white transition-colors"
            >
              Sign in
            </Link>
          </div>}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-black mb-4">Medium</h3>
              <p className="text-gray-600 text-sm">
                A place to read, write, and deepen your understanding
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Platform</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link to="/about" className="hover:text-black">About</Link></li>
                <li><Link to="/terms" className="hover:text-black">Terms</Link></li>
                <li><Link to="/privacy" className="hover:text-black">Privacy</Link></li>
                <li><Link to="/help" className="hover:text-black">Help</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Features</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link to="/write" className="hover:text-black">Write</Link></li>
                <li><Link to="/read" className="hover:text-black">Read</Link></li>
                <li><Link to="/topics" className="hover:text-black">Topics</Link></li>
                <li><Link to="/publications" className="hover:text-black">Publications</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Connect</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-black">Twitter</a></li>
                <li><a href="#" className="hover:text-black">LinkedIn</a></li>
                <li><a href="#" className="hover:text-black">Facebook</a></li>
                <li><a href="#" className="hover:text-black">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-600">
              © 2025 Medium Clone. Made with ❤️ for writers and readers.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
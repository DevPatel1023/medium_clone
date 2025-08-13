import { Link } from "react-router-dom";
import AppBar from "../components/AppBar";

const About = () => {
  return (
    <div className="min-h-screen bg-white ">
      <AppBar />
      
      {/* Hero Section */}
      <div className=" bg-yellow-400 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-black mb-8 leading-tight">
            Every idea needs a
            <br />
            <span className="italic">Medium.</span>
          </h1>
          <p className="text-xl md:text-2xl text-black leading-relaxed max-w-3xl mx-auto">
            A place to read, write, and deepen your understanding
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            What is Medium?
          </h2>
          
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Medium is an open platform where readers find dynamic thinking, and where 
            expert and undiscovered voices can share their writing on any topic.
          </p>

          <div className="grid md:grid-cols-2 gap-12 my-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                For readers
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Medium taps into the brains of the world's most insightful writers, 
                thinkers, and storytellers. Whatever your curiosity, you can find 
                fresh perspective on topics that matter to you.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Discover stories, thinking, and expertise from writers on any topic</li>
                <li>• Read at your own pace with no ads or pop-ups</li>
                <li>• Join a global community of curious readers</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                For writers
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Medium is the perfect place to share your ideas and connect with 
                readers who care about what you have to say. Build your audience 
                and expand your reach.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Share your thinking on any topic</li>
                <li>• Grow your audience with built-in distribution</li>
                <li>• Connect with readers through responses and highlights</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg my-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our mission
            </h3>
            <p className="text-xl text-gray-700 leading-relaxed">
              To deepen our understanding of the world through the power of writing.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              We believe that what you read and write matters. Words can divide or 
              empower us, inspire or discourage us. In a world where the most 
              sensational and surface-level stories often win, we're building a 
              system that rewards depth, nuance, and time well spent.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Built with modern technology
          </h3>
          
          <div className="bg-white border border-gray-200 p-6 rounded-lg mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Frontend</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>React with TypeScript</li>
                  <li>Tailwind CSS for styling</li>
                  <li>Modern component architecture</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Backend</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>Hono.js / clodflare workers</li>
                  <li>PostgreSQL database</li>
                  <li>Prisma or Drizzle ORM</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center py-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Start reading and writing today
            </h3>
            <p className="text-gray-700 mb-8">
              Join thousands of writers and readers who are deepening their 
              understanding of the world.
            </p>
            <div className="space-x-4">
              <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
                <Link to="/publish">
                Start writing
                </Link>
              </button>
              <button className="border border-black text-black px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors">
                <Link to="/blogs">
                Explore stories
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to share your story?
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Join a community of writers and readers who are passionate about ideas.
          </p>
          <button className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-green-700 transition-colors">
            <Link to="/blogs">
            Get started
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 ">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="space-y-8">
          {/* Hero Section */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Welcome to Our Academic Journal
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              International Journal of Computer Sciences and Engineering is an
              open access, scholarly peer-reviewed, and academic research
              journal for scientists, engineers, research scholars, and
              academicians, which gains a foothold in Asia and opens to the
              world, aims to publish original, theoretical and practical
              advances in Computer Science Information Technology, Engineering
              (Software, Computer, Electronic & Electrical), Management and
              Information Sciences and all interdisciplinary streams of
              Computing Sciences.
            </p>
          </section>

          {/* Sample Content Sections */}
          {Array.from({ length: 10 }, (_, i) => (
            <section key={i} className="bg-white rounded-lg shadow-sm p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Section {i + 1}: Research Article
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                This is sample content to demonstrate the sticky header
                functionality. As you scroll down, you&apos;ll notice that when the
                header reaches the top of the viewport, it becomes fixed and
                stays visible while you continue scrolling.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The header maintains its full functionality including the search
                bar and navigation menu, providing easy access to all sections
                of the website regardless of how far down the page you have
                scrolled.
              </p>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}

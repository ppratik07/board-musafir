import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Your Journey, Perfectly Planned
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            AI-powered travel platform that creates personalized itineraries and books everything you need
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/itineraries/create"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Plan Your Trip
            </Link>
            <Link
              href="/destinations"
              className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Explore Destinations
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Board Musafir?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon="🤖"
            title="AI-Powered Itineraries"
            description="Get custom day-by-day plans based on your preferences, budget, and interests"
          />
          <FeatureCard
            icon="✈️"
            title="Complete Booking"
            description="Book flights, hotels, activities, and transport all in one place"
          />
          <FeatureCard
            icon="💰"
            title="Best Prices"
            description="Compare prices from multiple providers to get the best deals"
          />
          <FeatureCard
            icon="🎯"
            title="Personalized"
            description="Tailored recommendations based on your travel style and budget"
          />
          <FeatureCard
            icon="🛡️"
            title="Secure Payments"
            description="Safe and secure payments with Razorpay integration"
          />
          <FeatureCard
            icon="📱"
            title="Mobile Ready"
            description="Access your itineraries and bookings on any device, anywhere"
          />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <StepCard
              number="1"
              title="Share Preferences"
              description="Tell us about your destination, budget, and interests"
            />
            <StepCard
              number="2"
              title="AI Generates Plan"
              description="Our AI creates a personalized itinerary just for you"
            />
            <StepCard
              number="3"
              title="Customize & Book"
              description="Review, edit, and book everything with one click"
            />
            <StepCard
              number="4"
              title="Enjoy Your Trip"
              description="Get your tickets and travel with confidence"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Start Your Adventure?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Join thousands of travelers who trust Board Musafir for their journeys
        </p>
        <Link
          href="/auth/register"
          className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Get Started Free
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Board Musafir</h3>
              <p className="text-gray-400">
                Your all-in-one travel booking platform powered by AI
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/features">Features</Link></li>
                <li><Link href="/pricing">Pricing</Link></li>
                <li><Link href="/destinations">Destinations</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/careers">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/privacy">Privacy Policy</Link></li>
                <li><Link href="/terms">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2026 Board Musafir by Owlous. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function StepCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
        {number}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

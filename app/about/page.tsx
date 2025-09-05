import { Button } from "@/components/ui/button"
import { Heart, Users, Globe, Zap } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto max-w-6xl px-4 py-20">
        <div className="text-center mb-16">
          <Link href="/" className="inline-flex items-center space-x-2 mb-8 text-[#ff914d] hover:text-[#ff914d]/80">
            <span>← Back to Home</span>
          </Link>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            About <span className="text-[#ff914d]">Herox</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The ultimate anime streaming platform built by anime fans, for anime fans
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-300 mb-6">
              Herox was created with a simple mission: to provide anime fans with the best possible streaming
              experience. We believe that everyone should have access to high-quality anime content without barriers.
            </p>
            <p className="text-gray-300">
              As passionate anime enthusiasts ourselves, we understand what the community needs - fast streaming,
              high-quality content, and a user-friendly interface that doesn't get in the way of your viewing
              experience.
            </p>
          </div>
          <div className="bg-[#121212] p-8 rounded-3xl border border-[#ff914d]/20">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled_design__8_-removebg-preview-IYiKUd1LwPSXmuO3pGyv3abqP2hTje.png"
              alt="Herox App"
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <Heart className="w-12 h-12 text-[#ff914d] mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Passion</h3>
            <p className="text-gray-400">Built with love for anime</p>
          </div>

          <div className="text-center">
            <Users className="w-12 h-12 text-[#ff914d] mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Community</h3>
            <p className="text-gray-400">100K+ active users</p>
          </div>

          <div className="text-center">
            <Globe className="w-12 h-12 text-[#ff914d] mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Global</h3>
            <p className="text-gray-400">Available worldwide</p>
          </div>

          <div className="text-center">
            <Zap className="w-12 h-12 text-[#ff914d] mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Fast</h3>
            <p className="text-gray-400">Lightning-fast streaming</p>
          </div>
        </div>

        <div className="bg-[#121212] p-8 rounded-3xl border border-[#ff914d]/20 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Connect with fellow anime fans, get support, and stay updated with the latest news and features.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#ff914d] hover:bg-[#ff914d]/90 text-black font-semibold">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button
              variant="outline"
              className="border-[#ff914d] text-[#ff914d] hover:bg-[#ff914d] hover:text-black bg-transparent"
            >
              <Link href="/support">Get Support</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

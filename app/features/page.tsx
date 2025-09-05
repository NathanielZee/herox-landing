import { Button } from "@/components/ui/button"
import { Shield, Crown, Download, Zap, Globe, Smartphone } from "lucide-react"
import Link from "next/link"

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto max-w-6xl px-4 py-20">
        <div className="text-center mb-16">
          <Link href="/" className="inline-flex items-center space-x-2 mb-8 text-[#ff914d] hover:text-[#ff914d]/80">
            <span>← Back to Home</span>
          </Link>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Powerful <span className="text-[#ff914d]">Features</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover all the amazing features that make Herox the ultimate anime streaming platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#121212] p-8 rounded-3xl border border-[#ff914d]/20 hover:border-[#ff914d]/50 transition-all">
            <Shield className="w-12 h-12 text-[#ff914d] mb-4" />
            <h3 className="text-2xl font-bold mb-4">HD Streaming</h3>
            <p className="text-gray-400">
              Watch your favorite anime in crystal clear HD quality with adaptive streaming technology.
            </p>
          </div>

          <div className="bg-[#121212] p-8 rounded-3xl border border-[#ff914d]/20 hover:border-[#ff914d]/50 transition-all">
            <Crown className="w-12 h-12 text-[#ff914d] mb-4" />
            <h3 className="text-2xl font-bold mb-4">Premium Experience</h3>
            <p className="text-gray-400">
              Access exclusive content, early releases, and premium features with our subscription.
            </p>
          </div>

          <div className="bg-[#121212] p-8 rounded-3xl border border-[#ff914d]/20 hover:border-[#ff914d]/50 transition-all">
            <Download className="w-12 h-12 text-[#ff914d] mb-4" />
            <h3 className="text-2xl font-bold mb-4">Offline Downloads</h3>
            <p className="text-gray-400">
              Download episodes for offline viewing anytime, anywhere without internet connection.
            </p>
          </div>

          <div className="bg-[#121212] p-8 rounded-3xl border border-[#ff914d]/20 hover:border-[#ff914d]/50 transition-all">
            <Zap className="w-12 h-12 text-[#ff914d] mb-4" />
            <h3 className="text-2xl font-bold mb-4">Fast Servers</h3>
            <p className="text-gray-400">Lightning-fast streaming with our global CDN network for minimal buffering.</p>
          </div>

          <div className="bg-[#121212] p-8 rounded-3xl border border-[#ff914d]/20 hover:border-[#ff914d]/50 transition-all">
            <Globe className="w-12 h-12 text-[#ff914d] mb-4" />
            <h3 className="text-2xl font-bold mb-4">Multi-Language</h3>
            <p className="text-gray-400">Support for multiple languages with subtitles and dubbing options.</p>
          </div>

          <div className="bg-[#121212] p-8 rounded-3xl border border-[#ff914d]/20 hover:border-[#ff914d]/50 transition-all">
            <Smartphone className="w-12 h-12 text-[#ff914d] mb-4" />
            <h3 className="text-2xl font-bold mb-4">Cross-Platform</h3>
            <p className="text-gray-400">Available on all devices - mobile, tablet, desktop, and smart TV.</p>
          </div>
        </div>

        <div className="text-center mt-16">
          <a
            href="/app-release-signed.apk"
            download
            className="bg-[#ff914d] hover:bg-[#ff914d]/90 text-black font-semibold px-8 py-4 rounded-full inline-block text-center"
          >
            Download Herox Now
          </a>
        </div>
      </div>
    </div>
  )
}

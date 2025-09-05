import { Button } from "@/components/ui/button"
import { Search, Book, Download, Play, Settings, Shield } from "lucide-react"
import Link from "next/link"

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto max-w-6xl px-4 py-20">
        <div className="text-center mb-16">
          <Link href="/" className="inline-flex items-center space-x-2 mb-8 text-[#ff914d] hover:text-[#ff914d]/80">
            <span>← Back to Home</span>
          </Link>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Help <span className="text-[#ff914d]">Center</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Find answers to your questions and learn how to get the most out of Herox
          </p>

          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for help articles..."
              className="w-full pl-12 pr-4 py-4 bg-[#121212] border border-gray-600 rounded-full focus:border-[#ff914d] focus:outline-none text-white"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-[#121212] p-8 rounded-3xl border border-[#ff914d]/20 hover:border-[#ff914d]/50 transition-all">
            <Download className="w-12 h-12 text-[#ff914d] mb-4" />
            <h3 className="text-2xl font-bold mb-4">Getting Started</h3>
            <ul className="space-y-2 text-gray-400">
              <li>• How to download and install</li>
              <li>• First-time setup guide</li>
              <li>• Creating your account</li>
              <li>• Basic navigation</li>
            </ul>
          </div>

          <div className="bg-[#121212] p-8 rounded-3xl border border-[#ff914d]/20 hover:border-[#ff914d]/50 transition-all">
            <Play className="w-12 h-12 text-[#ff914d] mb-4" />
            <h3 className="text-2xl font-bold mb-4">Streaming</h3>
            <ul className="space-y-2 text-gray-400">
              <li>• How to search for anime</li>
              <li>• Video quality settings</li>
              <li>• Subtitle options</li>
              <li>• Playback controls</li>
            </ul>
          </div>

          <div className="bg-[#121212] p-8 rounded-3xl border border-[#ff914d]/20 hover:border-[#ff914d]/50 transition-all">
            <Download className="w-12 h-12 text-[#ff914d] mb-4" />
            <h3 className="text-2xl font-bold mb-4">Downloads</h3>
            <ul className="space-y-2 text-gray-400">
              <li>• Downloading episodes</li>
              <li>• Managing downloads</li>
              <li>• Offline viewing</li>
              <li>• Storage management</li>
            </ul>
          </div>

          <div className="bg-[#121212] p-8 rounded-3xl border border-[#ff914d]/20 hover:border-[#ff914d]/50 transition-all">
            <Settings className="w-12 h-12 text-[#ff914d] mb-4" />
            <h3 className="text-2xl font-bold mb-4">Settings</h3>
            <ul className="space-y-2 text-gray-400">
              <li>• App preferences</li>
              <li>• Video quality settings</li>
              <li>• Notification settings</li>
              <li>• Account management</li>
            </ul>
          </div>

          <div className="bg-[#121212] p-8 rounded-3xl border border-[#ff914d]/20 hover:border-[#ff914d]/50 transition-all">
            <Shield className="w-12 h-12 text-[#ff914d] mb-4" />
            <h3 className="text-2xl font-bold mb-4">Troubleshooting</h3>
            <ul className="space-y-2 text-gray-400">
              <li>• Common issues</li>
              <li>• Connection problems</li>
              <li>• App crashes</li>
              <li>• Performance tips</li>
            </ul>
          </div>

          <div className="bg-[#121212] p-8 rounded-3xl border border-[#ff914d]/20 hover:border-[#ff914d]/50 transition-all">
            <Book className="w-12 h-12 text-[#ff914d] mb-4" />
            <h3 className="text-2xl font-bold mb-4">Advanced</h3>
            <ul className="space-y-2 text-gray-400">
              <li>• Premium features</li>
              <li>• API documentation</li>
              <li>• Developer resources</li>
              <li>• Contributing guide</li>
            </ul>
          </div>
        </div>

        <div className="bg-[#121212] p-8 rounded-3xl border border-[#ff914d]/20 text-center">
          <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-gray-300 mb-8">Our support team is ready to help you with any questions or issues.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#ff914d] hover:bg-[#ff914d]/90 text-black font-semibold">
              <Link href="/contact">Contact Support</Link>
            </Button>
            <Button
              variant="outline"
              className="border-[#ff914d] text-[#ff914d] hover:bg-[#ff914d] hover:text-black bg-transparent"
            >
              <a href="https://discord.gg/herox" target="_blank" rel="noopener noreferrer">
                Join Discord
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

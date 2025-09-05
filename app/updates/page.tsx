import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import Link from "next/link"

export default function UpdatesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto max-w-6xl px-4 py-20">
        <div className="text-center mb-16">
          <Link href="/" className="inline-flex items-center space-x-2 mb-8 text-[#ff914d] hover:text-[#ff914d]/80">
            <span>← Back to Home</span>
          </Link>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Latest <span className="text-[#ff914d]">Updates</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay up to date with the latest features, improvements, and bug fixes
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-[#121212] p-8 rounded-3xl border border-[#ff914d]/20">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold mb-2">Version 2.1.0</h3>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>December 15, 2024</span>
                </div>
              </div>
              <span className="bg-[#ff914d] text-black px-3 py-1 rounded-full text-sm font-semibold">Latest</span>
            </div>
            <div className="space-y-3 text-gray-300">
              <h4 className="font-semibold text-[#ff914d]">New Features:</h4>
              <ul className="space-y-1 ml-4">
                <li>• Added offline download functionality</li>
                <li>• Improved video player with better controls</li>
                <li>• New dark theme options</li>
              </ul>
              <h4 className="font-semibold text-[#ff914d]">Bug Fixes:</h4>
              <ul className="space-y-1 ml-4">
                <li>• Fixed streaming issues on slower connections</li>
                <li>• Resolved subtitle synchronization problems</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#121212] p-8 rounded-3xl border border-gray-600/20">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold mb-2">Version 2.0.5</h3>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>November 28, 2024</span>
                </div>
              </div>
            </div>
            <div className="space-y-3 text-gray-300">
              <h4 className="font-semibold text-[#ff914d]">Improvements:</h4>
              <ul className="space-y-1 ml-4">
                <li>• Enhanced search functionality</li>
                <li>• Better recommendation algorithm</li>
                <li>• Performance optimizations</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#121212] p-8 rounded-3xl border border-gray-600/20">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold mb-2">Version 2.0.0</h3>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>October 15, 2024</span>
                </div>
              </div>
            </div>
            <div className="space-y-3 text-gray-300">
              <h4 className="font-semibold text-[#ff914d]">Major Release:</h4>
              <ul className="space-y-1 ml-4">
                <li>• Complete UI redesign</li>
                <li>• New streaming engine</li>
                <li>• Multi-language support</li>
                <li>• Premium subscription features</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <a
            href="/herox-app-release.apk"
            download
            className="bg-[#ff914d] hover:bg-[#ff914d]/90 text-black font-semibold px-8 py-4 rounded-full inline-block text-center"
          >
            Download Latest Version
          </a>
        </div>
      </div>
    </div>
  )
}

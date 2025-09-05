import { Button } from "@/components/ui/button"
import { Smartphone, Monitor } from "lucide-react"
import Link from "next/link"

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto max-w-6xl px-4 py-20">
        <div className="text-center mb-16">
          <Link href="/" className="inline-flex items-center space-x-2 mb-8 text-[#ff914d] hover:text-[#ff914d]/80">
            <span>← Back to Home</span>
          </Link>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Download <span className="text-[#ff914d]">Herox</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get Herox on all your devices and start streaming anime anywhere, anytime
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-[#121212] p-8 rounded-3xl border border-[#ff914d]/20 hover:border-[#ff914d]/50 transition-all text-center">
            <Smartphone className="w-16 h-16 text-[#ff914d] mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Android</h3>
            <p className="text-gray-400 mb-6">Download the APK for Android devices</p>
            <a
              href="/app-release-signed.apk"
              download
              className="bg-[#ff914d] hover:bg-[#ff914d]/90 text-black font-semibold w-full inline-block text-center py-2 rounded-full"
            >
              Download APK
            </a>
          </div>

          <div className="bg-[#121212] p-8 rounded-3xl border border-[#ff914d]/20 hover:border-[#ff914d]/50 transition-all text-center">
            <Smartphone className="w-16 h-16 text-[#ff914d] mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">iOS</h3>
            <p className="text-gray-400 mb-6">Coming soon to App Store</p>
            <Button disabled className="bg-gray-600 text-gray-400 w-full">
              Coming Soon
            </Button>
          </div>

          <div className="bg-[#121212] p-8 rounded-3xl border border-[#ff914d]/20 hover:border-[#ff914d]/50 transition-all text-center">
            <Monitor className="w-16 h-16 text-[#ff914d] mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Desktop</h3>
            <p className="text-gray-400 mb-6">Windows, macOS, and Linux</p>
            <Button disabled className="bg-gray-600 text-gray-400 w-full">
              Coming Soon
            </Button>
          </div>
        </div>

        <div className="bg-[#121212] p-8 rounded-3xl border border-[#ff914d]/20">
          <h2 className="text-3xl font-bold mb-6 text-center">System Requirements</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#ff914d]">Minimum Requirements</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Android 6.0 or higher</li>
                <li>• 2GB RAM</li>
                <li>• 100MB storage space</li>
                <li>• Internet connection</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#ff914d]">Recommended</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Android 8.0 or higher</li>
                <li>• 4GB RAM</li>
                <li>• 500MB storage space</li>
                <li>• High-speed internet</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

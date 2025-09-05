import { Button } from "@/components/ui/button"
import { HelpCircle, Book, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto max-w-6xl px-4 py-20">
        <div className="text-center mb-16">
          <Link href="/" className="inline-flex items-center space-x-2 mb-8 text-[#ff914d] hover:text-[#ff914d]/80">
            <span>← Back to Home</span>
          </Link>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Get <span className="text-[#ff914d]">Support</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions or get personalized help from our support team
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Link
            href="/help"
            className="bg-[#121212] p-6 rounded-3xl border border-[#ff914d]/20 hover:border-[#ff914d]/50 transition-all text-center"
          >
            <Book className="w-12 h-12 text-[#ff914d] mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Help Center</h3>
            <p className="text-gray-400">Browse our knowledge base</p>
          </Link>

          <a
            href="https://discord.gg/herox"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#121212] p-6 rounded-3xl border border-[#ff914d]/20 hover:border-[#ff914d]/50 transition-all text-center"
          >
            <MessageCircle className="w-12 h-12 text-[#ff914d] mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Discord</h3>
            <p className="text-gray-400">Join our community</p>
          </a>

          <a
            href="https://t.me/herox"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#121212] p-6 rounded-3xl border border-[#ff914d]/20 hover:border-[#ff914d]/50 transition-all text-center"
          >
            <MessageCircle className="w-12 h-12 text-[#ff914d] mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Telegram</h3>
            <p className="text-gray-400">Quick support chat</p>
          </a>

          <Link
            href="/contact"
            className="bg-[#121212] p-6 rounded-3xl border border-[#ff914d]/20 hover:border-[#ff914d]/50 transition-all text-center"
          >
            <HelpCircle className="w-12 h-12 text-[#ff914d] mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Contact Us</h3>
            <p className="text-gray-400">Direct support</p>
          </Link>
        </div>

        <div className="space-y-8">
          <div className="bg-[#121212] p-8 rounded-3xl border border-[#ff914d]/20">
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-[#ff914d]">How do I download the app?</h3>
                <p className="text-gray-300">
                  You can download the Android APK from our download page. iOS version is coming soon.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-[#ff914d]">Is Herox free to use?</h3>
                <p className="text-gray-300">
                  Yes! Herox is completely free and open-source. We also offer premium features for enhanced experience.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-[#ff914d]">Can I watch anime offline?</h3>
                <p className="text-gray-300">
                  Yes, you can download episodes for offline viewing with our download feature.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-[#ff914d]">What devices are supported?</h3>
                <p className="text-gray-300">
                  Currently Android devices are supported. iOS, desktop, and smart TV apps are in development.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#121212] p-8 rounded-3xl border border-[#ff914d]/20 text-center">
            <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
            <p className="text-gray-300 mb-8">Can't find what you're looking for? Our support team is here to help!</p>
            <Button
              size="lg"
              className="bg-[#ff914d] hover:bg-[#ff914d]/90 text-black font-semibold px-8 py-4 rounded-full"
            >
              <Link href="/contact">Contact Support</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

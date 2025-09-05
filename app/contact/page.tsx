import { Button } from "@/components/ui/button"
import { Mail, MessageCircle, Send } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto max-w-4xl px-4 py-20">
        <div className="text-center mb-16">
          <Link href="/" className="inline-flex items-center space-x-2 mb-8 text-[#ff914d] hover:text-[#ff914d]/80">
            <span>← Back to Home</span>
          </Link>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Contact <span className="text-[#ff914d]">Us</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have questions, suggestions, or need help? We'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-[#121212] p-6 rounded-3xl border border-[#ff914d]/20">
              <Mail className="w-8 h-8 text-[#ff914d] mb-4" />
              <h3 className="text-xl font-bold mb-2">Email Support</h3>
              <p className="text-gray-400 mb-4">Get in touch via email for detailed inquiries</p>
              <a href="mailto:support@herox.app" className="text-[#ff914d] hover:text-[#ff914d]/80">
                support@herox.app
              </a>
            </div>

            <div className="bg-[#121212] p-6 rounded-3xl border border-[#ff914d]/20">
              <MessageCircle className="w-8 h-8 text-[#ff914d] mb-4" />
              <h3 className="text-xl font-bold mb-2">Live Chat</h3>
              <p className="text-gray-400 mb-4">Join our Discord for real-time support</p>
              <a
                href="https://discord.gg/herox"
                className="text-[#ff914d] hover:text-[#ff914d]/80"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Discord Server
              </a>
            </div>
          </div>

          <div className="bg-[#121212] p-8 rounded-3xl border border-[#ff914d]/20">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg focus:border-[#ff914d] focus:outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg focus:border-[#ff914d] focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <select className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg focus:border-[#ff914d] focus:outline-none">
                  <option>General Inquiry</option>
                  <option>Technical Support</option>
                  <option>Feature Request</option>
                  <option>Bug Report</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg focus:border-[#ff914d] focus:outline-none resize-none"
                  placeholder="Tell us how we can help..."
                ></textarea>
              </div>

              <Button className="w-full bg-[#ff914d] hover:bg-[#ff914d]/90 text-black font-semibold">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

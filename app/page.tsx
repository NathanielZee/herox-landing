import { Button } from "@/components/ui/button"
import { Download, Crown, Shield } from "lucide-react"

export default function HeroXLanding() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="fixed inset-0 z-0">
        {/* Large stars */}
        <div className="absolute top-[10%] left-[15%] w-1 h-1 bg-white rounded-full animate-pulse opacity-80"></div>
        <div
          className="absolute top-[25%] right-[20%] w-1 h-1 bg-white rounded-full animate-pulse opacity-70"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-[40%] left-[8%] w-1 h-1 bg-white rounded-full animate-pulse opacity-90"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-[60%] right-[12%] w-1 h-1 bg-white rounded-full animate-pulse opacity-75"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute top-[80%] left-[25%] w-1 h-1 bg-white rounded-full animate-pulse opacity-85"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute top-[5%] left-[70%] w-1 h-1 bg-white rounded-full animate-pulse opacity-75"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute top-[35%] right-[5%] w-1 h-1 bg-white rounded-full animate-pulse opacity-80"
          style={{ animationDelay: "2.5s" }}
        ></div>
        <div
          className="absolute top-[70%] left-[60%] w-1 h-1 bg-white rounded-full animate-pulse opacity-85"
          style={{ animationDelay: "1.8s" }}
        ></div>
        <div
          className="absolute top-[90%] right-[45%] w-1 h-1 bg-white rounded-full animate-pulse opacity-70"
          style={{ animationDelay: "0.8s" }}
        ></div>

        {/* Medium stars */}
        <div
          className="absolute top-[15%] right-[35%] w-0.5 h-0.5 bg-white rounded-full animate-pulse opacity-60"
          style={{ animationDelay: "0.8s" }}
        ></div>
        <div
          className="absolute top-[35%] left-[30%] w-0.5 h-0.5 bg-white rounded-full animate-pulse opacity-65"
          style={{ animationDelay: "2.2s" }}
        ></div>
        <div
          className="absolute top-[55%] right-[40%] w-0.5 h-0.5 bg-white rounded-full animate-pulse opacity-70"
          style={{ animationDelay: "1.8s" }}
        ></div>
        <div
          className="absolute top-[75%] left-[45%] w-0.5 h-0.5 bg-white rounded-full animate-pulse opacity-55"
          style={{ animationDelay: "0.3s" }}
        ></div>
        <div
          className="absolute top-[8%] left-[50%] w-0.5 h-0.5 bg-white rounded-full animate-pulse opacity-65"
          style={{ animationDelay: "2.8s" }}
        ></div>
        <div
          className="absolute top-[28%] right-[65%] w-0.5 h-0.5 bg-white rounded-full animate-pulse opacity-60"
          style={{ animationDelay: "1.3s" }}
        ></div>
        <div
          className="absolute top-[48%] left-[75%] w-0.5 h-0.5 bg-white rounded-full animate-pulse opacity-70"
          style={{ animationDelay: "3.2s" }}
        ></div>
        <div
          className="absolute top-[68%] right-[75%] w-0.5 h-0.5 bg-white rounded-full animate-pulse opacity-55"
          style={{ animationDelay: "0.6s" }}
        ></div>
        <div
          className="absolute top-[88%] left-[35%] w-0.5 h-0.5 bg-white rounded-full animate-pulse opacity-65"
          style={{ animationDelay: "2.1s" }}
        ></div>
        <div
          className="absolute top-[18%] left-[85%] w-0.5 h-0.5 bg-white rounded-full animate-pulse opacity-60"
          style={{ animationDelay: "1.7s" }}
        ></div>

        {/* Small stars */}
        <div
          className="absolute top-[20%] left-[60%] w-px h-px bg-white rounded-full animate-pulse opacity-50"
          style={{ animationDelay: "1.2s" }}
        ></div>
        <div
          className="absolute top-[45%] right-[60%] w-px h-px bg-white rounded-full animate-pulse opacity-45"
          style={{ animationDelay: "2.5s" }}
        ></div>
        <div
          className="absolute top-[65%] left-[70%] w-px h-px bg-white rounded-full animate-pulse opacity-55"
          style={{ animationDelay: "0.7s" }}
        ></div>
        <div
          className="absolute top-[85%] right-[25%] w-px h-px bg-white rounded-full animate-pulse opacity-40"
          style={{ animationDelay: "1.9s" }}
        ></div>
        <div
          className="absolute top-[30%] right-[80%] w-px h-px bg-white rounded-full animate-pulse opacity-50"
          style={{ animationDelay: "0.4s" }}
        ></div>
        <div
          className="absolute top-[50%] left-[85%] w-px h-px bg-white rounded-full animate-pulse opacity-45"
          style={{ animationDelay: "2.8s" }}
        ></div>
        <div
          className="absolute top-[12%] left-[40%] w-px h-px bg-white rounded-full animate-pulse opacity-45"
          style={{ animationDelay: "3.5s" }}
        ></div>
        <div
          className="absolute top-[22%] right-[50%] w-px h-px bg-white rounded-full animate-pulse opacity-50"
          style={{ animationDelay: "1.6s" }}
        ></div>
        <div
          className="absolute top-[32%] left-[65%] w-px h-px bg-white rounded-full animate-pulse opacity-40"
          style={{ animationDelay: "2.9s" }}
        ></div>
        <div
          className="absolute top-[42%] right-[30%] w-px h-px bg-white rounded-full animate-pulse opacity-55"
          style={{ animationDelay: "0.9s" }}
        ></div>
        <div
          className="absolute top-[52%] left-[20%] w-px h-px bg-white rounded-full animate-pulse opacity-45"
          style={{ animationDelay: "3.1s" }}
        ></div>
        <div
          className="absolute top-[62%] right-[85%] w-px h-px bg-white rounded-full animate-pulse opacity-50"
          style={{ animationDelay: "1.4s" }}
        ></div>
        <div
          className="absolute top-[72%] left-[55%] w-px h-px bg-white rounded-full animate-pulse opacity-40"
          style={{ animationDelay: "2.3s" }}
        ></div>
        <div
          className="absolute top-[82%] right-[70%] w-px h-px bg-white rounded-full animate-pulse opacity-55"
          style={{ animationDelay: "0.2s" }}
        ></div>
        <div
          className="absolute top-[92%] left-[80%] w-px h-px bg-white rounded-full animate-pulse opacity-45"
          style={{ animationDelay: "2.7s" }}
        ></div>
        <div
          className="absolute top-[6%] right-[15%] w-px h-px bg-white rounded-full animate-pulse opacity-50"
          style={{ animationDelay: "1.1s" }}
        ></div>
        <div
          className="absolute top-[16%] left-[25%] w-px h-px bg-white rounded-full animate-pulse opacity-40"
          style={{ animationDelay: "3.3s" }}
        ></div>
        <div
          className="absolute top-[26%] right-[90%] w-px h-px bg-white rounded-full animate-pulse opacity-55"
          style={{ animationDelay: "0.1s" }}
        ></div>
        <div
          className="absolute top-[36%] left-[90%] w-px h-px bg-white rounded-full animate-pulse opacity-45"
          style={{ animationDelay: "2.4s" }}
        ></div>
        <div
          className="absolute top-[46%] right-[10%] w-px h-px bg-white rounded-full animate-pulse opacity-50"
          style={{ animationDelay: "1.7s" }}
        ></div>
        <div
          className="absolute top-[56%] left-[10%] w-px h-px bg-white rounded-full animate-pulse opacity-40"
          style={{ animationDelay: "3.4s" }}
        ></div>
        <div
          className="absolute top-[66%] right-[55%] w-px h-px bg-white rounded-full animate-pulse opacity-55"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute top-[76%] left-[75%] w-px h-px bg-white rounded-full animate-pulse opacity-45"
          style={{ animationDelay: "2.6s" }}
        ></div>
        <div
          className="absolute top-[86%] left-[35%] w-px h-px bg-white rounded-full animate-pulse opacity-50"
          style={{ animationDelay: "1.0s" }}
        ></div>
        <div
          className="absolute top-[96%] left-[65%] w-px h-px bg-white rounded-full animate-pulse opacity-40"
          style={{ animationDelay: "3.0s" }}
        ></div>
      </div>

  <section className="relative pt-8 pb-20 px-4 overflow-hidden bg-transparent z-10 animate-fade-in">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-slide-up">
              <div className="flex items-center space-x-2 mb-8">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Herox__1_-removebg-preview-Q5LdXWw7wJWLGVgOfPhB8cPh8Jmgap.png"
                  alt="Herox Logo"
                  className="w-8 h-8 rounded-lg"
                />
                <span className="text-xl font-bold text-[#ff914d]">Herox</span>
              </div>
              <div className="space-y-6 text-center lg:text-left">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight lg:leading-tight xl:leading-tight 2xl:leading-tight text-balance">
                  Are you ready <span className="text-[#ff914d]">✦</span>
                  <br />
                  for a revolution in
                  <br />
                  <span className="text-[#ff914d]">anime streaming?</span>
                  <br />
                  <span className="text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl font-normal text-gray-300">
                    Explore us
                  </span>
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-md mx-auto lg:mx-0">
                  Stream and download your favorite anime in HD with fast servers, easy navigation, and offline
                  downloads. Built for anime fans, by anime fans.
                </p>
                <a
                  href="/herox-app-release.apk"
                  download
                  className="bg-[#ff914d] hover:bg-[#ff914d]/90 text-black font-semibold px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full text-xs sm:text-sm md:text-base inline-block text-center"
                >
                  Download now
                </a>
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end animate-slide-up-delayed">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled_design__3_-removebg-preview-nK99I0bPN9GYnidsy27gnFUU5LGJO3.png"
                alt="HeroX Mobile App - Three Phones"
                className="w-96 sm:w-[450px] lg:w-[550px] xl:w-[650px] h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-transparent relative z-10 animate-fade-in-delayed">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content - Features */}
            <div className="space-y-8">
              <div className="text-left">
                <h2 className="text-3xl lg:text-4xl font-bold mb-8">
                  We Made <span className="text-[#ff914d]">Anime Streaming</span> Easier!
                </h2>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#ff914d]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-[#ff914d]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">HD Streaming</h3>
                    <p className="text-gray-400">Watch your favorite anime in crystal clear HD quality</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#ff914d]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Crown className="w-6 h-6 text-[#ff914d]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Enjoy Premium Experience</h3>
                    <p className="text-gray-400">Access exclusive content and premium features</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#ff914d]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Download className="w-6 h-6 text-[#ff914d]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Ad-Free Experience</h3>
                    <p className="text-gray-400">Enjoy uninterrupted anime without ads</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled_design__8_-removebg-preview-JEO2b9K5qPbt17yIcfnfo7b8hBxfAh.png"
                alt="HeroX App on Device"
                className="w-80 sm:w-96 lg:w-[450px] h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 relative z-10 mx-4 lg:mx-8 animate-slide-up-delayed">
        <div className="bg-[#121212] rounded-3xl border-2 border-[#ff914d] hover:border-[#ff914d]/80 transition-all duration-300 hover:shadow-lg hover:shadow-[#ff914d]/20 cursor-pointer transform hover:scale-[1.02] overflow-hidden">
          <div className="container mx-auto max-w-6xl p-8 lg:p-12 lg:py-1">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:items-center py-0">
              {/* Phone Image - Bottom on mobile, Left on desktop */}
              <div className="flex justify-center lg:justify-start relative order-2 lg:order-1">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled_design__7_-removebg-preview-B6eMLNZ9mc1Qou5K90I700Ab1Qj8Pi.png"
                  alt="HeroX App Interface"
                  className="w-[350px] sm:w-[600px] lg:w-[750px] xl:w-[850px] h-auto hover:scale-105 transition-transform duration-300 translate-y-8"
                  style={{ maxWidth: '100%', width: '100vw', minWidth: '350px' }}
                />
              </div>

              {/* Text Content - Top on mobile, Right on desktop */}
              <div className="space-y-6 text-center lg:text-left order-1 lg:order-2">
                <div className="my-0.5">
                  <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                    About <span className="text-[#ff914d]">Us</span>
                  </h2>
                  <h3 className="text-xl lg:text-2xl font-semibold text-[#ff914d] mb-4">
                    The Anime and Manga Media Server
                  </h3>
                  <p className="text-lg text-gray-300 mb-6">
                    Free and open-source media server packed with features for anime and manga enthusiasts.
                  </p>
                  <div className="space-y-4 text-gray-400 max-w-4xl mx-auto lg:mx-0">
                    <p>
                      Herox is designed specifically for anime and manga lovers who want a seamless streaming
                      experience. Our platform combines high-quality streaming with an easy-to-use interface.
                    </p>
                    <p>
                      Getting started is simple and straightforward. No complicated setup, no confusing menus - just
                      pure anime enjoyment at your fingertips.
                    </p>
                    <p>
                      Join thousands of anime fans who have discovered the future of anime streaming. Experience the
                      difference with Herox today.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 bg-[#121212] rounded-t-3xl relative z-10 animate-fade-in-delayed">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row justify-between items-start space-y-8 lg:space-y-0 gap-8">
            <div className="space-y-4 flex-shrink-0">
              <div className="flex items-center space-x-2">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Herox__1_-removebg-preview-Q5LdXWw7wJWLGVgOfPhB8cPh8Jmgap.png"
                  alt="Herox Logo"
                  className="w-8 h-8 rounded-lg"
                />
                <span className="text-xl font-bold text-[#ff914d]">Herox</span>
              </div>
              <p className="text-gray-400 max-w-xs">
                Your ultimate anime streaming experience. Watch, download, and enjoy anime anywhere.
              </p>
              <div className="flex items-center space-x-4 mt-4">
                <a
                  href="https://discord.gg/wB9F8PW7"
                  className="text-gray-400 hover:text-[#ff914d] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Join our Discord"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                </a>
                <a
                  href="https://t.me/+a1_YBq4jsukzYzk0"
                  className="text-gray-400 hover:text-[#ff914d] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Join our Telegram"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12a12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472c-.18 1.898-.962 6.502-1.36 8.627c-.168.9-.499 1.201-.82 1.23c-.696.065-1.225-.46-1.9-.902c-1.056-.693-1.653-1.124-2.678-1.8c-1.185-.78-.417-1.21.258-1.91c.177-.184 3.247-2.977 3.307-3.23c.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345c-.48.33-.913.49-1.302.48c-.428-.008-1.252-.241-1.865-.44c-.752-.245-1.349-.374-1.297-.789c.027-.216.325-.437.893-.663c3.498-1.524 5.83-2.529 6.998-3.014c3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full lg:w-auto">
              <div className="min-w-0">
                <h4 className="font-semibold mb-4 text-white">Product</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="/features" className="hover:text-[#ff914d] transition-colors">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="/download" className="hover:text-[#ff914d] transition-colors">
                      Download
                    </a>
                  </li>
                  <li>
                    <a href="/updates" className="hover:text-[#ff914d] transition-colors">
                      Updates
                    </a>
                  </li>
                </ul>
              </div>
              <div className="min-w-0">
                <h4 className="font-semibold mb-4 text-white">Company</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="/about" className="hover:text-[#ff914d] transition-colors">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="hover:text-[#ff914d] transition-colors">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="/support" className="hover:text-[#ff914d] transition-colors">
                      Support
                    </a>
                  </li>
                </ul>
              </div>
              <div className="min-w-0">
                <h4 className="font-semibold mb-4 text-white">Resources</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="/help" className="hover:text-[#ff914d] transition-colors">
                      Help Center
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

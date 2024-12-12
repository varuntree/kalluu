import Image from "next/image";

export default function MainPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute rounded-3xl inset-0 bg-gradient-to-r from-black/50 to-transparent z-10" />

      {/* Background Image for mobile */}
      <div className="md:hidden absolute inset-0 z-0">
        <Image
          src="/main2.png"
          alt="Cleaning Service Illustration"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={100}
        />
      </div>

      {/* Main content container */}
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Content Container */}
        <div className="relative z-20 w-full md:w-1/2 p-8 lg:p-24 lg:pl-32 flex flex-col justify-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 text-white">
              KALLU
              <span className="text-primary block mt-2">CLEANING</span>
              <span className="text-white">SERVICE</span>
            </h1>

            <div className="space-y-4 mt-8">
              <p className="text-xl lg:text-2xl leading-relaxed text-white/90">
                Experience the magic of a spotless home or office, crafted with
                care and professionalism.
              </p>
              <p className="text-lg lg:text-xl leading-relaxed text-white/80">
                Reliable, Affordable, and Professional Cleaning Services.
              </p>
            </div>

            {/* Call to Action Buttons */}
            <div className="mt-12 flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-primary text-white rounded-3xl hover:bg-primary/90 transition-colors text-lg font-semibold">
                Get Started
              </button>
              <button className="px-8 py-4 bg-white/10 text-white rounded-3xl hover:bg-white/20 transition-colors text-lg font-semibold backdrop-blur-sm">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Image Container for desktop */}
        <div className="hidden md:block relative z-0 w-1/2 h-screen">
          <Image
            src="/main2.png"
            alt="Cleaning Service Illustration"
            fill
            priority
            className="object-cover"
            sizes="50vw"
            quality={100}
          />
        </div>
      </div>
    </main>
  );
}

import Image from "next/image";

export default function MainPage() {
  return (
    <main className="relative  h-screen w-full overflow-hidden flex flex-col lg:flex-row">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <Image
          src="/main2.png"
          alt="Cleaning Service Illustration"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Text Section */}
      <div className="relative z-10 flex-1 flex items-center justify-center p-6 lg:p-12 lg:pr-24 bg-white/20 lg:bg-transparent">
        <div className="text-center lg:text-left max-w-xl">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
            KALLU <span className="text-primary">CLEANING</span> SERVICE
          </h1>
          <p className="text-lg lg:text-xl leading-relaxed mb-4">
            Experience the magic of a spotless home or office, crafted with care
            and professionalism.
          </p>
          <p className="text-lg lg:text-xl leading-relaxed">
            Reliable, Affordable, and Professional Cleaning Services.
          </p>
        </div>
      </div>

      {/* On larger screens, space for image to show distinctly on the right */}
      <div className="hidden lg:block lg:flex-1" />
    </main>
  );
}

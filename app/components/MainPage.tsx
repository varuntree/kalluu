
import Image from 'next/image';

export default function MainPage() {
  return (
    <main className="flex flex-col md:flex-row min-h-[100vh] container mx-auto">
      {/* Left Section - Text Content */}
      <div className="flex-1 flex items-center justify-center md:justify-start p-6 md:p-12">
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold font-heading leading-tight mb-4">
            KALLU <span className="text-primary">CLEANING</span> SERVICE
          </h1>
          <p className="text-lg md:text-xl font-body leading-relaxed mb-4">
            Experience the magic of a spotless home or office, crafted with care and professionalism.
          </p>
          <p className="text-lg md:text-xl font-body leading-relaxed">
            Reliable, Affordable, and Professional Cleaning Services.
          </p>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="flex-1 relative min-h-[50vh] md:min-h-screen">
        <Image
          src="/t.png"
          alt="Cleaning Service Illustration"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain"
        />
      </div>
    </main>
  );
}

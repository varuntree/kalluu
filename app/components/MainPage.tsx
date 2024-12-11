import Image from 'next/image';

export default function MainPage() {
  return (
    <main className="flex flex-col lg:flex-row h-screen">
      {/* Left Section - Top-aligned Text Content */}
      <div className="flex items-start justify-start lg:w-1/2 p-6 lg:pl-64">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold font-heading leading-tight mb-4">
            KALLU <span className="text-primary">CLEANING</span> SERVICE
          </h1>
          <p className="text-lg lg:text-xl font-body leading-relaxed mb-4">
            Experience the magic of a spotless home or office, crafted with care and professionalism.
          </p>
          <p className="text-lg lg:text-xl font-body leading-relaxed">
            Reliable, Affordable, and Professional Cleaning Services.
          </p>
        </div>
      </div>

      {/* Right Section - Fullscreen Image */}
      <div className="lg:w-1/2 h-1/2 lg:h-full relative">
        <Image
          src="/t.png" // Path to your transparent image
          alt="Descriptive Alt Text"
          layout="fill"
          objectFit="cover" // Ensures the image covers the entire container
          objectPosition="center" // Centers the image
          className="absolute"
        />
      </div>
    </main>
  );
}

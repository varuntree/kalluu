
import Image from 'next/image';

export default function MainPage() {
  return (
    <main className="flex flex-col lg:flex-row min-h-screen container mx-auto">
      {/* Left Section - Text Content */}
      <div className="flex-1 flex items-center justify-center lg:justify-start p-6 lg:p-12">
        <div className="text-center lg:text-left max-w-xl">
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

      {/* Right Section - Image */}
      <div className="flex-1 relative h-[400px] lg:h-auto">
        <Image
          src="/t.png"
          alt="Cleaning Service Illustration"
          fill
          style={{ objectFit: 'contain' }}
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </main>
  );
}

import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="/assets/20250305_1625_Sunset%20Yoga%20Serenity_remix_01jnmdfzg0f58asmxfgq9y8fy9.mp4"
          type="video/mp4"
        />
        <source
          src="/assets/20250305_1625_Sunset%20Yoga%20Serenity_remix_01jnmdfzfvf6h8g78h2xpnjm04.mp4"
          type="video/mp4"
        />
      </video>

      {/* Fallback background image in case video fails to load */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/assets/DALLe-2.png)' }}
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Find Your Inner Peace by the Ocean
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Experience the harmony of yoga and nature at our beachfront studio
          </p>
          <div className="space-x-4">
            <Button asChild size="lg">
              <Link href="/enroll">Start Your Journey</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
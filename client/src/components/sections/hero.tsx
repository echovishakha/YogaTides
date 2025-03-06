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
          src="https://player.vimeo.com/external/369039090.sd.mp4?s=e89a28849162c59d952e5af37ba84b8e55d69042&profile_id=164&oauth2_token_id=57447761"
          type="video/mp4"
        />
      </video>
      
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

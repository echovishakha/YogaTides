import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "wouter";

const practices = [
  {
    title: "Morning Flow",
    description: "Start your day with energizing poses by the ocean",
    image: "https://images.unsplash.com/photo-1491172700640-4f1a131a3670",
    benefits: ["Increased energy", "Mental clarity", "Improved flexibility"],
  },
  {
    title: "Sunset Meditation",
    description: "Find peace and tranquility as the day winds down",
    image: "https://images.unsplash.com/photo-1669488510582-5ff5f465b83a",
    benefits: ["Stress reduction", "Better sleep", "Emotional balance"],
  },
  {
    title: "Beach Yoga",
    description: "Connect with nature through outdoor sessions",
    image: "https://images.unsplash.com/photo-1617372591456-cd79c5f0ac6e",
    benefits: ["Natural vitamin D", "Grounding", "Fresh ocean air"],
  },
];

const tips = [
  {
    title: "Mindful Eating",
    content: "Learn about nutrition that supports your yoga practice and overall wellness.",
  },
  {
    title: "Daily Rituals",
    content: "Incorporate simple yoga practices into your daily routine for lasting benefits.",
  },
  {
    title: "Stress Management",
    content: "Discover techniques to maintain calm and balance in your busy life.",
  },
];

export default function Lifestyle() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">The Yoga Lifestyle</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Embrace a holistic approach to wellness through our signature
            practices and lifestyle guidance.
          </p>
        </div>

        {/* Practices */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Practices</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {practices.map((practice) => (
              <Card key={practice.title} className="overflow-hidden">
                <img
                  src={practice.image}
                  alt={practice.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{practice.title}</h3>
                  <p className="text-muted-foreground mb-4">{practice.description}</p>
                  <Separator className="my-4" />
                  <div className="space-y-2">
                    {practice.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-primary mr-2" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Wellness Tips */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Wellness Tips</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {tips.map((tip) => (
              <Card key={tip.title} className="p-6">
                <h3 className="text-xl font-semibold mb-3">{tip.title}</h3>
                <p className="text-muted-foreground">{tip.content}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div
            className="rounded-lg p-8 bg-cover bg-center relative overflow-hidden"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1620688511948-52d2a8e3465e)`,
            }}
          >
            <div className="absolute inset-0 bg-primary/80" />
            <div className="relative z-10 text-white">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Transform Your Life?
              </h2>
              <p className="text-lg mb-6 text-white/90">
                Join our community and discover the benefits of a yoga-centered lifestyle
              </p>
              <Button asChild size="lg" variant="secondary">
                <Link href="/enroll">Start Your Journey</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

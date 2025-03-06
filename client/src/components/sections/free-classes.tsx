import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const classes = [
  {
    title: "Beginner's Flow",
    description: "Perfect for those new to yoga",
    time: "Every Monday, 9:00 AM",
    image: "https://images.unsplash.com/photo-1617372591452-9adad3e8070e",
  },
  {
    title: "Sunset Meditation",
    description: "End your day with peace",
    time: "Every Wednesday, 6:00 PM",
    image: "https://images.unsplash.com/photo-1575762568427-4b23bf947729",
  },
];

export default function FreeClasses() {
  return (
    <section className="relative py-16">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="/assets/20250305_1625_Sunset_Yoga_Serenity_remix_01jnmdfzfvf6h8g78h2xpnjm04.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Free Community Classes
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {classes.map((cls) => (
            <Card key={cls.title} className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <img
                  src={cls.image}
                  alt={cls.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="space-y-4">
                <CardTitle>{cls.title}</CardTitle>
                <p className="text-muted-foreground">{cls.description}</p>
                <p className="font-medium">{cls.time}</p>
                <Button className="w-full">Reserve Your Spot</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
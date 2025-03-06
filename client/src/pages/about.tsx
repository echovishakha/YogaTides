import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "Beachfront Location",
    description: "Practice yoga with the soothing sounds of waves and ocean breeze",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    title: "Expert Instructors",
    description: "Learn from certified yoga teachers with years of experience",
    image: "https://images.unsplash.com/photo-1522845015757-50bce044e5da",
  },
  {
    title: "Modern Facilities",
    description: "State-of-the-art studio with ocean views and premium equipment",
    image: "https://images.unsplash.com/photo-1554104707-a76b270e4bbb",
  },
];

const instructors = [
  {
    name: "Sarah Mitchell",
    role: "Lead Instructor",
    specialty: "Vinyasa Flow",
    image: "https://images.unsplash.com/photo-1617372591452-9adad3e8070e",
  },
  {
    name: "David Chen",
    role: "Meditation Guide",
    specialty: "Mindfulness & Pranayama",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597",
  },
];

export default function About() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About Nirvana</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Founded in 2020, Nirvana brings together the healing power of yoga
            and the calming presence of the ocean to create a unique wellness experience.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature) => (
            <Card key={feature.title} className="overflow-hidden">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Instructors */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Instructors</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {instructors.map((instructor) => (
              <Card key={instructor.name} className="overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full md:w-48 h-48 object-cover"
                  />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{instructor.name}</h3>
                    <p className="text-primary mb-2">{instructor.role}</p>
                    <p className="text-muted-foreground">{instructor.specialty}</p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Studio */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-8">Our Studio</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <img
              src="https://images.unsplash.com/photo-1447452001602-7090c7ab2db3"
              alt="Studio Interior"
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="flex items-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">A Sacred Space</h3>
                <p className="text-muted-foreground">
                  Our studio is designed to create a perfect harmony between indoor comfort
                  and the natural beauty of the ocean. Large windows provide natural light
                  and breathtaking views, while our state-of-the-art facilities ensure
                  a comfortable practice environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

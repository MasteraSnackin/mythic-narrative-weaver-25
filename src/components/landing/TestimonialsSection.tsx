import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "John Doe",
    role: "Farmer, California",
    image: "https://i.pravatar.cc/150?u=john",
    content: "DInsure has given me peace of mind knowing my crops are protected against unpredictable weather conditions. The automatic payouts are a game-changer."
  },
  {
    name: "Sarah Rodriguez",
    role: "Farm Owner, Texas",
    image: "https://i.pravatar.cc/150?u=sarah",
    content: "The transparency of smart contracts and immediate payouts make this insurance solution truly revolutionary. Highly recommended!"
  },
  {
    name: "Michael Johnson",
    role: "Agricultural Consultant",
    image: "https://i.pravatar.cc/150?u=michael",
    content: "As someone who advises farmers on risk management, I've found DInsure to be the most innovative and reliable parametric insurance solution available."
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-900 to-purple-600 bg-clip-text text-transparent">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{testimonial.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
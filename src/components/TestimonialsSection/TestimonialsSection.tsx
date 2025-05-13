import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { testimonials } from "../../utils/constants/testimonials";
import TestimonialCard from "../../atoms/TestimonialCard/TestimonialCard";

const TestimonialsSection = () => {
  const { ref, controls } = useScrollAnimation();

  // Fallback if testimonials is undefined
  const testimonialData = testimonials || [];

  return (
    <section
      ref={ref}
      id="testimonials"
      className="py-20 bg-green-600 text-white"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our happy customers
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        {testimonialData.length > 0 ? (
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.3,
                },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonialData.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </motion.div>
        ) : (
          <p className="text-white text-center py-12">
            Customer testimonials coming soon!
          </p>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;

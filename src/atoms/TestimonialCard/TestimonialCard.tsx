import { motion } from "framer-motion";
import type { Testimonial } from "../../types/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.5 }}
      className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-xl h-full flex flex-col"
    >
      {/* Rating Stars */}
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${
              i < testimonial.rating ? "text-yellow-400" : "text-gray-400"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Testimonial Text */}
      <blockquote className="flex-grow mb-6">
        <p className="italic text-lg text-black">"{testimonial.comment}"</p>
      </blockquote>

      {/* Customer Info */}
      <div className="flex items-center mt-auto">
        <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 border-2 border-white border-opacity-30 rounded-full"></div>
        </div>
        <div>
          <h4 className="font-bold text-black">{testimonial.name}</h4>
          <p className="text-sm text-green-200">{testimonial.location}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;

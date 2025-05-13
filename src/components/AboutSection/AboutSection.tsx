import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const AboutSection = () => {
  const { ref, controls } = useScrollAnimation();

  return (
    <section id="about" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-6">
            Our Story
          </h2>

          <div className="relative">
            <motion.p
              className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              At JuiceBar, we believe in the power of nature's bounty. Our
              cold-pressed juices retain maximum nutrients to fuel your healthy
              lifestyle. We source only the freshest organic produce and package
              sustainably to minimize our environmental impact while maximizing
              your health benefits.
            </motion.p>

            <motion.div
              className="absolute -left-20 -top-10 hidden lg:block"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <img
                src="/images/lemon.svg" 
                alt="Lemon"
                className="w-24 h-24 object-contain"
              />
            </motion.div>

            <motion.div
              className="absolute -right-20 -bottom-10 hidden lg:block"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <img
                src="/images/orange.jpg"
                alt="Orange"
                className="w-24 h-24 object-contain"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold text-green-600">2015</h3>
              <p className="text-gray-600">Founded</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold text-green-600">10K+</h3>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold text-green-600">100%</h3>
              <p className="text-gray-600">Organic</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold text-green-600">24/7</h3>
              <p className="text-gray-600">Delivery</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

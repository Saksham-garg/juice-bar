import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import Button from "../../atoms/Button/Button";

const NewsletterSection = () => {
  const { ref, controls } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 bg-orange-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
          }}
          className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="md:flex">
            <div className="md:w-1/2 bg-green-600 p-8 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <h3 className="text-3xl font-bold text-white mb-4">
                  Get 10% Off
                </h3>
                <p className="text-green-100">
                  Subscribe to our newsletter and receive a discount on your
                  first order!
                </p>
              </motion.div>
            </div>

            <div className="md:w-1/2 p-8">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-2xl font-bold text-gray-800 mb-4"
              >
                Join Our Community
              </motion.h2>

              <motion.form
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Your name"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <Button variant="primary" className="w-full">
                  Subscribe
                </Button>
              </motion.form>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-xs text-gray-500 mt-4"
              >
                We respect your privacy. Unsubscribe at any time.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;

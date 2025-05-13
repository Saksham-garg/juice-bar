import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { juices } from "../../utils/constants/Juices";
import JuiceCard from "../../atoms/JuiceCard/JuiceCard";
import Button from "../../atoms/Button/Button";

const MenuSection = () => {
  const { ref, controls } = useScrollAnimation();

  return (
    <section id="menu" ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-4">
            Our Juices
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Freshly pressed to order with the finest organic ingredients
          </p>
        </motion.div>

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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {juices.map((juice) => (
            <JuiceCard key={juice.id} juice={juice} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-center"
        >
          <Button variant="outline" className="text-lg">
            View Full Menu
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;

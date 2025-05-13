import { motion } from "framer-motion";

const FooterSection = () => {
  return (
    <footer className="bg-green-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-4">JuiceBar</h3>
            <p className="text-green-200 mb-4">
              Fresh, cold-pressed juices made with love and the finest organic
              ingredients.
            </p>
            <div className="flex space-x-4">
              {["facebook", "instagram", "twitter"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center hover:bg-green-600 transition"
                  aria-label={social}
                >
                  <span className="sr-only">{social}</span>
                  {/* Icon would go here */}
                </a>
              ))}
            </div>
          </motion.div>

          {[
            {
              title: "Quick Links",
              links: ["Home", "Menu", "About Us", "Contact"],
            },
            {
              title: "Juices",
              links: [
                "Green Detox",
                "Sunrise Blend",
                "Berry Boost",
                "Tropical Twist",
              ],
            },
            {
              title: "Legal",
              links: [
                "Privacy Policy",
                "Terms of Service",
                "Shipping Policy",
                "Refund Policy",
              ],
            },
          ].map((column, index) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
            >
              <h3 className="text-lg font-bold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-green-200 hover:text-white transition"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-green-700 pt-6 text-center text-green-300"
        >
          <p>
            &copy; {new Date().getFullYear()} JuiceBar. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;

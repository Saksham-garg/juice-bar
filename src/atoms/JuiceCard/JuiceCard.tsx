import React from "react";
import { motion } from "framer-motion";
import type { Juice } from "../../types/types";

interface JuiceCardProps {
  juice: Juice;
}

const JuiceCard: React.FC<JuiceCardProps> = ({ juice }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`rounded-xl overflow-hidden shadow-md ${juice.color}`}
    >
      <div className="h-48 bg-white flex items-center justify-center">
        <img
          src={juice.image}
          alt={juice.name}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-6 flex flex-col justify-between h-auto">
        <div className="">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{juice.name}</h3>
          <p className="text-gray-600 mb-4">{juice.ingredients}</p>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-orange-500 font-bold">
            ${juice.price.toFixed(2)}
          </span>
          <button className="text-green-600 hover:text-green-800 font-medium">
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default JuiceCard;

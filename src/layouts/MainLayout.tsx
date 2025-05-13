import React from "react";
import Navbar from "../atoms/Navbar/Navbar";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen font-sans text-gray-800 bg-white">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;

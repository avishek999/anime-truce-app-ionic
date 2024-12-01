import { useState } from "react";
import { useLocation, Redirect } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { IoSparkles } from "react-icons/io5";
import { RiRobot2Fill } from "react-icons/ri";

const TabBar = () => {
  const location = useLocation();
  const [redirectPath, setRedirectPath] = useState<string | null>(null);

  const TabBarIcons = ({
    children,
    route,
  }: {
    children: React.ReactNode;
    route: string;
  }) => {
    const isActive = location.pathname === route; // Check if route matches current path

    return (
      <div
        onClick={() => {
          if (location.pathname !== route) {
            setRedirectPath(route); // Only redirect if not already on the same route
          }
        }}
        className={`p-4 rounded-full transform transition-all duration-300 ${
          isActive
            ? "bg-white text-black scale-105 scale-105"
            : "bg-transparent text-white scale-100"
        }`}
      >
        {children}
      </div>
    );
  };

  return (
    <>
      {redirectPath && <Redirect to={redirectPath} />} {/* Handle redirection */}
      <div className="absolute bottom-[40px] w-full">
        <div className="bg-white/20 backdrop-blur-sm rounded-3xl mx-auto w-[270px] flex justify-evenly py-3">
          <TabBarIcons route="/feature">
            <IoSparkles size={30} />
          </TabBarIcons>
          <TabBarIcons route="/home">
            <AiOutlineHome size={30} />
          </TabBarIcons>
          <TabBarIcons route="/bot">
            <RiRobot2Fill size={30} />
          </TabBarIcons>
        </div>
      </div>
    </>
  );
};

export default TabBar;

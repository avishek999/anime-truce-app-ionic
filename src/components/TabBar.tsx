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
    const isActive = location.pathname === route;

    return (
      <div
        onClick={() => {
          if (location.pathname !== route) {
            setRedirectPath(route);
          }
        }}
        className={`p-4 rounded-full transform transition-all duration-300     ${
          isActive
            ? "bg-white text-black scale-110 outline outline-offset-2 outline-4 outline-purple-800  drop-shadow-lg "
            : "bg-transparent text-white scale-100"
        }`}
      >
        {children}
      </div>
    );
  };

  return (
    <>
      {redirectPath && <Redirect to={redirectPath} />}{" "}
      {/* Handle redirection */}
      <div className="fixed bottom-[20px] w-full">
        <div className="bg-white/20 backdrop-blur-sm rounded-full mx-auto w-[280px] flex justify-evenly py-0 relative  ">
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

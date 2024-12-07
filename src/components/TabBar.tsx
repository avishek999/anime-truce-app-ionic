import { useState } from "react";
import { useLocation, Redirect } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { IoSparklesOutline } from "react-icons/io5";
import { GoHubot } from "react-icons/go";

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
        className={` p-4 rounded-full transform transition-all duration-300     ${
          isActive
            ? "bg-white text-black scale-110 outline outline-offset-2 outline-2 outline-purple-400/30  drop-shadow-lg  "
            : "bg-transparent text-white "
        }`}
      >
        {children}
      </div>
    );
  };

  return (
    <>
      {redirectPath && <Redirect to={redirectPath} />}{" "}
      <div className="fixed bottom-[20px] w-full z-40">
        <div className="bg-white/20 backdrop-blur-sm rounded-full mx-auto w-[65%] flex justify-evenly py-0 relative  ">
          <TabBarIcons route="/feature">
            <IoSparklesOutline size={30} />
          </TabBarIcons>
          <TabBarIcons route="/home">
            <AiOutlineHome size={30} />
          </TabBarIcons>
          <TabBarIcons route="/bot">
            <GoHubot size={30} />
          </TabBarIcons>
        </div>
      </div>
    </>
  );
};

export default TabBar;

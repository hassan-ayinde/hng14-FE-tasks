import { HiMiniMoon } from "react-icons/hi2";
import { Button } from "../ui/button";
import LOGO from "@/assets/images/logo.svg";
import PROFILEIMAGE from "@/assets/images/profile_img.png";
import { GoDotFill } from "react-icons/go";
import { useContext } from "react";
import { AppBarContext } from "@/context/AppBarContext";

const AppBar = () => {
  const { isDark: theme, handleThemeChange: onThemeChange } = useContext(
    AppBarContext,
  ) as {
    isDark: boolean;
    handleThemeChange: () => void;
  };
  return (
    <section className="lg:h-screen flex lg:flex-col items-center justify-between bg-neutral-600 lg:rounded-r-3xl lg:overflow-hidden">
      <div className="w-full lg:h-full lg:pb-5 lg:mb-4 flex lg:flex-col items-center justify-between border-r-2 lg:border-b-2 border-solid border-neutral-550 pr-4 lg:pr-0">
        <img src={LOGO} alt="" className="w-15 lg:w-16" />
        <Button
          onClick={onThemeChange}
          variant="outline"
          size="icon"
          className="h-auto w-auto cursor-pointer p-0 bg-transparent hover:bg-transparent border-0 hover:text-text-neutral-500"
        >
          {theme ? (
            <GoDotFill className="h-9! w-9! text-neutral-500 cursor-pointer" />
          ) : (
            <HiMiniMoon className="h-7! w-7! text-neutral-500 cursor-pointer" />
          )}
        </Button>
      </div>
      <div className="mx-9 lg:mx-0 lg:my-5">
        <img src={PROFILEIMAGE} alt="" className="lg:w-10 w-12 object-cover" />
      </div>
    </section>
  );
};

export default AppBar;

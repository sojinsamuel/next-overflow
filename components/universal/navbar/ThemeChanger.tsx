import React from "react";
import Image from "next/image";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

import { themes } from "@/constants/global";
import { useAppTheme } from "@/context/ProvideTheme";
function ThemeChanger() {
  const { theme, setTheme } = useAppTheme();

  const renderThemeIcon = (currentTheme: string) => {
    const iconName = currentTheme === "light" ? "sun" : "moon";
    return (
      <Image
        className="theme-active"
        src={`/assets/icons/${iconName}.svg`}
        height={20}
        width={20}
        alt={`${iconName} theme`}
      />
    );
  };

  return (
    <Menubar className="relative border-none bg-transparent shadow-none">
      <MenubarMenu>
        <MenubarTrigger className="focus:bg-light-901 data-[state=open]:bg-light-901 dark:focus:bg-dark-201  dark:data-[state=open]:bg-dark-201">
          {renderThemeIcon(theme)}
        </MenubarTrigger>
        <MenubarContent className="absolute right-[-3.2rem] mt-4 min-w-[121px] rounded border py-3 dark:border-dark-401 dark:bg-dark-301">
          {themes.map((item) => (
            <MenubarItem
              className="flex items-center gap-3 px-3 py-2.5 dark:focus:bg-dark-401"
              key={item.label}
              onClick={() => {
                setTheme(item.label);
                if (item.label !== "system") {
                  localStorage.theme = item.label;
                } else {
                  localStorage.removeItem("theme");
                }
              }}
            >
              <Image
                src={item.path}
                height={17}
                width={17}
                alt={`${item.label} item`}
                className={`${theme === item.label && "theme-active"}`}
              />
              <p
                className={`body-semi text-light-501 ${
                  theme === item.label ? "text-[#FF7101]" : "txt-dt101_lt901"
                }`}
              >
                {item.label}
              </p>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}

export default ThemeChanger;

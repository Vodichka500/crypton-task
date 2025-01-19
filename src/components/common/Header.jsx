import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import {MenuIcon} from "lucide-react";
import { Moon, Sun } from "lucide-react"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "@/components/ThemeProvider.jsx"

const Header = () => {
    const { setTheme } = useTheme()
    return (
        <header className="text-mainLightText dark:text-gray-300 mt-10 flex h-20 w-full shrink-0 items-center px-4 md:px-6">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="lg:hidden border-none ">
                        <MenuIcon className="h-10 w-10"/>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="text-white border-gray-600 bg-[#212121]">
                    <a href="/" className="mr-6 hidden lg:flex">
                        <img src="https://crypton.xyz/638fc5d41557198f8649.svg" alt="logo" className="w-6 h-6"/>
                    </a>
                    <div className="grid gap-2 py-6">
                        <a href="/" className="flex w-full items-center py-2 text-lg font-semibold">
                            Home
                        </a>
                        <a href="/login" className="flex w-full items-center py-2 text-lg font-semibold">
                            Login
                        </a>
                        <a href="/register" className="flex w-full items-center py-2 text-lg font-semibold">
                            Register
                        </a>
                    </div>
                </SheetContent>
            </Sheet>
            <a href="/" className="mr-6 hidden lg:flex lg:gap-4 text-md font-bold">
                <img src="https://crypton.xyz/638fc5d41557198f8649.svg" alt="logo" className="w-6 h-6"/>
                Crypyon
            </a>
            <nav className="ml-auto hidden lg:flex gap-6">
                <a
                    href="/"
                    className="group text-mainLightText dark:text-gray-300 inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors  hover:text-mainRed focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 "
                >
                    Home
                </a>
                <a
                    href="/login"
                    className="group text-mainLightText dark:text-gray-300 inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors  hover:text-mainRed focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50"
                >
                    Login
                </a>
                <a
                    href="/register"
                    className="group text-mainLightText dark:text-gray-300 inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:text-mainRed focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 "
                >
                    Register
                </a>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="" size="icon">
                            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="backdrop-blur rounded-xl text-mainLightText dark:text-gray-300">
                        <DropdownMenuItem className="cursor-pointer" onClick={() => setTheme("light")}>
                            Light
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer" onClick={() => setTheme("dark")}>
                            Dark
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer"     onClick={() => setTheme("system")}>
                            System
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </nav>
        </header>
    );
}
export default Header
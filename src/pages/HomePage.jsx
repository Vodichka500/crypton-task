import {LogIn, UserRoundPen, CircleUser} from "lucide-react";

const HomePage = () => {
    return (
        <div className="mt-20 flex flex-col justify-center text-mainLightText dark:text-gray-300">
            <div className="w-full grid grid-cols-1 md:grid-cols-3">
                <div
                    className="relative col-span-2 text-5xl text-mainRed leading-relaxed uppercase flex justify-center items-center">
                    <h2 className="text-transparent text-[180px] absolute  text-stroke">CRYPTON</h2>
                    <h2 className="text-red text-[180px] absolute  header-animation">CRYPTON</h2>
                </div>
                <div className="flex flex-col justify-start gap-10">
                    <div className="flex gap-10">
                        <div className="relative flex justify-center">
                            <a href="/#/login"
                               className=" px-10  py-6 flex gap-10 flex-col justify-between items-center border-2 border-mainLightText rounded-2xl dark:bg-[#18191c]  dark:border-wight">
                                <div className="text-3xl">
                                    Log In
                                </div>
                                <div>
                                    <LogIn size={100} className="text-mainRed"/>
                                </div>
                                <div className="hidden dark:block">
                                    <img className="w-10" src="/arrow.svg" alt="arrow-right icon"/>
                                </div>
                                <div className="block dark:hidden">
                                    <img className="w-10" src="/arrowDark.svg" alt="arrow-right icon"/>
                                </div>
                            </a>

                        </div>

                        <div className="flex justify-center">
                            <a href="/#/register"
                               className="px-10 bg-transparent py-6 flex gap-10 flex-col justify-between items-center border-2 border-mainLightText rounded-2xl dark:bg-[#18191c]  dark:border-wight">
                                <div className="text-3xl">
                                    Register
                                </div>
                                <div>
                                    <UserRoundPen size={100} className="text-mainRed"/>
                                </div>
                                <div className="hidden dark:block">
                                    <img className="w-10" src="/arrow.svg" alt="arrow-right icon"/>
                                </div>
                                <div className="block dark:hidden">
                                    <img className="w-10" src="/arrowDark.svg" alt="arrow-right icon"/>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="flex justify-start">
                        <a href="/#/profile"
                           className="px-10 bg-transparent py-6 flex gap-10  justify-between items-center border-2 border-mainLightText rounded-2xl dark:bg-[#18191c]  dark:border-wight">
                            <div className="flex flex-col items-center">
                                <div className="text-3xl">
                                    Profile
                                </div>
                                <div className="hidden dark:block">
                                    <img className="w-10" src="/arrow.svg" alt="arrow-right icon"/>
                                </div>
                                <div className="block dark:hidden">
                                    <img className="w-10" src="/arrowDark.svg" alt="arrow-right icon"/>
                                </div>
                            </div>
                            <div>
                                <CircleUser size={100} className="text-mainRed"/>
                            </div>

                        </a>
                    </div>


                </div>
            </div>
        </div>
    )
}
export default HomePage
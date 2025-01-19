import {useQuery, useQueryClient} from "@tanstack/react-query";
import {getProfile} from "@/lib/requests.js";
import {Navigate, useNavigate} from "react-router";
import {Github, Linkedin, FileUser, ExternalLink, Link} from "lucide-react";
import {Skeleton} from "@/components/ui/skeleton.jsx";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {Label} from "@radix-ui/react-label";
import {Button} from "@/components/ui/button.jsx";
import {exit} from "@/lib/requests.js";


const Telegram = (color) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 256">
            <path fill={color}
                  d="M236.88 26.19a9 9 0 0 0-9.16-1.57L25.06 103.93a14.22 14.22 0 0 0 2.43 27.21L80 141.45V200a15.92 15.92 0 0 0 10 14.83a15.91 15.91 0 0 0 17.51-3.73l25.32-26.26L173 220a15.88 15.88 0 0 0 10.51 4a16.3 16.3 0 0 0 5-.79a15.85 15.85 0 0 0 10.67-11.63L239.77 35a9 9 0 0 0-2.89-8.81Zm-61.14 36l-89.59 64.16l-49.6-9.73ZM96 200v-47.48l24.79 21.74Zm87.53 8l-82.68-72.5l119-85.29Z"/>
        </svg>
    )
}

const ProfilePage = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient()
    const query = useQuery({
        queryKey: ['profile'], // Всегда массив
        queryFn: getProfile,
    })

    if (query.isLoading ) {
        return (
            <Skeleton className="mt-20 grid grid-cols-3">

                <Skeleton className="flex flex-col justify-center items-center ">
                    <Skeleton
                        className="bg-gray-600 rounded-2xl w-80 relative text-7xl text-mainRed leading-relaxed uppercase flex justify-center items-center min-h-[60px]">
                    </Skeleton>
                    <Skeleton
                        className="min-h-96 bg-gray-600 mt-5 w-[350px] text-black  py-6 flex gap-10 flex-col justify-between items-start   rounded-2xl">
                    </Skeleton>
                </Skeleton>

                <Skeleton className="flex flex-col justify-center items-center ">
                    <Skeleton
                        className="bg-gray-600 rounded-2xl w-80 relative text-7xl text-mainRed leading-relaxed uppercase flex justify-center items-center min-h-[60px]">
                    </Skeleton>
                    <Skeleton
                        className="min-h-96 bg-gray-600 mt-5 w-[350px] text-black  py-6 flex gap-10 flex-col justify-between items-start   rounded-2xl">
                    </Skeleton>
                </Skeleton>

                <Skeleton className="flex flex-col justify-center items-center ">
                    <Skeleton
                        className="bg-gray-600 rounded-2xl w-80 relative text-7xl text-mainRed leading-relaxed uppercase flex justify-center items-center min-h-[60px]">
                    </Skeleton>
                    <Skeleton
                        className="min-h-96 bg-gray-600 mt-5 w-[350px] text-black  py-6 flex gap-10 flex-col justify-between items-start   rounded-2xl">
                    </Skeleton>
                </Skeleton>

            </Skeleton>

        )
    }
    if (query.isError) {
        return <Navigate to="/login"/>
    }
    if (query.isSuccess) {
        return (
            <div className="mt-20 grid grid-cols-3">
                <div className="flex flex-col justify-center items-center ">
                    <div
                        className="text-7xl leading-relaxed uppercase  min-h-[60px]">
                        <h2 className="left-0 text-mainLightText dark:text-white">Profile</h2>
                    </div>
                    <Card
                        className="mt-5 w-[350px] text-black bg-white py-6 flex gap-10 flex-col justify-between items-start border-4 border-mainRed rounded-2xl">
                        <CardHeader>
                            <CardTitle>User info</CardTitle>
                            <CardDescription>Check your account details below.</CardDescription>
                        </CardHeader>

                        <CardContent>

                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5 border-dashed border-b-2 border-black">
                                    UserName: {query.data.email}
                                </div>
                                <div className="flex flex-col space-y-1.5 border-dashed border-b-2 border-black">
                                    UserId: {query.data.id}
                                </div>
                            </div>

                        </CardContent>
                        <CardFooter className="w-full flex justify-end">
                            <Button variant="outline"
                                    className="border-mainRed rounded-xl text-mainRed hover:bg-mainRed"
                                    onClick={() => {
                                        exit()
                                        queryClient.clear()
                                        navigate('/login')
                                    }}
                            >Log Out</Button>
                        </CardFooter>
                    </Card>
                </div>
                <div className="flex flex-col justify-center items-center ">
                    <div
                        className="text-7xl leading-relaxed uppercase  min-h-[60px]">
                        <h2 className="left-0 text-mainLightText dark:text-white">About me</h2>
                    </div>
                    <Card
                        className="mt-5 w-[350px] text-black bg-white py-6 flex gap-0 flex-col justify-between items-start border-4 border-mainRed rounded-2xl">
                        <CardHeader>
                            <CardTitle>Vladislav Komissarov</CardTitle>
                            <CardDescription>
                                Junior Frontend/Fullstack Web Developer
                                {/* with experience in creating dynamic and responsive applications using JavaScript, TypeScript, React and NextJS.*/}
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="">

                            <div className="grid w-full items-center gap-4">
                                <h2 className="font-bold text-lg underline">My Links</h2>

                                <div className="col-span-5">
                                    <div className=" grid grid-cols-2 gap-6">
                                        <a href="https://github.com/Vodichka500/"
                                           className="flex items-center gap-2 space-y-1.5 border-dashed border-b-2 border-black">
                                            <div className="">
                                                <Github/>
                                            </div>
                                            <div className="">
                                                GitHub
                                            </div>
                                        </a>
                                        <a href="https://www.linkedin.com/in/uladzislau-kamisarau?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                           className="flex items-center gap-2 space-y-1.5 border-dashed border-b-2 border-black">
                                            <div className="">
                                                <Linkedin/>
                                            </div>
                                            <div className="">
                                                LinkedIn
                                            </div>
                                        </a>
                                        <a href="https://t.me/Vlvlvlvod"
                                           className="flex flex-col space-y-1.5 border-dashed border-black">
                                            <div
                                                className="flex items-center gap-2 space-y-1.5 border-dashed border-b-2 border-black">
                                                <div className="">
                                                    <Telegram color="red"/>
                                                </div>
                                                <div className="flex gap-1">
                                                    Telegram
                                                </div>
                                            </div>
                                        </a>

                                        <a href="https://docs.google.com/document/d/1Hchz1PWRm-S_sOul7SAZwTL5jEYkO18ivuhE2aEy2tI/edit?usp=sharing"
                                           className="col-span-2 flex items-center gap-2 space-y-1.5 border-dashed border-b-2 border-black">
                                            <div className="">
                                                <FileUser/>
                                            </div>
                                            <div className="flex gap-1">
                                                See my CV <ExternalLink size={15}/>
                                            </div>
                                        </a>
                                    </div>
                                </div>


                            </div>

                        </CardContent>
                        <CardFooter className="w-full flex justify-end">
                            <Button variant="outline"
                                    className="border-dashed border-2 border-black  rounded-xl text-black font-bold"
                            >Apply for a job</Button>
                        </CardFooter>
                    </Card>
                </div>

            </div>

        )
    }
    return null
}
export default ProfilePage
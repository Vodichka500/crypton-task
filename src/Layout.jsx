import { Outlet } from "react-router-dom";
import Header from "@/components/common/Header.jsx";
const Layout = () => {
    return (
        <div className="h-screen container mx-auto text-white">
            <Header/>
            <main className="">
                <Outlet/>
            </main>

        </div>
    )
}

export default Layout
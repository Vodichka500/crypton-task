import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from "./pages/HomePage.jsx"
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";

//import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HashRouter, Routes, Route } from 'react-router-dom';


import Layout from "./Layout.jsx";

import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import ProfilePage from "./pages/ProfilePage.jsx";
import { ThemeProvider } from "./components/ThemeProvider.jsx"

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ThemeProvider>
            <QueryClientProvider client={queryClient}>
                <HashRouter>
                    <Routes>
                        <Route element={<Layout />}>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/login" element={<LoginPage />} />
                            <Route path="/register" element={<RegisterPage />} />
                            <Route path="/profile" element={<ProfilePage />} />
                        </Route>
                    </Routes>
                </HashRouter>
            </QueryClientProvider>
        </ThemeProvider>
    </StrictMode>
)


// createRoot(document.getElementById('root')).render(
//     <StrictMode>
//         <ThemeProvider>
//             <QueryClientProvider client={queryClient}>
//                 <BrowserRouter>
//                     <Routes>
//                         <Route element={<Layout />}>
//                             <Route path="/" element={<HomePage />} />
//                             <Route path="/login" element={<LoginPage />} />
//                             <Route path="/register" element={<RegisterPage />} />
//                             <Route path="/profile" element={<ProfilePage />} />
//                         </Route>
//                     </Routes>
//                 </BrowserRouter>
//             </QueryClientProvider>
//         </ThemeProvider>
//     </StrictMode>
// )

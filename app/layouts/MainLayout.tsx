import Header from '../components/Header'
import { Inter } from "next/font/google";
import Footer from '../components/Footer'

const inter = Inter({ subsets: ["latin"] });

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />{children}<Footer />
        </>
    )
}
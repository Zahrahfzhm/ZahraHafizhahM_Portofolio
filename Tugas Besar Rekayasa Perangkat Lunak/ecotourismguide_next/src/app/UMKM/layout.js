import Header from "@/components/Navbar/header";
import Footer from "@/components/Navbar/footer";
import UMKMContainer from "@/components/Container/DashboardUMKM";

export default function UMKMLayout({ children }) {
    return (
        <div>
            <Header/>
                <UMKMContainer>
                    {children}
                </UMKMContainer>
            <Footer/>
        </div>
    );
};

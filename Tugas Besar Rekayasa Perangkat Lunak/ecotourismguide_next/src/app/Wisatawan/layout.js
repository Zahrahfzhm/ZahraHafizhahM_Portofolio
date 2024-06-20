import "../globals.css";
import WisatawanContainer from "@/components/Container/DashboardWisatawan";
import Header from "@/components/Navbar/header";
import Footer from "@/components/Navbar/footer";

export const metadata = {
  title: "Dashboard",
  description: "Website tentang pariwisata",
};

export default function RootLayout({ children }) {
  return (
    <div>
      <Header/>
      <WisatawanContainer>
        {children}
      </WisatawanContainer>
      <Footer/>
    </div>
  );
}

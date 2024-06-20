import WisatawanContainer from "@/components/Container/DashboardWisatawan";
import Header from "@/components/Navbar/header";
import Footer from "@/components/Navbar/footer";
import DashboardWisatawanContent from "@/components/Content/DashboardWisatawan/index";

export default function Home() {
  return (
    <div className="">
      <Header />
      <WisatawanContainer>
        <DashboardWisatawanContent/>
      </WisatawanContainer>
      <Footer />
    </div>
  );
}

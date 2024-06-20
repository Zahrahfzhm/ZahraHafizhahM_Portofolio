import RegistrasiForm from "@/components/Content/Registrasi";
import Footer from "@/components/Navbar/footer";// Corrected import path for Footer
import Header from "@/components/Navbar/header";

export default function Registrasi() {
  return (
    <div>
        <Header/>
        <RegistrasiForm/>
        <Footer/>
    </div>
  );
}
import LoginForm from "@/components/Content/Login";
import Footer from "@/components/Navbar/footer";// Corrected import path for Footer
import Header from "@/components/Navbar/header";

export default function Login() {
  return (
    <div className="">
      <Header/>
        <LoginForm/>
      <Footer/>
    </div>
  );
}
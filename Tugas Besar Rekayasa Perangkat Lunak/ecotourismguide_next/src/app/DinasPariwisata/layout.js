import Sidebar from "@/components/Sidebar";
import AdminContainer from "@/components/Container/DashboardAdmin";


export default function Layout({ children }) {
    return (
        <div className="flex space-x-6">
            <Sidebar />
            <AdminContainer>
                {children}
            </AdminContainer>
        </div>
    );
  }
  
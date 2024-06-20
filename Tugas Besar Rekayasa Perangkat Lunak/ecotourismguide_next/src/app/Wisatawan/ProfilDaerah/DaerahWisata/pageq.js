import WisatawanContainer from "@/components/Container/DashboardWisatawan";
import DashboardWisatawanContent from "@/components/Content/DashboardWisatawan/Daerah";

export default function Home() {
  return (
    <div className="">
      <WisatawanContainer>
        <DashboardWisatawanContent/>
      </WisatawanContainer>
    </div>
  );
}
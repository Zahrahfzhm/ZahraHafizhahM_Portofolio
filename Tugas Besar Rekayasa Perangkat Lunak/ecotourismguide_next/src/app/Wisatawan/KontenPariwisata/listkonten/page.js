import WisatawanContainer from "@/components/Container/DashboardWisatawan";
import DashboardWisatawanlistContent from "@/components/Content/DashboardWisatawan/listcontent";

export default function Home() {
  return (
    <div className="">
      <WisatawanContainer>
        <DashboardWisatawanlistContent/>
      </WisatawanContainer>
    </div>
  );
}


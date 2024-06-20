import WisatawanContainer from "@/components/Container/DashboardWisatawan";
import DashboardWisatawanIsiContent from "@/components/Content/DashboardWisatawan/isicontent";

export default function Home() {
  return (
    <div className="">
      <WisatawanContainer>
        <DashboardWisatawanIsiContent/>
      </WisatawanContainer>
    </div>
  );
}
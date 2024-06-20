import WisatawanContainer from "@/components/Container/DashboardWisatawan";
import DashboardListDaerahWisatawanContent from "@/components/Content/DashboardWisatawan/listdaerah";

export default function Home() {
  return (
    <div className="">
      <WisatawanContainer>
        <DashboardListDaerahWisatawanContent/>
      </WisatawanContainer>
    </div>
  );
}
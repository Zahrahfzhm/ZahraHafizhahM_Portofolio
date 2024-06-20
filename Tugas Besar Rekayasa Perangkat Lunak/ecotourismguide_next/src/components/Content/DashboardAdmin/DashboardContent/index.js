"use client"

import LargeContent from "./largeasideContent"
import SmallContent from "./smallasideContent"
import MainContent from "./mainContent"
import AsideContainer from "@/components/Container/DashboardAdmin/asideContainer"

export default function DashboardAdminContent(){
    return(
    <>
        <MainContent />
        <AsideContainer>
            <SmallContent/>
            <LargeContent/>
        </AsideContainer>
    </>    



    )
}
"use client"

import LargeContent from "../DashboardAdmin/DashboardContent/largeasideContent"
import SmallContent from "../DashboardAdmin/DashboardContent/smallasideContent"
import AsideContainer from "@/components/Container/DashboardAdmin/asideContainer"
import MonitorVerifikasi from "./monitor"

export default function VerifikasiUMKM(){
    return(
    <>
        <MonitorVerifikasi />
        <AsideContainer>
            <SmallContent/>
            <LargeContent/>
        </AsideContainer>
    </>    
    )
}
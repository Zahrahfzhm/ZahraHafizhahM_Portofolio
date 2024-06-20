import prisma from "@/libs/prisma"

export async function POST(request) {
    const { nama_pelaku, password, nama_wisata, alamat, Deskripsi_wisata, no_telpon, email, fasilitas, tarif, destinasi, statusreg } = await request.json()
    const data = { nama_pelaku, password, nama_wisata, alamat, Deskripsi_wisata, no_telpon, email, fasilitas, tarif, destinasi, statusreg }

    const registrasi = await prisma.Pelaku_wisata.create({ data })
    
    if (!registrasi) return Response.json({ status: 500, isCreated: false })
    else return Response.json({ status: 200, isCreated: true })
}
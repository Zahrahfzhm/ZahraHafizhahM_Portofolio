import mysql.connector

con = mysql.connector.connect(
    host = 'Localhost',
    user = 'root',
    password = '',
    db = 'coba_program'
)

if con.is_connected():
    print('Konseksi ke coba_program berhasil')

tabel = con.cursor()
tabel.execute('create table if not exists Pemasukkan(Nomor int(3), Tanggal_Transaksi char(11), Kategori_Transaksi varchar(25),' 
'Nominal_Transaksi varchar(12), Keterangan varchar(100))')
tabel.execute('create table if not exists Pengeluaran(Nomor int(3), Tanggal_Transaksi char(11),' 
'Kategori_Transaksi varchar(25), Nominal_Transaksi varchar(12), Keterangan varchar(100))')
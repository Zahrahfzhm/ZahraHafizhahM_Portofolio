import numpy as np
import matplotlib.pyplot as plt
import mysql.connector
from datetime import date
from googletrans import Translator

con = mysql.connector.connect(
    host = 'localhost',
    user = 'root',
    password = '',
    db = 'coba_program'
    )

#Menu program
def menu_utama():
    print('\n>>>>> program laporan keuangan pribadi <<<<<'.upper())
    print('''
    1. Tambah transaksi
    2. Hapus transaksi
    3. Update transaksi
    4. Tampilkan Tabel laporan keuangan
    5. Visualisasi Data
    0. Exit
    \n!! Program tidak akan berhenti sampai anda memilih menu exit !!''')

def menu_visdat():
    print('\n    >>>>> Visualisasi Data <<<<<'.upper())
    print('''
    1. Pemasukkan Setiap Bulan
    2. Pengeluaran Setiap Bulan
    3. Pemasukkan dan Pengeluaran Setiap Bulan
    4. Rincian Pemasukkan 1 Bulan
    5. Rincian Pengeluaran 1 Bulan
    9. Kembali Ke Menu Utama
     ''')

def tipe_transaksi():
    print('>>>>> Tipe Transaksi <<<<<'.upper())
    print('''
    1. Pemasukkan
    2. Pengeluaran
    9. Kembali Ke Menu Utama
    ''')

#Pemasukkan
def masuk(pilih_kategori):
    if pilih_kategori == 1:
        return 'Gaji   '
    elif pilih_kategori == 2:
        return 'Bonus  '
    elif pilih_kategori == 3:
        return 'Lainnya'

def insertdata_masuk(con):
    nomor = int(input('Nomor Transaksi : '))
    print('\nIsi Tanggal Transaksi')
    tanggal = int(input('Tanggal : '))
    bulan = int(input('Bulan : '))
    tahun = int(input('Tahun : '))
    format_tanggal = date(tahun,bulan,tanggal)
    print('\nKategori transaksi \n 1. Gaji \n 2. Bonus \n 3. Lainnya')
    pilih_kategori = int(input('Pilih kategori transaksi : '))
    kategori = (masuk(pilih_kategori))
    nominal = int(input('\nNominal Transaksi : '))
    keterangan = input('\nKeterangan : ')
    
    dbcursor = con.cursor()
    sql = 'insert into Pemasukkan (Nomor,Tanggal_Transaksi,Kategori_Transaksi,Nominal_Transaksi,Keterangan) values (%s,%s,%s,%s,%s)'
    data = (nomor,format_tanggal,kategori,nominal,keterangan)
    dbcursor.execute(sql,data)
    con.commit()
    print('\ndata berhasil disimpan'.upper())

def showdata_masuk(con):
    dbcursor = con.cursor()
    sql = 'select * from Pemasukkan'
    dbcursor.execute(sql)
    dt = dbcursor.fetchall()

    if dbcursor.rowcount <= 0:
        print('\nTidak ada data transaksi')
    else:
        print('No. \tTanggal \tNominal Kategori \tKeterangan')
        print('-'*70)
        for data in dt:
            print(f'{data[0]}. \t{data[1]} \t{data[3]} \t{data[2]} \t{data[4]}')

def updatedata_masuk(con):
    dbcursor = con.cursor()
    showdata_masuk(con)
    nomor = int(input('\nPilih nomor transaksi yang akan diupdate : '))
    print('\nIsi Tanggal Transaksi')
    tanggal = int(input('Tanggal : '))
    bulan = int(input('Bulan : '))
    tahun = int(input('Tahun : '))
    format_tanggal = date(tahun,bulan,tanggal)
    print('\nKategori transaksi \n 1. Gaji \n 2. Bonus \n 3. Lainnya')
    pilih_kategori = int(input('Pilih kategori transaksi baru : '))
    kategori = (masuk(pilih_kategori))
    nominal = int(input('\nNominal Transaksi Baru : '))
    keterangan = input('\nKeterangan baru : ')
    
    sql = 'update Pemasukkan set Tanggal_Transaksi=%s, Kategori_Transaksi=%s, Nominal_Transaksi=%s, Keterangan=%s where Nomor=%s'
    data = (format_tanggal,kategori,nominal,keterangan,nomor)
    dbcursor.execute(sql,data)
    con.commit()
    print('\n{} data berhasil diupdate'.format(dbcursor.rowcount).upper())
    print('='*70)

def deletedata_pemasukkan(con):
    dbcursor = con.cursor()
    showdata_masuk(con)
    nomor = int(input('\nPilih nomor transaksi yang akan dihapus : '))
    sql =  f'delete from Pemasukkan where Nomor={nomor}'
    data = (nomor)
    dbcursor.execute(sql,data)
    con.commit()
    print('\n{} data berhasil dihapus'.format(dbcursor.rowcount).upper())

#Pengeluaran
def keluar(pilih_kategori):
    if pilih_kategori == 1:
        return 'Transportasi   '
    elif pilih_kategori == 2:
        return 'Makan dan Minum'
    elif pilih_kategori == 3:
        return 'Belanja        '
    elif pilih_kategori == 4:
        return 'Edukasi        '
    elif pilih_kategori == 5:
        return 'Kesehatan      '
    elif pilih_kategori == 6:
        return 'Hutang         '
    elif pilih_kategori == 7:
        return 'Pakaian        '
    elif pilih_kategori == 8:
        return 'Hiburan        '
    elif pilih_kategori == 9:
        return 'Donasi         '
    elif pilih_kategori == 10:
        return 'Lainnya        '

def insertdata_keluar(con):
    nomor = int(input('Nomor Transaksi : '))
    print('Isi Tanggal Transaksi')
    tanggal = int(input('Tanggal : '))
    bulan = int(input('Bulan : '))
    tahun = int(input('Tahun : '))
    format_tanggal = date(tahun,bulan,tanggal)
    print('\nKategori transaksi: \n 1. Transportasi\n 2. Makan dan Minum\n 3. Belanja\n 4. Edukasi\n 5. Kesehatan\n 6. Hutang\n 7. Pakaian\n 8. Hiburan\n 9. Donasi\n 10. Lainnya')
    pilih_kategori = int(input('Pilih kategori transaksi : '))
    kategori = (keluar(pilih_kategori))
    nominal = int(input('Nominal Transaksi : '))
    keterangan = input('Keterangan : ')
    
    dbcursor = con.cursor()
    sql = 'insert into Pengeluaran (Nomor,Tanggal_Transaksi,Kategori_Transaksi,Nominal_Transaksi,Keterangan) values (%s,%s,%s,%s,%s)'
    data = (nomor,format_tanggal,kategori,nominal,keterangan)
    dbcursor.execute(sql,data)
    con.commit()
    print('\nData berhasil disimpan')

def showdata_keluar(con):
    dbcursor = con.cursor()
    sql = 'select * from Pengeluaran'
    dbcursor.execute(sql)
    dt = dbcursor.fetchall()

    if dbcursor.rowcount <= 0:
        print('\nTidak ada data transaksi')
    else:
        print('\nNo. \tTanggal \tNominal Kategori \tKeterangan')
        print('-'*70)
        for data in dt:
            print(f'{data[0]}. \t{data[1]} \t{data[3]} \t{data[2]} \t{data[4]}')

def updatedata_keluar(con):
    dbcursor = con.cursor()
    showdata_keluar(con)
    nomor = int(input('\nPilih nomor transaksi yang akan diupdate : '))
    print('Isi Tanggal Transaksi')
    tanggal = int(input('Tanggal : '))
    bulan = int(input('Bulan : '))
    tahun = int(input('Tahun : '))
    format_tanggal = date(tahun,bulan,tanggal)
    print('\nKategori transaksi: \n 1. Transportasi\n 2. Makan dan Minum\n 3. Belanja\n 4. Edukasi\n 5. Kesehatan\n 6. Hutang\n 7. Pakaian\n 8. Hiburan\n 9. Donasi\n 10. Lainnya')
    pilih_kategori = int(input('Pilih kategori transaksi baru : '))
    kategori = (keluar(pilih_kategori))
    nominal = int(input('Nominal Transaksi Baru : '))
    keterangan = input('Keterangan baru : ')
    
    sql = 'update Pengeluaran set Tanggal_Transaksi=%s, Kategori_Transaksi=%s, Nominal_Transaksi=%s, Keterangan=%s where Nomor=%s'
    data = (format_tanggal,kategori,nominal,keterangan,nomor)
    dbcursor.execute(sql,data)
    con.commit()
    print('{} data berhasil diupdate'.format(dbcursor.rowcount))
    print('='*70)

def deletedata_pengeluaran(con):
    dbcursor = con.cursor()
    showdata_keluar(con)
    nomor = int(input('\nPilih nomor transaksi yang akan dihapus : '))
    sql =  f'delete from Pengeluaran where Nomor={nomor}'
    data = (nomor)
    dbcursor.execute(sql,data)
    con.commit()
    print('\n{} data berhasil dihapus'.format(dbcursor.rowcount))

#Visualisasi Data
def visdat_totalpengeluaran():
    dbcursor = con.cursor()
    sql = 'select monthname(tanggal_transaksi), sum(nominal_transaksi) from pengeluaran group by month(tanggal_transaksi)'
    dbcursor.execute(sql)
    hasil = dbcursor.fetchall()
    
    if dbcursor.rowcount <= 0:
        print('\nTidak ada data transaksi'.upper())
    else:    
        bulan = []
        pengeluaran = []
        for i in hasil:
            bulan.append(str(i[0]))
            pengeluaran.append(i[1])
    
        plt.bar(bulan, pengeluaran)
        plt.title('Pengeluaran Setiap Bulan')
        plt.xlabel('Bulan')
        plt.ylabel('Pengeluaran')
        plt.show()

def visdat_totalpemasukkan():
    dbcursor = con.cursor()
    sql = 'select monthname(tanggal_transaksi), sum(nominal_transaksi) from pemasukkan group by month(tanggal_transaksi)'
    dbcursor.execute(sql)
    hasil = dbcursor.fetchall()
    if dbcursor.rowcount <= 0:
        print('\nTidak ada data transaksi')
    else:
        bulan = []
        pemasukkan = []
        for i in hasil:
            bulan.append(str(i[0]))
            pemasukkan.append(i[1])
    
        plt.bar(bulan, pemasukkan)
        plt.title('Pemasukkan Setiap Bulan')
        plt.xlabel('Bulan')
        plt.ylabel('Pemasukkan')
        plt.show()

def total_masukkeluar():
    bulan = ['January','February','March','April','May','June','July','August','September','October','November','December']
    dbcursor = con.cursor()
    sql = 'select monthname(tanggal_transaksi), sum(nominal_transaksi) from pemasukkan group by month(tanggal_transaksi)'
    dbcursor.execute(sql)

    hasil = dbcursor.fetchall()
    pemasukkan = []
    for a in bulan:
        for i in hasil:
            if i[0] == a:
                pemasukkan.append(i[1])
                break
        else:
            if i[0] == a:
                continue
            else:
                pemasukkan.append(0)

    sql = 'select monthname(tanggal_transaksi), sum(nominal_transaksi) from pengeluaran group by month(tanggal_transaksi)'
    dbcursor.execute(sql)
    hasil = dbcursor.fetchall()  
    pengeluaran = []
    for a in bulan:
        for i in hasil:
            if i[0] == a:
                pengeluaran.append(i[1])
                break
        else:
            if i[0] == a:
                continue
            else:
                pengeluaran.append(0)
    
    labels = bulan

    x = np.arange(len(labels))
    width = 0.35

    fig, ax = plt.subplots()
    rects1 = ax.bar(x - width/2, pemasukkan, width, label='Pemasukkan')
    rects2 = ax.bar(x + width/2, pengeluaran, width, label='Pengeluaran')

    ax.set_ylabel('Rupiah')
    ax.set_title('Total Pemasukkan dan Pengeluaran Setiap Bulan')
    ax.set_xticks(x, labels)
    ax.legend()

    ax.bar_label(rects1, padding=3)
    ax.bar_label(rects2, padding=3)

    fig.tight_layout()

    plt.show()

def rincian_pengeluaran():
    pilih_bulan = input('Pilih Bulan : ')
    if pilih_bulan == 'mei':
        pilih_bulan = 'may'
    translator = Translator()
    bulan = translator.translate(pilih_bulan.title(), dest='en')
    dbcursor = con.cursor()
    sql = f'select monthname(tanggal_transaksi), kategori_transaksi, sum(nominal_transaksi) from Pengeluaran group by kategori_transaksi, month(tanggal_transaksi)'
    dbcursor.execute(sql)
    hasil = dbcursor.fetchall()

    if dbcursor.rowcount <= 0:
        print('\nTidak ada data transaksi')
    else:
        ket = []
        for i in hasil:
            bln = i[0]
            if bln == str(bulan.text):
                x = int(i[2])
                att = str(x) + ' ' + str(i[1])
                ket.append(att)
            else:
                continue
    
        fig, ax = plt.subplots(figsize=(6, 3), subplot_kw=dict(aspect="equal"))
        fig
        recipe = ket

        data = [float(x.split()[0]) for x in recipe]
        ingredients = [x.split()[-1] for x in recipe]

        def func(pct, allvals):
            absolute = int(np.round(pct/100.*np.sum(allvals)))
            return "{:.1f}%\n({:d})".format(pct, absolute)

        wedges, texts, autotexts = ax.pie(data, autopct=lambda pct: func(pct, data),
                                      textprops=dict(color="w"))
        texts
        ax.legend(wedges, ingredients,
                title="Kategori Transasaksi",
                loc="center left",
                bbox_to_anchor=(1, 0, 0.5, 1))

        plt.setp(autotexts, size=8, weight="bold")

        ax.set_title(f"Rincian Pengeluaran Bulan {pilih_bulan.title()}")

        plt.show()

def rincian_pemasukkan():
    pilih_bulan = input('Pilih Bulan : ')
    if pilih_bulan == 'mei':
        pilih_bulan = 'may'
    translator = Translator()
    bulan = translator.translate(pilih_bulan.title(), dest='en')
    dbcursor = con.cursor()
    sql = f'select monthname(tanggal_transaksi), kategori_transaksi, sum(nominal_transaksi) from Pemasukkan group by kategori_transaksi, month(tanggal_transaksi)'
    dbcursor.execute(sql)
    hasil = dbcursor.fetchall()

    if dbcursor.rowcount <= 0:
        print('\nTidak ada data transaksi')
    else:
        ket = []
        for i in hasil:
            bln = i[0]
            if bln == str(bulan.text):
                x = int(i[2])
                att = str(x) + ' ' + str(i[1])
                ket.append(att)
            else:
                continue
    
        fig, ax = plt.subplots(figsize=(6, 3), subplot_kw=dict(aspect="equal"))
        fig
        recipe = ket

        data = [float(x.split()[0]) for x in recipe]
        ingredients = [x.split()[-1] for x in recipe]

        def func(pct, allvals):
            absolute = int(np.round(pct/100.*np.sum(allvals)))
            return "{:.1f}%\n({:d})".format(pct, absolute)

        wedges, texts, autotexts = ax.pie(data, autopct=lambda pct: func(pct, data),
                                      textprops=dict(color="w"))
        texts
        ax.legend(wedges, ingredients,
                title="Kategori Transasaksi",
                loc="center left",
                bbox_to_anchor=(1, 0, 0.5, 1))

        plt.setp(autotexts, size=8, weight="bold")

        ax.set_title(f"Rincian Pemasukkan Bulan {pilih_bulan.title()}")

        plt.show()

#running program
while True:
    menu_utama()
    try:
        print('')
        menu = int(input('Masukkan nomor menu yang dipilih : '))
        print('='*70)
        if menu == 1:
            tipe_transaksi()
            tipe = int(input('Pilih tipe transaksi : '))
            if tipe == 1:
                print('\n>>> Data Pemasukkan <<<')
                insertdata_masuk(con)
            elif tipe == 2:
                print('\n>>> Data Pengeluaran <<<')
                insertdata_keluar(con)
            elif tipe == 9:
                continue
            else:
                print('\nTipe transaksi tidak tersedia')
            print('='*70)
        elif menu == 2:
            tipe_transaksi()
            tipe = int(input('Pilih tipe transaksi : '))
            if tipe == 1:
                print('\n>>> Data Pemasukkan <<<\n')
                deletedata_pemasukkan(con)
            elif tipe == 2:
                print('\n>>> Data Pengeluaran <<<\n')
                deletedata_pengeluaran(con)
            elif tipe == 9:
                continue
            else:
                print('\nTipe transaksi tidak tersedia')
            print('='*70)
        elif menu == 3:
            tipe_transaksi()
            tipe = int(input('Pilih tipe transaksi : '))
            if tipe == 1:
                updatedata_masuk(con)
            elif tipe == 2:
                updatedata_keluar(con)
            elif tipe == 9:
                continue
            else:
                print('\nTipe transaksi tidak tersedia')
            print('='*70)
        elif menu == 4:
            while True:
                tipe_transaksi()
                tipe = int(input('Pilih tipe transaksi : '))
                print('='*70)
                if tipe == 1:
                    print('>>> Data Pemasukkan <<<\n')
                    showdata_masuk(con)
                elif tipe == 2:
                    print('>>> Data Pengeluaran <<<\n')
                    showdata_keluar(con)
                elif tipe == 9:
                    break
                else:
                    print('\nTipe transaksi tidak tersedia')
                print('')
                print('='*70)
        elif menu == 5:
            while True:
                menu_visdat()
                tipe = int(input('Pilih visualisasi data : '))
                if tipe == 1:
                    visdat_totalpemasukkan()
                elif tipe == 2:
                    visdat_totalpengeluaran()
                elif tipe == 3:
                    total_masukkeluar()
                elif tipe == 4:
                    rincian_pemasukkan()
                elif tipe == 5:
                    rincian_pengeluaran()
                elif tipe == 9:
                    break
                else:
                    print('Menu yang dipilih tidak tersedia')
                print('='*70)
        elif menu == 0:
            print('Terima kasih telah menggunakan program kami')
            break
        elif menu > 5:
            print('\nMaaf menu yang anda pilih tidak tersedia')
            print('='*70)
    except ValueError:
        print('\nInputan harus berupa integer/angka!'.upper())
        print('='*70)
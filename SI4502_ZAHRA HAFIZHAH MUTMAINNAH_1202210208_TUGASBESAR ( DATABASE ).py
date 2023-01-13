import mysql.connector

con = mysql.connector.connect(
    host = 'Localhost',
    user = 'root',
    password = '',
)

if con.is_connected():
    print('Konseksi ke server database berhasil')

db = con.cursor()
db.execute('create database coba_program' )
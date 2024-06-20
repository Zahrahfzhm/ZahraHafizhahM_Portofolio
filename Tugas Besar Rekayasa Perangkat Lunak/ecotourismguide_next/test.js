const { Builder, By } = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    // 1. Buka halaman http://localhost:3000/Wisatawan
    await driver.get('http://localhost:3000/Wisatawan');

    // 2. Cari elemen menggunakan selector CSS
    let link = await driver.findElement(By.css('body > div > div > section > div > section.flex.overflow-hidden.relative.flex-col.items-start.px-16.py-20.w-full.text-white.min-h-[755px].max-md\\:px-5.max-md\\:max-w-full > div > div > div > a'));

    // 3. Klik pada elemen tersebut
    await link.click();

    // Tunggu beberapa saat agar halaman 'http://localhost:3000/Wisatawan/Katalog' dimuat
    await driver.sleep(2000);

    // Anda dapat menambahkan langkah-langkah berikutnya jika diperlukan

    // Cetak title halaman
    console.log('Page title:', await driver.getTitle());
    
  } finally {
    await driver.quit();
  }
})();

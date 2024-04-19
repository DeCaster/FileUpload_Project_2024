
Merhaba!

Bu site, ürünlerin fotoğraflarını ve isimlerini yükleyerek fiyatlarını karşılaştırabileceğiniz bir platformdur.

Kullanmaya Başlamadan Önce:

Node.js'i Kurun: https://nodejs.org/en/download adresinden Node.js'i bilgisayarınıza indirin ve kurun.
Proje Klasörünü Kopyalayın: Bu readme dosyasını içeren proje klasörünü bilgisayarınıza kopyalayın.
Gerekli Bağımlılıkları Kurun: Proje klasörüne gidin ve komut satırında npm install komutunu çalıştırın. Bu, projenin çalışması için gerekli tüm bağımlılıkları kuracaktır.
Veritabanı Bilgilerini Girin: .env adında bir dosya oluşturun ve aşağıdaki bilgileri girin:
MONGO_URI = <mongoDB bağlantı url'si>
JWT_SECRET = <gizli anahtar>
JWT_LIFETIME = 30d
CLOUD_NAME = <cloudinary cloud name>
CLOUD_API_KEY = <cloudinary api key>
CLOUD_API_SECRET = <cloudinary api secret>
Not: Yukarıdaki x ile işaretlenmiş yerlere kendi veritabanı bağlantı url'si, gizli anahtar, Cloudinary bilgilerinizi girmeniz gerekmektedir.

Sunucuyu Başlatın: Proje klasörüne gidin ve komut satırında npm start komutunu çalıştırın. Bu, sunucuyu başlatacak ve siteyi kullanmaya hazır hale getirecektir.
Siteyi Kullanma:

Tarayıcınızda http://localhost:3000 adresini açın.
Ürünün fotoğrafını seçin veya yükleyin.
Ürünün adını girin.
"Fiyat Karşılaştır" düğmesine tıklayın.
Site, ürününüzün fiyatını benzer ürünlerle karşılaştıracak ve size en uygun fiyatı gösterecektir.

Ek Bilgiler:

Bu site, MongoDB veritabanı ve Cloudinary bulut depolama hizmeti kullanmaktadır.
Siteyi kendinize göre özelleştirmek için server.js ve client/src klasörlerini inceleyebilirsiniz.
Sorun Giderme:

Herhangi bir sorun yaşarsanız, lütfen https://github.com/nodejs/nodejs.org/issues adresini ziyaret edin veya bana e-posta gönderin.
Teşekkürler!

Umarım bu siteyi kullanmaktan keyif alırsınız!

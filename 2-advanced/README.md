# Intercepting Route

- Önizlemeli Route'lar

- Bir detay sayfasına yönlendiren linke tıkladıpımız zman öncelikle bir modal açılır eğer sayfayı yenilersek veya url üzerinden dopurda o sayfaya erişmek istersek modal yerine detay swayfasını görürür.

- Genelde detay sayfalarında veya login/register kullanılır

# CSR VS SSR

- Client Side Rendering
- Server Side Rendering

- Client component kullanırsak renderlema biçimi CSR olur

- Server component kullanırsa renderlama biçimisi SSR olur

- react uygulamalarında yani client component'larda bir siteye girdiğimiz zaman `js kodu` ve `boş html` dosyası indirdiğimiz js kodu bilgisayarımızda çalışır ve html i oluşturur

- next.js uygulamlarında yani server side rendering kullanılan sayfaalarda, js sunucuda çalışır html'i oluşturur biz sadece html'i indiriz.

- bu moktada js'in bizim bilgisayarımzdan çok daha hızlı olan sunucuda çalışması say yüklenmesini hızlandırır.

- Seo açısından dolu html'i indirmek önemlidir aksi takdirde goog'ın robotları site içeriğini tanıyamaz ve sitenin dah üst sıralarda olmasının önüne geçer

# Not

- Next.js biz aksini belirtmedikçe bütün bileşenlerinizi server component olarak tanımlar. Next.js bizden her zman olabildiğince server compoennt kullanammızı ister, yaotıkları optimazsayon , cache mekenizması.

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

# Data Fetching (Veri Çekme)

- Next.js çekilen veriyi belirli bir süre cache'de tutar ve veriyi çeken fonksiyonu o süre içerisnde her çağırıdığımızda api'dan veriyi almak yerine önceki sitekten elde ettiği ve cache'de tututğu veriyi bize getirir.

- Bu yüzden çektiğimiz veriyi birkaç sayfa içerisnde kullanmak istiyorask ver ieçeken fonksiyonları o sayfalaradada çağrıp kullanırız.

- Varayılan olarak btün api istekleri cache'de tutulur. Ama çektiğimiz veriye göre bu değiştirmek isteyebiliriz. Örn: Bir alışveriş sitesiin sepet sayfasına her giridğimiz api'dan güncel verileri almasını bekleriz veya bir soyal meday sitesin ansayfasnıo her yenlediğimzde api'dan güncel post'ları almasını isteriz ama bir blog sitesinde blog detay sayfsında her girdiğimde tekrar api siteği atmasına gerek yoktur sayfa değişme ihtimalinin çok düşük olduğu için.

- revalidation: Next.js bazı sayfarlı statik olark oluşturup kullanı bu sayfa geldiğinde sürekli olark odaha önce oluşturğu statik sayfayı kullanıcıya sunar.
  Biz bu sattik sayfanın ne sıklıkla tekrar oluşturulması gerektiğini belirleyebiliyoruz.

# Image Component

- İçerisnde birr çok optimazsyon barında bir reesim component'ı bulunur.

- Sahip olduğu performanst artıları sayesinde SEO asçısından önemlidir

# Font

- Optimize edilmiş goog fonts desteği

# Script

- Kodumu çağırmak istediğimiz scriptlerd etercih edilir sahip olduğumuzdan kaynaklı

# Redirect Function

- Sadece server comp.da çalışır
- Kullanıcıyı farklı bir sayaya yönlendir
- Yetkilendirme aşamasında kulalncın o syafaya girip giremeyeceğini belirlerken kullanırız genelde.

# useRouter

- Sadece client comp.da çalışır

- Fonksiyon içerisnde yönlendirmeyi sağlar

# useSearchParams

- Sadece client comp.da çalışır
- URL'deki arama paraemtrelerine eişimimzi sağlar

# usePathname

- Sadece client comp.da çalışır
- Sayfa url'ini veriri

# API

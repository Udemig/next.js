# Dosya Yapısı..

- package.json: Bağımlılıkların sürümünü ve komutları içerir

- config dosyaları: kütüphaneler için ayar dosyları

- gitginore:githuba gönderilmesi istenmeyen klaösrler belirtilir.

- nodemodules: bağmlılıkları içerisnde bulundurur

- public: static, resim - svg gibi dosyların konunmlandırırız.Prohe url üzerinden yayınlanır

- src: kaynak

- src/app: uygulama içerisndeki bütün sayfaları burada tanımlarız

# React Server Component (RSC)

- Next ile birlikte geln bileşen türü.
- React componentları iki farklı türden olşur.

- Server Components:
- - Varsayılan olarak bütün bileşenler server comp. şeklinde gelir.
- - Veritabanından veri çekme, dosya / okuma yazma gibi işler yapabilirler
- - Hook'lar(useState) ve kullanıcı etkileişimi(onClick) kullnaılamaz.

- Client Components:
- - Bir component'ı client olarak tanımlanıcak sayfanın en üstüne "useclient" yazılır.
- - Veritabanından veri çekme, dosya / okuma yazma gibi işlemlerini yapamazla
- - Hooklar kullanılabilir.
- - Kullanıcı etkileşimleri yürütülebilir.
- - Klasik react bileşnleridir

# Routing (Sayfalama)

- Dosya dizinnie göre sayfala gerçekleşir

- Bütün route'lar src/app içerisnde olmalı

- app içerisnde tanımlanan her bir klasör bir sayfaya denk gelir

- Bir sayfaya denk gelen klasör içerisnde page.js page.tsx şeklinde bir dosya bulunmalı

- Page.tsx içerisnde bir bileşen tanımlanmalı ve export edilmeli

# Nested Routes (İç İçe Routelar)

- örn: /movies/action
- örn: /movies/comedy

# Dynamic Routes (Dynamic Routelar)

- Bir eticaret projesi yapıyorsak yüzlerce ürün olduğunda her bir ürünün detay sayfası için nested route tercih etmeyiz. Bu sorunu paraetre yöntemiyle dynamic route ile çözeriz

- - örn: /products/19
- - örn: /products/21
- - örn: /products/1

# Nested Dynamic Route (İç İçe Dinamik Route)

- örn: /products/10/reviews
- örn: /products/10/reviews/20

# Catch All Segments/Routes

- Yol üzerinde birden fazla parametre olduğu durmda bu paramrterler erşime yöntemine denir

- docs/category1/concept1
- docs/category2/concept3
- docs/category1/concept2
- docs/category4/concept5
- docs/category2/concept1

# Undefined Page

- Varsayılan olarak tanımlanmayan bir sayfaya gitttiğimizde çiıkan 404 sayfası bulunsada istersek bunu özelleştirebilirizi.

- Özelleştirmek için src/app içersine not-found.tsx dosayası oluşturup düzneleriz bu noktada varsayılan 404 sayfası devre dışı kalır

- farklı bir sayfadan notFOund yönlendmimek istersek kullanbileceğimiz notFound fonksiyonu bulunuyor

# Private Folder (Özel Dosyalar)

- Route dıdışında kalan dosyları tanımlaya yarar.

- Route dışında kalıcak bir klasör tanımlamak istiyorsak klasör isminin başına "alt çizgi" koyarız

- Klsör yapısnını düzenlememize yarar

# Route Groups

- Proje içerisndeki yolları gruplandırmak için kullanırız

- Yazığımız sayfalraın daha kolay erişilebilir olması için route'laru gruplandırmak isteyebbiliriz.

- Öreneğin:

- Auth (Yetkilendirme)
- - Login.tsx
- - Signup.tsx
- - ForgetPass.tsx

- Profile (Profil)
- - User.tsx
- - UserDetail.tsx
- - UserFriends.tsx

# Metadata

- Seo açısından her sayfa için metada'ları tanımlamak önemli

- Statik Metdata sayfaların üstünde metdata objesi oluştururuz

- Dinamik sayfalarda (ürün detay gibi) generateMetadata fonksiyonu ile metadatayı tanımlarız

# Layout

- Bir uygulmanın veya sayfa grubun genel dizyanını belirlememiz yardımcı olan yapı.

- Bir sayfa grubun ortak olarak kullandığı bileşnleri layout'ta tanımlayıp gereksiz renderların önüne geçebilir.

- Root layout'a yaptığımız tanım bütün sayfaları etkiler. ama bazı durumlarda sadece bir kaç sayanın ortak olarak bir layout'a sahip olmasını isteyebiliriz

# Template

- Bir uygulmanın veya sayfa grubun genel dizyanını belirlememiz yardımcı olan yapı.

- Template'de sasayfalar arsındak igeçişte state'ler sıfırlanır.

# Özel Dosyalar

- Page.tsx
- Layout.tsx
- Template.tsx
- not-found.tsx

- Loading.tsx
- - bir bileşnin yüklendiği sürede ekran gelicek içeirği belirler

- Error.tsx
- - bir bielşen hata fırlarrığı dırımda devreye girer.
- - prop olarak oluşan hatayı ve sayfayı tekrar render etmeye yaran fonksiyonu alır

# Static vs Dynamic Page

- Next.js'de iki farklı safa türü bulunur.

1. Static Page (Statik Sayfalar):

- Derelem sırasında sunucu tarafında oluşturulur ve bir kezz oluşturulduktan sonra he ristete aynı içeriği sunuyor.

- Static sayfalar genellikle değişmeyen içeirğe sahip olan sayfalarda kullanılır.

- Örnek: Bir blog sitesi, login signup gibi sayfalar

2. Dynamic Page (Dinamik Sayfalar).

- Dinamik sayflar her istekte sunucu tarafından oluşturlur.

- Sayfa içierği, istek anındaki parametrelerle veya dış kaynakardan alınan verileri göre değişebilir.

- Örnek: Bir e ticaret sitesininürün detay sayfası verilebilir. Alına parametrey gör eiçerik değişceğinden bu bi statik sayfa olamaz

# Parallel Routes

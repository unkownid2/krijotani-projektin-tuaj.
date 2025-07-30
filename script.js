document.addEventListener('DOMContentLoaded', () => {
  setTimeout(function() {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('mainContent').style.display = 'block';
    document.body.style.overflow = 'auto';
    document.querySelector('.products').style.display = 'grid';
  }, 5000);
});
products: [
  {name:'Batanije me buqetë trëndafilash', description:'Punuar me dorë gjatë një kohe të gjatë, me kujdes të madh.Trëndafilat nuk vyshken kurrë – sepse janë thurur me dashuri.Madhësia: 65 cm Ideale si dhuratë për të porsalindur ose dekore  .', price:'100€', img:'https://i.imgur.com/VsNj1up.jpeg'},
  {name:'Set familjar', description:'i punuar me dorë – për të gjithë ata që duan të ruajnë vlerat traditën dhe dashurinë.', price:'53€', img:'https://i.imgur.com/oGY2qvL.jpeg'},
  {name:'Dhuratë për Çift', description:'Kukullat që tregojnë një histori dashurie të pastër e të sinqertë.Sepse dashuria me vlera është më e bukur Ideale për dhuratë martese, fejese apo për një çift të dashur.Punuar me përkushtim – çdo detaj flet për harmoni.', price:'40€', img:'https://i.imgur.com/kE17kHH.jpeg'},
  {name:'Qifti tjeter', description:'Ky qift I përkryer është I punuar dhe I punuar me dorë pa ndaluar, është shume i mirë dhe ta shikosh në pamje të parë sepse është I përkushtuar me perkushtim, mund ta vendosësh kudo që dëshiron, mbi rregall, mbi kuzhinë, ku të duash', price:'40€', img:'https://i.imgur.com/wnNXCDx.jpeg'},
  {name:'Kukull vajzë me shami', description:'E thjeshtë, e ëmbël dhe me vlera – kjo kukull e vogël përçon butësi dhe besim.Punuar me dorë, me dashuri në çdo detaj (30cm) .', price:'20€', img:'https://i.imgur.com/8FOnz9i.jpeg'},
  {name:'Kukull vajzë me shami (30 cm)', description:'E thjeshtë, e ëmbël dhe me vlera – kjo kukull e vogël përçon butësi dhe besim.Punuar me dorë, me dashuri në çdo detaj (30cm).', price:'20€', img:'https://i.imgur.com/oXDV7PL.jpeg'},
  {name:'Lepurushe e vogël me veshë të gjatë', description:'E vogël, e lezetshme dhe plot dashuri.Shoqëruesja më e bukur për të vegjlit.', price:'25€', img:'https://i.imgur.com/Myr3q5x.jpeg'},
  {name:'Arush amigurumi', description:'Arushi më i butë që mund të kesh parë ndonjëherë! I punuar me dorë për të sjellë ngrohtësi në çdo cep të dhomës.Perfekt për fëmijë ose si dhuratë simbolike..', price:'30€', img:'https://i.imgur.com/GyLO7wS.jpeg'},
  {name:'Kukulla Aseli', description:'Njihuni me shoqen më të mirë të vogëlusheve tuaja!  Kjo kukull 33cm, e punuar me dashuri , ajo është shoqja perfekte për vajzat e vogla. Praktike dhe plot mundësi loje: ulet, i ndërrohen fustanet , i kapen flokët dhe është shumë e qëndrueshme .', price:'35€', img:'https://i.imgur.com/vwThpbs.jpeg'},
  {name:'Një set i ëmbël 3-pjesësh', description:' i personalizuar me emrin e bebes – përkujdesje, ngjyra dhe dashuri në çdo detaj. Ideale për dhuratë të veçantë për të porsalindur! .', price:'55€', img:'https://i.imgur.com/UegY610.jpeg'},
  {name:'Dy motra me shamia', description:'Dy motra, dy zemra që rriten bashkë.Kukulla simbolike për motrën më të dashur!Me shami, me stil dhe me shumë dashuri..', price:'40€', img:'https://i.imgur.com/iTuWU6r.jpeg'},
  {name:'Kukulla me Sexhde', description:'Përfshin detaje të punuara me dorë.', price:'20€', img:'https://i.imgur.com/LrgeFgg.jpeg'},
  {name:'Kukulla Me Flok Te Gjata', description:'Floket e gjata ', price:'25€', img:'https://i.imgur.com/LR2bZBI.jpeg'},
  {name:'Djaloshi Me Veshje Islame', description:'tradit islame  .', price:'20€', img:'https://i.imgur.com/Q1r1Z68.jpeg'},
  {name:'Djaloshi', description:'Ideale për femije.', price:'20€', img:'https://i.imgur.com/CGCsstG.jpeg'},
  {name:'Trendafila Qe Nuk Vyshken', description:'Trendafila Qe Nuk Vyshken.', price:'8€', img:'https://i.imgur.com/aAj34P8.jpeg'},
  {name:'Varse Per Qelsa 17', description:'Model modern dhe elegant.', price:'17€', img:'https://i.imgur.com/id6n1qt.jpeg'},
  {name:'Kukulla per qifte te martuar E Bukur dhe Unike', description:'', price:'50', img:'https://i.imgur.com/gwzYQ41.jpeg'},
]
products: [
  {name:'Blanket with a Bouquet of Roses', description:'Handmade over a long period, with great care.The roses never fade – because they are crafted with love.Size: 65 cm Ideal as a gift for newborns or as decoration. ', price:'$100', img:'https://i.imgur.com/VsNj1up.jpeg'},
  {name:'Handmade family set', description:'– for all those who want to preserve values, tradition, and love.', price:'$53', img:'https://i.imgur.com/oGY2qvL.jpeg'},
  {name:'Gift for a Couple', description:'Small doll, ideal as a gift.', price:'$40', img:'https://i.imgur.com/kE17kHH.jpeg'},
  {name:'Gift for a Couple', description:'Small doll, ideal as a gift.', price:'$40', img:'https://i.imgur.com/wnNXCDx.jpeg'},
  {name:'Doll with Headscarf', description:'Simple, sweet, and full of meaning – this little doll conveys softness and faith.Handmade with love in every detail..', price:'$20', img:'https://i.imgur.com/8FOnz9i.jpeg'},
  {name:'Doll with Headscarf', description:'Simple, sweet, and full of meaning – this little doll conveys softness and faith.Handmade with love in every detail..', price:'$20', img:'https://i.imgur.com/oXDV7PL.jpeg'},
  {name:'Little Bunny with Long Ears', description:'Small, cute, and full of love.The sweetest companion for little ones..', price:'$25', img:'https://i.imgur.com/Myr3q5x.jpeg'},
  {name:'Amigurumi Teddy Bear', description:'The softest bear you’ve ever seen!Handmade to bring warmth to every corner of the room.Perfect for children or as a symbolic gift..', price:'$30', img:'https://i.imgur.com/GyLO7wS.jpeg'},
  {name:'Aseli Doll', description:'Meet your little new best friend! This 33 cm doll, lovingly handmade, is the perfect companion for young girls.Practical and full of play possibilities: she can sit, her dresses can be changed, her hair can be styled, and she’s very durable..', price:'$35', img:'https://i.imgur.com/vwThpbs.jpeg'},
  {name:'A sweet 3-piece set', description:'personalized with the baby  name  care, color, and love in every detail.Perfect as a special gift for a newborn!.', price:'$55', img:'https://i.imgur.com/UegY610.jpeg'},
  {name:'Two Sisters with Headscarves', description:'Two sisters, two hearts growing together.A symbolic doll for the dearest sister!With headscarves, style, and lots of love..', price:'$40', img:'https://i.imgur.com/iTuWU6r.jpeg'},
  {name:'Doll with Prayer Rug', description:'Includes hand-crafted details.', price:'$20', img:'https://i.imgur.com/LrgeFgg.jpeg'},
  {name:'Doll with Long Hair', price:'$25', img:'https://i.imgur.com/LR2bZBI.jpeg'},
  {name:'Boy in Islamic Clothing', description:'Unique doll made of quality material.', price:'$20', img:'https://i.imgur.com/Q1r1Z68.jpeg'},
  {name:'The Boy', description:'Ideal .', price:'$20', img:'https://i.imgur.com/CGCsstG.jpeg'},
  {name:'Roses That Never Fade', description:'.', price:'$8', img:'https://i.imgur.com/aAj34P8.jpeg'},
  {name:'Doll Q', description:'Modern and elegant design.', price:'$30', img:'https://i.imgur.com/gwzYQ41.jpeg'},
]
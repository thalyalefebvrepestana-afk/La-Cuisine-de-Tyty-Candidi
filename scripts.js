const recipes = [
  { id:1, title:"Pâtes Carbonara", category:"plat", time:"15 min", excerpt:"Classique romain avec lard, œuf et parmesan.", img:"https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop&q=85", ingredients:["400g pâtes", "200g lard", "3 œufs", "100g Pecorino", "Poivre noir"], steps:["Cuire pâtes", "Faire revenir lard", "Mélanger œufs/fromage", "Combiner tous ensemble"] },
  { id:2, title:"Pad Thai", category:"plat", time:"25 min", excerpt:"Nouilles de riz sautées à la thaïlandaise avec cacahuètes.", img:"https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop&q=85", ingredients:["250g nouilles riz", "200g crevettes", "2 œufs", "100g arachides", "50ml sauce poisson", "Citron", "Ail", "Piment"], steps:["Tremper nouilles", "Sauter crevettes/œufs", "Ajouter nouilles/sauce", "Garnir d'arachides et citron"] },
  { id:3, title:"Bouillabaisse", category:"plat", time:"45 min", excerpt:"Soupe provençale riche avec poissons et fruits de mer.", img:"https://images.unsplash.com/photo-1547592166-7aae4d755744?w=400&h=300&fit=crop&q=85", ingredients:["600g poissons variés", "200g moules", "300g crevettes", "2 oignons", "4 tomates", "Safran", "Ail", "Bouillon"], steps:["Faire fond de poissons", "Ajouter légumes/safran", "Mijoter 20 min", "Ajouter poissons/fruits de mer"] },
  { id:4, title:"Ceviche péruvien", category:"entrée", time:"30 min", excerpt:"Poisson cru mariné au jus de citron, plat légendaire du Pérou.", img:"https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop&q=85", ingredients:["500g poisson blanc", "200ml jus citron", "1 oignon", "1 ají rojo", "Coriandre", "Sel", "Huile d'olive"], steps:["Couper poisson", "Verser jus citron", "Ajouter oignon/épices", "Laisser reposer 15 min"] },
  { id:5, title:"Ramen japonais", category:"plat", time:"40 min", excerpt:"Nouilles japonnaises dans un bouillon riche avec œuf et porc.", img:"https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop&q=85", ingredients:["300g nouilles ramen", "1L bouillon dashi", "200g porc", "2 œufs", "Germes soja", "Nori", "Oignon", "Ail"], steps:["Préparer bouillon", "Cuire nouilles", "Cuire œufs mollets", "Assembler bol avec toppings"] },
  { id:6, title:"Biryani indien", category:"plat", time:"50 min", excerpt:"Riz épicé avec poulet, recette traditionnelle du Rajasthan.", img:"https://images.unsplash.com/photo-1633284042765-8ffe7b1666d9?w=400&h=300&fit=crop&q=85", ingredients:["400g riz basmati", "500g poulet", "2 oignons", "Yaourt", "Gingembre/ail", "Cardamome", "Safran", "Épices"], steps:["Mariner poulet", "Frire oignons", "Cuire riz/poulet alternés", "Laisser reposer 5 min"] },
  { id:7, title:"Couscous marocain", category:"plat", time:"45 min", excerpt:"Graine de semoule avec légumes et mouton à la marocaine.", img:"https://images.unsplash.com/photo-1597318470213-91e0a9ddac33?w=400&h=300&fit=crop&q=85", ingredients:["300g couscous", "500g mouton", "2 oignons", "Carottes", "Pois chiches", "Raisins", "Ras el hanout"], steps:["Cuire tajine", "Préparer couscous", "Verser bouillon", "Servir avec légumes/sauce"] },
  { id:8, title:"Tacos al pastor", category:"plat", time:"30 min", excerpt:"Viande marinée mexicaine dans tortillas avec ananas.", img:"https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop&q=85", ingredients:["600g porc", "Tortillas", "Ananas", "Oignons", "Coriandre", "Citron vert", "Épices mexicaines"], steps:["Mariner porc", "Cuire à la plancha", "Griller tortillas", "Assembler avec ananas/oignons"] },
  { id:9, title:"Moussaka grecque", category:"plat", time:"60 min", excerpt:"Aubergines, viande hachée et béchamel, classique méditerranéen.", img:"https://images.unsplash.com/photo-1612874742237-6526221fcf4f?w=400&h=300&fit=crop&q=85", ingredients:["3 aubergines", "500g viande", "2 oignons", "400g tomates", "300ml béchamel", "Fromage"], steps:["Griller aubergines", "Préparer sauce viande", "Alterner couches", "Cuire 30 min au four"] },
  { id:10, title:"Chow Mein chinois", category:"plat", time:"20 min", excerpt:"Nouilles sautées avec légumes et sauce soja.", img:"https://images.unsplash.com/photo-1633452602132-bfe71f50c786?w=400&h=300&fit=crop&q=85", ingredients:["300g nouilles", "200g poulet/crevettes", "1 poivron", "100g germes soja", "2 carottes", "Sauce soja", "Huile sésame"], steps:["Cuire nouilles", "Sauter viande/légumes", "Ajouter nouilles/sauce", "Terminer à la plancha"] },
  { id:11, title:"Falafel", category:"entrée", time:"40 min", excerpt:"Beignets de pois chiches épicés, plat du Moyen-Orient.", img:"https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=300&fit=crop&q=85", ingredients:["400g pois chiches", "1 oignon", "Coriandre", "Cumin", "Farine", "Persil", "Huile d'olive"], steps:["Mixer pois chiches/épices", "Former boulettes", "Cuire au four", "Servir avec tahiné"] },
  { id:12, title:"Salade grecque", category:"entrée", time:"15 min", excerpt:"Tomates, concombre, feta et olives noires.", img:"https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop&q=85", ingredients:["3 tomates", "1 concombre", "250g féta", "100g olives noires", "Oignon rouge", "Huile/vinaigre"], steps:["Couper légumes", "Ajouter féta/olives", "Versez vinaigrette", "Mélanger délicatement"] },
  { id:13, title:"Guacamole mexicain", category:"entrée", time:"10 min", excerpt:"Purée d'avocat avec citron vert et coriandre.", img:"https://images.unsplash.com/photo-1599599810694-b5ac4dd0b988?w=400&h=300&fit=crop&q=85", ingredients:["3 avocats", "1 tomate", "1/2 oignon", "Citron vert", "Coriandre", "Sel"], steps:["Écraser avocats", "Ajouter oignon/tomate", "Verser citron", "Servir avec chips"] },
  { id:14, title:"Tiramisu", category:"dessert", time:"30 min +4h", excerpt:"Classique italien avec mascarpone, café et cacao.", img:"https://images.unsplash.com/photo-1571115764595-644a12c7aed5?w=400&h=300&fit=crop&q=85", ingredients:["300g mascarpone", "200ml café", "6 jaunes œufs", "80g sucre", "24 biscuits Savoie", "Cacao"], steps:["Blanchir jaunes/sucre", "Ajouter mascarpone", "Tremper biscuits", "Alterner couches, réfrigérer"] },
  { id:15, title:"Pavlova", category:"dessert", time:"1h +2h repos", excerpt:"Meringue croustillante garnie de crème et fruits.", img:"https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=400&h=300&fit=crop&q=85", ingredients:["4 blancs œufs", "250g sucre", "300ml crème", "300g fruits rouges", "Vanille"], steps:["Monter blancs", "Ajouter sucre", "Dresser base pavlova", "Cuire 1h à 120°C, garnir"] },
  { id:16, title:"Crème brûlée", category:"dessert", time:"35 min +4h", excerpt:"Crème riche avec caramel croustillant français.", img:"https://images.unsplash.com/photo-1501082674676-39de08a45b4c?w=400&h=300&fit=crop&q=85", ingredients:["500ml crème", "1 gousse vanille", "6 jaunes œufs", "100g sucre"], steps:["Infuser vanille", "Blanchir jaunes/sucre", "Combiner crème", "Cuire 20 min bain-marie, glacer"] },
  { id:17, title:"Brownies chocolat", category:"dessert", time:"30 min", excerpt:"Gâteau riche et fondant au cacao américain.", img:"https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400&h=300&fit=crop&q=85", ingredients:["150g chocolat noir", "100g beurre", "150g sucre", "2 œufs", "100g farine", "Sel"], steps:["Fondre chocolat/beurre", "Mélanger œufs/sucre", "Combiner tous", "Cuire 20 min à 180°C"] },
  { id:18, title:"Cheesecake new-yorkais", category:"dessert", time:"50 min +6h", excerpt:"Gâteau au fromage frais crémeux, classique américain.", img:"https://images.unsplash.com/photo-1589080876816-17d2b7e59ba8?w=400&h=300&fit=crop&q=85", ingredients:["400g fromage frais", "150g sucre", "3 œufs", "100ml crème", "Biscuits", "Beurre"], steps:["Préparer base biscuits", "Battre fromage/sucre", "Ajouter œufs/crème", "Cuire 30 min, refroidir"] },
  { id:19, title:"Poulet tandoori", category:"plat", time:"40 min", excerpt:"Poulet grillé à l'indienne avec épices et yaourt.", img:"https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop&q=85", ingredients:["800g poulet", "300ml yaourt", "Gingembre/ail", "Curcuma", "Cumin", "Paprika", "Citron"], steps:["Mariner poulet", "Cuire au tandoor/four", "Retourner régulièrement", "Servir avec citron/oignons"] },
  { id:20, title:"Tom Yum", category:"plat", time:"25 min", excerpt:"Soupe thaïe épicée et aigre aux crevettes.", img:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop&q=85", ingredients:["500ml bouillon", "200g crevettes", "Tige citronnelle", "3 piments", "200g champignons", "Sauce poisson", "Citron"], steps:["Faire bouillon", "Ajouter citronnelle/piments", "Cuire crevettes", "Finir citron/sauce poisson"] },
  { id:21, title:"Hummus", category:"entrée", time:"10 min", excerpt:"Purée de pois chiches crémeuse, coussin moyen-oriental.", img:"https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&h=300&fit=crop&q=85", ingredients:["400g pois chiches", "60ml tahine", "2 citrons", "2 gousses ail", "Huile olive", "Paprika"], steps:["Mixer pois chiches", "Ajouter tahine/ail", "Verser jus citron", "Verser huile, garnir paprika"] },
  { id:22, title:"Goulash hongrois", category:"plat", time:"90 min", excerpt:"Ragoût de bœuf riche avec paprika et crème aigre.", img:"https://images.unsplash.com/photo-1626626867105-ea8b9c58b06c?w=400&h=300&fit=crop&q=85", ingredients:["800g bœuf", "3 oignons", "30g paprika", "2 tomates", "500ml bouillon", "Crème aigre", "Carvi"], steps:["Faire revenir oignons", "Ajouter bœuf/paprika", "Verser bouillon", "Mijoter 1h, ajouter crème"] },
  { id:23, title:"Seafood Paella", category:"plat", time:"40 min", excerpt:"Riz espagnol avec fruits de mer et safran.", img:"https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop&q=85", ingredients:["300g riz bomba", "300g crevettes", "200g moules", "150g seiche", "1L bouillon", "Safran", "Poivron", "Tomate"], steps:["Faire fond safran/bouillon", "Cuire riz 15 min", "Ajouter fruits de mer", "Laisser reposer 5 min"] },
  { id:24, title:"Boeuf bourguignon", category:"plat", time:"120 min", excerpt:"Ragoût français avec vin rouge, bacon et champignons.", img:"https://images.unsplash.com/photo-1612874742237-6526221fcf4f?w=400&h=300&fit=crop&q=85", ingredients:["1kg bœuf", "300ml vin rouge", "200g bacon", "300g champignons", "2 oignons", "3 carottes", "Thym"], steps:["Saisir bœuf", "Revenir bacon/oignons", "Déglacer vin", "Mijoter 2h avec légumes"] },
  { id:25, title:"Laksa singapourien", category:"plat", time:"35 min", excerpt:"Soupe de nouilles asiatique riche et épicée.", img:"https://images.unsplash.com/photo-1605787020600-01d6bd6dfa53?w=400&h=300&fit=crop&q=85", ingredients:["300g nouilles", "500ml lait coco", "200ml bouillon", "200g crevettes", "100g tofu", "Pâte laksa", "Œuf", "Germes soja"], steps:["Faire bouillon avec pâte laksa", "Verser lait coco", "Cuire nouilles", "Assembler bol avec toppings"] },
  { id:26, title:"Schnitzel autrichien", category:"plat", time:"20 min", excerpt:"Escalope dorée à la chapelure, recette de Vienne.", img:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop&q=85", ingredients:["4 escalopes veau", "Farine", "2 œufs", "Chapelure", "Citron", "Persil", "Huile"], steps:["Aplatir escalopes", "Fariner/tremper œuf", "Enrober chapelure", "Cuire à la poêle 3 min/face"] },
  { id:27, title:"Soufflé au fromage", category:"plat", time:"35 min", excerpt:"Plat léger et gonflé avec Gruyère, classique français.", img:"https://images.unsplash.com/photo-1568968691918-e341407e4ffd?w=400&h=300&fit=crop&q=85", ingredients:["40g beurre", "40g farine", "250ml lait", "150g Gruyère", "5 œufs", "Sel/poivre", "Muscade"], steps:["Préparer roux/béchamel", "Ajouter fromage", "Incorporer jaunes", "Monter blancs, mélanger, cuire 25 min"] },
  { id:28, title:"Bao chinois", category:"entrée", time:"45 min", excerpt:"Petits pains moelleux farcis au porc sucré.", img:"https://images.unsplash.com/photo-1611003228941-98852ba62227?w=400&h=300&fit=crop&q=85", ingredients:["400g farine", "200g porc", "Sauce hoisin", "100g oignons verts", "Levure", "Sucre", "Sel"], steps:["Préparer pâte", "Laisser lever 1h", "Préparer farce porc", "Farcir/cuire 15 min vapeur"] },
  { id:29, title:"Buddha bowl", category:"plat", time:"30 min", excerpt:"Bol coloré avec légumes, grains et sauce tahine saine.", img:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop&q=85", ingredients:["150g quinoa", "1 patate douce", "100g pois chiches", "Épinards", "Carottes", "Avocat", "Sauce tahine"], steps:["Cuire quinoa", "Rôtir patate douce", "Préparer légumes", "Assembler bol, arroser sauce"] },
  { id:30, title:"Crème pâtissière", category:"dessert", time:"20 min", excerpt:"Crème épaisse française pour tartes et pâtisseries.", img:"https://images.unsplash.com/photo-1488477181946-6558a6b022e3?w=400&h=300&fit=crop&q=85", ingredients:["500ml lait", "5 jaunes œufs", "50g sucre", "30g farine", "15g maïzena", "Vanille"], steps:["Chauffer lait", "Blanchir jaunes/sucre", "Ajouter farine/maïzena", "Verser lait, remuer, mijoter 2 min"] }
];

const grid = document.getElementById('recipesGrid');
const search = document.getElementById('search');
const filter = document.getElementById('categoryFilter');
const modal = document.getElementById('recipeModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');

function renderCards(list){
  grid.innerHTML = '';
  list.forEach(r => {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <img src="${r.img}" alt="${r.title}" loading="lazy">
      <h4>${r.title}</h4>
      <p>${r.excerpt}</p>
      <div class="meta">
        <small>${r.time}</small>
        <button class="btn" data-id="${r.id}">Voir la recette</button>
      </div>
    `;
    grid.appendChild(card);
  })
}

function openRecipe(id){
  const r = recipes.find(x=>x.id===Number(id));
  if(!r) return;
  const ingHtml = r.ingredients.map(ing => `<li>${ing}</li>`).join('');
  const stepsHtml = r.steps.map(step => `<li>${step}</li>`).join('');
  modalBody.innerHTML = `
    <h2>${r.title}</h2>
    <p><strong>Catégorie:</strong> ${r.category} — <strong>Temps:</strong> ${r.time}</p>
    <img src="${r.img}" alt="${r.title}" style="width:100%;height:220px;object-fit:cover;border-radius:8px;margin:8px 0">
    <h4>Ingrédients</h4>
    <ul>${ingHtml}</ul>
    <h4>Préparation</h4>
    <ol>${stepsHtml}</ol>
  `;
  modal.setAttribute('aria-hidden','false');
}

function close() {
  modal.setAttribute('aria-hidden','true');
}

grid.addEventListener('click', (e)=>{
  const btn = e.target.closest('button[data-id]');
  if(btn){ openRecipe(btn.dataset.id) }
});

closeModal.addEventListener('click', close);
modal.addEventListener('click', (e)=>{ if(e.target===modal) close() });

function applyFilters(){
  const q = (search.value||'').toLowerCase().trim();
  const cat = filter.value;
  const filtered = recipes.filter(r=>{
    const byCat = cat==='all' ? true : r.category===cat;
    const byQ = q === '' ? true : (r.title + ' ' + r.excerpt).toLowerCase().includes(q);
    return byCat && byQ;
  });
  renderCards(filtered);
}

search.addEventListener('input', applyFilters);
filter.addEventListener('change', applyFilters);

renderCards(recipes);

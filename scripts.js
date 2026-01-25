const recipes = [
  { id:1, title:"Pâtes Carbonara classiques", category:"plat", time:"15 min", excerpt:"La vraie recette italienne, simple et savoureuse.", img:"https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop&q=85", ingredients:["400g pâtes", "200g lard/bacon", "3 œufs", "100g fromage Pecorino", "Sel et poivre noir"], steps:["Cuire les pâtes al dente", "Faire revenir le bacon", "Mélanger œufs et fromage", "Combiner avec les pâtes chaudes"] },
  { id:2, title:"Pâtes Bolognaise maison", category:"plat", time:"35 min", excerpt:"Une sauce généreuse et authentique qui ravit tous les palais.", img:"https://images.unsplash.com/photo-1612874742237-6526221fcf4f?w=400&h=300&fit=crop&q=85", ingredients:["500g viande hachée", "1 oignon", "2 gousses ail", "400g tomates", "2 carottes", "50ml vin rouge", "Huile d'olive"], steps:["Faire revenir oignon et ail", "Ajouter la viande", "Verser le vin et les tomates", "Laisser mijoter 30 min"] },
  { id:3, title:"Pâtes Aglio e Olio", category:"plat", time:"10 min", excerpt:"Ail et huile d'olive, la recette la plus rapide et légère.", img:"https://images.unsplash.com/photo-1645112411341-6c4ee32510c8?w=400&h=300&fit=crop&q=85", ingredients:["400g pâtes", "6 gousses ail", "150ml huile d'olive", "Piment rouge", "Sel et persil"], steps:["Cuire les pâtes", "Émincer l'ail finement", "Faire infuser dans l'huile", "Mélanger avec les pâtes"] },
  { id:4, title:"Pâtes à la crème de tomate", category:"plat", time:"20 min", excerpt:"Tomates et crème pour un plat doux et réconfortant.", img:"https://images.unsplash.com/photo-1585238341710-4913d3a3a48f?w=400&h=300&fit=crop&q=85", ingredients:["400g pâtes", "400g tomates", "200ml crème fraîche", "Ail", "Basilic", "Parmesan"], steps:["Cuire les pâtes", "Faire revenir l'ail", "Ajouter les tomates", "Incorporer la crème", "Saupoudrer de basilic"] },
  { id:5, title:"Pâtes à la sauce pesto", category:"plat", time:"15 min", excerpt:"Basilic frais, pignons et parmesan pour un goût explosif.", img:"https://images.unsplash.com/photo-1621371265537-b65dc338eb1e?w=400&h=300&fit=crop&q=85", ingredients:["400g pâtes", "Basilic frais", "50g pignons", "100g parmesan", "200ml huile d'olive", "2 gousses ail"], steps:["Cuire les pâtes", "Préparer le pesto au mixer", "Mélanger avec l'huile", "Combiner aux pâtes chaudes"] },
  { id:6, title:"Pâtes aux fruits de mer", category:"plat", time:"25 min", excerpt:"Moules, crevettes et pétoncles pour un festin en 25 min.", img:"https://images.unsplash.com/photo-1599599810694-b5ac4dd0b988?w=400&h=300&fit=crop&q=85", ingredients:["400g pâtes", "300g moules", "200g crevettes", "150g pétoncles", "Vin blanc", "Ail", "Tomates"], steps:["Cuire les pâtes", "Faire revenir les fruits de mer", "Déglacer au vin blanc", "Ajouter les tomates", "Mijoter 10 min"] },
  { id:7, title:"Pâtes Carbonara végétarienne", category:"plat", time:"18 min", excerpt:"Champignons grillés remplacent le bacon pour une version légère.", img:"https://images.unsplash.com/photo-1473093295203-cad00df16e50?w=400&h=300&fit=crop&q=85", ingredients:["400g pâtes", "300g champignons", "3 œufs", "100g fromage", "Ail", "Thym"], steps:["Cuire les pâtes", "Faire revenir les champignons", "Préparer la sauce œufs-fromage", "Combiner doucement"] },
  { id:8, title:"Pâtes beurre et roquette", category:"plat", time:"12 min", excerpt:"Recette minimaliste et délicieuse pour une faim pressée.", img:"https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop&q=85", ingredients:["400g pâtes", "150g roquette", "100g beurre", "80g parmesan", "Citron", "Sel et poivre"], steps:["Cuire les pâtes", "Fondre le beurre", "Ajouter la roquette", "Saupoudrer de parmesan"] },
  { id:9, title:"Pâtes à la vodka", category:"plat", time:"20 min", excerpt:"Sauce crémeuse tomate-vodka pour les soirs chic en semaine.", img:"https://images.unsplash.com/photo-1535521066927-ab7c9ab60908?w=400&h=300&fit=crop&q=85", ingredients:["400g pâtes", "400g tomates", "100ml vodka", "200ml crème", "Ail", "Piment"], steps:["Cuire les pâtes", "Déglacer avec vodka", "Ajouter les tomates", "Finir avec la crème"] },
  { id:10, title:"Pâtes aux épinards et ricotta", category:"plat", time:"22 min", excerpt:"Creamy, healthy, et prête en moins de 25 minutes.", img:"https://images.unsplash.com/photo-1545730566-31e755363b1b?w=400&h=300&fit=crop&q=85", ingredients:["400g pâtes", "300g épinards", "250g ricotta", "100ml crème", "Ail", "Noix de muscade", "Parmesan"], steps:["Cuire les pâtes", "Faire revenir épinards", "Mélanger ricotta et crème", "Combiner les éléments"] },
  { id:11, title:"Velouté de carottes au gingembre", category:"entrée", time:"30 min", excerpt:"Un velouté doux, réchauffé par une pointe de gingembre.", img:"https://images.unsplash.com/photo-1547592166-7aae4d755744?w=400&h=300&fit=crop&q=85", ingredients:["1kg carottes", "500ml bouillon", "200ml crème", "1 oignon", "Gingembre frais", "Sel"], steps:["Éplucher carottes et oignon", "Cuire 20 min dans le bouillon", "Mixer finement", "Ajouter gingembre et crème"] },
  { id:12, title:"Salade Caprese", category:"entrée", time:"10 min", excerpt:"Tomate, mozzarella, basilic — classique intemporel.", img:"https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop&q=85", ingredients:["3 tomates", "250g mozzarella", "Basilic frais", "Huile d'olive", "Vinaigre balsamique", "Sel et poivre"], steps:["Trancher tomates et mozzarella", "Disposer en alternant", "Ajouter basilic frais", "Arroser d'huile et vinaigre"] },
  { id:13, title:"Moelleux au chocolat express", category:"dessert", time:"25 min", excerpt:"Gâteau fondant, cœur coulant — prêt en 25 minutes.", img:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop&q=85", ingredients:["200g chocolat noir", "100g beurre", "3 œufs", "100g sucre", "50g farine", "Beurre pour moules"], steps:["Fondre chocolat et beurre", "Mélanger œufs et sucre", "Combiner doucement", "Cuire 12 min à 180°C"] },
  { id:14, title:"Panna Cotta aux fruits rouges", category:"dessert", time:"30 min +4h repos", excerpt:"Crème italienne lisse et délicate, léger comme un nuage.", img:"https://images.unsplash.com/photo-1488477181946-6558a6b022e3?w=400&h=300&fit=crop&q=85", ingredients:["500ml crème", "100ml lait", "7g gélatine", "100g sucre", "300g fruits rouges"], steps:["Chauffer crème et lait", "Dissoudre gélatine", "Ajouter sucre", "Verser en moules", "Réfrigérer 4h"] },
  { id:15, title:"Tiramisu traditionnel", category:"dessert", time:"25 min +4h repos", excerpt:"Le dessert italien par excellence, café et mascarpone.", img:"https://images.unsplash.com/photo-1571115764595-644a12c7aed5?w=400&h=300&fit=crop&q=85", ingredients:["300g mascarpone", "200ml café", "6 jaunes d'œufs", "80g sucre", "24 biscuits", "Cacao"], steps:["Blanchir jaunes et sucre", "Ajouter mascarpone", "Tremper biscuits", "Alterner couches"] },
  { id:16, title:"Pâtes Amatriciana", category:"plat", time:"18 min", excerpt:"Tomate, guanciale et fromage pour une saveur unique romaine.", img:"https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop&q=85", ingredients:["400g pâtes", "200g guanciale", "400g tomates", "Pecorino", "Piment"], steps:["Cuire les pâtes", "Faire revenir le guanciale", "Ajouter tomates et piment", "Mélanger avec pâtes"] },
  { id:17, title:"Pâtes aux champignons de Paris", category:"plat", time:"20 min", excerpt:"Champignons à la crème fraîche, un classique réconfortant.", img:"https://images.unsplash.com/photo-1473093295203-cad00df16e50?w=400&h=300&fit=crop&q=85", ingredients:["400g pâtes", "400g champignons", "200ml crème", "2 échalotes", "Thym", "Parmesan"], steps:["Cuire les pâtes", "Émincer champignons", "Faire revenir avec échalotes", "Ajouter crème et thym"] },
  { id:18, title:"Pâtes à la Norma", category:"plat", time:"25 min", excerpt:"Aubergines, tomates et ricotta, une spécialité sicilienne.", img:"https://images.unsplash.com/photo-1611003228941-98852ba62227?w=400&h=300&fit=crop&q=85", ingredients:["400g pâtes", "2 aubergines", "400g tomates", "200g ricotta", "Basilic", "Ail"], steps:["Cuire les pâtes", "Griller aubergines", "Préparer sauce tomate", "Ajouter ricotta et basilic"] },
  { id:19, title:"Pâtes Cacio e Pepe", category:"plat", time:"12 min", excerpt:"Fromage et poivre pour une saveur intense et minimaliste.", img:"https://images.unsplash.com/photo-1612874742237-6526221fcf4f?w=400&h=300&fit=crop&q=85", ingredients:["400g pâtes", "200g Pecorino râpé", "20g poivre noir", "Eau de cuisson"], steps:["Cuire les pâtes", "Toaster le poivre", "Mélanger fromage et eau", "Combiner délicatement"] },
  { id:20, title:"Pâtes sauce blanc de poisson", category:"plat", time:"20 min", excerpt:"Crème légère et filet de poisson blanc, raffiné et simple.", img:"https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop&q=85", ingredients:["400g pâtes", "400g filet blanc", "200ml crème", "150ml vin blanc", "Citron", "Ail"], steps:["Cuire les pâtes", "Faire revenir poisson", "Déglacer au vin", "Ajouter crème et citron"] },
  { id:21, title:"Bruschetta tomate et ail", category:"entrée", time:"15 min", excerpt:"Tranches de pain grillées, tomates fraîches et ail.", img:"https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&h=300&fit=crop&q=85", ingredients:["8 tranches pain", "3 tomates", "3 gousses ail", "Basilic", "Huile d'olive"], steps:["Griller le pain", "Frotter ail", "Hacher tomates", "Ajouter basilic et huile"] },
  { id:22, title:"Crème brûlée vanille", category:"dessert", time:"30 min +4h repos", excerpt:"Dessert classique française, crème riche et caramel croustillant.", img:"https://images.unsplash.com/photo-1501082674676-39de08a45b4c?w=400&h=300&fit=crop&q=85", ingredients:["500ml crème", "1 gousse vanille", "6 jaunes d'œufs", "120g sucre"], steps:["Infuser vanille dans crème", "Blanchir jaunes et sucre", "Combiner crème et œufs", "Cuire 20 min au bain-marie"] },
  { id:23, title:"Risotto aux champignons", category:"plat", time:"30 min", excerpt:"Riz crémeux, champignons frais et parmesan.", img:"https://images.unsplash.com/photo-1587521831519-4600ec8b7408?w=400&h=300&fit=crop&q=85", ingredients:["300g riz arborio", "300g champignons", "1L bouillon", "1 oignon", "100g beurre", "Parmesan"], steps:["Faire revenir oignon", "Ajouter riz", "Verser bouillon petit à petit", "Remuer constamment 18 min"] },
  { id:24, title:"Soupe à l'oignon gratinée", category:"entrée", time:"40 min", excerpt:"Oignons caramélisés, bouillon riche et fromage gratiné.", img:"https://images.unsplash.com/photo-1484723315231-b1afe6901f20?w=400&h=300&fit=crop&q=85", ingredients:["1kg oignons", "1L bouillon", "Vin blanc", "Pain grillé", "Fromage", "Beurre"], steps:["Émincer oignons", "Caraméliser 30 min", "Déglacer au vin", "Ajouter bouillon", "Gratiner au four"] },
  { id:25, title:"Pavlova aux fruits frais", category:"dessert", time:"45 min +1h repos", excerpt:"Meringue croustillante, crème et fruits colorés.", img:"https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=400&h=300&fit=crop&q=85", ingredients:["4 blancs d'œufs", "250g sucre", "300ml crème", "300g fruits frais", "Vanille"], steps:["Monter blancs en neige", "Ajouter sucre graduellement", "Cuire 1h à 120°C", "Garnir avant de servir"] }
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

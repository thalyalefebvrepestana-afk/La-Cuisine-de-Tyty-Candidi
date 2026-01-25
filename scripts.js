const recipes = [
  {
    id:1,
    title:"Pâtes Carbonara classiques",
    category:"plat",
    time:"15 min",
    excerpt:"La vraie recette italienne, simple et savoureuse.",
    img:"https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id:2,
    title:"Pâtes Bolognese maison",
    category:"plat",
    time:"35 min",
    excerpt:"Une sauce généreuse et authentique qui ravit tous les palais.",
    img:"https://images.unsplash.com/photo-1612874742237-6526221fcf4f?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id:3,
    title:"Pâtes Aglio e Olio",
    category:"plat",
    time:"10 min",
    excerpt:"Ail et huile d'olive, la recette la plus rapide et légère.",
    img:"https://images.unsplash.com/photo-1645112411341-6c4ee32510c8?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id:4,
    title:"Pâtes à la crème de tomate",
    category:"plat",
    time:"20 min",
    excerpt:"Tomates et crème pour un plat doux et réconfortant.",
    img:"https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id:5,
    title:"Pâtes à la sauce pesto",
    category:"plat",
    time:"15 min",
    excerpt:"Basilic frais, pignons et parmesan pour un goût explosif.",
    img:"https://images.unsplash.com/photo-1599599810694-b5ac4dd0b988?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id:6,
    title:"Pâtes aux fruits de mer",
    category:"plat",
    time:"25 min",
    excerpt:"Moules, crevettes et pétoncles pour un festin en 25 min.",
    img:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id:7,
    title:"Pâtes Carbonara végétarienne",
    category:"plat",
    time:"18 min",
    excerpt:"Champignons grillés remplacent le bacon pour une version légère.",
    img:"https://images.unsplash.com/photo-1626104016173-c7b4bb4d4800?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id:8,
    title:"Pâtes beurre et roquette",
    category:"plat",
    time:"12 min",
    excerpt:"Recette minimaliste et délicieuse pour une faim pressée.",
    img:"https://images.unsplash.com/photo-1645894002002-41d11a13cd32?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id:9,
    title:"Pâtes à la vodka",
    category:"plat",
    time:"20 min",
    excerpt:"Sauce crémeuse tomate-vodka pour les soirs chic en semaine.",
    img:"https://images.unsplash.com/photo-1621996346564-bc2e59a22b7d?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id:10,
    title:"Pâtes aux épinards et ricotta",
    category:"plat",
    time:"22 min",
    excerpt:"Creamy, healthy, et prête en moins de 25 minutes.",
    img:"https://images.unsplash.com/photo-1621371265537-b65dc338eb1e?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id:11,
    title:"Velouté de carottes au gingembre",
    category:"entrée",
    time:"30 min",
    excerpt:"Un velouté doux, réchauffé par une pointe de gingembre.",
    img:"https://images.unsplash.com/photo-1547592166-7aae4d755744?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id:12,
    title:"Salade Caprese",
    category:"entrée",
    time:"10 min",
    excerpt:"Tomate, mozzarella, basilic — classique intemporel.",
    img:"https://images.unsplash.com/photo-1599599810694-b5ac4dd0b988?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id:13,
    title:"Moelleux au chocolat express",
    category:"dessert",
    time:"25 min",
    excerpt:"Gâteau fondant, cœur coulant — prêt en 25 minutes.",
    img:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id:14,
    title:"Panna Cotta aux fruits rouges",
    category:"dessert",
    time:"30 min +4h repos",
    excerpt:"Crème italienne lisse et délicate, léger comme un nuage.",
    img:"https://images.unsplash.com/photo-1488477181946-6558a6b022e3?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id:15,
    title:"Tiramisu traditionnel",
    category:"dessert",
    time:"25 min +4h repos",
    excerpt:"Le dessert italien par excellence, café et mascarpone.",
    img:"https://images.unsplash.com/photo-1571115764595-644a12c7aed5?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id:16,
    title:"Pâtes Amatriciana",
    category:"plat",
    time:"18 min",
    excerpt:"Tomate, guanciale et fromage pour une saveur unique romaine.",
    img:"https://images.unsplash.com/photo-1645112411341-6c4ee32510c8?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id:17,
    title:"Pâtes aux champignons de Paris",
    category:"plat",
    time:"20 min",
    excerpt:"Champignons à la crème fraîche, un classique réconfortant.",
    img:"https://images.unsplash.com/photo-1621371265537-b65dc338eb1e?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3"
  }
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
      <img src="${r.img}" alt="${r.title}">
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
  modalBody.innerHTML = `
    <h2>${r.title}</h2>
    <p><strong>Catégorie:</strong> ${r.category} — <strong>Temps:</strong> ${r.time}</p>
    <img src="${r.img}" alt="${r.title}" style="width:100%;height:220px;object-fit:cover;border-radius:8px;margin:8px 0">
    <h4>Ingrédients</h4>
    <ul>
      <li>Ingrédient A</li>
      <li>Ingrédient B</li>
      <li>Ingrédient C</li>
    </ul>
    <h4>Préparation</h4>
    <p>Étapes simples et claires pour préparer cette recette maison.</p>
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

// initial render
renderCards(recipes);

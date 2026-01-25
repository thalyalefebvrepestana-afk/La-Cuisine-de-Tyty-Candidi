const recipes = [
  {
    id:1,
    title:"Pâtes Carbonara classiques",
    category:"plat",
    time:"15 min",
    excerpt:"La vraie recette italienne, simple et savoureuse.",
    img:"https://images.pixabay.com/photos/2019/02/22/19/14/pasta-carbonara-3974645-640.jpg"
  },
  {
    id:2,
    title:"Pâtes Bolognaise maison",
    category:"plat",
    time:"35 min",
    excerpt:"Une sauce généreuse et authentique qui ravit tous les palais.",
    img:"https://images.pixabay.com/photos/2017/09/04/02/13/pasta-bolognese-2712711-640.jpg"
  },
  {
    id:3,
    title:"Pâtes Aglio e Olio",
    category:"plat",
    time:"10 min",
    excerpt:"Ail et huile d'olive, la recette la plus rapide et légère.",
    img:"https://images.pixabay.com/photos/2016/07/29/19/42/pasta-1551681-640.jpg"
  },
  {
    id:4,
    title:"Pâtes à la crème de tomate",
    category:"plat",
    time:"20 min",
    excerpt:"Tomates et crème pour un plat doux et réconfortant.",
    img:"https://images.pixabay.com/photos/2017/09/16/16/40/pasta-2755620-640.jpg"
  },
  {
    id:5,
    title:"Pâtes à la sauce pesto",
    category:"plat",
    time:"15 min",
    excerpt:"Basilic frais, pignons et parmesan pour un goût explosif.",
    img:"https://images.pixabay.com/photos/2018/07/26/20/04/pesto-3563617-640.jpg"
  },
  {
    id:6,
    title:"Pâtes aux fruits de mer",
    category:"plat",
    time:"25 min",
    excerpt:"Moules, crevettes et pétoncles pour un festin en 25 min.",
    img:"https://images.pixabay.com/photos/2019/10/23/19/36/seafood-pasta-4572201-640.jpg"
  },
  {
    id:7,
    title:"Pâtes Carbonara végétarienne",
    category:"plat",
    time:"18 min",
    excerpt:"Champignons grillés remplacent le bacon pour une version légère.",
    img:"https://images.pixabay.com/photos/2017/06/06/22/05/pasta-2378729-640.jpg"
  },
  {
    id:8,
    title:"Pâtes beurre et roquette",
    category:"plat",
    time:"12 min",
    excerpt:"Recette minimaliste et délicieuse pour une faim pressée.",
    img:"https://images.pixabay.com/photos/2019/01/22/19/10/pasta-3948306-640.jpg"
  },
  {
    id:9,
    title:"Pâtes à la vodka",
    category:"plat",
    time:"20 min",
    excerpt:"Sauce crémeuse tomate-vodka pour les soirs chic en semaine.",
    img:"https://images.pixabay.com/photos/2017/03/23/19/57/food-2169308-640.jpg"
  },
  {
    id:10,
    title:"Pâtes aux épinards et ricotta",
    category:"plat",
    time:"22 min",
    excerpt:"Creamy, healthy, et prête en moins de 25 minutes.",
    img:"https://images.pixabay.com/photos/2018/05/01/22/05/spaghetti-3366400-640.jpg"
  },
  {
    id:11,
    title:"Velouté de carottes au gingembre",
    category:"entrée",
    time:"30 min",
    excerpt:"Un velouté doux, réchauffé par une pointe de gingembre.",
    img:"https://images.pixabay.com/photos/2019/04/11/14/13/soup-4120626-640.jpg"
  },
  {
    id:12,
    title:"Salade Caprese",
    category:"entrée",
    time:"10 min",
    excerpt:"Tomate, mozzarella, basilic — classique intemporel.",
    img:"https://images.pixabay.com/photos/2018/02/23/07/27/mozzarella-3174128-640.jpg"
  },
  {
    id:13,
    title:"Moelleux au chocolat express",
    category:"dessert",
    time:"25 min",
    excerpt:"Gâteau fondant, cœur coulant — prêt en 25 minutes.",
    img:"https://images.pixabay.com/photos/2016/09/13/09/06/molten-1666901-640.jpg"
  },
  {
    id:14,
    title:"Panna Cotta aux fruits rouges",
    category:"dessert",
    time:"30 min +4h repos",
    excerpt:"Crème italienne lisse et délicate, léger comme un nuage.",
    img:"https://images.pixabay.com/photos/2019/11/20/20/17/panna-cotta-4640315-640.jpg"
  },
  {
    id:15,
    title:"Tiramisu traditionnel",
    category:"dessert",
    time:"25 min +4h repos",
    excerpt:"Le dessert italien par excellence, café et mascarpone.",
    img:"https://images.pixabay.com/photos/2017/07/31/20/17/tiramisu-2559400-640.jpg"
  },
  {
    id:16,
    title:"Pâtes Amatriciana",
    category:"plat",
    time:"18 min",
    excerpt:"Tomate, guanciale et fromage pour une saveur unique romaine.",
    img:"https://images.pixabay.com/photos/2017/09/04/02/13/pasta-bolognese-2712711-640.jpg"
  },
  {
    id:17,
    title:"Pâtes aux champignons de Paris",
    category:"plat",
    time:"20 min",
    excerpt:"Champignons à la crème fraîche, un classique réconfortant.",
    img:"https://images.pixabay.com/photos/2016/10/25/13/29/pasta-mushroom-1768711-640.jpg"
  },
  {
    id:18,
    title:"Pâtes à la Norma",
    category:"plat",
    time:"25 min",
    excerpt:"Aubergines, tomates et ricotta, une spécialité sicilienne.",
    img:"https://images.pixabay.com/photos/2017/05/01/09/12/eggplant-2276670-640.jpg"
  },
  {
    id:19,
    title:"Pâtes Cacio e Pepe",
    category:"plat",
    time:"12 min",
    excerpt:"Fromage et poivre pour une saveur intense et minimaliste.",
    img:"https://images.pixabay.com/photos/2016/07/29/19/42/pasta-1551681-640.jpg"
  },
  {
    id:20,
    title:"Pâtes sauce blanc de poisson",
    category:"plat",
    time:"20 min",
    excerpt:"Crème légère et filet de poisson blanc, raffiné et simple.",
    img:"https://images.pixabay.com/photos/2017/09/16/16/39/pasta-2755618-640.jpg"
  },
  {
    id:21,
    title:"Bruschetta tomate et ail",
    category:"entrée",
    time:"15 min",
    excerpt:"Tranches de pain grillées, tomates fraîches et ail.",
    img:"https://images.pixabay.com/photos/2017/03/23/19/57/bruschetta-2169309-640.jpg"
  },
  {
    id:22,
    title:"Crème brûlée vanille",
    category:"dessert",
    time:"30 min +4h repos",
    excerpt:"Dessert classique française, crème riche et caramel croustillant.",
    img:"https://images.pixabay.com/photos/2016/12/26/17/28/creme-brulee-1932465-640.jpg"
  },
  {
    id:23,
    title:"Risotto aux champignons",
    category:"plat",
    time:"30 min",
    excerpt:"Riz crémeux, champignons frais et parmesan.",
    img:"https://images.pixabay.com/photos/2016/03/05/19/02/rice-dish-1238249-640.jpg"
  },
  {
    id:24,
    title:"Soupe à l'oignon gratinée",
    category:"entrée",
    time:"40 min",
    excerpt:"Oignons caramélisés, bouillon riche et fromage gratiné.",
    img:"https://images.pixabay.com/photos/2018/12/02/08/49/onion-soup-3850723-640.jpg"
  },
  {
    id:25,
    title:"Pavlova aux fruits frais",
    category:"dessert",
    time:"45 min +1h repos",
    excerpt:"Meringue croustillante, crème et fruits colorés.",
    img:"https://images.pixabay.com/photos/2020/03/14/18/46/pavlova-4931919-640.jpg"
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

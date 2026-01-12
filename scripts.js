const recipes = [
  {
    id:1,
    title:"Tarte fine aux tomates et pesto",
    category:"plat",
    time:"40 min",
    excerpt:"Pâte croustillante, tomates rôties et pesto maison.",
    img:"https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=1"
  },
  {
    id:2,
    title:"Velouté de carottes au gingembre",
    category:"entrée",
    time:"30 min",
    excerpt:"Un velouté doux, réchauffé par une pointe de gingembre.",
    img:"https://images.unsplash.com/photo-1543353071-087092ec393b?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=2"
  },
  {
    id:3,
    title:"Moelleux au chocolat express",
    category:"dessert",
    time:"25 min",
    excerpt:"Gâteau fondant, cœur coulant — prêt en 25 minutes.",
    img:"https://images.unsplash.com/photo-1608134613937-bd01e2d0b2b6?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=3"
  },
  {
    id:4,
    title:"Salade de quinoa, avocat et pois chiches",
    category:"plat",
    time:"20 min",
    excerpt:"Fraîche et nourrissante, parfaite pour un déjeuner léger.",
    img:"https://images.unsplash.com/photo-1604908177522-3b1d5b3d7d3f?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=4"
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

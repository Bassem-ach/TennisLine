// Tennis Line — tennis gear shop
// Static SPA. No build step. Cart persists in localStorage.

let PRODUCTS = [
  // ─── Racquets ───
  {
    id: 'r-pro-blade',
    name: 'Blade Pro 98',
    category: 'racquets',
    level: ['advanced', 'pro'],
    price: 245,
    was: 269,
    kicker: 'Racquet · Control',
    specs: '305g · 98 sq.in · 16x19',
    badge: { text: 'Pro pick', kind: 'court' },
    accent: '#1F3357',
  },
  {
    id: 'r-spin-99',
    name: 'TopSpin 99',
    category: 'racquets',
    level: ['intermediate', 'advanced'],
    price: 199,
    kicker: 'Racquet · Spin',
    specs: '300g · 99 sq.in · 16x20',
    badge: null,
    accent: '#2A4775',
  },
  {
    id: 'r-rally-100',
    name: 'Rally 100',
    category: 'racquets',
    level: ['beginner', 'intermediate'],
    price: 129,
    kicker: 'Racquet · All-court',
    specs: '285g · 100 sq.in · 16x19',
    badge: { text: 'Best seller', kind: 'ball' },
    accent: '#D8FF3E',
  },
  {
    id: 'r-power-110',
    name: 'Power 110 Lite',
    category: 'racquets',
    level: ['beginner'],
    price: 89,
    kicker: 'Racquet · Power',
    specs: '260g · 110 sq.in · 16x19',
    badge: { text: 'New', kind: 'court' },
    accent: '#1FA89A',
  },
  {
    id: 'r-tour-95',
    name: 'Tour Lab 95',
    category: 'racquets',
    level: ['pro'],
    price: 289,
    kicker: 'Racquet · Tour',
    specs: '315g · 95 sq.in · 18x20',
    badge: null,
    accent: '#14254A',
  },
  {
    id: 'r-junior-26',
    name: 'Junior 26"',
    category: 'racquets',
    level: ['beginner'],
    price: 59,
    kicker: 'Racquet · Junior',
    specs: '240g · 100 sq.in · Foam grip',
    badge: null,
    accent: '#C8E76A',
  },

  // ─── Strings ───
  {
    id: 's-polylux',
    name: 'PolyLux Tour',
    category: 'strings',
    level: ['advanced', 'pro'],
    price: 18,
    kicker: 'String · Co-poly',
    specs: '1.25mm · Set · High control',
    badge: { text: 'Tour spec', kind: 'court' },
    accent: '#1F3357',
  },
  {
    id: 's-gut-natural',
    name: 'Natural Gut 16',
    category: 'strings',
    level: ['pro'],
    price: 42,
    kicker: 'String · Multifilament',
    specs: '1.30mm · Set · Soft feel',
    badge: null,
    accent: '#F5F1E6',
  },
  {
    id: 's-hybrid-spin',
    name: 'Hybrid Spin Pack',
    category: 'strings',
    level: ['intermediate', 'advanced'],
    price: 24,
    kicker: 'String · Hybrid',
    specs: 'Poly + Multi · 1.25/1.30mm',
    badge: { text: 'Combo', kind: 'ball' },
    accent: '#D8FF3E',
  },
  {
    id: 's-synth-22',
    name: 'Synthetic 22',
    category: 'strings',
    level: ['beginner', 'intermediate'],
    price: 9,
    kicker: 'String · Synthetic',
    specs: '1.30mm · Set · Durable',
    badge: null,
    accent: '#5DA8B6',
  },
  {
    id: 's-soft-multi',
    name: 'SoftPlay Multi',
    category: 'strings',
    level: ['beginner', 'intermediate'],
    price: 14,
    kicker: 'String · Arm-friendly',
    specs: '1.32mm · Set · Comfort',
    badge: null,
    accent: '#8FC7D4',
  },

  // ─── Apparel ───
  {
    id: 'a-tee-court',
    name: 'Court Tee',
    category: 'apparel',
    level: ['beginner', 'intermediate', 'advanced', 'pro'],
    price: 35,
    kicker: 'Top · Lightweight',
    specs: 'Recycled poly · Quick-dry',
    badge: null,
    accent: '#D8FF3E',
  },
  {
    id: 'a-polo-pro',
    name: 'Pro Polo',
    category: 'apparel',
    level: ['intermediate', 'advanced', 'pro'],
    price: 65,
    kicker: 'Top · Match day',
    specs: 'Mesh back · Stretch knit',
    badge: { text: 'New', kind: 'court' },
    accent: '#1F3357',
  },
  {
    id: 'a-skirt-rally',
    name: 'Rally Skirt',
    category: 'apparel',
    level: ['beginner', 'intermediate', 'advanced', 'pro'],
    price: 55,
    kicker: 'Bottom · Skirt',
    specs: 'Built-in shorts · 4-way stretch',
    badge: null,
    accent: '#F4FFB8',
  },
  {
    id: 'a-shorts-7',
    name: '7" Match Shorts',
    category: 'apparel',
    level: ['intermediate', 'advanced', 'pro'],
    price: 50,
    kicker: 'Bottom · Shorts',
    specs: 'Side pockets · Sweat-wick',
    badge: null,
    accent: '#2A4775',
  },
  {
    id: 'a-cap-court',
    name: 'Court Cap',
    category: 'apparel',
    level: ['beginner', 'intermediate', 'advanced', 'pro'],
    price: 28,
    kicker: 'Accessory · Cap',
    specs: 'Sweatband · UPF 50',
    badge: { text: 'Best seller', kind: 'ball' },
    accent: '#D8FF3E',
  },
  {
    id: 'a-socks-grip',
    name: 'Grip Crew Socks',
    category: 'apparel',
    level: ['beginner', 'intermediate', 'advanced', 'pro'],
    price: 16,
    kicker: 'Accessory · Socks',
    specs: '3-pack · Arch support',
    badge: null,
    accent: '#5DA8B6',
  },
  {
    id: 'a-jacket-warm',
    name: 'Warm-Up Jacket',
    category: 'apparel',
    level: ['intermediate', 'advanced', 'pro'],
    price: 95,
    kicker: 'Layer · Warm-up',
    specs: 'Brushed inside · Zip pockets',
    badge: null,
    accent: '#14254A',
  },
];

// ─── Illustration SVGs (inline so cards render with no asset hosting) ───
function illustration(product) {
  const accent = product.accent || '#D8FF3E';
  switch (product.category) {
    case 'racquets': return racquetSvg(accent);
    case 'strings': return stringsSvg(accent);
    case 'apparel': return apparelSvg(product.id, accent);
  }
}

function racquetSvg(accent) {
  return `
  <svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <linearGradient id="g-${accent.replace('#','')}" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0" stop-color="${accent}"/>
        <stop offset="1" stop-color="#1F3357"/>
      </linearGradient>
    </defs>
    <ellipse cx="100" cy="80" rx="64" ry="76" fill="none" stroke="url(#g-${accent.replace('#','')})" stroke-width="9"/>
    <g stroke="#1F3357" stroke-width="1" opacity=".6">
      <line x1="48" y1="40" x2="48" y2="120"/>
      <line x1="68" y1="22" x2="68" y2="138"/>
      <line x1="88" y1="12" x2="88" y2="148"/>
      <line x1="100" y1="8" x2="100" y2="152"/>
      <line x1="112" y1="12" x2="112" y2="148"/>
      <line x1="132" y1="22" x2="132" y2="138"/>
      <line x1="152" y1="40" x2="152" y2="120"/>
      <line x1="40" y1="56" x2="160" y2="56"/>
      <line x1="36" y1="76" x2="164" y2="76"/>
      <line x1="34" y1="96" x2="166" y2="96"/>
      <line x1="40" y1="116" x2="160" y2="116"/>
    </g>
    <rect x="94" y="150" width="12" height="76" rx="4" fill="url(#g-${accent.replace('#','')})"/>
    <rect x="88" y="180" width="24" height="56" rx="6" fill="#1F3357"/>
  </svg>`;
}

function stringsSvg(accent) {
  return `
  <svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="100" cy="120" r="74" fill="${accent}" opacity=".18"/>
    <g transform="translate(100 120)">
      <g stroke="${accent}" stroke-width="6" stroke-linecap="round" fill="none">
        <path d="M-58 -10 Q -30 -30, 0 -10 T 58 -10"/>
        <path d="M-58 10 Q -30 -10, 0 10 T 58 10"/>
        <path d="M-58 30 Q -30 10, 0 30 T 58 30"/>
        <path d="M-58 -30 Q -30 -50, 0 -30 T 58 -30"/>
      </g>
      <circle r="62" fill="none" stroke="#1F3357" stroke-width="5"/>
      <text y="60" text-anchor="middle" fill="#1F3357" font-family="Inter, sans-serif" font-weight="700" font-size="13">12m · 1 set</text>
    </g>
  </svg>`;
}

function apparelSvg(id, accent) {
  if (id.includes('cap')) {
    return `
    <svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M40 150 Q100 70 160 150 Z" fill="${accent}"/>
      <path d="M40 150 Q100 70 160 150" fill="none" stroke="#1F3357" stroke-width="3"/>
      <ellipse cx="100" cy="156" rx="86" ry="14" fill="#1F3357"/>
      <circle cx="100" cy="118" r="6" fill="#1F3357"/>
    </svg>`;
  }
  if (id.includes('socks')) {
    return `
    <svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g transform="translate(40 40)">
        <path d="M0 0 H50 V90 Q50 110 70 110 H110 V160 H0 Z" fill="#FFFFFF" stroke="#1F3357" stroke-width="3"/>
        <rect x="0" y="0" width="50" height="22" fill="${accent}"/>
        <line x1="0" y1="50" x2="50" y2="50" stroke="${accent}" stroke-width="3"/>
        <line x1="0" y1="70" x2="50" y2="70" stroke="${accent}" stroke-width="3"/>
      </g>
    </svg>`;
  }
  if (id.includes('shorts') || id.includes('skirt')) {
    return `
    <svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M40 50 H160 L150 200 H110 L100 110 L90 200 H50 Z" fill="${accent}" stroke="#1F3357" stroke-width="3"/>
      <rect x="40" y="50" width="120" height="14" fill="#1F3357"/>
    </svg>`;
  }
  if (id.includes('jacket')) {
    return `
    <svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M60 40 L100 60 L140 40 L168 60 L150 200 H50 L32 60 Z" fill="${accent}" stroke="#1F3357" stroke-width="3"/>
      <line x1="100" y1="60" x2="100" y2="200" stroke="#1F3357" stroke-width="3" stroke-dasharray="5 4"/>
      <path d="M60 40 L100 70 L140 40" fill="none" stroke="#1F3357" stroke-width="3"/>
    </svg>`;
  }
  if (id.includes('polo')) {
    return `
    <svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M60 50 L40 80 L60 100 V200 H140 V100 L160 80 L140 50 L120 70 Q100 80 80 70 Z" fill="${accent}" stroke="#1F3357" stroke-width="3"/>
      <path d="M85 55 L100 70 L115 55" fill="#FFFFFF" stroke="#1F3357" stroke-width="3"/>
      <line x1="100" y1="70" x2="100" y2="100" stroke="#1F3357" stroke-width="3"/>
    </svg>`;
  }
  // tee
  return `
  <svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M60 50 L40 80 L60 100 V200 H140 V100 L160 80 L140 50 L120 70 Q100 78 80 70 Z" fill="${accent}" stroke="#1F3357" stroke-width="3"/>
    <path d="M82 52 Q100 70 118 52" fill="none" stroke="#1F3357" stroke-width="3"/>
  </svg>`;
}

// ─── State ───
const state = {
  category: 'all',
  level: 'all',
  sort: 'featured',
  cart: loadCart(),
  faves: new Set(loadFaves()),
};

function loadCart() {
  try { return JSON.parse(localStorage.getItem('tennisline:cart') || '[]'); }
  catch { return []; }
}
function saveCart() {
  localStorage.setItem('tennisline:cart', JSON.stringify(state.cart));
}
function loadFaves() {
  try { return JSON.parse(localStorage.getItem('tennisline:faves') || '[]'); }
  catch { return []; }
}
function saveFaves() {
  localStorage.setItem('tennisline:faves', JSON.stringify([...state.faves]));
}

// ─── Render ───
const grid = document.getElementById('grid');
const empty = document.getElementById('empty');

function filtered() {
  let list = PRODUCTS.slice();
  if (state.category !== 'all') list = list.filter(p => p.category === state.category);
  if (state.level !== 'all') list = list.filter(p => p.level.includes(state.level));
  switch (state.sort) {
    case 'price-asc': list.sort((a, b) => a.price - b.price); break;
    case 'price-desc': list.sort((a, b) => b.price - a.price); break;
    case 'name': list.sort((a, b) => a.name.localeCompare(b.name)); break;
  }
  return list;
}

function fmt(n) {
  return '$' + n.toLocaleString('en-US');
}

function cardHTML(p) {
  const isFave = state.faves.has(p.id);
  const inCart = state.cart.find(c => c.id === p.id);
  const badge = p.badge
    ? `<span class="badge ${p.badge.kind === 'ball' ? 'ball' : ''}">${p.badge.text}</span>`
    : '';
  const strike = p.was ? `<span class="strike">${fmt(p.was)}</span>` : '';
  return `
    <article class="card" data-id="${p.id}">
      <div class="thumb">
        ${badge}
        <button class="heart ${isFave ? 'active' : ''}" data-fave="${p.id}" aria-label="Save ${p.name}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.5-1.4 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.1 3 5.5l7 7Z"/></svg>
        </button>
        ${illustration(p)}
      </div>
      <div class="card-body">
        <span class="kicker">${p.kicker}</span>
        <h3>${p.name}</h3>
        <span class="specs">${p.specs}</span>
        <div class="card-foot">
          <span class="price">${strike}${fmt(p.price)}</span>
          <button class="add ${inCart ? 'added' : ''}" data-add="${p.id}">
            ${inCart ? 'Added' : 'Add'}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>
          </button>
        </div>
      </div>
    </article>
  `;
}

function render() {
  const list = filtered();
  if (list.length === 0) {
    grid.innerHTML = '';
    empty.hidden = false;
  } else {
    empty.hidden = true;
    grid.innerHTML = list.map(cardHTML).join('');
  }
  renderCart();
}

// ─── Cart ───
const cartPanel = document.getElementById('cartPanel');
const cartBody = document.getElementById('cartBody');
const cartTotal = document.getElementById('cartTotal');
const cartCountEl = document.getElementById('cartCount');
const checkoutBtn = document.getElementById('checkoutBtn');
const scrim = document.getElementById('scrim');

function findProduct(id) { return PRODUCTS.find(p => p.id === id); }

function renderCart() {
  const items = state.cart;
  const count = items.reduce((n, i) => n + i.qty, 0);
  cartCountEl.textContent = count;
  cartCountEl.style.display = count ? 'inline-flex' : 'none';

  if (items.length === 0) {
    cartBody.innerHTML = `
      <div class="cart-empty">
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
        <p>Your bag is empty.<br/>Time to gear up.</p>
      </div>`;
  } else {
    cartBody.innerHTML = items.map(i => {
      const p = findProduct(i.id);
      if (!p) return '';
      return `
      <div class="cart-item" data-id="${p.id}">
        <div class="thumb-mini">${illustration(p)}</div>
        <div>
          <h4>${p.name}</h4>
          <div class="meta">${p.specs}</div>
          <div class="qty">
            <button data-qty="-" aria-label="Decrease quantity">−</button>
            <span>${i.qty}</span>
            <button data-qty="+" aria-label="Increase quantity">+</button>
          </div>
        </div>
        <div class="right">
          <div class="price-mini">${fmt(p.price * i.qty)}</div>
          <button class="remove" data-remove>Remove</button>
        </div>
      </div>`;
    }).join('');
  }
  const subtotal = items.reduce((sum, i) => {
    const p = findProduct(i.id);
    return p ? sum + p.price * i.qty : sum;
  }, 0);
  cartTotal.textContent = fmt(subtotal);
  checkoutBtn.disabled = items.length === 0;
}

function addToCart(id) {
  const existing = state.cart.find(c => c.id === id);
  if (existing) existing.qty += 1;
  else state.cart.push({ id, qty: 1 });
  saveCart();
  renderCart();
  const card = grid.querySelector(`[data-add="${id}"]`);
  if (card) {
    card.classList.add('added');
    card.firstChild && (card.innerHTML = `Added <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`);
    setTimeout(() => render(), 1200);
  }
  toast(`${findProduct(id).name} added to bag`);
}

function changeQty(id, delta) {
  const item = state.cart.find(c => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) state.cart = state.cart.filter(c => c.id !== id);
  saveCart();
  renderCart();
  render();
}

function removeFromCart(id) {
  state.cart = state.cart.filter(c => c.id !== id);
  saveCart();
  renderCart();
  render();
}

function openCart() {
  cartPanel.classList.add('open');
  scrim.classList.add('show');
  cartPanel.setAttribute('aria-hidden', 'false');
}
function closeCart() {
  cartPanel.classList.remove('open');
  scrim.classList.remove('show');
  cartPanel.setAttribute('aria-hidden', 'true');
}

// ─── Toast ───
let toastTimer;
function toast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 1800);
}

// ─── Wire up ───
document.querySelectorAll('.tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(b => b.setAttribute('aria-pressed', 'false'));
    btn.setAttribute('aria-pressed', 'true');
    state.category = btn.dataset.cat;
    render();
  });
});

document.querySelectorAll('.level').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.level').forEach(b => b.setAttribute('aria-pressed', 'false'));
    btn.setAttribute('aria-pressed', 'true');
    state.level = btn.dataset.level;
    render();
  });
});

document.getElementById('sortSelect').addEventListener('change', e => {
  state.sort = e.target.value;
  render();
});

// Smooth-scroll the category anchor links to scroll back to the shop
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const targetId = a.getAttribute('href').slice(1);
    if (!targetId) return;
    // map category anchors to the shop section with filter
    if (['racquets', 'strings', 'apparel'].includes(targetId)) {
      e.preventDefault();
      const tab = document.querySelector(`.tab[data-cat="${targetId}"]`);
      tab && tab.click();
      document.getElementById('shop').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Delegate clicks inside grid
grid.addEventListener('click', e => {
  const addBtn = e.target.closest('[data-add]');
  if (addBtn) {
    addToCart(addBtn.dataset.add);
    return;
  }
  const fave = e.target.closest('[data-fave]');
  if (fave) {
    const id = fave.dataset.fave;
    if (state.faves.has(id)) state.faves.delete(id);
    else state.faves.add(id);
    saveFaves();
    fave.classList.toggle('active');
    return;
  }
});

// Delegate clicks inside cart
cartBody.addEventListener('click', e => {
  const item = e.target.closest('.cart-item');
  if (!item) return;
  const id = item.dataset.id;
  if (e.target.matches('[data-qty]')) {
    const dir = e.target.dataset.qty === '+' ? 1 : -1;
    changeQty(id, dir);
  } else if (e.target.matches('[data-remove]')) {
    removeFromCart(id);
  }
});

document.getElementById('cartToggle').addEventListener('click', openCart);
document.getElementById('cartClose').addEventListener('click', closeCart);
scrim.addEventListener('click', closeCart);

checkoutBtn.addEventListener('click', () => {
  toast('This is a demo — checkout coming soon.');
});

document.getElementById('newsForm').addEventListener('submit', e => {
  e.preventDefault();
  const note = document.getElementById('newsNote');
  note.textContent = 'You\'re in. Watch your inbox for first dibs on drops.';
  e.target.reset();
});

document.getElementById('searchToggle').addEventListener('click', () => {
  const q = prompt('Search Tennis Line:');
  if (!q) return;
  const hit = PRODUCTS.find(p => (p.name + ' ' + p.kicker).toLowerCase().includes(q.toLowerCase()));
  if (hit) {
    state.category = hit.category;
    document.querySelectorAll('.tab').forEach(b => b.setAttribute('aria-pressed', b.dataset.cat === hit.category ? 'true' : 'false'));
    render();
    document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
    toast(`Showing ${hit.category}`);
  } else {
    toast('No matches yet — try racquet, string or polo.');
  }
});

// ─── Racquet finder chatbot ───
const chatbotToggleEl = document.getElementById('chatbotToggle');
const chatbotPanelEl = document.getElementById('chatbotPanel');
const chatbotCloseEl = document.getElementById('chatbotClose');
const chatbotBodyEl = document.getElementById('chatbotBody');

let chatAnswers = {};
let chatStarted = false;

const CHAT_STEPS = [
  {
    field: 'level',
    question: "Hey! I'll find your racquet in 3 quick questions. What is your level?",
    options: [
      { label: 'Beginner', value: 'beginner' },
      { label: 'Intermediate', value: 'intermediate' },
      { label: 'Advanced', value: 'advanced' },
      { label: 'Pro', value: 'pro' },
    ],
  },
  {
    field: 'style',
    question: "Nice. What is your style of play?",
    options: [
      { label: 'Aggressive baseliner', value: 'baseliner' },
      { label: 'All-court player', value: 'all-court' },
      { label: 'Counter-puncher', value: 'counter' },
      { label: 'Serve & volley', value: 'serve-volley' },
    ],
  },
  {
    field: 'focus',
    question: "Last one — what's your main focus: Power, Control or Comfort?",
    options: [
      { label: 'Power', value: 'power' },
      { label: 'Control', value: 'control' },
      { label: 'Comfort', value: 'comfort' },
    ],
  },
];

function chatBotMsg(text) {
  const el = document.createElement('div');
  el.className = 'msg bot';
  el.textContent = text;
  chatbotBodyEl.appendChild(el);
  chatbotBodyEl.scrollTop = chatbotBodyEl.scrollHeight;
}
function chatUserMsg(text) {
  const el = document.createElement('div');
  el.className = 'msg user';
  el.textContent = text;
  chatbotBodyEl.appendChild(el);
  chatbotBodyEl.scrollTop = chatbotBodyEl.scrollHeight;
}
function chatChips(options, onPick) {
  const wrap = document.createElement('div');
  wrap.className = 'chips';
  options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'chip';
    btn.type = 'button';
    btn.textContent = opt.label;
    btn.addEventListener('click', () => {
      wrap.querySelectorAll('.chip').forEach(c => c.disabled = true);
      onPick(opt);
    });
    wrap.appendChild(btn);
  });
  chatbotBodyEl.appendChild(wrap);
  chatbotBodyEl.scrollTop = chatbotBodyEl.scrollHeight;
}

function askChatStep(idx) {
  const step = CHAT_STEPS[idx];
  setTimeout(() => {
    chatBotMsg(step.question);
    setTimeout(() => {
      chatChips(step.options, opt => {
        chatUserMsg(opt.label);
        chatAnswers[step.field] = opt.value;
        if (idx + 1 < CHAT_STEPS.length) askChatStep(idx + 1);
        else finishChat();
      });
    }, 280);
  }, 340);
}

function recommendRacquet(a) {
  const levels = ['beginner', 'intermediate', 'advanced', 'pro'];
  let pool = PRODUCTS.filter(p => p.category === 'racquets' && p.id !== 'r-junior-26');
  pool = pool.map(r => {
    let score = 0;
    const k = r.kicker.toLowerCase();
    if (r.level.includes(a.level)) score += 4;
    else {
      const userIdx = levels.indexOf(a.level);
      const closest = Math.min(...r.level.map(l => Math.abs(levels.indexOf(l) - userIdx)));
      if (closest === 1) score += 1;
    }
    if (a.focus === 'power' && k.includes('power')) score += 4;
    if (a.focus === 'power' && (k.includes('spin') || k.includes('all-court'))) score += 2;
    if (a.focus === 'control' && (k.includes('control') || k.includes('tour'))) score += 4;
    if (a.focus === 'control' && k.includes('spin')) score += 1;
    if (a.focus === 'comfort' && k.includes('all-court')) score += 3;
    if (a.focus === 'comfort' && k.includes('power')) score += 2;
    if (a.style === 'baseliner' && k.includes('spin')) score += 3;
    if (a.style === 'baseliner' && k.includes('power')) score += 2;
    if (a.style === 'all-court' && k.includes('all-court')) score += 4;
    if (a.style === 'counter' && k.includes('control')) score += 3;
    if (a.style === 'counter' && k.includes('tour')) score += 2;
    if (a.style === 'serve-volley' && k.includes('tour')) score += 4;
    if (a.style === 'serve-volley' && k.includes('control')) score += 2;
    return { product: r, score };
  });
  pool.sort((x, y) => y.score - x.score);
  return pool[0].product;
}

function finishChat() {
  setTimeout(() => {
    const rec = recommendRacquet(chatAnswers);
    chatBotMsg(`Based on that, I'd put the ${rec.name} in your hands.`);
    setTimeout(() => {
      const card = document.createElement('div');
      card.className = 'chatbot-rec';
      card.innerHTML = `
        <div class="rec-art">${illustration(rec)}</div>
        <div class="rec-content">
          <h4>${rec.name}</h4>
          <div class="rec-meta">${rec.kicker}</div>
          <div class="rec-meta">${rec.specs}</div>
          <div class="rec-price">${fmt(rec.price)}</div>
          <div class="rec-actions">
            <button class="add-rec" type="button">Add to bag</button>
            <button class="restart-rec" type="button">Start over</button>
          </div>
        </div>
      `;
      chatbotBodyEl.appendChild(card);
      chatbotBodyEl.scrollTop = chatbotBodyEl.scrollHeight;
      card.querySelector('.add-rec').addEventListener('click', () => {
        addToCart(rec.id);
        openCart();
      });
      card.querySelector('.restart-rec').addEventListener('click', () => {
        chatAnswers = {};
        chatbotBodyEl.innerHTML = '';
        askChatStep(0);
      });
    }, 500);
  }, 450);
}

if (chatbotToggleEl) {
  chatbotToggleEl.addEventListener('click', () => {
    const isOpen = chatbotPanelEl.classList.toggle('open');
    chatbotPanelEl.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
    chatbotToggleEl.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    if (isOpen && !chatStarted) {
      chatStarted = true;
      askChatStep(0);
    }
  });
  chatbotCloseEl.addEventListener('click', () => {
    chatbotPanelEl.classList.remove('open');
    chatbotPanelEl.setAttribute('aria-hidden', 'true');
    chatbotToggleEl.setAttribute('aria-expanded', 'false');
  });
}

document.querySelectorAll('[data-service]').forEach(btn => {
  btn.addEventListener('click', () => {
    const messages = {
      stringing: 'Stringing — drop your racquet at the shop or post it in. We\'ll confirm by email.',
      court: 'Court hire — our booker opens 7am daily, slots up to 14 days out.',
      coaching: 'Coaching — a pro will reach out with available times.',
    };
    toast(messages[btn.dataset.service] || 'Thanks — we\'ll be in touch.');
  });
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeCart();
});

document.getElementById('year').textContent = new Date().getFullYear();

// ─── Live products from Supabase ───
// The hardcoded PRODUCTS array above acts as a fallback if Supabase
// is unreachable; loadProducts() overwrites it on a successful fetch.
function adaptProduct(row) {
  const p = {
    id: row.id,
    name: row.name,
    category: row.category,
    level: row.levels || [],
    price: (row.price_cents ?? 0) / 100,
    kicker: row.kicker,
    specs: row.specs,
    badge: row.badge_text ? { text: row.badge_text, kind: row.badge_kind || 'court' } : null,
    accent: row.accent || '#1F3357',
  };
  if (row.was_cents != null) p.was = row.was_cents / 100;
  return p;
}

async function loadProducts() {
  if (typeof sb === 'undefined') return;          // graceful if config.js not loaded
  try {
    const { data, error } = await sb
      .from('products')
      .select('*')
      .eq('in_stock', true)
      .order('sort_order');
    if (error) { console.warn('Supabase product fetch failed, using fallback:', error.message); return; }
    if (Array.isArray(data) && data.length > 0) PRODUCTS = data.map(adaptProduct);
  } catch (e) {
    console.warn('Supabase unavailable, using fallback products:', e);
  }
}

loadProducts().then(render);

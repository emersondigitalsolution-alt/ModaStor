/* ============ DICTIONNAIRE DE TRADUCTION ============ */
const TRANSLATIONS = {
    fr: {
        nav_home: "Accueil", nav_shop: "Boutique", nav_new: "Nouveautés", nav_best: "Meilleures ventes",
        nav_contact: "Contactez-nous", nav_settings: "Paramètres", nav_faq: "FAQ", nav_shipping: "Livraison & Retours",
        hero_title: "Sublimez votre style.", hero_sub: "Découvrez notre nouvelle collection de vêtements et accessoires tendance.",
        btn_explore: "Explorer la collection", best_sellers: "Nos best-sellers", search: "Rechercher...",
        cat_all: "Tout", btn_add: "Ajouter", promo: "Promo",
        cart_title: "Votre Panier", cart_empty: "Votre panier est vide.", cart_subtotal: "Sous-total",
        cart_taxes: "Taxes et frais de livraison calculés à la commande.", cart_checkout: "Passer à la caisse",
        checkout_title: "Finaliser la commande", checkout_info: "1. Coordonnées", checkout_name: "Nom complet",
        checkout_email: "Email", checkout_address: "Adresse", checkout_payment: "2. Paiement",
        checkout_pay: "Vérifier et Payer", checkout_nat_inst: "Envoyez le montant au numéro NatCash ci-dessous. Collez le TransCode.",
        checkout_mon_inst: "Envoyez le montant au numéro MonCash ci-dessous. Collez le TransCode.",
        txn_nat: "TransCode NatCash", txn_mon: "TransCode MonCash",
        settings_title: "Paramètres", settings_sub: "Gérez vos préférences d'affichage.", settings_app: "Apparence",
        settings_dark: "Mode Sombre", settings_dark_sub: "Réduit la fatigue visuelle.", settings_acc: "Compte",
        settings_not_logged: "Vous n'êtes pas connecté.", settings_login: "Se connecter / S'inscrire",
        contact_title: "Contactez-nous", contact_sub: "Une question sur une taille ? Écrivez-nous sur WhatsApp.",
        contact_email: "Votre Email", contact_msg: "Votre Message", contact_send: "Envoyer le message",
        contact_success: "Message envoyé !",
        toast_added: "Article ajouté au panier",
        footer_desc: "Votre destination pour la mode et les vêtements tendance.",
        footer_secure: "Paiement 100% sécurisé", footer_shop: "Boutique", footer_all_products: "Tous les produits",
        footer_new: "Nouveautés", footer_best: "Meilleures ventes", footer_support: "Support",
        footer_contact: "Contactez-nous", footer_shipping: "Livraison & Retours", footer_legal: "Légal",
        footer_terms: "Conditions Générales", footer_privacy: "Politique de confidentialité",
        footer_rights: "Tous droits réservés.", footer_payment: "Paiement via NatCash et MonCash.",
        footer_credit: "Conçu par",
        cat_men: "Hommes", cat_women: "Femmes", cat_shoes: "Chaussures", cat_accessories: "Accessoires", cat_kids: "Enfants"
    },
    ht: {
        nav_home: "Akèy", nav_shop: "Magazen", nav_new: "Nouvo", nav_best: "Pi bon vant",
        nav_contact: "Kontakte nou", nav_settings: "Paramèt", nav_faq: "FAQ", nav_shipping: "Livrezon & Retou",
        hero_title: "Fè stil ou briye.", hero_sub: "Dekouvri nouvo koleksyon rad ak akseswa alamòd nou yo.",
        btn_explore: "Eksplore koleksyon an", best_sellers: "Pi bon vant nou yo", search: "Chèche...",
        cat_all: "Tout", btn_add: "Ajoute", promo: "Promo",
        cart_title: "Panye w", cart_empty: "Panye w vid.", cart_subtotal: "Sou-total",
        cart_taxes: "Taks ak frè livrezon ap kalkile lè w fini.", cart_checkout: "Ale nan kesye",
        checkout_title: "Finalize kòmand ou", checkout_info: "1. Enfòmasyon", checkout_name: "Non konplè",
        checkout_email: "Imèl", checkout_address: "Adrès", checkout_payment: "2. Peman",
        checkout_pay: "Verifye epi Peye", checkout_nat_inst: "Voye montan an nan nimewo NatCash ki anba a. Kole TransCode a.",
        checkout_mon_inst: "Voye montan an nan nimewo MonCash ki anba a. Kole TransCode a.",
        txn_nat: "TransCode NatCash", txn_mon: "TransCode MonCash",
        settings_title: "Paramèt", settings_sub: "Jere preferans afichaj ou.", settings_app: "Aparans",
        settings_dark: "Mòd Nwa", settings_dark_sub: "Diminye fatig vizyèl.", settings_acc: "Kont",
        settings_not_logged: "Ou pa konekte.", settings_login: "Konekte / Enskri",
        contact_title: "Kontakte nou", contact_sub: "Yon kesyon sou yon gwosè? Ekri nou sou WhatsApp.",
        contact_email: "Imèl ou", contact_msg: "Mesaj ou", contact_send: "Voye mesaj la",
        contact_success: "Mesaj voye!",
        toast_added: "Atik ajoute nan panye a",
        footer_desc: "Destinasyon ou pou mòd ak rad alamòd.",
        footer_secure: "Peman 100% sekirize", footer_shop: "Magazen", footer_all_products: "Tout pwodwi yo",
        footer_new: "Nouvo", footer_best: "Pi bon vant", footer_support: "Sipò",
        footer_contact: "Kontakte nou", footer_shipping: "Livrezon & Retou", footer_legal: "Legal",
        footer_terms: "Kondisyon Jeneral", footer_privacy: "Politik konfidansyalite",
        footer_rights: "Tout dwa rezève.", footer_payment: "Peman via NatCash ak MonCash.",
        footer_credit: "Kreye pa",
        cat_men: "Gason", cat_women: "Fi", cat_shoes: "Soulye", cat_accessories: "Akseswa", cat_kids: "Timoun"
    }
};

let currentLang = localStorage.getItem('moda_lang') || 'fr';

function t(key) {
    return TRANSLATIONS[currentLang][key] || key;
}

/* ============ FORMATAGE DU PRIX EN HTG ============ */
const formatPrice = (n) => new Intl.NumberFormat('fr-HT', { 
    style: 'currency', 
    currency: 'HTG', 
    maximumFractionDigits: 0 
}).format(n);

/* ============ CONFIGURATION & DONNÉES ============ */
const PRODUCTS = [
    { id: 1, name: "T-Shirt Blanc Coton", category: "men", price: 1500, oldPrice: 2000, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop", isNew: false, isBest: true },
    { id: 2, name: "Robe d'Été Fleurie", category: "women", price: 3500, oldPrice: null, image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1000&auto=format&fit=crop", isNew: true, isBest: true },
    { id: 3, name: "Sneakers Urban White", category: "shoes", price: 6500, oldPrice: 8000, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop", isNew: false, isBest: true },
    { id: 4, name: "Jean Slim Homme", category: "men", price: 4500, oldPrice: null, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1000&auto=format&fit=crop", isNew: false, isBest: false },
    { id: 5, name: "Sac à Main Cuir", category: "accessories", price: 5500, oldPrice: 7000, image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=1000&auto=format&fit=crop", isNew: true, isBest: true },
    { id: 6, name: "Veste en Jean Femme", category: "women", price: 5000, oldPrice: null, image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=1000&auto=format&fit=crop", isNew: false, isBest: false },
    { id: 7, name: "Montre Classique Argent", category: "accessories", price: 8500, oldPrice: 10000, image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1000&auto=format&fit=crop", isNew: false, isBest: false },
    { id: 8, name: "Robe de Soirée Noire", category: "women", price: 7500, oldPrice: null, image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1000&auto=format&fit=crop", isNew: true, isBest: true },
    { id: 9, name: "Chemise Oxford Bleue", category: "men", price: 3000, oldPrice: null, image: "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?q=80&w=1000&auto=format&fit=crop", isNew: false, isBest: false },
    { id: 10, name: "Bottines en Cuir", category: "shoes", price: 8000, oldPrice: 9500, image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=1000&auto=format&fit=crop", isNew: false, isBest: false },
    { id: 11, name: "Lunettes de Soleil Aviateur", category: "accessories", price: 2500, oldPrice: null, image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1000&auto=format&fit=crop", isNew: true, isBest: false },
    { id: 12, name: "Hoodie Streetwear Gris", category: "men", price: 4000, oldPrice: 5000, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000&auto=format&fit=crop", isNew: false, isBest: true },
    { id: 13, name: "Jupe Plissée Beige", category: "women", price: 2800, oldPrice: null, image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=1000&auto=format&fit=crop", isNew: true, isBest: false },
    { id: 14, name: "T-Shirt Enfant Dinosaure", category: "kids", price: 1200, oldPrice: 1500, image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?q=80&w=1000&auto=format&fit=crop", isNew: false, isBest: false },
    { id: 15, name: "Costume Homme Slim", category: "men", price: 15000, oldPrice: 18000, image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1000&auto=format&fit=crop", isNew: false, isBest: true },
    { id: 16, name: "Sandales d'Été", category: "shoes", price: 2500, oldPrice: null, image: "https://images.unsplash.com/photo-1562183241-b937e95585b6?q=80&w=1000&auto=format&fit=crop", isNew: false, isBest: false },
    { id: 17, name: "Ceinture Cuir Marron", category: "accessories", price: 1800, oldPrice: null, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1000&auto=format&fit=crop", isNew: false, isBest: false },
    { id: 18, name: "Robe Longue Bohème", category: "women", price: 4500, oldPrice: 5500, image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1000&auto=format&fit=crop", isNew: true, isBest: true },
    { id: 19, name: "Blouson en Cuir", category: "men", price: 9500, oldPrice: null, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1000&auto=format&fit=crop", isNew: false, isBest: true },
    { id: 20, name: "Baskets Running", category: "shoes", price: 5500, oldPrice: null, image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop", isNew: false, isBest: false }
];

const PAYMENT_CONFIG = {
    natcash: { phone: "509 3456 7890", owner: "ModaStore SARL" },
    moncash: { phone: "509 4567 8901", owner: "ModaStore SARL" }
};

let currentPaymentMethod = 'natcash';
let shopState = { search: '', category: 'all', filter: 'all' };

function toast(msg, type = 'success') {
    const container = document.getElementById('toast-container');
    const tEl = document.createElement('div');
    tEl.className = `toast ${type}`;
    tEl.innerHTML = `<i class="ph ph-${type === 'success' ? 'check-circle' : 'warning-circle'}"></i> ${msg}`;
    container.appendChild(tEl);
    setTimeout(() => { tEl.style.opacity = '0'; setTimeout(() => tEl.remove(), 300); }, 3000);
}

window.toggleLanguage = function() {
    currentLang = currentLang === 'fr' ? 'ht' : 'fr';
    localStorage.setItem('moda_lang', currentLang);
    document.getElementById('lang-toggle').textContent = currentLang.toUpperCase();
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = t(key);
    });
    router();
}

/* ============ PANIER ============ */
const Cart = {
    get() { return JSON.parse(localStorage.getItem('moda_cart')) || []; },
    save(items) { localStorage.setItem('moda_cart', JSON.stringify(items)); this.updateUI(); },
    add(id) {
        let items = this.get();
        const existing = items.find(i => i.id === id);
        if (existing) existing.qty += 1;
        else items.push({ id, qty: 1 });
        this.save(items);
        toast(t('toast_added'));
    },
    remove(id) { this.save(this.get().filter(i => i.id !== id)); },
    increment(id) {
        let items = this.get();
        let item = items.find(i => i.id === id);
        if (item) { item.qty += 1; this.save(items); }
    },
    decrement(id) {
        let items = this.get();
        let item = items.find(i => i.id === id);
        if (item) {
            if (item.qty > 1) { item.qty -= 1; this.save(items); }
            else { this.remove(id); }
        }
    },
    clear() { this.save([]); },
    count() { return this.get().reduce((acc, i) => acc + i.qty, 0); },
    total() { return this.get().reduce((acc, item) => { const p = PRODUCTS.find(x => x.id === item.id); return acc + (p ? p.price * item.qty : 0); }, 0); },
    updateUI() {
        document.getElementById('cart-count').textContent = this.count();
        const drawerItems = document.getElementById('cart-items');
        const items = this.get();
        
        if (items.length === 0) {
            drawerItems.innerHTML = `<div style="text-align:center; padding: 40px 0; color: var(--text-muted);"><i class="ph ph-shopping-bag" style="font-size: 3rem;"></i><p style="margin-top:10px;">${t('cart_empty')}</p></div>`;
        } else {
            drawerItems.innerHTML = items.map(item => {
                const p = PRODUCTS.find(x => x.id === item.id);
                return `
                    <div class="cart-item">
                        <img src="${p.image}" class="cart-item-img" alt="${p.name}">
                        <div class="cart-item-info" style="flex:1;">
                            <div class="cart-item-title">${p.name}</div>
                            <div class="cart-item-price">${formatPrice(p.price)}</div>
                            
                            <div class="qty-control">
                                <button class="qty-btn" onclick="Cart.decrement(${p.id})"><i class="ph ph-minus"></i></button>
                                <span class="qty-value">${item.qty}</span>
                                <button class="qty-btn" onclick="Cart.increment(${p.id})"><i class="ph ph-plus"></i></button>
                            </div>

                        </div>
                        <button class="cart-item-remove" onclick="Cart.remove(${p.id})"><i class="ph ph-trash"></i></button>
                    </div>`;
            }).join('');
        }
        document.getElementById('cart-subtotal').textContent = formatPrice(this.total());
    }
};

/* ============ VUES ============ */
function renderHome() {
    return `
        <section class="hero">
            <div class="container">
                <h1>${t('hero_title')}</h1>
                <p>${t('hero_sub')}</p>
                <a href="#/shop" class="btn btn-primary">${t('btn_explore')}</a>
            </div>
        </section>
        <section class="container">
            <h2 class="section-title" style="margin-top: 60px;">${t('best_sellers')}</h2>
            <div class="products-grid">
                ${PRODUCTS.slice(0, 8).map(renderProductCard).join('')}
            </div>
        </section>
    `;
}

function renderShop() {
    const categories = ['all', 'men', 'women', 'shoes', 'accessories', 'kids'];
    return `
        <section class="container" style="padding-top: 40px;">
            <div class="shop-header">
                <h1 class="section-title" style="margin-bottom: 0;">${t('nav_shop')}</h1>
                <div class="shop-controls">
                    <div class="search-box">
                        <input type="text" id="search-input" placeholder="${t('search')}" value="${shopState.search}">
                    </div>
                    <div class="filters" id="category-filters">
                        ${categories.map(cat => `<button class="filter-btn ${shopState.category === cat ? 'active' : ''}" onclick="setCategory('${cat}')">${t('cat_' + cat)}</button>`).join('')}
                    </div>
                </div>
            </div>
            <div class="products-grid" id="shop-grid">${renderShopGrid()}</div>
        </section>
    `;
}

function renderShopGrid() {
    let filtered = PRODUCTS;
    if (shopState.filter === 'new') filtered = filtered.filter(p => p.isNew);
    if (shopState.filter === 'best') filtered = filtered.filter(p => p.isBest);
    if (shopState.category !== 'all') filtered = filtered.filter(p => p.category === shopState.category);
    if (shopState.search) filtered = filtered.filter(p => p.name.toLowerCase().includes(shopState.search.toLowerCase()));
    if (filtered.length === 0) return `<div style="grid-column: 1/-1; text-align: center; padding: 50px; color: var(--text-muted);"><i class="ph ph-smiley-sad" style="font-size: 3rem;"></i><p>Aucun résultat / Pa gen rezilta.</p></div>`;
    return filtered.map(renderProductCard).join('');
}

function renderProductCard(p) {
    return `
        <div class="product-card">
            <div class="product-image-wrapper" onclick="location.hash='#/product/${p.id}'">
                ${p.oldPrice ? `<div class="badge-sale">${t('promo')}</div>` : ''}
                <img src="${p.image}" alt="${p.name}" class="product-image" loading="lazy">
            </div>
            <div class="product-info">
                <div class="product-category">${t('cat_' + p.category)}</div>
                <h3 class="product-title" onclick="location.hash='#/product/${p.id}'">${p.name}</h3>
                <div class="product-price-row">
                    <span class="product-price">${formatPrice(p.price)}</span>
                    ${p.oldPrice ? `<span class="product-old-price">${formatPrice(p.oldPrice)}</span>` : ''}
                </div>
                <button class="add-to-cart-btn" onclick="Cart.add(${p.id})">${t('btn_add')}</button>
            </div>
        </div>
    `;
}

function renderProduct(id) {
    const p = PRODUCTS.find(x => x.id == id);
    if (!p) return `<div class="content-page"><h1>Introuvable / Pa jwenn</h1><a href="#/shop" class="btn btn-primary">Retour</a></div>`;
    return `
        <section class="container">
            <div class="product-detail-grid">
                <img src="${p.image}" alt="${p.name}" style="width: 100%; aspect-ratio: 3/4; object-fit: cover; border-radius: var(--radius);">
                <div>
                    <div class="product-category">${t('cat_' + p.category)}</div>
                    <h1 style="font-size: 2.5rem; margin: 10px 0 20px;">${p.name}</h1>
                    <div style="font-size: 1.5rem; font-weight: 500; margin-bottom: 30px;">
                        ${formatPrice(p.price)}
                        ${p.oldPrice ? `<span style="font-size:1rem; color: var(--text-muted); text-decoration: line-through; margin-left: 10px;">${formatPrice(p.oldPrice)}</span>` : ''}
                    </div>
                    <p style="color: var(--text-muted); margin-bottom: 40px; font-size: 1rem; line-height: 1.8;">Une pièce intemporelle conçue avec des matériaux de haute qualité pour un confort optimal et une allure élégante en toute occasion.</p>
                    <button class="btn btn-primary btn-block" onclick="Cart.add(${p.id})" style="padding: 18px; font-size: 1.1rem;">${t('btn_add')}</button>
                </div>
            </div>
        </section>
    `;
}

function renderCheckout() {
    if (Cart.count() === 0) { location.hash = '#/'; return; }
    return `
        <div class="checkout-container">
            <h1>${t('checkout_title')}</h1>
            <form id="checkout-form">
                <h2 style="font-size: 1.2rem; margin-bottom: 20px; font-family: var(--font-body); text-transform: uppercase; letter-spacing: 1px;">${t('checkout_info')}</h2>
                <div class="form-row">
                    <div class="form-group"><label>${t('checkout_name')}</label><input type="text" id="cust-name" required></div>
                    <div class="form-group"><label>${t('checkout_email')}</label><input type="email" id="cust-email" required></div>
                </div>
                <div class="form-group"><label>${t('checkout_address')}</label><input type="text" id="cust-address" required></div>

                <h2 style="font-size: 1.2rem; margin: 40px 0 20px; font-family: var(--font-body); text-transform: uppercase; letter-spacing: 1px;">${t('checkout_payment')}</h2>
                <div class="payment-methods">
                    <div class="payment-method active" onclick="setPaymentMethod('natcash')" id="pm-natcash">
                        <i class="ph ph-device-mobile" style="color: #f59e0b; font-size: 2rem;"></i> <span style="margin-top:10px; font-size:1rem;">NatCash</span>
                    </div>
                    <div class="payment-method" onclick="setPaymentMethod('moncash')" id="pm-moncash">
                        <i class="ph ph-device-mobile" style="color: #ef4444; font-size: 2rem;"></i> <span style="margin-top:10px; font-size:1rem;">MonCash</span>
                    </div>
                </div>

                <div class="payment-box active" id="box-natcash">
                    <div style="background: var(--bg-alt); padding: 20px; border-radius: var(--radius); margin-bottom: 20px;">
                        <p style="font-weight: 500; margin-bottom: 10px; color: #f59e0b;">NatCash :</p>
                        <p style="font-size: 0.9rem; color: var(--text-muted); font-weight: 300;">${t('checkout_nat_inst')} <strong style="color:var(--text); font-weight:500;">${PAYMENT_CONFIG.natcash.phone}</strong>.</p>
                    </div>
                    <div class="form-group"><label>${t('txn_nat')}</label><input type="text" id="txn-natcash" required></div>
                </div>

                <div class="payment-box" id="box-moncash">
                    <div style="background: var(--bg-alt); padding: 20px; border-radius: var(--radius); margin-bottom: 20px;">
                        <p style="font-weight: 500; margin-bottom: 10px; color: #ef4444;">MonCash :</p>
                        <p style="font-size: 0.9rem; color: var(--text-muted); font-weight: 300;">${t('checkout_mon_inst')} <strong style="color:var(--text); font-weight:500;">${PAYMENT_CONFIG.moncash.phone}</strong>.</p>
                    </div>
                    <div class="form-group"><label>${t('txn_mon')}</label><input type="text" id="txn-moncash"></div>
                </div>

                <button type="submit" class="btn btn-primary btn-block" id="pay-btn" style="padding: 20px; font-size: 1rem; margin-top: 30px;">${t('checkout_pay')}</button>
            </form>
        </div>
    `;
}

function renderSettings() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    return `
        <section class="content-page">
            <h1><i class="ph ph-gear"></i> ${t('settings_title')}</h1>
            <p style="text-align:center; margin-bottom:40px;">${t('settings_sub')}</p>
            
            <div style="margin-top: 30px; border: 1px solid var(--border); border-radius: var(--radius); padding: 30px;">
                <h2 style="margin-top: 0; font-size: 1.2rem; margin-bottom: 20px; font-family: var(--font-body); text-transform: uppercase; letter-spacing: 1px;">${t('settings_app')}</h2>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <strong style="display: block; font-size: 1rem; font-weight: 500;">${t('settings_dark')}</strong>
                        <span style="font-size: 0.85rem; color: var(--text-muted); font-weight:300;">${t('settings_dark_sub')}</span>
                    </div>
                    <button onclick="toggleThemeFromSettings()" style="width: 50px; height: 28px; border-radius: 20px; background: ${isDark ? 'var(--text)' : 'var(--border)'}; position: relative; transition: 0.3s;">
                        <div style="width: 22px; height: 22px; border-radius: 50%; background: ${isDark ? 'var(--bg)' : '#fff'}; position: absolute; top: 3px; left: ${isDark ? '25px' : '3px'}; transition: 0.3s; box-shadow: 0 2px 4px rgba(0,0,0,0.2);"></div>
                    </button>
                </div>
            </div>

            <div style="margin-top: 20px; border: 1px solid var(--border); border-radius: var(--radius); padding: 30px;">
                <h2 style="margin-top: 0; font-size: 1.2rem; margin-bottom: 20px; font-family: var(--font-body); text-transform: uppercase; letter-spacing: 1px;">${t('settings_acc')}</h2>
                <p style="font-size: 0.9rem; margin-bottom: 20px; font-weight:300;">${t('settings_not_logged')}</p>
                <button class="btn btn-primary btn-block" style="font-size: 0.9rem;">${t('settings_login')}</button>
            </div>
        </section>
    `;
}

/* ============ PAGES STATIQUES ============ */
function renderContact() { 
    return `
        <section class="content-page">
            <h1>${t('contact_title')}</h1>
            <p style="text-align:center; margin-bottom:40px;">${t('contact_sub')}</p>
            <form onsubmit="sendToWhatsApp(event)">
                <div class="form-group">
                    <label>${t('contact_email')}</label>
                    <input type="email" id="contact-email" required placeholder="votre@email.com">
                </div>
                <div class="form-group">
                    <label>${t('contact_msg')}</label>
                    <textarea id="contact-message" rows="5" required></textarea>
                </div>
                <button type="submit" class="btn btn-primary btn-block" style="margin-top:20px;">${t('contact_send')}</button>
            </form>
        </section>
    `; 
}

window.sendToWhatsApp = function(event) {
    event.preventDefault();
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;
    const phone = "50943521045"; 
    const text = encodeURIComponent(`Bonjour ModaStore,\n\n📧 Email : ${email}\n💬 Message : ${message}`);
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
    event.target.reset();
    toast(t('contact_success'));
}

function renderFAQ() { return `<section class="content-page"><h1>FAQ</h1><p>...</p></section>`; }
function renderShipping() { return `<section class="content-page"><h1>${t('nav_shipping')}</h1><p>...</p></section>`; }
function renderTerms() { return `<section class="content-page"><h1>${t('footer_terms')}</h1><p>...</p></section>`; }
function renderPrivacy() { return `<section class="content-page"><h1>${t('footer_privacy')}</h1><p>...</p></section>`; }

/* ============ ROUTEUR ============ */
function router() {
    let hash = location.hash.slice(1) || '/';
    const app = document.getElementById('app');
    window.scrollTo(0, 0);

    shopState.filter = 'all';

    if (hash === '/') app.innerHTML = renderHome();
    else if (hash === '/shop') { app.innerHTML = renderShop(); setupShopListeners(); }
    else if (hash === '/shop/new') { shopState.filter = 'new'; app.innerHTML = renderShop(); setupShopListeners(); }
    else if (hash === '/shop/best') { shopState.filter = 'best'; app.innerHTML = renderShop(); setupShopListeners(); }
    else if (hash.startsWith('/product/')) app.innerHTML = renderProduct(hash.split('/')[2]);
    else if (hash === '/checkout') { app.innerHTML = renderCheckout(); }
    else if (hash === '/settings') app.innerHTML = renderSettings();
    else if (hash === '/contact') app.innerHTML = renderContact();
    else if (hash === '/faq') app.innerHTML = renderFAQ();
    else if (hash === '/shipping') app.innerHTML = renderShipping();
    else if (hash === '/terms') app.innerHTML = renderTerms();
    else if (hash === '/privacy') app.innerHTML = renderPrivacy();
    else app.innerHTML = `<div class="content-page"><h1>404</h1><a href="#/" class="btn btn-primary">Accueil</a></div>`;

    document.querySelectorAll('.nav-link, .mobile-link').forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + hash);
    });
}

/* ============ LOGIQUE BOUTIQUE ============ */
function setupShopListeners() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            shopState.search = e.target.value;
            document.getElementById('shop-grid').innerHTML = renderShopGrid();
        });
    }
}
function setCategory(cat) {
    shopState.category = cat;
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    document.getElementById('shop-grid').innerHTML = renderShopGrid();
}

/* ============ PAIEMENT & PARAMÈTRES ============ */
function setPaymentMethod(method) {
    currentPaymentMethod = method;
    document.querySelectorAll('.payment-method').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.payment-box').forEach(el => el.classList.remove('active'));
    document.getElementById(`pm-${method}`).classList.add('active');
    document.getElementById(`box-${method}`).classList.add('active');
}

window.toggleThemeFromSettings = function() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
    document.querySelector('#theme-toggle i').className = isDark ? 'ph ph-moon' : 'ph ph-sun';
    document.getElementById('app').innerHTML = renderSettings();
}

document.addEventListener('submit', async (e) => {
    if (e.target.id === 'checkout-form') {
        e.preventDefault();
        const btn = document.getElementById('pay-btn');
        btn.disabled = true;
        btn.innerHTML = '<i class="ph ph-spinner-gap" style="animation: spin 1s linear infinite;"></i> Traitement...';

        try {
            await new Promise(r => setTimeout(r, 1500)); 
            Cart.clear();
            document.getElementById('app').innerHTML = `
                <div class="content-page" style="text-align: center; padding-top: 50px;">
                    <div style="width: 80px; height: 80px; background: var(--text); color: var(--bg); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 3rem; margin: 0 auto 20px;"><i class="ph ph-check"></i></div>
                    <h1 style="font-style:italic;">${currentLang === 'fr' ? 'Merci pour votre commande !' : 'Mèsi pou kòmand ou !'}</h1>
                    <p>${currentLang === 'fr' ? 'Votre paiement a bien été vérifié.' : 'Peman w verifye byen.'}</p>
                    <a href="#/" class="btn btn-primary" style="margin-top: 30px;">${currentLang === 'fr' ? 'Retour' : 'Retounen'}</a>
                </div>`;
            toast(currentLang === 'fr' ? 'Commande validée !' : 'Kòmand valide !');
        } catch (err) {
            toast(err.message, 'error');
            btn.disabled = false;
            btn.textContent = t('checkout_pay');
        }
    }
});

/* ============ INITIALISATION ============ */
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('lang-toggle').textContent = currentLang.toUpperCase();
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = t(key);
    });

    Cart.updateUI();
    window.addEventListener('hashchange', router);
    router();

    document.getElementById('lang-toggle').addEventListener('click', toggleLanguage);

    document.getElementById('theme-toggle').addEventListener('click', () => {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
        document.querySelector('#theme-toggle i').className = isDark ? 'ph ph-moon' : 'ph ph-sun';
    });

    const mobileMenu = document.getElementById('mobile-menu');
    const menuOverlay = document.getElementById('menu-overlay');
    
    document.getElementById('menu-btn').addEventListener('click', () => {
        mobileMenu.classList.add('active'); 
        menuOverlay.classList.add('active');
    });

    const closeMenu = () => {
        mobileMenu.classList.remove('active'); 
        menuOverlay.classList.remove('active');
    };

    document.getElementById('close-menu').addEventListener('click', closeMenu);
    menuOverlay.addEventListener('click', closeMenu);

    document.querySelectorAll('.close-menu-link').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    const cartDrawer = document.getElementById('cart-drawer');
    const cartOverlay = document.getElementById('cart-overlay');
    
    document.getElementById('cart-btn').addEventListener('click', () => {
        cartDrawer.classList.add('active'); 
        cartOverlay.classList.add('active');
    });
    
    const closeCart = () => { 
        cartDrawer.classList.remove('active'); 
        cartOverlay.classList.remove('active'); 
    };
    
    document.getElementById('close-cart').addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);
    document.getElementById('checkout-btn').addEventListener('click', () => { closeCart(); location.hash = '#/checkout'; });
});
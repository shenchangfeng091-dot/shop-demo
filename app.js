// ===== 商品数据 =====
const products = [
    { id:1, name:"无线降噪蓝牙耳机 Pro", desc:"主动降噪 · 超长续航", price:299, oldPrice:499, emoji:"🎧", category:"数码", sales:1280, tag:"hot", bg:"#e3f2fd", features:["主动降噪技术","单次续航8小时","蓝牙5.3连接","IPX5防水防汗"] },
    { id:2, name:"智能运动手表 GPS版", desc:"健康监测 · GPS导航", price:599, oldPrice:899, emoji:"⌚", category:"数码", sales:856, tag:"hot", bg:"#e8f5e9", features:["全天候心率监测","内置GPS定位","50米防水","14天超长续航"] },
    { id:3, name:"机械键盘 客制化版", desc:"热插拔 · RGB灯效", price:329, oldPrice:459, emoji:"⌨️", category:"数码", sales:432, tag:"", bg:"#fff3e0", features:["Gasket结构","三模连接","PBT键帽","1680万色RGB"] },
    { id:4, name:"100W氮化镓充电器", desc:"多口快充 · 小巧便携", price:129, oldPrice:199, emoji:"🔌", category:"数码", sales:2300, tag:"new", bg:"#e0f7fa", features:["100W大功率","三口同时快充","折叠插脚设计","氮化镓黑科技"] },
    { id:5, name:"纯棉 Oversize T恤", desc:"舒适透气 · 潮流百搭", price:89, oldPrice:159, emoji:"👕", category:"服饰", sales:3500, tag:"hot", bg:"#fce4ec", features:["280g重磅纯棉","落肩宽松版型","预缩水处理","多色可选"] },
    { id:6, name:"工装休闲裤 直筒", desc:"多口袋 · 耐磨面料", price:159, oldPrice:259, emoji:"👖", category:"服饰", sales:1200, tag:"", bg:"#f3e5f5", features:["高密度帆布面料","多口袋工装设计","直筒修身版型","耐磨不起球"] },
    { id:7, name:"复古帆布鞋 低帮", desc:"经典款 · 舒适百搭", price:149, oldPrice:229, emoji:"👟", category:"服饰", sales:2800, tag:"", bg:"#e8eaf6", features:["天然橡胶大底","10oz重磅帆布","复古硫化工艺","舒适内垫"] },
    { id:8, name:"极简书桌收纳架", desc:"实木材质 · 多层设计", price:199, oldPrice:299, emoji:"📚", category:"家居", sales:670, tag:"new", bg:"#efebe9", features:["FAS级实木","三层分区收纳","承重50kg","免工具安装"] },
    { id:9, name:"香薰氛围灯", desc:"助眠香薰 · 暖光陪伴", price:169, oldPrice:269, emoji:"🪔", category:"家居", sales:980, tag:"hot", bg:"#fff8e1", features:["超声波香薰","三档暖光调节","静音运行","自动断电保护"] },
    { id:10, name:"乳胶枕 护颈款", desc:"泰国乳胶 · 人体工学", price:119, oldPrice:199, emoji:"🛏️", category:"家居", sales:1500, tag:"", bg:"#e0f2f1", features:["93%天然乳胶","人体工学曲线","透气排湿","防螨抗菌"] },
    { id:11, name:"玻尿酸保湿面霜", desc:"深层补水 · 24h保湿", price:139, oldPrice:219, emoji:"🧴", category:"美妆", sales:4200, tag:"hot", bg:"#fce4ec", features:["5重玻尿酸","神经酰胺修护","无酒精配方","敏感肌适用"] },
    { id:12, name:"哑光丝绒口红", desc:"持久不脱色 · 显白正红", price:99, oldPrice:159, emoji:"💄", category:"美妆", sales:3800, tag:"", bg:"#ffebee", features:["丝绒哑光质地","8小时持色","植物精油滋润","一抹显白"] },
    { id:13, name:"便携筋膜枪 迷你版", desc:"深层放松 · 超静音", price:179, oldPrice:299, emoji:"💪", category:"运动", sales:760, tag:"new", bg:"#e3f2fd", features:["4档振动调节","Type-C充电","仅480g轻量","45dB静音"] },
    { id:14, name:"瑜伽垫 加厚防滑", desc:"TPE材质 · 双面可用", price:89, oldPrice:139, emoji:"🧘", category:"运动", sales:2100, tag:"", bg:"#e8f5e9", features:["15mm加厚","TPE环保材质","双面防滑纹理","附绑带收纳"] },
    { id:15, name:"跑步腰包 超薄", desc:"贴合无感 · 大容量", price:49, oldPrice:79, emoji:"🏃", category:"运动", sales:1800, tag:"", bg:"#fff3e0", features:["超薄贴合设计","三舱分区收纳","防水面料","反光条设计"] },
    { id:16, name:"手冲挂耳咖啡礼盒", desc:"精选产区 · 10种风味", price:79, oldPrice:129, emoji:"☕", category:"食品", sales:3200, tag:"hot", bg:"#efebe9", features:["10种产区风味","SCA评分80+","中浅烘焙","新鲜现磨"] },
    { id:17, name:"魔芋爽辣零食大礼包", desc:"低卡解馋 · 多种口味", price:39, oldPrice:69, emoji:"🍜", category:"食品", sales:5600, tag:"hot", bg:"#fff8e1", features:["20包混合装","低卡魔芋","5种口味","独立包装"] },
    { id:18, name:"坚果每日礼盒装", desc:"7日搭配 · 新鲜锁味", price:69, oldPrice:99, emoji:"🥜", category:"食品", sales:2400, tag:"new", bg:"#f3e5f5", features:["7日7种搭配","轻度烘焙","充氮锁鲜","每日一小袋"] },
];

// ===== 状态 =====
let cart = [];
let currentCategory = 'all';
let currentSort = 'default';
let searchKeyword = '';

// ===== 初始化 =====
function init() {
    renderProducts();
    updateCartUI();
}

// ===== 渲染商品 =====
function getFilteredProducts() {
    let list = products.filter(p => {
        const matchCat = currentCategory === 'all' || p.category === currentCategory;
        const matchSearch = !searchKeyword || p.name.toLowerCase().includes(searchKeyword.toLowerCase()) || p.desc.toLowerCase().includes(searchKeyword.toLowerCase());
        return matchCat && matchSearch;
    });

    switch(currentSort) {
        case 'price-asc': list.sort((a,b) => a.price - b.price); break;
        case 'price-desc': list.sort((a,b) => b.price - a.price); break;
        case 'sales': list.sort((a,b) => b.sales - a.sales); break;
    }
    return list;
}

function renderProducts() {
    const grid = document.getElementById('productGrid');
    const list = getFilteredProducts();

    if (list.length === 0) {
        grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:80px;color:#6b7280;"><span style="font-size:64px;display:block;margin-bottom:16px;">🔍</span><p style="font-size:18px;font-weight:500;">没有找到相关商品</p><span>试试其他关键词吧～</span></div>';
        return;
    }

    grid.innerHTML = list.map(p => `
        <div class="product-card" onclick="openProduct(${p.id})" style="animation-delay:${list.indexOf(p) * 0.05}s">
            <div class="product-image" style="background:${p.bg}">
                ${p.tag ? `<span class="tag ${p.tag}">${p.tag === 'hot' ? '热销' : '新品'}</span>` : ''}
                ${p.emoji}
            </div>
            <div class="product-info">
                <div class="product-name">${p.name}</div>
                <div class="product-desc">${p.desc}</div>
                <div class="product-price-row">
                    <span class="product-price">¥${p.price}</span>
                    <span class="product-price-old">¥${p.oldPrice}</span>
                </div>
                <div class="product-meta">
                    <span class="product-sales">已售 ${p.sales > 999 ? (p.sales/1000).toFixed(1)+'k' : p.sales}</span>
                    <button class="add-cart-btn" onclick="event.stopPropagation(); addToCart(${p.id})">加入购物车</button>
                </div>
            </div>
        </div>
    `).join('');
}

// ===== 分类筛选 =====
function filterCategory(cat, el) {
    currentCategory = cat;
    document.querySelectorAll('.cat-item').forEach(e => e.classList.remove('active'));
    el.classList.add('active');
    const titles = { all:'🔥 热门好物', '数码':'📱 数码电子', '服饰':'👕 服饰穿搭', '家居':'🏠 家居生活', '美妆':'💄 美妆护肤', '运动':'⚽ 运动户外', '食品':'🍜 美食零食' };
    document.getElementById('sectionTitle').textContent = titles[cat];
    renderProducts();
    scrollToProducts();
}

// ===== 排序 =====
function sortProducts(sort, el) {
    currentSort = sort;
    document.querySelectorAll('.sort-item').forEach(e => e.classList.remove('active'));
    el.classList.add('active');
    renderProducts();
}

// ===== 搜索 =====
function handleSearch() {
    searchKeyword = document.getElementById('searchInput').value;
    renderProducts();
}

// ===== 滚动到商品区 =====
function scrollToProducts() {
    document.getElementById('productsSection').scrollIntoView({ behavior:'smooth', block:'start' });
}

// ===== 商品详情弹窗 =====
function openProduct(id) {
    const p = products.find(x => x.id === id);
    if (!p) return;
    const modal = document.getElementById('productModal');
    modal.innerHTML = `
        <div class="modal-image" style="background:${p.bg}">${p.emoji}</div>
        <div class="modal-body">
            <h2>${p.name}</h2>
            <p class="modal-desc">${p.desc}</p>
            <div class="modal-price-row">
                <span class="modal-price">¥${p.price}</span>
                <span class="modal-price-old">¥${p.oldPrice}</span>
                <span style="font-size:13px;color:#e74c3c;font-weight:600;">立省 ¥${p.oldPrice - p.price}</span>
            </div>
            <div class="modal-features">
                <ul>
                    ${p.features.map(f => `<li>${f}</li>`).join('')}
                </ul>
            </div>
            <div style="display:flex;justify-content:space-between;margin-bottom:20px;font-size:14px;color:#6b7280;">
                <span>📦 已售 ${p.sales} 件</span>
                <span>✅ 现货 · 48小时发货</span>
            </div>
            <div class="modal-actions">
                <button class="modal-add-cart" onclick="addToCart(${p.id}); closeModal();">加入购物车</button>
                <button class="modal-buy-now" onclick="addToCart(${p.id}); closeModal(); toggleCart();">立即购买</button>
            </div>
        </div>
    `;
    document.getElementById('modalOverlay').classList.add('open');
}

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('open');
}

// ===== 购物车操作 =====
function addToCart(id) {
    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.qty++;
    } else {
        const p = products.find(x => x.id === id);
        cart.push({ ...p, qty: 1 });
    }
    updateCartUI();
    showToast('已加入购物车 🛒');
    // 购物车角标弹跳动画
    const badge = document.getElementById('cartBadge');
    badge.style.transform = 'scale(1.3)';
    setTimeout(() => badge.style.transform = '', 200);
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
}

function changeQty(id, delta) {
    const item = cart.find(x => x.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
        removeFromCart(id);
    } else {
        updateCartUI();
    }
}

function updateCartUI() {
    const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

    // 角标
    const badge = document.getElementById('cartBadge');
    badge.textContent = totalCount;
    badge.classList.toggle('show', totalCount > 0);

    // 购物车列表
    const cartItems = document.getElementById('cartItems');
    const cartFooter = document.getElementById('cartFooter');

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="cart-empty">
                <span class="empty-icon">🛒</span>
                <p>购物车还是空的</p>
                <span>快去挑选心仪的好物吧～</span>
            </div>
        `;
        cartFooter.style.display = 'none';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image" style="background:${item.bg}">${item.emoji}</div>
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">¥${item.price}</div>
                    <div class="cart-item-controls">
                        <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
                        <span class="qty-num">${item.qty}</span>
                        <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
                        <button class="cart-item-remove" onclick="removeFromCart(${item.id})">🗑</button>
                    </div>
                </div>
            </div>
        `).join('');
        cartFooter.style.display = 'block';
        document.getElementById('cartCount').textContent = totalCount;
        document.getElementById('cartTotal').textContent = `¥${totalPrice}`;
    }
}

function toggleCart() {
    const sidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('cartOverlay');
    sidebar.classList.toggle('open');
    overlay.classList.toggle('open');
}

function checkout() {
    if (cart.length === 0) return;
    const total = cart.reduce((s,i) => s + i.price * i.qty, 0);
    const count = cart.reduce((s,i) => s + i.qty, 0);
    showToast(`🎉 演示结算成功！共 ${count} 件商品，合计 ¥${total}`);
    cart = [];
    updateCartUI();
    setTimeout(() => toggleCart(), 1500);
}

// ===== Toast 提示 =====
let toastTimer = null;
function showToast(msg) {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2500);
}

// ===== 启动 =====
init();

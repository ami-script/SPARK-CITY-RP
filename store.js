// store.js - Dedicated store functionality for SPARK CITY RP

// Store data
const products = [
    {
        id: 1,
        title: "حزمة ايدي 7",
        price: "950 ريال",
        description: "حزمة ايدي احادي رقم 7",
        images: ["store/id7.gif",]
    },
    {
        id: 2,
        title: "باقة رتبة الموانع",
        price: "450 ريال",
        description: "باقة رتبة الموانع",
        images: ["store/al.gif",]
    },
    {
        id: 3,
        title: "باقة منيو ملابس",
        price: "300 ريال",
        description: "باقة ملابس",
        images: ["store/menucl.gif",]
    },
    {
        id: 4,
        title: "باقة منيو صغير",
        price: "300 ريال",
        description: "باقة منيو صغير",
        images: ["store/512.gif"]
    },
        {
        id: 5,
        title: "منيو كبير",
        price: "600 ريال",
        description: "باقة منيو كبير",
        images: ["store/512.gif"]
    },
            {
        id: 6,
        title: "باقة شراء بيت",
        price: "150 ريال",
        description: "باقة شراء بيت",
        images: ["store/512.gif"]
    },
            {
        id: 7,
        title: "باقة اشعار قتل",
        price: "150 ريال",
        description: "باقة اشعار قتل ",
        images: ["store/512.gif"]
    },
            {
        id: 8,
        title: "باقة حزمة خاصة",
        price: "200 ريال",
        description: "باقة حزمة خاصة",
        images: ["store/512.gif"]
    },
            {
        id: 9,
        title: "باقة منيو الداعمين",
        price: "500 ريال",
        description: "باقة منيو صغير",
        images: ["store/512.gif"]
    },
            {
        id: 10,
        title: "باقة حزمة قيرلز سكن",
        price: "120 ريال",
        description: "باقة منيو صغير",
        images: ["store/512.gif"]
    },
                {
        id: 11,
        title: "باقة حزمة انمي سكن",
        price: "130 ريال",
        description: "باقة منيو صغير",
        images: ["store/512.gif"]
    },
                {
        id: 12,
        title: "رتبة مزايدة معتمد",
        price: "10 ريال",
        description: "باقة منيو صغير",
        images: ["store/512.gif"]
    },
                {
        id: 13,
        title: "باقة اندار خاص",
        price: "99 ريال",
        description: "باقة منيو صغير",
        images: ["store/512.gif"]
    },
                {
        id: 14,
        title: "باقة حزمة هتمان",
        price: "180 ريال",
        description: "باقة منيو صغير",
        images: ["store/512.gif"]
    },
      {
        id: 15,
        title: "باقة حزمة الجوكر",
        price: "150 ريال",
        description: "باقة  حزمة الجوكر",
        images: ["store/512.gif"]
    },
          {
        id: 16,
        title: "باقة حزمة باتمان",
        price: "150 ريال",
        description: "باقة حزمة باتمان",
        images: ["store/512.gif"]
    },
          {
        id: 17,
        title: "باقة سبيشل نيم",
        price: "99 ريال",
        description: "باقة سبيشل نيم",
        images: ["store/512.gif"]
    },
          {
        id: 18,
        title: "باقة السينماء",
        price: "99 ريال",
        description: "باقة السينماء",
        images: ["store/512.gif"]
    },
          {
        id: 19,
        title: "باقة حزمة بيبي سكن",
        price: "130 ريال",
        description: "باقة حزمة بيبي سكن",
        images: ["store/512.gif"]
    },
          {
        id: 20,
        title: "باقة حزمة دايموند",
        price: "190 ريال",
        description: "باقة حزمة دايموند",
        images: ["store/512.gif"]
    },
          {
        id: 21,
        title: "باقة حزمة قولد",
        price: "150 ريال",
        description: "باقة منيو صغير",
        images: ["store/512.gif"]
    },
          {
        id: 22,
        title: "باقة حزمة سلفر",
        price: "99 ريال",
        description: "باقة حزمة سلفر",
        images: ["store/512.gif"]
    },
          {
        id: 23,
        title: "ايدي ثنائي من [41]الي [98]",
        price: "450 ريال",
        description: "باقة منيو صغير",
        images: ["store/512.gif"]
    },
          {
        id: 24,
        title: "ايدي ثنائي من [21]الي [39]",
        price: "400 ريال",
        description: "باقة منيو صغير",
        images: ["store/512.gif"]
    },
          {
        id: 25,
        title: "ايدي تلاتي مكرر",
        price: "350 ريال",
        description: "باقة منيو صغير",
        images: ["store/512.gif"]
    },
          {
        id: 26,
        title: "ايدي تلاتي من [401] الي [998]",
        price: "160 ريال",
        description: "باقة منيو صغير",
        images: ["store/512.gif"]
    },
          {
        id: 27,
        title: "ايدي ثلاثي من [101-] الي [399-]",
        price: "170 ريال",
        description: "ايدي ثلاثي من [101-] الي [399-] الايدي بالسالب", 
        images: ["store/512.gif"]
    },
          {
        id: 28,
        title: "ايدي تلاتي من [101] الي [399]",
        price: "190 ريال",
        description: "ايدي تلاتي من [101] الي [399]",
        images: ["store/512.gif"]
    },
          {
        id: 29,
        title: "ايدي تلاتي من [401-] الي  [998-]",
        price: "140 ريال",
        description: "باقة منيو صغير",
        images: ["store/512.gif"]
    },
          {
        id: 30,
        title: "ايدي ثلاثي رموز القبائل بالموجب",
        price: "350 ريال",
        description: "باقة منيو صغير",
        images: ["store/512.gif"]
    },
          {
        id: 31,
        title: "ايدي ثلاثي رموز القبائل بالسالب",
        price: "180 ريال",
        description: "باقة منيو صغير",
        images: ["store/512.gif"]
    },
          {
        id: 32,
        title: "باقة كبار الداعمين",
        price: "500 ريال",
        description: "باقة منيو صغير",
        images: ["store/512.gif"]
    },
          {
        id: 33,
        title: "F2 باقة طيران",
        price: "100 ريال",
        description: "باقة منيو صغير",
        images: ["store/512.gif"]
    },
              {
        id: 34,
        title: "BOSS باقة حزمة",
        price: "350 ريال",
        description: "باقة منيو صغير",
        images: ["store/512.gif"]
    },
    
     {
        id: 34,
        title: "منيو وسط",
        price: "600 ريال",
        description: "منيو وسط",
        images: ["store/menucl.gif",]
    }
    
];

// Initialize store functionality
function initStore() {
    // Render products
    renderProducts();
    
    // Setup modal functionality
    setupProductModal();
    
    // Setup buy now buttons
    setupBuyButtons();
}

// Render products to the store grid
function renderProducts() {
    const storeGrid = document.querySelector('.store-grid');
    
    if (!storeGrid) return;
    
    storeGrid.innerHTML = '';
    
    products.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.images[0]}" alt="${product.title}">
            </div>
            <div class="product-info">
                <h3>${product.title}</h3>
                <p class="product-price">${product.price}</p>
                <button class="btn btn-primary view-details" data-index="${index}">المزيد</button>
            </div>
        `;
        
        storeGrid.appendChild(productCard);
    });
}

// Setup product modal functionality
function setupProductModal() {
    const modal = document.getElementById('product-modal');
    
    if (!modal) return;
    
    // View details button click
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('view-details')) {
            const index = e.target.getAttribute('data-index');
            if (index !== null && products[index]) {
                openProductModal(products[index]);
            }
        }
    });
    
    // Close modal button
    const closeBtn = modal.querySelector('.close-modal');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            closeProductModal();
        });
    }
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeProductModal();
        }
    });
}

// Open product modal with product data
function openProductModal(product) {
    const modal = document.getElementById('product-modal');
    if (!modal) return;
    
    // Set product data
    document.getElementById('modal-title').textContent = product.title;
    document.getElementById('modal-price').textContent = `السعر: ${product.price}`;
    document.getElementById('modal-description').textContent = product.description;
    
    // Set main image
    const mainImg = document.getElementById('modal-main-img');
    mainImg.src = product.images[0];
    mainImg.alt = product.title;
    
    // Set thumbnails
    const thumbnailContainer = document.querySelector('.thumbnail-container');
    thumbnailContainer.innerHTML = '';
    
    product.images.forEach((img, i) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = 'thumbnail';
        if (i === 0) thumbnail.classList.add('active');
        
        const imgEl = document.createElement('img');
        imgEl.src = img;
        imgEl.alt = `${product.title} - صورة ${i+1}`;
        
        thumbnail.appendChild(imgEl);
        thumbnail.addEventListener('click', () => {
            mainImg.src = img;
            document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
            thumbnail.classList.add('active');
        });
        
        thumbnailContainer.appendChild(thumbnail);
    });
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Set buy now button data
    const buyNowBtn = modal.querySelector('.buy-now');
    if (buyNowBtn) {
        buyNowBtn.setAttribute('data-product-id', product.id);
    }
}

// Close product modal
function closeProductModal() {
    const modal = document.getElementById('product-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Setup buy now buttons functionality
function setupBuyButtons() {
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('buy-now')) {
            const productId = e.target.getAttribute('data-product-id');
            if (productId) {
                purchaseProduct(parseInt(productId));
            }
        }
    });
}

// Handle product purchase
function purchaseProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Here you would typically send a request to your backend
    // For now, we'll just show an alert
    alert(`شكراً لشرائك ${product.title}!\nسيتم إرسال التفاصيل إلى حسابك قريباً.`);
    
    // Close modal after purchase
    closeProductModal();
}

// Initialize store when DOM is loaded
document.addEventListener('DOMContentLoaded', initStore);
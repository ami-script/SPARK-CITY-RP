// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Toggle rule content with animation
document.querySelectorAll('.rule-header').forEach(header => {
    header.addEventListener('click', function() {
        const ruleContent = this.nextElementSibling;
        const toggleIcon = this.querySelector('.toggle-icon');
        
        // Toggle current rule
        ruleContent.classList.toggle('active');
        this.classList.toggle('active');
        
        // Rotate toggle icon
        if (ruleContent.classList.contains('active')) {
            toggleIcon.style.transform = 'rotate(180deg)';
            ruleContent.style.maxHeight = ruleContent.scrollHeight + 'px';
        } else {
            toggleIcon.style.transform = 'rotate(0deg)';
            ruleContent.style.maxHeight = '0';
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(0, 0, 0, 0.95)';
        header.style.backdropFilter = 'blur(15px)';
    } else {
        header.style.background = 'rgba(0, 0, 0, 0.9)';
        header.style.backdropFilter = 'blur(10px)';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe elements with 'animate-on-scroll' class
document.querySelectorAll('.animate-on-scroll').forEach(element => {
    observer.observe(element);
});

// Back to top button
const backToTopButton = document.createElement('button');
backToTopButton.className = 'back-to-top';
backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Initialize tooltips
function initTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(element => {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = element.getAttribute('data-tooltip');
        element.appendChild(tooltip);
        
        element.addEventListener('mouseenter', () => {
            tooltip.style.visibility = 'visible';
            tooltip.style.opacity = '1';
        });
        
        element.addEventListener('mouseleave', () => {
            tooltip.style.visibility = 'hidden';
            tooltip.style.opacity = '0';
        });
    });
};

// تعديل كود toggleRule ليقوم بإغلاق جميع القوانين الأخرى عند فتح واحد
document.querySelectorAll('.rule-header').forEach(header => {
    header.addEventListener('click', function() {
        const ruleContent = this.nextElementSibling;
        const toggleIcon = this.querySelector('.toggle-icon');
        
        // إغلاق جميع القوانين الأخرى المفتوحة
        document.querySelectorAll('.rule-content.active').forEach(content => {
            if (content !== ruleContent) {
                content.classList.remove('active');
                content.previousElementSibling.classList.remove('active');
                content.previousElementSibling.querySelector('.toggle-icon').style.transform = 'rotate(0deg)';
                content.style.maxHeight = '0';
            }
        });
        
    });
});



// إدارة التبديل بين الأقسام
function switchSection(sectionId) {
    // إخفاء جميع الأقسام
    document.querySelectorAll('section').forEach(section => {
        section.classList.remove('active');
    });
    
    // إظهار القسم المطلوب
    document.getElementById(sectionId).classList.add('active');
    
    // التمرير إلى أعلى الصفحة
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    
    // تحديث الرابط النشط في الشريط العلوي
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`.nav-link[href="#${sectionId}"]`).classList.add('active');
}

// إعداد أحداث النقر على روابط التنقل
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        switchSection(targetId);
    });
});

// عرض تفاصيل المنتج
document.querySelectorAll('.view-details').forEach((button, index) => {
    button.addEventListener('click', function() {
        const product = products[index];
        const modal = document.getElementById('product-modal');
        
        // تعبئة البيانات في النافذة
        document.getElementById('modal-title').textContent = product.title;
        document.getElementById('modal-price').textContent = `السعر: ${product.price}`;
        document.getElementById('modal-description').textContent = product.description;
        
        // تعبئة الصور
        const mainImg = document.getElementById('modal-main-img');
        mainImg.src = product.images[0];
        mainImg.alt = product.title;
        
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
        
        // إظهار النافذة
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

// إغلاق نافذة المنتج
document.querySelector('.close-modal').addEventListener('click', function() {
    document.getElementById('product-modal').classList.remove('active');
    document.body.style.overflow = 'auto';
});

// عند تحميل الصفحة، إظهار قسم القوانين افتراضياً
window.addEventListener('load', function() {
    switchSection('rules');
});


// Call initTooltips when DOM is loaded
document.addEventListener('DOMContentLoaded', initTooltips);
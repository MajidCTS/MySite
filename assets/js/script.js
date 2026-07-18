// نمایش عناصر بعد از اسکرول شدن صفحه
// ====================================================================

// وقتی صفحه کامل بارگذاری شد
document.addEventListener('DOMContentLoaded', function () {

    // انتخاب همه عناصر با کلاس fade-element
    const elements = document.querySelectorAll('.fade-in-element');

    // اگر عنصری وجود نداشت، خطا بده
    /*
    if (elements.length === 0) {
        console.warn('هیچ عنصری با کلاس fade-in-element پیدا نشد!');
        return;
    }
    */
    // console.log(`${elements.length} عنصر پیدا شد`);

    // Intersection Observer API
    // const observer = new IntersectionObserver(callBack,options);
    // ایجاد observer
    const callback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // وقتی عنصر وارد دید شد، کلاس visible رو اضافه کن
                entry.target.classList.add('visible');
                // console.log('عنصر نمایان شد:', entry.target.textContent.trim());
            }
        });
    }
    const options = {
        threshold: 0.25, // 15% از عنصر دیده بشه کافیه
        rootMargin: '0px 0px -50px 0px' // کمی زودتر فعال بشه
    }
    const observer = new IntersectionObserver(callback, options);

    // شروع مشاهده همه عناصر
    elements.forEach(element => {
        observer.observe(element);
    });

    // console.log('✅ Observer برای همه عناصر فعال شد!');
});

/*
===== کلاس اصلی برای همه عناصر ====
.fade-in-element {
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1),
        transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-in-element.visible {
    opacity: 1 !important;
    transform: translateY(0);
}
    اسکریپت رو یادم باشه حتما قبل بستن بادی بزارم
*/
// ====================================================================

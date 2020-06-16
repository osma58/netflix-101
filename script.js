let faqs = document.querySelectorAll('.faq-list-item')

faqs.forEach(function(elem) {
    elem.addEventListener('click', () => {
        if (!elem.classList.contains('open')) {
            elem.classList.add('open')
        } else {
            elem.classList.remove('open')
        }

        faqs.forEach(b => {
            if (b != elem) {
                b.classList.remove('open')
            }
        })
    })
})
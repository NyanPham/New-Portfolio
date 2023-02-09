class RevealSelf {
    constructor() {
        this.revealSelfElems = document.querySelectorAll('[data-reveal-self]');

        this.reset();
        this.initObserver();
    }

    get options() {
        return {
            threshold: 0.1,
        }
    }

    reset() {
        this.revealSelfElems.forEach((elem) => {
            elem.dataset.scrolledIntoView = false; 
            elem.dataset.hasIntersected = false
        })
    }

    initObserver() {
        const callback = ((entries) => {
            entries.forEach(entry => {
                entry.target.dataset.scrolledIntoView = entry.isIntersecting;

                const hasIntersected = entry.target.dataset.hasIntersected === 'true';
                if (!hasIntersected && entry.isIntersecting) {
                    entry.target.dataset.hasIntersected = true;
                }
            })
        })

        this.observer = new IntersectionObserver(callback, this.options);
        this.revealSelfElems.forEach(elem => {
            this.observer.observe(elem);
        })
    }
}
    
export default RevealSelf;
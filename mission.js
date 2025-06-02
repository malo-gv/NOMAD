const testimonials = [
    {
        name: "Lucie D.",
        text: "Un voyage inoubliable, à taille humaine. J’ai redécouvert la nature, participé à un atelier de cuisine locale et rencontré des gens formidables !"
    },
    {
        name: "Marc T.",
        text: "Une vraie alternative au tourisme de masse. J’ai dormi chez l’habitant et partagé des moments simples mais incroyablement riches. Bravo à l’équipe NOMAD !"
    },
    {
        name: "Aïcha B.",
        text: "Voyager en respectant la planète, c’est possible. Grâce à NOMAD, j’ai appris à réduire mon empreinte même en déplacement. Une belle leçon de vie."
    },
    {
        name: "Théo R.",
        text: "Je suis revenu grandi de ce voyage. Les rencontres humaines, les paysages, les échanges m’ont reconnecté à l’essentiel. Merci NOMAD."
    },
    {
        name: "Claire G.",
        text: "Le format est parfait : immersion locale, hébergement simple mais chaleureux, activités authentiques. Une bouffée d’oxygène et de sens."
    }
];


let visibleCount = 2;

function displayTestimonials() {
    const container = document.getElementById('testimonial-container');
    container.innerHTML = '';
    for (let i = 0; i < visibleCount && i < testimonials.length; i++) {
        const t = testimonials[i];
        const div = document.createElement('div');
        div.className = 'testimonial';
        div.innerHTML = `<p>"${t.text}"</p><strong>- ${t.name}</strong>`;
        container.appendChild(div);
    }

    const btn = document.getElementById('loadMoreBtn');
    if (visibleCount >= testimonials.length) {
        btn.style.display = 'none';
    } else {
        btn.style.display = 'block';
    }
}

document.getElementById('loadMoreBtn').addEventListener('click', () => {
    visibleCount += 2;
    displayTestimonials();
});

window.onload = displayTestimonials;

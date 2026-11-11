document.addEventListener("DOMContentLoaded", () => {
    const articulos = document.querySelectorAll('article.clase');
    if (articulos.length === 0) return;

    const nav = document.createElement('nav');
    nav.className = 'indice-lateral';
    nav.innerHTML = '<h4>📅 Fechas</h4><ul></ul>';
    const ul = nav.querySelector('ul');

    const enlaces = [];

    articulos.forEach((art, index) => {
        const h2 = art.querySelector('h2');
        if (!h2) return;

        const id = art.id || 'clase-' + index;
        art.id = id;

        const textoFecha = h2.textContent.replace('📅 ', '').trim();

        const li = document.createElement('li');
        const enlace = document.createElement('a');
        enlace.href = `#${id}`;
        enlace.textContent = textoFecha;

        li.appendChild(enlace);
        ul.appendChild(li);

        enlaces.push({ enlace, art });

        enlace.addEventListener('click', () => {
            enlaces.forEach(item => {
                item.art.classList.remove('activo');
                item.enlace.classList.remove('seleccionado');
            });

            art.classList.add('activo');
            enlace.classList.add('seleccionado');

            // ¡NUEVO! Le avisa al CSS que ahora debe mover el menú a la izquierda
            document.body.classList.add('modo-lateral');
        });
    });

    const primerArticulo = articulos[0];
    primerArticulo.parentNode.insertBefore(nav, primerArticulo);

    const hash = window.location.hash;

    if (hash) {
        const elementoAActivar = enlaces.find(item => `#${item.art.id}` === hash);

        if (elementoAActivar) {
            elementoAActivar.art.classList.add('activo');
            elementoAActivar.enlace.classList.add('seleccionado');

            // ¡NUEVO! Como entraste directo a un artículo, mueve el menú a la izquierda de inmediato
            document.body.classList.add('modo-lateral');

            setTimeout(() => {
                elementoAActivar.art.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
    }
});
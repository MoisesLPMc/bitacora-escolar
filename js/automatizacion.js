document.addEventListener("DOMContentLoaded", () => {
    // 1. Crea la caja del menú lateral
    const nav = document.createElement('nav');
    nav.className = 'indice-lateral';
    nav.innerHTML = '<h4 style="margin-top:0; color:#e5c07b;">📅 Fechas</h4><ul></ul>';
    const ul = nav.querySelector('ul');

    // 2. Busca todos los artículos de tus clases
    const articulos = document.querySelectorAll('article.clase');

    articulos.forEach((art, index) => {
        // Autocompacta todos los artículos al cargar la página
        art.classList.add('compactado');

        const h2 = art.querySelector('h2');
        if (!h2) return;

        // Le asigna un ID automático a tu HTML para que el menú funcione
        const id = 'clase-' + index;
        art.id = id;

        // Extrae el texto del H2 y crea un enlace en el menú lateral
        const textoFecha = h2.textContent.replace('📅 ', '');
        const li = document.createElement('li');
        li.innerHTML = `<a href="#${id}">${textoFecha}</a>`;
        ul.appendChild(li);

        // Detecta el clic en el H2 para expandir o contraer
        h2.addEventListener('click', () => {
            art.classList.toggle('compactado');
        });

        // Si haces clic en el menú lateral, despliega ese artículo automáticamente
        li.querySelector('a').addEventListener('click', () => {
            art.classList.remove('compactado');
        });
    });

    // Coloca el menú lateral en tu página sin que tengas que escribirlo
    document.body.insertBefore(nav, document.body.firstChild);
});
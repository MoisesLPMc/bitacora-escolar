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

        // Asigna un ID automático si no tiene uno
        const id = art.id || 'clase-' + index;
        art.id = id;

        // Extrae el texto del H2 y crea un enlace en el menú
        const textoFecha = h2.textContent.replace('📅 ', '');
        const li = document.createElement('li');
        const enlace = document.createElement('a');
        enlace.href = `#${id}`;
        enlace.textContent = textoFecha;
        li.appendChild(enlace);
        ul.appendChild(li);

        // Clic en el H2: Alterna entre expandir/colapsar
        h2.addEventListener('click', () => {
            art.classList.toggle('compactado');
        });

        // Clic en el Menú: Compacta TODOS y solo expande el seleccionado
        enlace.addEventListener('click', () => {
            articulos.forEach(a => a.classList.add('compactado')); // Oculta todos
            art.classList.remove('compactado'); // Muestra solo este
        });
    });

    // Coloca el menú lateral en el documento
    document.body.insertBefore(nav, document.body.firstChild);
});
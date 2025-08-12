document.addEventListener('DOMContentLoaded', () => {
    // Código da animação do h1 (sem alteração)
    const titleElement = document.querySelector('.navbar-title');
    const originalText = titleElement.textContent;
    const typingSpeed = 150;

    titleElement.textContent = '';
    const cursor = document.createElement('span');
    cursor.classList.add('cursor');
    titleElement.appendChild(cursor);

    let charIndex = 0;

    function typeWriter() {
        if (charIndex < originalText.length) {
            cursor.textContent = originalText.charAt(charIndex);
            titleElement.insertBefore(document.createTextNode(originalText.charAt(charIndex)), cursor);
            charIndex++;
            setTimeout(typeWriter, typingSpeed);
        } else {
            cursor.remove();
        }
    }

    typeWriter();

    // --- FUNCIONALIDADE PARA O BOTÃO DE CONFIRMAR NICKNAME ---
    const confirmButton = document.getElementById('confirm-button');
    const nicknameInput = document.getElementById('nickname-input');
    const nicknameDisplay = document.getElementById('nickname-display'); // NOVO: Seleciona o elemento do nickname

    confirmButton.addEventListener('click', () => {
        const nickname = nicknameInput.value;
        if (nickname.trim() !== '') {
            console.log(`Nickname confirmado: ${nickname}`);
            alert(`Bem-vindo, ${nickname}! O jogo vai começar.`);
            
            // NOVO: Exibe o nickname na barra de navegação
            nicknameDisplay.textContent = nickname;
            nicknameDisplay.style.display = 'block';
        } else {
            alert('Por favor, digite um nickname para continuar.');
        }
    });

    // --- NOVA FUNCIONALIDADE PARA SELEÇÃO DE FOTO DE PERFIL ---
    const profileOptionsContainer = document.querySelector('.profile-options');
    const profileTitle = document.getElementById('profile-title');
    const saveProfileButton = document.getElementById('save-profile-button');
    const backButton = document.getElementById('back-button');
    let selectedProfileId = null;
    let selectedProfileSrc = null;

    const profilePicDisplay = document.getElementById('profile-pic-display');

    const categories = {
        'pixar': {
            title: 'Pixar',
            imageUrl: '/code/img/pixar-logo.png',
            images: [
                { id: 'p-1', src: '/code/img/mike.png', alt: 'Avatar Pixar 1' },
                { id: 'p-2', src: '/code/img/woody-ts.png', alt: 'Avatar Pixar 2' },
                { id: 'p-3', src: '/code/img/buzz.png', alt: 'Avatar Pixar 3' }
            ]
        },
        'animes': {
            title: 'Animes',
            imageUrl: '/code/img/animes.jpeg',
            images: [
                { id: 'a-1', src: '/code/img/animes1.png', alt: 'Avatar Anime 1' },
                { id: 'a-2', src: '/code/img/animes2.png', alt: 'Avatar Anime 2' },
                { id: 'a-3', src: '/code/img/animes3.png', alt: 'Avatar Anime 3' }
            ]
        },
        'games': {
            title: 'Games',
            imageUrl: '/code/img/games.png',
            images: [
                { id: 'g-1', src: '/code/img/games1.png', alt: 'Avatar Game 1' },
                { id: 'g-2', src: '/code/img/games2.png', alt: 'Avatar Game 2' },
                { id: 'g-3', src: '/code/img/games3.png', alt: 'Avatar Game 3' }
            ]
        },
        'filmes': {
            title: 'Filmes',
            imageUrl: '/code/img/movies.png',
            images: [
                { id: 'f-1', src: '/code/img/filmes1.png', alt: 'Avatar Filme 1' },
                { id: 'f-2', src: '/code/img/filmes2.png', alt: 'Avatar Filme 2' },
                { id: 'f-3', src: '/code/img/filmes3.png', alt: 'Avatar Filme 3' }
            ]
        }
    };

    function renderCategories() {
        profileTitle.textContent = 'Escolha uma categoria';
        profileOptionsContainer.innerHTML = '';
        saveProfileButton.style.display = 'none';
        backButton.style.display = 'none';
        selectedProfileId = null;

        const categoryKeys = Object.keys(categories);
        categoryKeys.forEach(key => {
            const img = document.createElement('img');
            img.src = categories[key].imageUrl;
            img.alt = `Categoria ${key}`;
            img.classList.add('profile-pic');
            img.dataset.category = key;
            profileOptionsContainer.appendChild(img);

            img.addEventListener('click', () => {
                renderAvatars(key);
            });
        });
    }

    function renderAvatars(categoryKey) {
        profileTitle.textContent = categories[categoryKey].title;
        profileOptionsContainer.innerHTML = '';
        saveProfileButton.style.display = 'block';
        backButton.style.display = 'block';
        
        categories[categoryKey].images.forEach(avatar => {
            const img = document.createElement('img');
            img.src = avatar.src;
            img.alt = avatar.alt;
            img.classList.add('profile-pic');
            img.dataset.id = avatar.id;
            profileOptionsContainer.appendChild(img);

            img.addEventListener('click', () => {
                document.querySelectorAll('.profile-pic').forEach(p => p.classList.remove('selected'));
                img.classList.add('selected');
                selectedProfileId = avatar.id;
                selectedProfileSrc = avatar.src;
            });
        });
    }

    backButton.addEventListener('click', () => {
        renderCategories();
    });

    saveProfileButton.addEventListener('click', () => {
        if (selectedProfileId) {
            console.log(`Foto de perfil salva: ${selectedProfileId}`);
            alert(`Sua nova foto de perfil foi salva!`);

            profilePicDisplay.innerHTML = `<img src="${selectedProfileSrc}" alt="Foto de Perfil">`;
        } else {
            alert('Por favor, selecione uma foto de perfil.');
        }
    });

    renderCategories();
});
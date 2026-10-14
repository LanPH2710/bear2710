//start games page js

// ========================================================
// 6. TÍNH NĂNG STEAM GAME LIBRARY (CHỈ CHẠY TRÊN TRANG GAMES)
// ========================================================
const gameListEl = document.getElementById('steam-game-list');

if (gameListEl) {
    // KHO DỮ LIỆU GAME CỦA BẠN (Thêm/sửa game và ảnh tại đây)
    // KHO DỮ LIỆU 6 TỰA GAME (Thay thế mảng myGamesData cũ bằng đoạn này)
    const myGamesData = [
        {
            id: 'minecraft',
            name: 'Minecraft',
            avatar: 'https://placehold.co/100x100/15803d/ffffff?text=MC',
            since: 'Since 2015',
            genre_vi: 'Sandbox / Sinh tồn & Sáng tạo',
            genre_en: 'Sandbox / Survival & Creative',
            highlight_vi: 'World Building & Redstone Logic',
            highlight_en: 'World Building & Redstone Logic',
            images: [
                'img/games/minecraft/mc1.png',
                'img/games/minecraft/mc2.png',
                'img/games/minecraft/mc3.png'
            ],
            review_vi: 'Tôi rất thích chơi game và thích chơi khá nhiều thể loại game như là multiplayer, đối kháng, xây dựng, khám phá thế giới mở và Minecraft có tất cả mọi thứ. Từ cơ chế, cách chơi, nhạc nền đến các thành tích và là 1 thế giới không bao giờ khám phá hết. Ngoài ra có thể custom để chơi các thể loại role khác nhau, mở và tự xây dựng server… 1 tựa game đã khẳng định được sự quan trọng nhất của game không nằm ở đồ họa mà nằm ở lối chơi. Đối với tôi Minecraft là game hay nhất mọi thời đại',
            review_en: 'I really enjoy playing games and have played many different genres like multiplayer, competitive, building, and open-world exploration. Minecraft has it all. From its mechanics and gameplay to its soundtrack and achievements, it\'s a world that never gets old. Additionally, it can be customized for various role-playing experiences, allowing users to create their own servers... A game that has proven the most important aspect of gaming isn\'t graphics but rather the gameplay itself. For me, Minecraft is the best game of all time.'
        },
        {
            id: 'pubg',
            name: 'PUBG Mobile',
            avatar: 'https://placehold.co/100x100/ca8a04/ffffff?text=PUBG',
            since: 'Since 2018',
            genre_vi: 'Battle Royale / Bắn súng sinh tồn',
            genre_en: 'Battle Royale / Tactical Shooter',
            highlight_vi: 'Clan ʚBearGangɞ',
            highlight_en: 'ʚBearGangɞ Clan Member',
            images: [
                'https://placehold.co/1200x600/854d0e/ffffff?text=PUBG+Mobile+-+BearGang+Squad+1',
                'https://placehold.co/1200x600/a16207/ffffff?text=PUBG+Mobile+-+Tactical+Map+2',
                'https://placehold.co/1200x600/ca8a04/ffffff?text=PUBG+Mobile+-+Winner+Chicken+Dinner+3'
            ],
            review_vi: 'Là một tựa game tôi gắn bó thời gian dài cùng bạn bè, PUBG Mobile sở hữu lối chơi đơn giản nhưng nhà phát hành đã xây dựng rất nhiều bản đồ map sự kiện hay và skin đẹp. 1 tựa game giải trí không cần máy tính, không cần chiến thuật nhiều, chỉ cần vào chơi cùng bạn bè rất tuyệt.',
            review_en: 'A game I have spent a long time playing with friends, PUBG Mobile has simple gameplay, but the developers have created many exciting event maps and beautiful skins. It\'s a great casual game that doesn\'t require a computer or complex strategies, just jump in and play with friends.'
        },
        {
            id: 'valorant',
            name: 'Valorant',
            avatar: 'https://placehold.co/100x100/dc2626/ffffff?text=VAL',
            since: 'Since 2024',
            genre_vi: 'Bắn súng chiến thuật 5v5 (FPS)',
            genre_en: '5v5 Tactical Hero Shooter',
            highlight_vi: 'Map Control & Economy System',
            highlight_en: 'Map Control & Economy System',
            images: [
                'https://placehold.co/1200x600/991b1b/ffffff?text=Valorant+-+Tactical+Setup+1',
                'https://placehold.co/1200x600/dc2626/ffffff?text=Valorant+-+Agent+Synergy+2'
            ],
            review_vi: '1 tựa game lấy bắn súng làm trọng tâm nhưng lại đặc biệt hơn các tựa game khác nhờ cơ chế sức mạnh của từng nhân vật cũng như sự đầu tư chỉnh chu cho các skin vũ khí. Tôi đã quen thêm được rất nhiều bạn bè mới nhờ Valorant và cũng học được nhiều bài học về chiến thuật, phối hợp đồng đội, quản lý kinh tế trong game.',
            review_en: 'A sharp intersection of precise gunplay and tactical agent utility. Playing Valorant deepened my appreciation for competitive Level Design, specifically how chokepoints, sightlines, and the round-by-round economy system force constant strategic adaptation.'
        },
        {
            id: 'greenhell',
            name: 'Green Hell',
            avatar: 'https://placehold.co/100x100/047857/ffffff?text=GH',
            since: 'Since 2023',
            genre_vi: 'Sinh tồn khắc nghiệt / Mô phỏng',
            genre_en: 'Hardcore Survival / Simulation',
            highlight_vi: 'Diegetic UI & Sanity Mechanics',
            highlight_en: 'Diegetic UI & Sanity Mechanics',
            images: [
                'https://placehold.co/1200x600/065f46/ffffff?text=Green+Hell+-+Amazon+Rainforest+1',
                'https://placehold.co/1200x600/047857/ffffff?text=Green+Hell+-+Smartwatch+UI+2'
            ],
            review_vi: 'Một trải nghiệm sinh tồn cực kỳ chân thực và thú vị. Trải nghiệm cảm giác sinh tồn đúng nghĩa khi phải đối mặt với đủ mọi mối lo từ nhiễm trùng, đau ốm, xước xát, đói, mệt, buồn ngủ giữa rậm Amazon. Điều đặc biệt nhất là được trải nghiệm cảm giác sinh tồn cùng bạn bè, cùng nhau xây dựng nhà ở, cùng nhau chiến đấu với thổ dân và cung fnhau khám phá cốt truyện. Ngoài ra đồ họa game cũng cực kỳ đẹp mắt và chân thực khiến cảm giác nôn nao, sợ hãi hay tò mò cũng chân thực không kém.',
            review_en: 'An immersive survival experience that captures the essence of true survival. Facing threats from infections, injuries, hunger, fatigue, and sleep deprivation in the Amazon jungle is intense. The most unique aspect is experiencing survival with friends—building shelters together, fighting off hostile tribes, and exploring the storyline as a team. The game\'s stunningly realistic graphics amplify feelings of anxiety, fear, and curiosity.'
        },
        {
            id: 'gtav',
            name: 'Grand Theft Auto V (GTA V)',
            avatar: 'https://placehold.co/100x100/1e293b/ffffff?text=GTA5',
            since: 'Since 2020',
            genre_vi: 'Thế giới mở / Hành động nhập vai',
            genre_en: 'Open-World / Action-Adventure',
            highlight_vi: 'Environmental Storytelling',
            highlight_en: 'Environmental Storytelling',
            images: [
                'https://placehold.co/1200x600/0f172a/ffffff?text=GTA+V+-+Los+Santos+1',
                'https://placehold.co/1200x600/334155/ffffff?text=GTA+V+-+Heist+Planning+2'
            ],
            review_vi: 'Đỉnh cao của nghệ thuật thiết kế thế giới mở sống động với cốt truyện đặc sắc và lôi cuốn. Cách GTA V cho phép chuyển đổi mượt mà giữa 3 nhân vật ngay trong một nhiệm vụ Heist giúp góc nhìn gameplay luôn tươi mới, dồn dập và giữ sự phấn khích ở mức tối đa.',
            review_en: 'A pinnacle of open-world design with a compelling narrative. GTA V\'s seamless character-switching during heist missions keeps gameplay fresh, fast-paced, and maximizes excitement. '
        },
        {
            id: 'aoe',
            name: 'Age Of Empires (Đế Chế)',
            avatar: 'https://placehold.co/100x100/b45309/ffffff?text=AoE',
            since: 'Since 2012',
            genre_vi: 'Chiến thuật thời gian thực (RTS)',
            genre_en: 'Real-Time Strategy (RTS)',
            highlight_vi: 'Resource Balancing & Tech Tree',
            highlight_en: 'Resource Balancing & Tech Tree',
            images: [
                'https://placehold.co/1200x600/78350f/ffffff?text=Age+Of+Empires+-+Base+Building+1',
                'https://placehold.co/1200x600/b45309/ffffff?text=Age+Of+Empires+-+RTS+Battles+2'
            ],
            review_vi: 'Tựa game trên máy tính đầu tiên mình chơi và được dạy bởi bố mình. Một tựa game tuyệt vời khi chơi với bạn bè. Mặc dù bản thân chơi không hề giỏi nhưng mỗi lần ngồi chơi mình sẽ hoàn toàn bị cuốn vào game và không thể ngừng chơi. Mình đã chơi từ AOE I đến II và sau đó là III và IV nhưng bản khiến mình thấy hay và chân thực nhất là AOE II.',
            review_en: 'The first computer game I played, taught by my father. An excellent game to play with friends. Although I am not particularly skilled at it, every time I sit down to play, I become completely immersed and cannot stop playing. I have played from AOE I to II and then III and IV, but the version that I find the most enjoyable and realistic is AOE II.'
        }
    ];

    let currentGameIndex = 0;
    let currentImgIndex = 0;
    let sliderTransition;

    // Các phần tử DOM bên cột phải
    const sliderImg = document.getElementById('game-slider-img');
    const dotsContainer = document.getElementById('slider-dots');
    const titleEl = document.getElementById('game-title');
    const sinceEl = document.getElementById('game-since');
    const genreEl = document.getElementById('game-genre');
    const highlightEl = document.getElementById('game-highlight');
    const reviewEl = document.getElementById('game-review-text');
    const searchInput = document.getElementById('game-search-input');

    // Hàm kiểm tra ngôn ngữ hiện tại (dựa trên nút #lang-btn)
    function getCurrentLang() {
        return window.currentLang || 'vi';
    }

    function renderGameList(filterText = '') {
        gameListEl.innerHTML = '';
        const matchingGames = myGamesData
            .map((game, index) => ({ game, index }))
            .filter(({ game }) => game.name.toLowerCase().includes(filterText.trim().toLowerCase()));

        if (matchingGames.length === 0) {
            const emptyState = document.createElement('li');
            emptyState.className = 'steam-empty-state';
            emptyState.textContent = getCurrentLang() === 'vi'
                ? 'Không tìm thấy trò chơi phù hợp.'
                : 'No games match your search.';
            gameListEl.appendChild(emptyState);
            return;
        }

        matchingGames.forEach(({ game, index }) => {
            const item = document.createElement('li');
            item.className = `steam-game-item ${index === currentGameIndex ? 'active' : ''}`;
            item.tabIndex = 0;
            item.setAttribute('role', 'button');
            item.setAttribute('aria-pressed', String(index === currentGameIndex));

            const avatar = document.createElement('img');
            avatar.src = game.avatar;
            avatar.alt = '';
            avatar.setAttribute('aria-hidden', 'true');

            const name = document.createElement('span');
            name.textContent = game.name;
            item.append(avatar, name);

            const selectGame = () => {
                currentGameIndex = index;
                currentImgIndex = 0;
                renderGameList(searchInput.value);
                renderGameDetails();
            };

            item.addEventListener('click', selectGame);
            item.addEventListener('keydown', (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    selectGame();
                }
            });
            gameListEl.appendChild(item);
        });
    }

    function updateSliderImage() {
        const game = myGamesData[currentGameIndex];
        if (sliderTransition) window.clearTimeout(sliderTransition);
        sliderImg.style.opacity = 0;
        sliderTransition = window.setTimeout(() => {
            sliderImg.src = game.images[currentImgIndex];
            sliderImg.alt = `${game.name} gameplay screenshot`;
            sliderImg.style.opacity = 1;
        }, 150);

        dotsContainer.innerHTML = '';
        game.images.forEach((_, idx) => {
            const dot = document.createElement('button');
            dot.type = 'button';
            dot.className = `dot ${idx === currentImgIndex ? 'active' : ''}`;
            dot.setAttribute('aria-label', getCurrentLang() === 'vi' ? `Xem ảnh ${idx + 1}` : `View image ${idx + 1}`);
            dot.setAttribute('aria-current', String(idx === currentImgIndex));
            dot.addEventListener('click', () => {
                currentImgIndex = idx;
                updateSliderImage();
            });
            dotsContainer.appendChild(dot);
        });
    }

    function renderGameDetails() {
        const game = myGamesData[currentGameIndex];
        const lang = getCurrentLang();

        titleEl.innerText = game.name;
        sinceEl.innerText = game.since;

        genreEl.className = 'stat-value lang';
        genreEl.setAttribute('data-vi', game.genre_vi);
        genreEl.setAttribute('data-en', game.genre_en);
        genreEl.innerText = lang === 'vi' ? game.genre_vi : game.genre_en;

        highlightEl.className = 'stat-value lang';
        highlightEl.setAttribute('data-vi', game.highlight_vi);
        highlightEl.setAttribute('data-en', game.highlight_en);
        highlightEl.innerText = lang === 'vi' ? game.highlight_vi : game.highlight_en;

        reviewEl.className = 'review-body lang';
        reviewEl.setAttribute('data-vi', game.review_vi);
        reviewEl.setAttribute('data-en', game.review_en);
        reviewEl.innerText = lang === 'vi' ? game.review_vi : game.review_en;

        updateSliderImage();
    }

    document.getElementById('prev-img-btn').addEventListener('click', () => {
        const imgs = myGamesData[currentGameIndex].images;
        currentImgIndex = (currentImgIndex - 1 + imgs.length) % imgs.length;
        updateSliderImage();
    });

    document.getElementById('next-img-btn').addEventListener('click', () => {
        const imgs = myGamesData[currentGameIndex].images;
        currentImgIndex = (currentImgIndex + 1) % imgs.length;
        updateSliderImage();
    });

    searchInput.addEventListener('input', (event) => renderGameList(event.target.value));
    window.addEventListener('languagechange', () => {
        renderGameList(searchInput.value);
        renderGameDetails();
    });

    // Khởi chạy lần đầu tiên
    renderGameList();
    renderGameDetails();
}

//end games page js
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
            since: 'Since 2018',
            genre_vi: 'Sandbox / Sinh tồn & Sáng tạo',
            genre_en: 'Sandbox / Survival & Creative',
            highlight_vi: 'World Building & Redstone Logic',
            highlight_en: 'World Building & Redstone Logic',
            images: [
                'https://placehold.co/1200x600/14532d/ffffff?text=Minecraft+-+World+Building+1',
                'https://placehold.co/1200x600/166534/ffffff?text=Minecraft+-+Redstone+Automation+2',
                'https://placehold.co/1200x600/15803d/ffffff?text=Minecraft+-+Co-op+Server+3'
            ],
            review_vi: 'Tựa game định hình tư duy không gian và tính tự do trong thiết kế của mình. Điều kỳ diệu nhất của Minecraft là cách những khối vuông đơn giản cùng hệ thống mạch Redstone có thể mô phỏng lại logic lập trình, cho phép người chơi tự đặt ra mục tiêu và tự viết nên câu chuyện của riêng mình.',
            review_en: 'The game that shaped my spatial thinking and love for sandbox freedom. What fascinates me most about Minecraft is how simple blocks and Redstone circuits mirror programming logic, empowering players to set their own goals and craft their own emergent stories.'
        },
        {
            id: 'pubg',
            name: 'PUBG Mobile',
            avatar: 'https://placehold.co/100x100/ca8a04/ffffff?text=PUBG',
            since: 'Since 2020',
            genre_vi: 'Battle Royale / Bắn súng sinh tồn',
            genre_en: 'Battle Royale / Tactical Shooter',
            highlight_vi: 'Clan ʚBearGangɞ',
            highlight_en: 'ʚBearGangɞ Clan Member',
            images: [
                'https://placehold.co/1200x600/854d0e/ffffff?text=PUBG+Mobile+-+BearGang+Squad+1',
                'https://placehold.co/1200x600/a16207/ffffff?text=PUBG+Mobile+-+Tactical+Map+2',
                'https://placehold.co/1200x600/ca8a04/ffffff?text=PUBG+Mobile+-+Winner+Chicken+Dinner+3'
            ],
            review_vi: 'Tựa game gắn bó lâu dài nhất cùng những người đồng đội trong clan ʚBearGangɞ. Dưới góc độ thiết kế, PUBG Mobile làm cực kỳ tốt bài toán kiểm soát nhịp độ trận đấu (Pacing) qua cơ chế thu hẹp vòng bo và tỷ lệ Rủi ro - Phần thưởng (Risk vs. Reward) khi tranh chấp thính, biến mỗi ván đấu thành một kịch bản sinh tồn không bao giờ lặp lại.',
            review_en: 'My longest-running game alongside my teammates in the ʚBearGangɞ clan. From a design standpoint, PUBG Mobile masters match pacing through its shrinking zone mechanics and Risk-vs-Reward airdrop engagements, turning every match into an unscripted survival drama.'
        },
        {
            id: 'valorant',
            name: 'Valorant',
            avatar: 'https://placehold.co/100x100/dc2626/ffffff?text=VAL',
            since: 'Since 2022',
            genre_vi: 'Bắn súng chiến thuật 5v5 (FPS)',
            genre_en: '5v5 Tactical Hero Shooter',
            highlight_vi: 'Map Control & Economy System',
            highlight_en: 'Map Control & Economy System',
            images: [
                'https://placehold.co/1200x600/991b1b/ffffff?text=Valorant+-+Tactical+Setup+1',
                'https://placehold.co/1200x600/dc2626/ffffff?text=Valorant+-+Agent+Synergy+2'
            ],
            review_vi: 'Sự giao thoa sắc bén giữa kỹ năng đấu súng chính xác và bộ kỹ năng đặc vụ (Agent Utility). Chơi Valorant giúp mình quan sát rõ cách thiết kế bản đồ (Level Design) với các điểm nghẽn (Chokepoints) đặc trưng, cùng hệ thống kinh tế mua sắm đầu mỗi vòng đấu buộc cả đội phải tính toán chiến thuật liên tục.',
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
            review_vi: 'Một trải nghiệm sinh tồn cực kỳ chân thực giữa rừng rậm Amazon. Điểm mình tâm đắc nhất ở Green Hell là giao diện người dùng gắn liền với thế giới thực (Diegetic UI): thay vì hiện các thanh máu khô khan trên màn hình, người chơi phải tự xem đồng hồ thông minh để đo dinh dưỡng (Đạm, Béo, Tinh bột, Nước) và trực tiếp xoay kiểm tra từng vết thương trên cơ thể.',
            review_en: 'A brutally realistic survival experience in the Amazon rainforest. My favorite design aspect of Green Hell is its Diegetic UI: instead of immersion-breaking HUD bars, players check a physical smartwatch to track macro-nutrients and manually inspect their limbs to treat wounds and parasites.'
        },
        {
            id: 'gtav',
            name: 'Grand Theft Auto V (GTA V)',
            avatar: 'https://placehold.co/100x100/1e293b/ffffff?text=GTA5',
            since: 'Since 2021',
            genre_vi: 'Thế giới mở / Hành động nhập vai',
            genre_en: 'Open-World / Action-Adventure',
            highlight_vi: 'Environmental Storytelling',
            highlight_en: 'Environmental Storytelling',
            images: [
                'https://placehold.co/1200x600/0f172a/ffffff?text=GTA+V+-+Los+Santos+1',
                'https://placehold.co/1200x600/334155/ffffff?text=GTA+V+-+Heist+Planning+2'
            ],
            review_vi: 'Đỉnh cao của nghệ thuật thiết kế thế giới mở sống động và cơ chế kể chuyện qua môi trường (Environmental Storytelling). Cách GTA V cho phép chuyển đổi mượt mà giữa 3 nhân vật ngay trong một nhiệm vụ Heist giúp góc nhìn gameplay luôn tươi mới, dồn dập và giữ sự phấn khích ở mức tối đa.',
            review_en: 'A benchmark in living open-world design and environmental storytelling. The seamless three-character switching mechanic during complex Heist missions keeps gameplay perspectives dynamic, cinematic, and relentlessly engaging.'
        },
        {
            id: 'aoe',
            name: 'Age Of Empires (Đế Chế)',
            avatar: 'https://placehold.co/100x100/b45309/ffffff?text=AoE',
            since: 'Since 2017',
            genre_vi: 'Chiến thuật thời gian thực (RTS)',
            genre_en: 'Real-Time Strategy (RTS)',
            highlight_vi: 'Resource Balancing & Tech Tree',
            highlight_en: 'Resource Balancing & Tech Tree',
            images: [
                'https://placehold.co/1200x600/78350f/ffffff?text=Age+Of+Empires+-+Base+Building+1',
                'https://placehold.co/1200x600/b45309/ffffff?text=Age+Of+Empires+-+RTS+Battles+2'
            ],
            review_vi: 'Tựa game chiến thuật kinh điển dạy mình bài học đầu tiên về Quản trị tài nguyên (Thực, Gỗ, Vàng, Đá) và cân bằng bất đối xứng (Asymmetric Balance) giữa các nền văn minh. Cơ chế khắc chế binh chủng theo vòng tròn Kéo - Búa - Bao là nền tảng kinh điển nhưng luôn tạo ra chiều sâu chiến thuật vô tận.',
            review_en: 'A classic RTS that taught me my first lessons in resource management (Food, Wood, Gold, Stone) and asymmetric civilization balancing. Its rock-paper-scissors unit counter system remains a timeless foundation for deep tactical decision-making.'
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
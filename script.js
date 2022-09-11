const battles = [
    {
        name: "Battle #1 - Pilot Battle",
        battle : ["1. Simply Square", "2. Carrom", "4. Ups And Downs", "5. Acid Rain", "6. Missing Slice", "7. Leafy Trail",
        "10. Cloaked Spirits", "11. Eye Of Sauron", "12. Wiggly Moustache"]
    }, {
        name: "Battle #2 - Visibility",
        battle: ["13. Totally Triangle", "14. Web Maker Logo"]
    }, {
        name: "Battle #3 - Cursor",
        battle: ["19. Cube"]
    }, {
        name: "Battle #4 - Display",
        battle: ["25. Blossom", "28. Cups & Balls"]
    }, {
        name: "Battle #14 - ZIndex",
        battle: ["77. Notes"]
    }, {
        name: "Battle #15 - Filter",
        battle: ["81. Odoo"]
    }, {
        name: "Battle #19 - Spacing",
        battle: ["109. Curtain"]
    }, {
        name: "Battle #20 - Hover",
        battle: ["119. Pacman", "120. Duck Hunt"]
    }
];

function createCardContainer(name, battle) {
    let cards = createCards(name, battle);
    let str = `
        <div class="card-container">
            <span class="heading">${name}</span>
            <div class="cards">
                ${cards}
            </div>
        </div>
    `
    return str;
}

function createCards(name, battles) {
    console.log("battles are" + battles);
    let result = battles.map(el => createCard(name, el));
    return result;
}

function createCard(name, battle) {
    let str = `
                <div class="card">
                    <a target="_blank" href="/${formatString(name)}/${formatString(battle)}.html">${battle}</a>
                </div>
    `;
    return str;
}

function formatString(str) {
    return str.replace(/\s/g, '');
}

const html = battles.map(({ name, battle}) => createCardContainer(name, battle));
console.log(html);

const container = document.getElementById('list');
container.innerHTML = html;
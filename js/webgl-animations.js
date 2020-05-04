const heroSection = document.querySelector(".hero-section");
const heroCanvas = document.querySelector(".hero-canvas");
const contactContainer = document.querySelector(".coffee-container");
const coffeeCanvas = document.querySelector(".coffee-canvas");

// Hero canvas animation
let heroApp = new PIXI.Application({
    width: 945,
    height: 900,
    view: heroCanvas
});

heroApp.renderer.view.style.zIndex = "-1";
heroApp.renderer.backgroundColor = 0xFFFFFF;

heroSection.appendChild(heroApp.view);

let heroImg = new PIXI.Sprite.from("images/hero-image.png");
heroImg.width = 945;
heroImg.height = 900;

heroApp.stage.addChild(heroImg);

depthHeroMap = new PIXI.Sprite.from("images/hero-image-map.png");
heroApp.stage.addChild(depthHeroMap);

displacementHeroFilter = new PIXI.filters.DisplacementFilter(depthHeroMap);
heroApp.stage.filters = [displacementHeroFilter];

window.onmousemove = function (e) {
    displacementHeroFilter.scale.x = (window.innerWidth / 2 - e.clientX) / 65;
    displacementHeroFilter.scale.y = (window.innerHeight / 2 - e.clientY) / 45;
}

// Coffee canvas animation
let coffeeApp;

function initPixi() {
    coffeeApp = new PIXI.Application({
        width: 500,
        height: 499,
        view: coffeeCanvas
    });

    contactContainer.appendChild(coffeeApp.view)

    let coffeImg = new PIXI.Sprite.from("images/coffee-cup.png");
    coffeImg.width = 500;
    coffeImg.height = 499;

    coffeeApp.stage.addChild(coffeImg);

    displacementSprite = new PIXI.Sprite.from("images/clouds2.png");
    displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);

    displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
    coffeeApp.stage.addChild(displacementSprite);
    coffeeApp.stage.filters = [displacementFilter];

    coffeeApp.renderer.view.style.transform = "scale(1.02)";

    displacementSprite.scale.x = 6;
    displacementSprite.scale.y = 6;

    animate();
}

function animate() {
    displacementSprite.x += 7;
    displacementSprite.y += 5;
    requestAnimationFrame(animate);
}

initPixi();
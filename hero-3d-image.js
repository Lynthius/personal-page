const heroSection = document.querySelector(".hero-section");
const heroCanvas = document.querySelector(".hero-canvas");

let app = new PIXI.Application({
    width: 945,
    height: 900,
    view: heroCanvas
});

app.renderer.view.style.zIndex = "-1";
app.renderer.backgroundColor = 0xFFFFFF;

heroSection.appendChild(app.view);

let img = new PIXI.Sprite.from("/images/hero-image.png");
img.width = 945;
img.height = 900;

app.stage.addChild(img);

depthMap = new PIXI.Sprite.from("/images/hero-image-map.png");
app.stage.addChild(depthMap);

displacementFilter = new PIXI.filters.DisplacementFilter(depthMap);
app.stage.filters = [displacementFilter];

window.onmousemove = function (e) {
    displacementFilter.scale.x = (window.innerWidth / 2 - e.clientX) / 65;
    displacementFilter.scale.y = (window.innerHeight / 2 - e.clientY) / 45;
}
if (window.screen.width >= 992) {
  const heroSection = document.querySelector(".hero-section");
  const heroCanvas = document.querySelector(".hero-canvas");

  // Hero canvas animation
  let heroApp = new PIXI.Application({
    width: 945,
    height: 900,
    view: heroCanvas,
  });

  heroApp.renderer.view.style.zIndex = "-1";
  heroApp.renderer.backgroundColor = 0xffffff;

  heroSection.appendChild(heroApp.view);

  let heroImg = new PIXI.Sprite.from("dist/assets/images/hero-image.png");
  heroImg.width = 945;
  heroImg.height = 900;

  heroApp.stage.addChild(heroImg);

  depthHeroMap = new PIXI.Sprite.from("dist/assets/images/hero-image-map.png");
  heroApp.stage.addChild(depthHeroMap);

  displacementHeroFilter = new PIXI.filters.DisplacementFilter(depthHeroMap);
  heroApp.stage.filters = [displacementHeroFilter];

  window.onmousemove = function (e) {
    displacementHeroFilter.scale.x = (window.innerWidth / 2 - e.clientX) / 65;
    displacementHeroFilter.scale.y = (window.innerHeight / 2 - e.clientY) / 45;
  };
}

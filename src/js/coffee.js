if (window.screen.width >= 991) {
  const contactContainer = document.querySelector(".coffee-container");
  const coffeeCanvas = document.querySelector(".coffee-canvas");

  // Coffee canvas animation
  let coffeeApp;

  function initPixi() {
    coffeeApp = new PIXI.Application({
      width: 500,
      height: 499,
      view: coffeeCanvas,
    });

    contactContainer.appendChild(coffeeApp.view);

    let coffeImg = new PIXI.Sprite.from("dist/assets/images/coffee-cup.png");
    coffeImg.width = 500;
    coffeImg.height = 499;

    coffeeApp.stage.addChild(coffeImg);

    displacementSprite = new PIXI.Sprite.from("dist/assets/images/clouds2.png");
    displacementFilter = new PIXI.filters.DisplacementFilter(
      displacementSprite
    );

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
}

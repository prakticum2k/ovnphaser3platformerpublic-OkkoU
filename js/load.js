var loadState = {
  preload: function () {
    var loadingLabel = game.add.text(game.world.centerX, 150, 'Loading...', {font: '30px Audiowide', fill: '#ffffff'});
    loadingLabel.anchor.setTo(0.5, 0.5);

    var progressBar = game.add.sprite(game.world.centerX, 200, 'progressBar');
    progressBar.anchor.setTo(0.5, 0.5);
    game.load.setPreloadSprite(progressBar);

    // Spritesheets
    game.load.spritesheet('player', 'assets/images/player.png', 12, 24);
    game.load.spritesheet('enemy', 'assets/images/enemy.png', 12, 24);
    game.load.spritesheet('mute', 'assets/images/muteButton.png', 28, 22);

    // Images
    game.load.image('coin', 'assets/images/coin.png');
    game.load.image('pixel', 'assets/images/pixel.png');
    game.load.image('background', 'assets/images/background.png');
    game.load.image('jumpButton', 'assets/images/jumpButton.png');
    game.load.image('rightButton', 'assets/images/rightButton.png');
    game.load.image('leftButton', 'assets/images/leftButton.png');

    // Sounds
    game.load.audio('jump', 'assets/sounds/jump.mp3');
    game.load.audio('coin', 'assets/sounds/coin.mp3');
    game.load.audio('dead', 'assets/sounds/dead.mp3');

    // Tileset & Tilemap
    game.load.image('tileset', 'assets/tileset.png');
    game.load.tilemap('map', 'assets/map.json', null, Phaser.Tilemap.TILED_JSON);
  },

  create: function () {
    game.state.start('menu');
  },
};

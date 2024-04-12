var menuState = {
  // Create
  create: function () {
    game.global.levelIndex = 1;
    game.add.image(0, 0, 'background');

    this.muteButton = game.add.button(20, 20, 'mute', this.toggleSound, this);
    this.muteButton.input.useHandCursor = true;

    if (game.sound.mute) {
      this.muteButton.frame = 1;
    }

    var nameLabel = game.add.text(game.world.centerX, -50, 'Super Coin Box', {font: '50px Audiowide', fill: '#ffffff'});
    nameLabel.anchor.setTo(0.5, 0.5);
    game.add.tween(nameLabel).to({y: 80}, 1000).easing(Phaser.Easing.Bounce.Out).start();

    if (game.device.desktop) {
      var text = 'Press the UP arrow key to start';
    } else {
      var text = 'Touch the screen to start';
    }

    var startLabel = game.add.text(game.world.centerX, game.world.height - 80, text, {
      font: '25px Audiowide',
      fill: '#ffffff',
    });
    startLabel.anchor.setTo(0.5, 0.5);
    game.add.tween(startLabel).to({angle: -2}, 500).to({angle: 2}, 500).loop().start();

    // Start game
    var upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);

    if (game.device.desktop) {
      upKey.onDown.addOnce(this.start, this);
    } else {
      game.input.onDown.addOnce(this.start, this);
    }

    if (!localStorage.getItem('bestScore')) {
      localStorage.setItem('bestScore', 0);
    }

    if (game.global.score > localStorage.getItem('bestScore')) {
      localStorage.setItem('bestScore', game.global.score);
    }

    var text = `Score: ${game.global.score} \nBest Score: ${localStorage.getItem('bestScore')}`;

    var scoreLabel = game.add.text(game.world.centerX, game.world.centerY, text, {
      font: '25px Audiowide',
      fill: '#ffffff',
      align: 'center',
    });
    scoreLabel.anchor.setTo(0.5, 0.5);
  },

  toggleSound: function () {
    game.sound.mute = !game.sound.mute;
    this.muteButton.frame = game.sound.mute ? 1 : 0;
  },

  start: function () {
    game.state.start('play');
  },
};

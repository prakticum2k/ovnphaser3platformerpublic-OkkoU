var bootState = {
  preload: function () {
    game.load.image('progressBar', 'assets/images/progressBar.png');
  },

  create: function () {
    game.stage.backgroundColor = '#4299d8';
    game.physics.startSystem(Phaser.Physics.ARCADE);

    document.body.style.backgroundColor = '#353535';

    if (!game.device.desktop) {
      game.scale.minWidth = 250;
      game.scale.minHeight = 170;
      game.scale.maxWidth = 1000;
      game.scale.maxHeight = 680;
    }

    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

    game.scale.pageAlignVertically = true;
    game.scale.pageAlignHorizontally = true;

    game.scale.setScreenSize(true);

    game.state.start('load');
  },
};

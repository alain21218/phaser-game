var config = {
    type: Phaser.CANVAS,
    width: 800,
    height: 600,
    scene: { preload, init, create }
};

const game = new Phaser.Game(config);
let player;

function preload() {
    this.load.spritesheet('player', 'src/assets/steampunk_f1.png', { frameWidth: 32, frameHeight: 48 });
}

function init() {
    player = new Player(400, 300, 50, 75);

    this.input.on('pointerdown', e => {
        player.x = e.x;
        player.y = e.y;
    });
}

class Player {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w; 
        this.h = h; 
    }
}

function create() {
    player = this.add.sprite(player.x, player.y, 'player');
    player.setScale(1.5)
    this.anims.create({ key: 'walk-bottom', frames: this.anims.generateFrameNames('player', { start: 0, end: 3 }), frameRate: 10, repeat: -1 });
    this.anims.create({ key: 'walk-left', frames: this.anims.generateFrameNames('player', { start: 4, end: 7 }), frameRate: 10, repeat: -1 });
    this.anims.create({ key: 'walk-right', frames: this.anims.generateFrameNames('player', { start: 8, end: 11 }), frameRate: 10, repeat: -1 });
    this.anims.create({ key: 'walk-top', frames: this.anims.generateFrameNames('player', { start: 12, end: 15 }), frameRate: 10, repeat: -1 });
    
    this.anims.create({ key: 'hiddle-bottom', frames: this.anims.generateFrameNames('player', { start: 0, end: 0 }), frameRate: 10, repeat: -1 });
    this.anims.create({ key: 'hiddle-left', frames: this.anims.generateFrameNames('player', { start: 4, end: 4 }), frameRate: 10, repeat: -1 });
    this.anims.create({ key: 'hiddle-right', frames: this.anims.generateFrameNames('player', { start: 8, end: 8 }), frameRate: 10, repeat: -1 });
    this.anims.create({ key: 'hiddle-top', frames: this.anims.generateFrameNames('player', { start: 12, end: 12 }), frameRate: 10, repeat: -1 });
    player.anims.play('walk-bottom');
}
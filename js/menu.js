var Menu = {
  preload: function(){
    game.stage.backgroundColor = '#000000';
    game.load.image('fondomenu', 'assets/map/fondolvl2.png');
    game.load.image("logo", "assets/map/digizlogo2.png");
    game.load.image("facebook", "assets/sprites/facebook.png");
    game.load.audio('digizop', ['assets/audio/digizop.mp3']);
    game.load.spritesheet('botonjugar', 'assets/sprites/botonjugar.png', 192, 192, 8);


    //game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;

    //game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
    firstRunLandscape = game.scale.isGameLandscape;
    game.scale.forceOrientation(false, true);
    game.scale.enterIncorrectOrientation.add(handleIncorrect);
    game.scale.leaveIncorrectOrientation.add(handleCorrect);
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.setShowAll();
    window.addEventListener('resize', function () {  this.game.scale.refresh();});

    this.game.scale.refresh();

        //game.scale.refresh();



  },
  create: function(){

    //game.add.tileSprite(0, 0, window.innerWidth, window.innerHeight, 'background');
    game.add.tileSprite(0, 0, 1000, 1000, 'fondomenu');
    digizop = game.add.audio('digizop');
    digizop.loop = true;
    digizop.play();

    botonjugar = game.add.sprite(game.width/2, game.height/2 +50, 'botonjugar');
    game.physics.enable(botonjugar, Phaser.Physics.ARCADE);
    var portalanim = botonjugar.animations.add('portalanim');
    botonjugar.animations.play('portalanim', 30, true);
    botonjugar.body.enable = true;
    botonjugar.anchor.setTo(0.5);
    botonjugar.inputEnabled = true;

    botonjugar.events.onInputDown.add(this.iniciarJuego, this);



    logo = game.add.sprite(game.width/2,game.height/2 -125, 'logo');
    logo.anchor.setTo(0.5, 0.5);
    logo.scale.setTo(0.2, 0.2);

    facebook = game.add.sprite(game.width/2,game.height/2 +150, 'facebook');
    facebook.anchor.setTo(0.5, 0.5);
    //facebook.scale.setTo(0.2, 0.2);
    facebook.inputEnabled = true;
    facebook.events.onInputDown.add(this.irfacebook, this);


  },


  iniciarJuego: function(){

    digizop.stop();


    game.state.start('Menunivel');
  },
  irfacebook: function(){

    window.open("https://www.facebook.com/Digiz.game", "_blank");
  }

};



function handleIncorrect(){
     	if(!game.device.desktop){
     		document.getElementById("turn").style.display="block";
     	}
	}

	function handleCorrect(){
		if(!game.device.desktop){
			if(firstRunLandscape){
				gameRatio = window.innerWidth/window.innerHeight;
				game.width = window.innerWidth;
				game.height = window.innerHeight;
				game.renderer.resize(game.width,game.height);
				game.state.start("Play");
			}
			document.getElementById("turn").style.display="none";
		}
	}

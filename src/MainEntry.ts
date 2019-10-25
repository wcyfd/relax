class MainEntry extends eui.UILayer {
    relaxGame: relax.RelaxGame;

    constructor() {
        super();
        egret.Logger.logLevel = egret.Logger.ALL;

    }

    protected createChildren(): void {
        super.createChildren();

    }

    protected childrenCreated(): void {
        super.childrenCreated();


        this.relaxGame = new relax.RelaxGame();


        // this.relaxGame.scaleX = 0.5;
        // this.relaxGame.scaleY = 0.5;


        this.addChild(this.relaxGame);
    }
}
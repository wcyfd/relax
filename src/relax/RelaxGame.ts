module relax {
	export class RelaxGame extends egret.DisplayObjectContainer {

		button: egret.Shape;
		public constructor() {
			super();

			this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
		}

		onAddToStage(event: egret.Event) {
			console.log("RelaxGame onAddToStage");

			this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
			this.width = this.stage.stageWidth;
			this.height = this.stage.stageHeight;

			let back = new egret.Shape();
			this.addChild(back);
			back.graphics.beginFill(0x0000ff);
			back.graphics.drawRect(0, 0, this.width, this.height);
			egret.log(`${this.width} ${this.height}`);
			back.graphics.endFill();


			let btn = new egret.Shape();
			this.button = btn;

			btn.graphics.beginFill(0xff0000);
			btn.graphics.drawRect(this.width, this.height, 60, 40);
			btn.graphics.endFill();
			btn.anchorOffsetX = 60;
			btn.anchorOffsetY = 40;
			this.addChild(btn);

			btn.touchEnabled = true;
			btn.addEventListener(egret.TouchEvent.TOUCH_TAP, onClickButton, this);

			function onClickButton(evt: egret.TouchEvent) {
				let tile: egret.Shape = new egret.Shape();
				tile.graphics.beginFill(0xff00ff);
				tile.graphics.drawRect(0, 0, 100, 100);
				tile.graphics.endFill();
				this.addChild(tile);


				tile.touchEnabled = true;

				let offsetX: number;
				let offsetY: number;

				tile.addEventListener(egret.TouchEvent.TOUCH_BEGIN, onTouchBegin, this);


				function onTouchBegin(evt: egret.TouchEvent) {
					offsetX = evt.stageX - tile.localToGlobal().x;
					offsetY = evt.stageY - tile.localToGlobal().y;
					this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, onMove, this);
					tile.addEventListener(egret.TouchEvent.TOUCH_END, onTouchEnd, this);
				}

				function onTouchEnd(evt: egret.TouchEvent) {
					this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, onMove, this);
					tile.removeEventListener(egret.TouchEvent.TOUCH_END, onTouchEnd, this);
				}

				function onMove(evt: egret.TouchEvent) {
					tile.x = (evt.stageX - offsetX) / this.scaleX;
					tile.y = (evt.stageY - offsetY) / this.scaleY;
				}
			}



			let leftTop = new egret.Shape();
			leftTop.graphics.beginFill(0xffffff);
			leftTop.graphics.drawRect(0, 0, 20, 20);
			leftTop.graphics.endFill()
			this.addChild(leftTop)

			let rightButtom = new egret.Shape();
			rightButtom.graphics.beginFill(0xffffff);
			rightButtom.graphics.drawRect(this.width, this.height, 20, 20);
			rightButtom.graphics.endFill()
			rightButtom.anchorOffsetX = 20;
			rightButtom.anchorOffsetY = 20;
			this.addChild(rightButtom)


		}



	}
}
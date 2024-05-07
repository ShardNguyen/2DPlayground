import { _decorator, Component, Node, repeat, UITransform } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Square')
export class Square extends Component {

	// This is properties for the object
	@property({type: Number})
	private speed: 1

	// This is when the game start rendering
	start() {

	}

	update(deltaTime: number) {
		this.node.setPosition(this.node.getPosition().x += this.speed * deltaTime, this.node.position.y)
	}
}

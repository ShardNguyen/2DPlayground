import { _decorator, Component, EventMouse, Input, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Mouse')
export class Mouse extends Component {
	onLoad() {
		this.node.on(Input.EventType.MOUSE_DOWN, (event: EventMouse) => {
			console.log("Mouse Down " + event.currentTarget.name)
			event.bubbles = false
		})
	}

    start() {

    }

    update(deltaTime: number) {
        
    }
}



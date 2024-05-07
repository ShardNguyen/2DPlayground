import { _decorator, Component, Input, input, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ComputerMouse')
export class ComputerMouse extends Component {

	// This function gets triggered when the node is activated for the first time
	onload() {
		this.node.on(Input.EventType.MOUSE_DOWN, () => {
			console.log("Mouse down")
		})
	}

    start() {

    }

    update(deltaTime: number) {
        
    }
}



import React, { MouseEvent} from "react";

export default class Button extends React.Component<IButtonProps, IButtonState> {
    constructor(props: IButtonProps) {
        super(props);
        this.state = { disabled: false };
    }
    handleClick = (event: MouseEvent) => {
        this.props.handleRequestQueue(this.props.nFloor);
        console.log('type:',this.props.type, '-elevatorId:', this.props.elevatorId, ' - nFloor:', this.props.nFloor, ' - direction:', this.props.direction, ' - disabled:', this.state.disabled);
    }
    render() {
        return (
            (this.props.direction === 1) ?
                <button className="floor-button up" onClick={this.handleClick}></button> :
                <button className="floor-button down" onClick={this.handleClick}></button>
        );
    }
}

export interface IButtonProps {
    nFloor: number,
    elevatorId: number,
    direction?: number,
    type: string,
    disableRestrictedFloor?:boolean
    handleRequestQueue(nFloor:number): void 
}

interface IButtonState {
    disabled: boolean
}



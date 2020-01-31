import React, { MouseEvent} from "react";

export default class Button extends React.Component<IButtonProps, IButtonState> {
    constructor(props: IButtonProps) {
        super(props);
        this.state = { illuminate: false };
    }
    handleClick = (event: MouseEvent) => {
        console.log('type:',this.props.type, '-elevator:', this.props.elevator, ' - nFloor:', this.props.nFloor, ' - direction:', this.props.direction, ' - illuminate:', this.state.illuminate);
    }
    render() {
        return (
            (this.props.direction === 1) ?
                <button className="floor-button up" onClick={this.handleClick}></button> :
                <button className="floor-button down" onClick={this.handleClick}></button>
        );
    }
}

interface IButtonProps {
    nFloor: number,
    elevator: string,
    direction: number,
    type: string
}

interface IButtonState {
    illuminate: boolean
}
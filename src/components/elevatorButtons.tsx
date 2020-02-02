import React from "react";
import Button from './button';
import settting from '../setting'

export default class ElevatorButtons extends React.Component<IElevatorButtonsProps> {
    minFloor:number;
    constructor(props:IElevatorButtonsProps){
        super(props);
        (settting.building.hasBasement)? this.minFloor = -1 : this.minFloor = 0
    }
    
    
    createButtons(nFloors:number, elevatorId:number, type:string){
        let buttons = [];
        for (let i = nFloors; i >= this.minFloor ; i--) {
           
            buttons.push(
                (this.props.idElevator===0)?
                    ((i===this.minFloor || i===nFloors)?
                        <ButtonElevator 
                            disableRestrictedFloor={this.props.disableRestrictedFloor} 
                            handleRequestQueue={this.props.handleRequestQueue} 
                            key={i} 
                            nFloor={i}
                            elevatorId={elevatorId} 
                            type={type}
                            />:                    
                        <ButtonElevator 
                            disableRestrictedFloor={false} 
                            handleRequestQueue={this.props.handleRequestQueue}
                            key={i} 
                            nFloor={i} 
                            elevatorId={elevatorId} 
                            type={type}
                        />):
                    <ButtonElevator 
                        disableRestrictedFloor={false} 
                        handleRequestQueue={this.props.handleRequestQueue} 
                        key={i} 
                        nFloor={i}
                        elevatorId={elevatorId} 
                        type={type}
                    />
            );
            
        }
        return buttons;
    } 

    render(){     
        let buttons = this.createButtons( settting.building.floors ,this.props.idElevator,'public');        
        return(
            <div className="card">                
                {buttons}
            </div>
        );
    }

}
interface IElevatorButtonsProps{    
    idElevator:number,
    handleRequestQueue(nFloor:number): void 
    disableRestrictedFloor:boolean,   
}




export class ButtonElevator extends Button {
    constructor(props:IButtonProps) {
        super(props);
        this.state = { disabled: false };
    }
    render() {
        return (            
                <button disabled={this.props.disableRestrictedFloor} className="btn btn-sm btn-secondary" style={elevatorButtonsStyle} onClick={this.handleClick}>{this.props.nFloor}</button> 
        );
    }
}

interface IButtonProps {
    nFloor: number,
    elevatorId: number,
    direction?: number,
    type: string,
    disableRestrictedFloor:boolean,
    handleRequestQueue(): void 
}

const elevatorButtonsStyle = {
    margin:5.4   
  };
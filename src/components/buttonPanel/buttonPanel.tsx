import React ,  { MouseEvent }from "react";
import settting from '../../setting'

export default class ButtonPanel extends React.Component<IButtonPanelProps> {
    minFloor:number;
    constructor(props:IButtonPanelProps){
        super(props);
        (settting.building.hasBasement)? this.minFloor = -1 : this.minFloor = 0
    }
    
    
    createButtons(nFloors:number, elevatorId:number, type:string){
        let buttons = [];
        for (let i = nFloors; i >= this.minFloor ; i--) {
           
            buttons.push(
                (this.props.idElevator===0)?
                    ((i===this.minFloor || i===nFloors)?
                        <Button
                            disableRestrictedFloor={this.props.disableRestrictedFloor} 
                            handleRequestQueue={this.props.handleRequestQueue} 
                            key={i} 
                            nFloor={i}
                            elevatorId={elevatorId} 
                            type={type}
                            />:                    
                        <Button 
                            disableRestrictedFloor={false} 
                            handleRequestQueue={this.props.handleRequestQueue}
                            key={i} 
                            nFloor={i} 
                            elevatorId={elevatorId} 
                            type={type}
                        />):
                    <Button 
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
        let buttons = this.createButtons( settting.building.floors ,this.props.idElevator,this.props.type);        
        return(
            <div className={(this.props.type==="lobby")?'': 'card'}>                
                {buttons}
            </div>
        );
    }

}
interface IButtonPanelProps{    
    idElevator:number,
    handleRequestQueue(nFloor:number): void 
    disableRestrictedFloor:boolean,
    type:string   
}




export class Button extends React.Component<IButtonProps> {
    constructor(props:IButtonProps) {
        super(props);
        this.state = { disabled: false };
    }
    handleClick = (event: MouseEvent) => {
        this.props.handleRequestQueue(this.props.nFloor ,this.props.direction);        
    }
    render() {
        return (    
            (this.props.type!=="elevator")?      
                <button disabled={false} className='btn btn-sm btn-secondary' style={elevatorButtonsStyle} onClick={this.handleClick}>Lobby</button>
                :<button disabled={this.props.disableRestrictedFloor} className='btn btn-sm btn-primary'style={elevatorButtonsStyle} onClick={this.handleClick}> 
                {this.props.nFloor}</button>
                 
        );
    }
}

interface IButtonProps {
    nFloor: number,
    elevatorId: number,
    direction?: number,
    type: string,
    disableRestrictedFloor:boolean,
    handleRequestQueue(nFloor: number, direction?:number): void
   
}

const elevatorButtonsStyle = {
    margin:5.5   
  };
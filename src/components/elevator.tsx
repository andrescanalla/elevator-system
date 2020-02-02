import React from "react";
import setting from "../setting";

const {
    times: { openCloseDoors, waiting }
} = setting;


export default class Elevator extends React.Component<IElevatorProps, IElevatorState> {
    constructor(props: IElevatorProps) {
        super(props);
        this.state = {
            
            doorOpen: true,
            
        }
        
        
    }

    componentDidMount(){
           /* 
           setTimeout(() => {
            // open doors...
            this.setState({doorOpen: true});
          }, openCloseDoors);
          */     
          
    }    

        
     

    render(){
        return(
            <div className={ this.state.doorOpen ? 'elevator-open' : 'elevator'} style={{ height: 34, width:30 }}></div>
        );
    }
        
}

interface IElevatorProps {
    id: number,
    type: string,   
    handleElevators(id:number, floor:number): void    
}

interface IElevatorState {
   
    doorOpen: boolean, 
    
}




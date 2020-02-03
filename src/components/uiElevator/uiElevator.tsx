import React from "react";

export default class UiElevator extends React.Component<IUiElevatorProps, IUiElevatorState> {
    constructor(props: IUiElevatorProps) {
        super(props);
        this.state = {            
            doorOpen: false,            
        }       
    }

    componentDidMount(){
           /* 
           setTimeout(() => {
            // open doors...
            this.setState({doorOpen: true});
          }, 3000);
          */         
    }    

    render(){
        return(
            <div className={ this.state.doorOpen ? 'elevator-open' : 'elevator'} >
            </div>
        );
    }
        
}

interface IUiElevatorProps {
    
    id: number,     
    handleElevators(id:number, floor:number): void    
}

interface IUiElevatorState {
   
    doorOpen: boolean, 
    
}

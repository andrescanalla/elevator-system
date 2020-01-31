import React from "react";

export default class Elevator extends React.Component<IElevatorProps, IElevatorState> {
    constructor(props:IElevatorProps){
        super(props);
        this.state = {
            direction: 0,
            doorState: 'open',
            type: 'public',
            currentFloor: 0,
            requestQueue: [],
            nextFloor: false
        }
    }
    
    render(){
        return(
            <div></div>
        );
    }
}

interface IElevatorProps {
    id: number,
    type: string,        
}        

interface IElevatorState {
    direction: number,  //0 stand | 1 up | 2 down | 3 maintenance
    doorState: string, // opened | closed   
    type: string,
    currentFloor: number,
    requestQueue: FloorCalledFrom[],
    nextFloor: false | FloorCalledFrom
}

type FloorCalledFrom = {
    floor: number;
    dir: number;
  };
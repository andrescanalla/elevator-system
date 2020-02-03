import React from 'react';
import Floors from '../components/floors';
import KeyCard from '../components/keyCard';
import ControllerElevator from '../components/controllerElevator';



export default class Building extends React.Component<IBuildingProps, IBuildingState> {

    constructor(props: IBuildingProps) {
        super(props);
        this.state = {
            elevatorsFloor: {0: 0, 1: 0 },
            disableRestrictedFloor: true,
            requestQueueFromLobby:{floor: 0, dir: 0}

        };
    }

    componentDidMount() {

    }

    private handleElevators = (id: number, floor: number): void => {
        let data = this.state.elevatorsFloor;
        data[id] = floor;
        this.setState({
            elevatorsFloor: data
        });
    }

    handleDisableRestrictedFloor = (disableRestrictedFloor: boolean): void => {
        this.setState({
            disableRestrictedFloor: disableRestrictedFloor
        });
    }
    handleRequestQueue = (nfloor:number, dir:number) =>{
        console.log('Floor:', nfloor, 'Direction:', dir);
        this.setState({
            requestQueueFromLobby: {floor:nfloor, dir:dir}
        }, ()=>{console.log('state:',this.state.requestQueueFromLobby)});
    }

    render() {
        //let controllers = this.createControllers(setting.building.nElevators);
        return (
            <div className="row">
                <div className="col">
                    <div className="row">
                        <div className="col" style={styles.col}>
                            <ControllerElevator handleRequestQueueFromLobby={this.state.requestQueueFromLobby} disableRestrictedFloor={this.state.disableRestrictedFloor} id={0} elevatorFloor={this.state.elevatorsFloor[0]} handlerElevator={this.handleElevators} >
                                <KeyCard handleDisableRestrictedFloor={this.handleDisableRestrictedFloor} />
                            </ControllerElevator>                         
                        </div>
                        <div className="col-3">
                            <Floors
                                handleRequestQueue={this.handleRequestQueue}
                                handleElevators={this.handleElevators}
                                floors={this.props.floors}
                                hasBasement={this.props.hasBasement}
                                elevatorsFloor={this.state.elevatorsFloor}
                            />
                        </div>
                        <div className="col" style={styles.col}>
                        <ControllerElevator handleRequestQueueFromLobby={this.state.requestQueueFromLobby} disableRestrictedFloor={false} id={1} elevatorFloor={this.state.elevatorsFloor[1]} handlerElevator={this.handleElevators} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

interface IBuildingProps {
    nElevators: number,
    floors: number
    hasBasement: boolean
}

interface IBuildingState {
    elevatorsFloor: FloorParam,
    disableRestrictedFloor: boolean,
    requestQueueFromLobby:FloorCalledFrom
}
type FloorParam = {
    [key: number]: number;
};
type FloorCalledFrom = {
    floor: number;
    dir: number;
};

const styles = {
    col: {
        display: 'flex'
    }
};


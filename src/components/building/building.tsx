import React from 'react';
import Floors from '../../components/floors/floors';
import KeyCard from '../../components/keyCard/keyCard';
import ControllerElevator from '../../components/controllerElevator/controllerElevator';



export default class Building extends React.Component<IBuildingProps, IBuildingState> {

    constructor(props: IBuildingProps) {
        super(props);
        this.state = {
            elevatorsFloor: {0: 0, 1: 0 },
            disableRestrictedFloor: true,     

        };
    }

    componentDidMount() {

    }

    public handleElevators = (id: number, floor: number): void => {
        let data = this.state.elevatorsFloor;
        data[id] = floor;
        this.setState({
            elevatorsFloor: data
        });
    }

    public handleDisableRestrictedFloor = (disableRestrictedFloor: boolean): void => {
        this.setState({
            disableRestrictedFloor: disableRestrictedFloor
        });
    }    

    render() {
        
        return (
            <div className="row">
                <div className="col">
                    <div className="row">
                        <div className="col" style={styles.col}>
                            <ControllerElevator  disableRestrictedFloor={this.state.disableRestrictedFloor} id={0} elevatorFloor={this.state.elevatorsFloor[0]} handlerElevator={this.handleElevators} >
                                <KeyCard handleDisableRestrictedFloor={this.handleDisableRestrictedFloor} />
                            </ControllerElevator>                         
                        </div>
                        <div className="col-3">
                            <Floors                                
                                handleElevators={this.handleElevators}
                                floors={this.props.floors}
                                hasBasement={this.props.hasBasement}
                                elevatorsFloor={this.state.elevatorsFloor}
                            />
                        </div>
                        <div className="col" style={styles.col}>
                        <ControllerElevator  disableRestrictedFloor={false} id={1} elevatorFloor={this.state.elevatorsFloor[1]} handlerElevator={this.handleElevators} />
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


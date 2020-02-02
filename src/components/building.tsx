import React from 'react';
import Floors from '../components/floors';
import Controller from '../components/controller';
import KeyCard from '../components/keyCard';
import setting from '../setting';



export default class Building extends React.Component<IBuildingProps, IBuildingState> {

    constructor(props: IBuildingProps) {
        super(props);
        this.state = {
            elevatorsFloor: {
                0: 0,
                1: 0
            }
        };
    }

    componentDidMount() {

    }

    private createControllers(nElevators: number) {
        let controllers: any = [];
        for (let i: number = 0; i < nElevators; i++) {
            controllers.push(<Controller disableRestrictedFloor={false} id={i} key={i} elevatorFloor={this.state.elevatorsFloor[i]} handlerElevator={this.handleElevators} />)
        }
        return controllers;
    }


    public handleElevators = (id: number, floor: number): void => {
        let data = this.state.elevatorsFloor;
        data[id] = floor;

        this.setState({
            elevatorsFloor: data
        });


    }
    handleDisableRestrictedFloor = () =>{

    }


    render() {
        //let controllers = this.createControllers(setting.building.nElevators);
        return (
            <div className="row">
                <div className="col">
                    <div className="row">
                        <div className="col" style={{ display: 'flex' }}>
                            <Controller disableRestrictedFloor={false} id={0} elevatorFloor={this.state.elevatorsFloor[0]} handlerElevator={this.handleElevators} >
                               <KeyCard handleDisableRestrictedFloor={this.handleDisableRestrictedFloor} />
                            </Controller>
                            <Controller disableRestrictedFloor={false} id={1} elevatorFloor={this.state.elevatorsFloor[1]} handlerElevator={this.handleElevators} />
                        </div>
                        <div className="col">
                            <Floors
                                handleRequestQueue={() => 'hola Manola'}
                                handleElevators={this.handleElevators}
                                floors={this.props.floors}
                                hasBasement={this.props.hasBasement}
                                elevatorsFloor={this.state.elevatorsFloor}
                            />


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
    elevatorsFloor: FloorParam
}
type FloorParam = {
    [key: number]: number;
};




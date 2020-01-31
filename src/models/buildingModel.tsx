import React from 'react';
import Floor from '../components/floors';

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

    private createElevators(nElevators: number) {
        let elevators: object[] = [];
        for (let i: number = 0; i < nElevators; i++) {

        }
        return elevators;
    }


    render() {

        return (
            <div className="row">
                <div className="col">
                    <Floor floors={this.props.floors} hasBasement={this.props.hasBasement} elevatorsFloor={this.state.elevatorsFloor} />
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




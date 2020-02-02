import React from "react";
import setting from "../setting";
import ElevatorButtons from './elevatorButtons'
const {
    times: { waiting }
} = setting;

export default class Controller extends React.Component<IControllerProps, IControllerState> {
    constructor(props: IControllerProps) {
        super(props);
        this.state = {
            elevatorFloor: 0,
            direction: 0,
            weight: 4,
            requestQueue: [],
            nextFloor: false,
            isMoving: false,
        }

    }
    componentDidMount() {
        this.setState({
            elevatorFloor: this.props.elevatorFloor
        });

    }

    public handleRequestQueue = (nFloor: number): void => {
        console.log('prueba!!', nFloor, this.state.weight);
        this.addRequestoQueue(nFloor);
    }

    handleChange = (e: any) => {
        console.log('target:', e.target.value);
        let weight = e.target.value;

        this.setState({ weight: e.target.value }, () => {
            console.log('wei:', this.state.weight);
            if (weight < setting.building.weightLimit[this.props.id]) {

                this.runElevator();

            }
        });


    }

    setDirection(): void {

    }

    addRequestoQueue(requestFloor: number): void {
        if (this.state.requestQueue.length > 0) {
            this.setState({ nextFloor: this.state.requestQueue[0] },
                () => {
                    console.log('netxFloor', this.state.nextFloor)
                    this.setState({ direction: this.state.nextFloor ? (this.state.nextFloor.floor > this.state.elevatorFloor ? 1 : 2) : 0 },
                        () => {
                            console.log('Ordenar la cola y sumarla - DIRECCION: ', this.state.direction);
                            this.addRequestSortQueue(requestFloor);
                        }
                    )
                });
        } else if (requestFloor !== this.state.elevatorFloor) {

            if (this.state.elevatorFloor < requestFloor) {
                this.setState({ requestQueue: [{ floor: requestFloor, dir: 1 }] },
                    () => { this.runElevator(); });
            } else {
                this.setState({ requestQueue: [{ floor: requestFloor, dir: 2 }] },
                    () => { this.runElevator(); });
            }


        };
    }

    addRequestSortQueue(requestFloor: number): void {

        let finalQueue = [...this.state.requestQueue];
        let calledFrom = { floor: requestFloor, dir: this.state.direction }
        finalQueue.push(calledFrom);
        if (finalQueue.length > 1) {
            let nextFloorOppositeDir = finalQueue.filter((el) => {
                return el.dir !== this.state.direction;
            });
            if (this.state.direction === 1) {
                let nextFloorsGoingUp = finalQueue.filter((el) => {
                    return el.dir === this.state.direction && el.floor > this.state.elevatorFloor;
                });
                nextFloorsGoingUp = nextFloorsGoingUp.sort((a, b) => a.floor - b.floor);

                nextFloorOppositeDir = nextFloorOppositeDir.sort((a, b) => b.floor - a.floor);

                let lastestFloorsGoingUp = finalQueue.filter((el) => {
                    return el.dir === this.state.direction && el.floor <= this.state.elevatorFloor;
                });
                lastestFloorsGoingUp = lastestFloorsGoingUp.sort((a, b) => a.floor - b.floor);

                finalQueue = [...nextFloorsGoingUp, ...nextFloorOppositeDir, ...lastestFloorsGoingUp];
            } else if (this.state.direction === 2) {
                let nextFloorsGoingDown = finalQueue.filter((el) => {
                    return el.dir === this.state.direction && el.floor < this.state.elevatorFloor;
                });
                nextFloorsGoingDown = nextFloorsGoingDown.sort((a, b) => b.floor - a.floor);

                nextFloorOppositeDir = nextFloorOppositeDir.sort((a, b) => a.floor - b.floor);

                let lastestFloorsGoingDown = finalQueue.filter((el) => {
                    return el.dir === this.state.direction && el.floor >= this.state.elevatorFloor;
                });
                lastestFloorsGoingDown = lastestFloorsGoingDown.sort((a, b) => b.floor - a.floor);

                finalQueue = [...nextFloorsGoingDown, ...nextFloorOppositeDir, ...lastestFloorsGoingDown];
            }
        }
        console.log('la cola!!!!!!!!:', finalQueue);
        this.setState({ requestQueue: finalQueue });
    }


    runElevator(): void {
        if (this.state.weight < setting.building.weightLimit[this.props.id]) {
            if (this.state.requestQueue.length > 0) {
                this.setState({ nextFloor: this.state.requestQueue[0] },
                    () => {
                        console.log('netxFloor', this.state.nextFloor)
                        this.setState({ direction: this.state.nextFloor ? (this.state.nextFloor.floor > this.state.elevatorFloor ? 1 : 2) : 0 }
                        )
                    });
                console.log('Start Wait...')
                setTimeout(() => {
                    console.log('end Wait...')
                    this.moveToNextQueuePlace(this.state.direction, this.state.elevatorFloor);
                }, waiting);
            } else {
                this.setState({
                    direction: 0
                });

            }
        } else {
            this.setState({ isMoving: false });
            alert("Alert: weight limit exceeded. The elevator will not start");
        }
    }

   

    moveToNextQueuePlace(direction: number, currentFloor: number): void {
        if (this.state.requestQueue[0]) {
            let newRequestQueue = [...this.state.requestQueue];
            let a = 0;
            if (direction === 1) {
                a = 1;
            } else if (direction === 2) {
                a = -1;
            };

            while (currentFloor !== this.state.requestQueue[0].floor) {
                currentFloor = currentFloor + a;
                this.moveoToNextFloor(currentFloor);
            };

            newRequestQueue.shift();
            this.setState({ requestQueue: Object.assign([], newRequestQueue) },
                () => {
                    if (this.state.requestQueue.length !== 0) {
                        this.setState({ isMoving: false }, () => {


                            this.runElevator();
                        });
                    }
                });
        }
    }

    moveoToNextFloor(currentFloor: number): void {
        this.setState({ elevatorFloor: currentFloor });
        this.props.handlerElevator(this.props.id, currentFloor);
    }



    render() {
        let button: any;
        button = [];
        let key = 0
        this.state.requestQueue.forEach(e => {

            button.push(<div key={key}>{e.floor}</div>)
            ++key
        });
        let titleElevator = 'Public';
        if (this.props.id === 1) {
            titleElevator = 'Freight'
        }
        return (
            <div className="row" style={controllerStyle}>
                <div className="col-8 " >
                    <div className="card">
                        <div className="card-body">
                            <div className="card-title">
                                {titleElevator} Elevator {this.props.id + 1}
                            </div>
                            <div className="card" style={{ backgroundColor: '#f9f9f9' }}>
                                <div className="card-body">
                                    <div className="form-group">
                                        Floor <div className="card" >
                                            {this.props.elevatorFloor}
                                        </div>
                                        <label >Weight </label>
                                        <input type="number" min="0" className="form-control" value={this.state.weight} placeholder="tn..." onChange={this.handleChange} />
                                    </div>
                                    <label >Queue</label>  
                                    {button}
                                    {this.props.children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col ">
                    <ElevatorButtons disableRestrictedFloor={this.props.disableRestrictedFloor} idElevator={this.props.id} handleRequestQueue={this.handleRequestQueue} />
                </div>
            </div >
        )
    }
}

interface IControllerProps {
    id: number,   
    elevatorFloor: number
    handlerElevator(id: number, floor: number): void,
    disableRestrictedFloor:boolean     

}

interface IControllerState {
    elevatorFloor: number,
    direction: number,  //0 stand | 1 up | 2 down | 3 maintenance
    requestQueue: FloorCalledFrom[],
    nextFloor: false | FloorCalledFrom,
    isMoving: boolean,
    weight: number
}

type FloorCalledFrom = {
    floor: number;
    dir: number;
};

const controllerStyle = {
    paddingLeft: 40,
    marginTop: 50
};
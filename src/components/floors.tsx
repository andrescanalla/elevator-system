import React from 'react';
import Button from './button'
import Elevator from './elevator'

class Floors extends React.Component<IFloorsProps, IFloorsState> {
    
    
    handleElevators = (id: number, floor: number): void => {
        let data = Object.assign({},this.state.elevatorsFloor) ;
        data[id] = floor;
        console.log('Floor', data);
        this.setState({
            elevatorsFloor: data
        }); 
    }    

    createButton(handleRequestQueue:any, nFloor: number, elevatorId: number, direction: number, type: string) {
        return <Button
            nFloor={nFloor}
            elevatorId={elevatorId}
            direction={direction}
            type={type}
            handleRequestQueue={()=>{ }}
        />
    }

    createButtons(i:number, id:number, lastFloor:number, floors:number){
        return (i === lastFloor) ?
        this.createButton(this.props.handleRequestQueue ,i, id, 1, 'lobby') :
        (i === floors) ?
            this.createButton( this.props.handleRequestQueue ,i, id, 2, 'lobby') :
            <div className="list-group list-group-horizontal">
                {this.createButton(this.props.handleRequestQueue,i, id, 1, 'lobby')}
                {this.createButton(this.props.handleRequestQueue,i, id, 2, 'lobby')}
            </div>
    }
    
    render() {
        let floors = this.props.floors;
        let elevatorsFloor = this.props.elevatorsFloor;               
        let lastFloor=1;
        let floor = [];
        if (this.props.hasBasement) {
             lastFloor = -1;
        } else {
             lastFloor = 0;
        }
        for (let i = floors; i >= lastFloor; i--) {
            floor.push(
                <div className="row" key={i} style={{ height: 42 }}>                    
                    <div style={{ width: 30 }}>{i}</div>
                    <div style={{ width: 60, paddingRight: 5, paddingLeft: 5 }}>                        
                         {this.createButtons(i,0, lastFloor, floors)}                                         
                    </div>
                    <div style={{ backgroundColor: '#ddd', padding: 0 }}>
                        <div className="building" style={{ width: 30 }}>
                            <div className="floors">
                                <div className="floor" style={{ marginTop: 34 }}></div>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundColor: 'black', padding: 0, width: 30 }}>
                        <div className="building" style={{ width: 30 }}>
                            <div className="floors">
                                <div className="floor" style={{ marginTop: 34 }}>
                                    {elevatorsFloor[0] === i ? <Elevator  handleElevators={this.handleElevators} id={0} type={'public'} /> : <div></div>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundColor: '#ddd', padding: 0 }}>
                        <div className="building" style={{ width: 60 }}>
                            <div className="floors">
                                <div className="floor" style={{ marginTop: 34 }}></div>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundColor: 'black', padding: 0, width: 30 }}>
                        <div className="building" style={{ width: 30 }}>
                            <div className="floors">
                                <div className="floor" style={{ marginTop: 34 }}>
                                    {elevatorsFloor[1] === i ? <Elevator  handleElevators={this.handleElevators} id={1} type={'carga'} /> : <div></div>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundColor: '#ddd', padding: 0 }}>
                        <div className="building" style={{ width: 30 }}>
                            <div className="floors">
                                <div className="floor" style={{ marginTop: 34 }}></div>
                            </div>
                        </div>
                    </div>
                    <div style={{ width: 60, paddingRight: 5, paddingLeft: 5 }}>
                        {this.createButtons(i,1,lastFloor,floors)}  
                        
                    </div>
                </div>
            );
        }
            
        return (
            <div className="building-area">
                {floor}
            </div>
        )
    };
};
export default Floors;

interface IFloorsProps {
    floors: number,
    hasBasement: boolean,
    elevatorsFloor: FloorParam,    
    handleElevators(id: number, floor: number): void,
    handleRequestQueue():void,
}

interface IFloorsState{
    elevatorsFloor: FloorParam,    
}

type FloorParam = {
    [key: number]: number;
};


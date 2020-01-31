import React from 'react';
import Button from './button'

class Floor extends React.Component<IFloorsProps> {
    
    render() {
        let elevatorsFloor = this.props.elevatorsFloor;
        let floors = this.props.floors;
        let lastFloor: number;
        if (this.props.hasBasement) {
            lastFloor = -1;
        } else {
            lastFloor = 0;
        }
        let floor: any = [];
        for (let i = floors; i >= lastFloor; i--) {            
            floor.push(
                <div className="row" key={i} style={{ height: 42 }}>
                    <div style={{ width: 30 }}>{i}</div>
                    <div style={{ width: 60, paddingRight:5, paddingLeft:5 }}>
                        {(i === lastFloor) ? 
                            <Button 
                                nFloor={i} 
                                elevator={'public'}
                                direction={1}  
                                type={'lobby'}
                            /> :
                        (i === floors) ?
                            <Button 
                                nFloor={i} 
                                elevator={'public'} 
                                direction={2}  
                                type={'lobby'}
                            /> :
                            <div className="list-group list-group-horizontal">
                                <Button 
                                    nFloor={i} 
                                    elevator={'public'} 
                                    direction={1}  
                                    type={'lobby'}
                                />
                                <Button  
                                    type={'lobby'} 
                                    nFloor={i} 
                                    elevator={'public'}
                                    direction={2} 
                                />
                            </div>}
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
                                {elevatorsFloor[0]===i? <div className="elevator" style={{ height: 34, width:30 }}></div>: <div></div>}
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
                                {elevatorsFloor[1]===i? <div className="elevator" style={{ height: 34, width:30 }}></div>: <div></div>}
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
                    <div style={{ width: 60, paddingRight:5, paddingLeft:5  }}> 
                        {(i === lastFloor) ? 
                            <Button 
                                nFloor={i} 
                                elevator={'freight'} 
                                direction={1} 
                                type={'lobby'} 
                            /> :
                        (i === floors) ? 
                            <Button nFloor={i} 
                                elevator={'freight'} 
                                direction={2} 
                                type={'lobby'}
                            /> :
                        <div className="list-group list-group-horizontal">
                            <Button 
                                nFloor={i} 
                                elevator={'freight'} 
                                direction={1} 
                                type={'lobby'}
                            />
                            <Button 
                                nFloor={i} 
                                elevator={'freight'} 
                                direction={2} 
                                type={'lobby'}
                            />
                        </div>}
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
export default Floor;

interface IFloorsProps {
    floors: number,
    hasBasement: boolean,
    elevatorsFloor: FloorParam
}
type FloorParam = {
    [key: number]: number;
  };


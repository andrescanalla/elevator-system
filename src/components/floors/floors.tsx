import React from 'react';
import UiElevator from '../uiElevator/uiElevator'

class Floors extends React.Component<IFloorsProps, IFloorsState> {
    
    
    public handleElevators = (id: number, floor: number): void => {
        let data = Object.assign({},this.state.elevatorsFloor) ;
        data[id] = floor;
        console.log('Floor', data);
        this.setState({
            elevatorsFloor: data
        }); 
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
                <div className="row" key={i} style={styles.row}>                    
                    <div style={styles.colCol}>{i}</div>                    
                    <div style={styles.colExt}>
                        <div className="building" style={styles.colCol}>
                            <div className="floors">
                                <div className="floor" style={styles.floor}></div>
                            </div>
                        </div>
                    </div>
                    <div style={styles.elevatorCol}>
                        <div className="building" style={styles.colCol}>
                            <div className="floors">
                                <div className="floor" style={styles.floor}>
                                    {elevatorsFloor[0] === i ? <UiElevator  handleElevators={this.handleElevators} id={0}  /> : <div></div>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={styles.colExt}>
                        <div className="building" style={styles.colDiv}>
                            <div className="floors">
                                <div className="floor" style={styles.floor}></div>
                            </div>
                        </div>
                    </div>
                    <div style={styles.elevatorCol}>
                        <div className="building" style={styles.colCol}>
                            <div className="floors">
                                <div className="floor" style={styles.floor}>
                                    {elevatorsFloor[1] === i ? <UiElevator  handleElevators={this.handleElevators} id={1}  /> : <div></div>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={styles.colExt}>
                        <div className="building" style={styles.colCol}>
                            <div className="floors">
                                <div className="floor" style={styles.floor}></div>
                            </div>
                        </div>
                    </div>
                    <div style={styles.colCol}>{i}</div>                      
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
}

interface IFloorsState{
    elevatorsFloor: FloorParam,    
}

type FloorParam = {
    [key: number]: number;
};

const styles = {
    row:{
        height: 42              
    },
    colCol:{
        width: 30
    },
    colButton:{
        width: 60, 
        paddingRight: 5, 
        paddingLeft: 5
    },
    colDiv:{
        width: 60,         
    },
    floor:{
        marginTop: 34
    },
    elevatorCol:{
        backgroundColor: 'black', 
        padding: 0, 
        width: 30
    },
    colExt:{
        backgroundColor: '#ddd', 
        padding: 0 
    }
     
  };

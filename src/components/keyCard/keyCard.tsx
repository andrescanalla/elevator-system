import React from 'react';
import setting from '../../setting';


export default class KeyCard extends React.Component<IKeyCardProps, IKeyCardState> {
    keyCardId: React.RefObject<HTMLFormElement>;
    
    
    constructor(props:IKeyCardProps) {
        super(props);
        this.state = { 
            KeycardLog: [{id:1, floor: -1, date: ''},{id:1, floor: -1, date: ''} ],
            accessToRestrictedFloor: false,
            busy:false
        };
        
        this.keyCardId = React.createRef();
        
       
      }
      
      mySubmitHandler = (event:any) => {       
        console.log('submit');  
        this.setState({busy:true}, ()=>{});
        this.props.handleDisableRestrictedFloor(!this.state.accessToRestrictedFloor);
        setTimeout(() => {            
            this.setState({busy:false});
            this.setState({accessToRestrictedFloor:false});
            this.props.handleDisableRestrictedFloor(true);
          }, 4000);          
        this.keyCardId.current?.reset();          
      }


      myChangeHandler = (event:any) => {               
        console.log('onchange', event.target.value);
        let accessToRestrictedFloor = false
        setting.building.accessId.forEach(element => {
            console.log('elem',element);
            if (parseInt(event.target.value) === element){
               accessToRestrictedFloor=true;
            }
        });
        this.setState({accessToRestrictedFloor:accessToRestrictedFloor});  

        
      }
    render() {       
        return (
            <div>
                <button  data-testid="button" disabled={this.state.busy} type="button" className="btn btn-primary " data-toggle="modal" data-target="#keyCard" >
                    key Card
                </button>
                <div className="modal fade" id="keyCard" data-backdrop="static" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-sm" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title " id="staticBackdropLabel">Key Card ID </h5>
                                <button type="button"  className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>                  
     
                            <form ref={this.keyCardId}>
                                <div className="modal-body">

                                    <div className="form-group">
                                        <label >Enter the key card Id</label>
                                        <input className="form-control"   onChange={this.myChangeHandler}/>
                                        <small id="emailHelp" className="form-text text-muted">Click Ok to submit.</small>
                                    </div>


                                </div>
                                <div className="modal-footer">                                    
                                    <button type="submit" className="btn btn-primary" data-dismiss="modal" onClick={this.mySubmitHandler}>Ok</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
interface IKeyCardProps {
    handleDisableRestrictedFloor(disableRestrictedFloor:boolean):void,
}
interface IKeyCardState {
    KeycardLog:log[],
    accessToRestrictedFloor:boolean,
    busy:boolean
}

type log = {
    id: number,
    floor: number,
    date:string,
};
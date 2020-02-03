
const setting: ISetting = {
       
    building: {
      floorHeight: 34,
      elevatorHeight: 34,
      elevatorWidth: 50,
      floorDivHeight: 8,
      weightLimit:{0 : 1 , 1: 3},
      hasBasement: true,
      floors: 50, 
      nElevators: 2,
      accessId:[1,2,3]
    },
    times: {
      speedByFloor:  2000,
      openCloseDoors: 2000,
      waiting: 1500
    }
  };

interface ISetting {
    
    building: {
      floorHeight: number,
      elevatorHeight: number,
      elevatorWidth: number,
      floorDivHeight: number,
      weightLimit:FloorParam,
      hasBasement: boolean,
      floors: number,  
      nElevators: number   
      accessId:number[] 
    },
    times: {      
      speedByFloor:  number,
      openCloseDoors: number,
      waiting: number
    }

}
type FloorParam = {
  [key: number]: number; 
};
  
  export default setting;
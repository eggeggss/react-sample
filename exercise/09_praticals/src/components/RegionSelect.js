// code here
import React,{Component} from 'react';
import zipCodes from '../data/zipCodes';

class RegionSelect extends Component{
    state={
        cityIdx:0,
        areaIdx:0,
    }

    onChangeCity=(e)=>{
        this.setState({
            cityIdx:e.target.value,
            areaIdx:0
        });
    }
    onChangeArea=(e)=>{
        this.setState({
            areaIdx:e.target.value,

        })
    }
    getRegion=()=>{
        const {cityIdx,areaIdx} =this.state;
        const city=zipCodes[cityIdx];
        const area=city.areas[areaIdx];
        return {
            city:city.name,
            area:area.name,
            zip:area.zip,
        };
    }
    render(){
        const {cityIdx,areaIdx} =this.state;
        const city=zipCodes[cityIdx];
        const area=city.areas[areaIdx];

        return(
            <div>
                <select value={this.state.cityIdx} onChange={this.onChangeCity}>
                        {zipCodes.map((city,idx)=>(
                            <option value={idx}>{city.name}</option>
                        ))}
                </select>
                <select value={this.state.areaIdx} onChange={this.onChangeArea}>
                    {city.areas.map((area,idx)=>(
                        <option value={idx}>{area.name}</option>
                    ))}
                </select>
                <div>
                    <h1>{city.name}</h1>
                    <h2>{area.name}</h2>
                    <h3>{area.zip}</h3>
                    
                </div>
            </div>
        );
    }
}

export default RegionSelect;

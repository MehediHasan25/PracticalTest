import React, { Component } from 'react';
import CountryDetails from './CountryDetails';
export class SearchDetails extends Component {
    state={
         listCountry:[],
         sendDetails:{}
        
    }

    onSubmit =async(e)=>{
        e.preventDefault();
      
    }

    onChoose = (e) =>{
       e.preventDefault();
        
        for(let k=0; k<this.props.searchBy.length; k++){
            if(this.props.searchBy[e.target.id].name === this.props.searchBy[k].name){
                this.setState({sendDetails:this.props.searchBy[k]});
                break;
            }
        }
    }
    render() {
        
        return (
            <div>
            {
                this.props.searchBy ?
                this.props.searchBy.map((c,i)=>(
                    <div>
                        <ul>
                            <li  id={i} onClick={this.onChoose} style={{cursor:"pointer"}}>{c.name}</li>
                        </ul>
                    </div>
                
                ))
                :""
                
            }
                

                 <CountryDetails details={this.state.sendDetails}/>
                
            </div>
        )
    }
}

export default SearchDetails

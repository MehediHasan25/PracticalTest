import React, { Component } from 'react';

export class CountryDetails extends Component {
   
    render() {
        return (
            <div>
                
                    <p>Country Name:{this.props.details.name}</p>
                    <p>Capital:{this.props.details.capital}</p>
                    {
                        this.props.details.languages?
                        this.props.details.languages.map((l,j)=>(
                            <p>languages:{l.name}</p>
                        ))
                    :""
                    }
                    <p>flag:<img width="50" height="20"src={this.props.details.flag} alt=""></img></p>

               
            </div>
        )
    }
}

export default CountryDetails;

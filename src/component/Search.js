import React, { Component } from "react";
import SearchDetails from './SearchDetails';
import axios from 'axios';

export class Search extends Component {
    state={
        searchCapital:"",
        listCountry:[]
    }

    onChange = e =>{
        this.setState({ [e.target.name]: e.target.value });
    }

    onSearch =async(e) =>{
        e.preventDefault();
        try{
            let res = await axios.get(`https://restcountries.eu/rest/v2/capital/${this.state.searchCapital}`, "");
            //console.log(res.data);
            this.setState({listCountry:res.data});
            }catch(err){
                console.log(err);
            }
    }

  render() {
    return (
      <div>
      <div>
        <form className="search">
          <input type="text" placeholder="Search capital" onChange={this.onChange} name="searchCapital" value={this.state.searchCapital} />
          <button type="submit" onClick={this.onSearch}>Submit</button>
        </form>

        <SearchDetails searchBy={this.state.listCountry}/>
        
        </div>
      </div>
    );
  }
}

export default Search;

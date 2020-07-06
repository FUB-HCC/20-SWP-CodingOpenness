import React, { Component } from "react";

import "./GithubAPI.css"

const DATA_CACHE = {};

const repoLink = "repos/FUB-HCC/20-SWP-CodingOpenness"
const userLink = "users/FUB-HCC"

class GithubAPI extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  async load ()
  {
    if(DATA_CACHE[this.props.subLink] !== undefined)
    {
        this.setState({data: DATA_CACHE[this.props.subLink]})
    }
    else
    {
        var pageID = 1;
        while(true)
        {
            const fetchLink = `https://api.github.com/${this.props.repoFetch ? repoLink : userLink}/${this.props.subLink}&page=${pageID}`
            const response = await fetch(fetchLink);
            const json = await response.json();

            if(json === undefined || json.length === undefined)
            {
                DATA_CACHE[this.props.subLink] = 0;
                break;
            }
            
            if(json.length === 0)
            {
                break;
            }

            if(this.props.parseFunction != null)
            {
                DATA_CACHE[this.props.subLink] = this.props.parseFunction(DATA_CACHE[this.props.subLink], json);
            }

            pageID++;
        }

        this.setState({ data: DATA_CACHE[this.props.subLink] });
    }
  }

  async componentDidMount() {
      this.load();
  }

  async componentDidUpdate(prevPorps) 
  {
      if(prevPorps.subLink !== this.props.subLink)
      {
        this.load();
      }
  }

  render() {
    return (
      <div className="stat_wrapper">
          <div className="stat_value">
            {this.state.data}
          </div>
          <div className="stat_title">
            {this.props.title}
          </div>
      </div>
    );
  }
}

export default GithubAPI;
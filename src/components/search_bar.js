import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = { term: "" };
    }
    render() {
        return (
            <div className="search-bar">
                <input 
                    value={this.state.term}
                    onChange={ event => this.onInputChange(event.target.value) }/>;
                {/* Value of input: {this.state.term} */}
            </div>
        )
        // <input onChange={this.onInputChange}  />;
        // <input onChange={event => console.log(event.target.value)} />;
    }

    onInputChange(term){
        this.setState({ term: event.target.value })
        this.props.onSearchTermChange(term);
        // console.log(event.target.value);
    }
}


// const SearchBar = () => {
//     return <input />;
// };

export default SearchBar;
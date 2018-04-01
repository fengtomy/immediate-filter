import React, {Component} from 'react';

class SearchInput extends Component{
    render(){
        return (
            <div>
                <input
                    type="text"
                    placeholder="input what you search"
                    value={this.props.value}
                    onChange={this.props.onInput}
                />
            </div>
        );
    }
}
export default SearchInput;
import React, {Component} from 'react';
import SearchInput from './components/SearchInput.jsx';
import ItemList from './components/ItemList.jsx';
require('./css/index.css');
export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchText: ''
        };
        this.onInput = this.onInput.bind(this);
    }
    onInput(e){
        const input = e.target || e.srcElement;
        const searchText = input.value;
        this.setState({
            searchText
        });
    }
    componentWillMount(){
    }
    render(){
        const {searchText} = this.state;
        return (
            <div>
                <SearchInput value={searchText} onInput={this.onInput}/>
                <ItemList searchText={searchText}/>
            </div>
        );
    }
}
import React, {Component} from 'react';
import axios from 'axios';

class ItemList extends Component{
    constructor(props){
        super(props);
        this.state = {
            list: []
        };
    }
    componentDidMount(){
        axios.get('item.json')
            .then(res => {
                this.setState({
                    list: res.data.data
                })
            })
            .catch(function(err){
                console.log(err);
            });
    }
    render(){
        const {list} = this.state;
        const {searchText} = this.props;
        let tdList = [];
        list.length && list.forEach((item, idx) => {
            if(item.name.indexOf(searchText) >= 0){
                tdList.push(<tr key={item.id}><td>{idx}</td><td>{item.name}</td><td>{item.quantity}</td></tr>);
            }
        });
        const headList = (
            <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Quantity</th>
            </tr>
            </thead>
        );
        return (
            <table>
                {headList}
                <tbody>
                {tdList}
                </tbody>
            </table>
        );
    }
}
export default ItemList;
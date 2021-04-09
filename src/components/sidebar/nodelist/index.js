import ThemeContext from "../../theme";
import React from "react";

/**
 * A list of datasets
 *
 */
class DatasetList extends React.Component {
    render() {
        const items = [
            {id:1, name:'some name1', attributes: [{id:5,name: 'some att'},{id:6,name: 'some att'}]},
            {id:2, name:'some name2', attributes: [{id:5,name: 'some att'},{id:6,name: 'some att'}]},
            {id:3, name:'some name3', attributes: [{id:5,name: 'some att'},{id:6,name: 'some att'}]},
            {id:4, name:'some name4', attributes: [{id:5,name: 'some att'},{id:6,name: 'some att'}]},
            ];

        return (
            <div>
                <ul>
                    {items.map((item) => (<SingleDatasetAttributes id={item.id} name={item.name} key={item.id} att={item.attributes}/> ))}
                </ul>
            </div>
        )
    }
}
DatasetList.contextType = ThemeContext

class SingleDatasetAttributes extends React.Component {
    render(){
        return(
            <>
                <li>
                <h1>{this.props.name}</h1>
                </li>

                <ul>
                    {this.props.att.map((att) => (<AttributeList id={att.id} name={att.name} key={att.id}/> ))}
                </ul>
            </>
        )
    }

}




class  AttributeList extends React.Component {
    render() {
        return (
            <li>{this.props.name}</li>
        )
    }
}
AttributeList.contextType = ThemeContext


export default DatasetList;
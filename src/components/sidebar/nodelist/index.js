import React from "react";
import './node-list.scss'

/**
 * A list of datasets
 *
 */
class DatasetList extends React.Component {
    render() {
        const items = [
            {id:1, name:'Tags some name1', attributes: [{id:5,name: 'some att'},{id:6,name: 'some att'}]},
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

class SingleDatasetAttributes extends React.Component {
    render(){
        return(
            <nav className="pipeline-nodelist-section kedro" >
                <li>
                    <h1 className={'pipeline-nodelist-section__title'}>{this.props.name}</h1>
                </li>

                <ul>
                    {/*<ul className="pipeline-nodelist__list">*/}
                    {this.props.att.map((att) => (<AttributeList id={att.id} name={att.name} key={att.id}/> ))}
                </ul>
            </nav>
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


export default DatasetList;
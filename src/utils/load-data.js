

function getDataFromPipeline(){
    // todo this is temporary.
    // Later we'll change to loading the true lineage
    return [
        {id: 1, name: 'some dataset', attributes: [{id: 1, name: 'customer'},{id: 2, name: 'month'},{id: 3, name: 'revenue'}]},
        {id: 2, name: 'other dataset', attributes: [{id: 1, name: 'customer'},{id: 2, name: 'month'},{id: 3, name: 'revenue'}]},
        {id: 4, name: 'some other dataset', attributes: [{id: 1, name: 'customer'},{id: 2, name: 'month'},{id: 3, name: 'revenue'}]},
        {id: 5, name: 'some dataset', attributes: [{id: 1, name: 'customer'},{id: 2, name: 'month'},{id: 3, name: 'revenue'}]},
    ]
}

export default getDataFromPipeline
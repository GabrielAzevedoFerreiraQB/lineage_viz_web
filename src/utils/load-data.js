

function getDataFromPipeline(){
    // todo this is temporary. todo: rename tags to dataset
    // Later we'll change to loading the true lineage
    return  {
        "source": 'demo',
        "selected_pipeline": "__default__",
        "pipelines": [
        {
            "id": "__default__",
            "name": "Default"
        },
        {
            "id": "de",
            "name": "Data engineering"
        },
        {
            "id": "ds",
            "name": "Data science"
        }
    ],
        "layers": [
        "Raw",
        "Intermediate",
        "Primary",
        "Feature",
        "Model Input",
        "Models",
        "Model Output",
        "Reporting"
    ],
        "edges": [
    ],
        "nodes": [
        {
            "full_name": "att1",
            "id": "53b05b01",
            "name": "Att 1",
            "tags": ["DataFrame1"],
            "layer": "Reporting",
            "pipelines": ["__default__", "ds"],
            "type": "DataFrame1"
        },
        {
            "full_name": "att2",
            "id": "42e79d42",
            "name": "Att 2",
            "tags": ["DataFrame1"],
            "layer": "Raw",
            "pipelines": ["__default__", "de"],
            "type": "DataFrame1"
        },
        {
            "full_name": "att3",
            "id": "f4f3a276",
            "name": "Att 3",
            "tags": ["DataFrame1"],
            "layer": "Models",
            "pipelines": ["__default__", "de"],
            "type": "DataFrame1"
        },
        {
            "full_name": "att4",
            "id": "792a14f6",
            "name": "Att 4",
            "tags": ["DataFrame2"],
            "layer": "Model Output",
            "pipelines": ["__default__", "de"],
            "type": "DataFrame2"
        },
            {
                "full_name": "att5",
                "id": "9bd2dc3d",
                "name": "Att 5",
                "tags": ["DataFrame2"],
                "layer": "Model Output",
                "pipelines": ["__default__", "de"],
                "type": "DataFrame2"
            },
            {
                "full_name": "att6",
                "id": "9bd2dc35",
                "name": "Att 6",
                "tags": ["DataFrame3"],
                "layer": "Model Output",
                "pipelines": ["__default__", "de"],
                "type": "DataFrame3"
            },
    ],
        "tags": [
        {
            "id": "DataFrame1",
            "name": "DataFrame1"
        },
            {
                "id": "DataFrame2",
                "name": "DataFrame2"
            },
            {
                "id": "DataFrame3",
                "name": "DataFrame3"
            },
    ]
    }


}

export default getDataFromPipeline
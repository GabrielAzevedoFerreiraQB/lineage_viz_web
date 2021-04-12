

function getDataFromPipeline(){
    // todo this is temporary.
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
            "full_name": "sales_model_performance_monitoring",
            "id": "53b05b01",
            "name": "Sales Model Performance Monitoring",
            "tags": ["model_performance_monitoring", "data_science"],
            "layer": "Reporting",
            "pipelines": ["__default__", "ds"],
            "type": "task"
        },
        {
            "full_name": "salesforce_accounts",
            "id": "42e79d42",
            "name": "Salesforce Accounts",
            "tags": ["feature_engineering", "data_engineering"],
            "layer": "Raw",
            "pipelines": ["__default__", "de"],
            "type": "data"
        },
        {
            "full_name": "params:_sales_model",
            "id": "1b3afcba",
            "name": "params: Sales Model",
            "tags": ["data_science", "model_training"],
            "layer": "Model Input",
            "pipelines": ["__default__", "de"],
            "type": "parameters"
        },
        {
            "full_name": "engagement_trained_model",
            "id": "f4f3a276",
            "name": "Engagement Trained Model",
            "tags": ["model_explanation", "data_science", "model_training"],
            "layer": "Models",
            "pipelines": ["__default__", "de"],
            "type": "data"
        },
        {
            "full_name": "sales_model_explanations",
            "id": "792a14f6",
            "name": "Sales Model Explanations",
            "tags": [
                "model_explanation",
                "data_science",
                "model_performance_monitoring",
                "reporting"
            ],
            "layer": "Model Output",
            "pipelines": ["__default__", "de"],
            "type": "data"
        },
        {
            "full_name": "engagement_model_explanations",
            "id": "9bd2dc3d",
            "name": "Engagement Model Explanations",
            "tags": [
                "model_explanation",
                "data_science",
                "model_performance_monitoring",
                "reporting"
            ],
            "layer": "Model Output",
            "pipelines": ["__default__", "de"],
            "type": "data"
        },
    ],
        "tags": [
        {
            "id": "model_performance_monitoring",
            "name": "Model Performance Monitoring"
        },
        {
            "id": "data_science",
            "name": "Data Science"
        },
        {
            "id": "reporting",
            "name": "Reporting"
        },
        {
            "id": "model_training",
            "name": "Model Training"
        },
        {
            "id": "preprocessing",
            "name": "Preprocessing"
        },
        {
            "id": "optimisation",
            "name": "Optimisation"
        },
        {
            "id": "model_explanation",
            "name": "Model Explanation"
        },
        {
            "id": "feature_engineering",
            "name": "Feature Engineering"
        },
        {
            "id": "data_engineering",
            "name": "Data Engineering"
        }
    ]
    }


}

export default getDataFromPipeline
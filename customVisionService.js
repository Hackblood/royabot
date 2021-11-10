'use strict';

const request = require('request-promise').defaults({ encoding: null });

module.exports = {
    predict: predict
}

function predict(stream) {
    const options = {
        method: 'POST',
            url: 'https://eastus.api.cognitive.microsoft.com/customvision/v3.1/Prediction/0f8f9757-1149-4611-875f-33a089bca99b/detect/iterations/RoyabotModel/image?publishedName=RoyabotModel&projectId=0f8f9757-1149-4611-875f-33a089bca99b',
        headers: {
            'Content-Type': 'application/octet-stream',
                'Prediction-Key': '878e5fc9c4674485ba8186ba181cb51f'
        },        
        body: stream
    };

    return request(options);
}

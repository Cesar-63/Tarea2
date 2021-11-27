exports.handler = async (event) => {
    
    const key = event.queryStringParameters?.key || 'nulo';
    const body = {success: true, message: key + ' es de Lambda'}
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify(body),
    };
    return response;
};

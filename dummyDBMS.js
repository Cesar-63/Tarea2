exports.handler = async (event) => {
    const data = event.queryStringParameters?.data || 'no existe';
    const body = {success: true, message: 'Data: ' + data }
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify(body),
    };
    return response;
};
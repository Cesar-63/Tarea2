exports.handler = async (event) => {
    const name = event.queryStringParameters?.name || 'Codigo';
    const body = {success: true, message: 'Hola ' + name + ' desde Lambda!'}
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify(body),
    };
    return response;
};

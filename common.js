const sendResponse = (response, status, statusCode, responseData) => {

    return response.send({ status:status, statusCode:statusCode, responseData:responseData})
}

module.exports = sendResponse;

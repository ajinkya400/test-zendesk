const getConfig = (url='') => {
    const apiToken= btoa(`${process.env.USER_EMAIL}:${process.env.USER_PASSWORD}`)
    return {
        method: 'GET',
        url: `${process.env.HOST_URL}/api/v2/${url}`,
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${apiToken}`,
        },
        params: {
        'external_id': '',
        },
    }
}

module.exports = getConfig;

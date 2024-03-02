export const handleUnexpectedError = (err) => {
    console.error(err);
    return genErrorObj(err.response.status, err.response.data);
}

export const genSuccessObj = (status, data) => ({
    success: true,
    status: status,
    data: data,
})

export const genErrorObj = (status, data) => ({
    success: false,
    status,
    data,
})
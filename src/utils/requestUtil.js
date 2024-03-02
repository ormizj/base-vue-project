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
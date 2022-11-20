const HOST = "http://192.168.3.13:666/api";

function Api(path) {
    return `${HOST}${path}`;
}

function createFormData(obj) {
    const formData = new FormData();
    Object.entries(obj).forEach(([k, v]) => {
        formData.append(k, v);
    });
    return formData;
}

function loginCheck(success = (data) => {}, fail = () => {}) {
    axios.get(Api("/login/check")).then(({ data: { code, message, data } }) => {
        if (data !== null) {
            success(data);
        } else {
            fail();
        }
    });
}

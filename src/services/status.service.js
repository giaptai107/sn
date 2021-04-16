import http from "../http-common";

const getAll = () => {
    return http.get("/Status");
};

const get = id => {
    return http.get(`/Status/${id}`);
};

const create = data => {
    return http.post("/addStatus", data);
};

const update = (id, data) => {
    return http.put(`/Status/${id}`, data);
};

const remove = id => {
    return http.delete(`/deleteStatus/${id}`);
};


const StatusService = {
    getAll,
    get,
    create,
    update,
    remove,
};

export default StatusService;
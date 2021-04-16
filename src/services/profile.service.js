import http from "../http-common";

const getAll = () => {
    return http.get("/Profiles");
};

const get = id => {
    return http.get(`/Profile/${id}`);
};

const create = data => {
    return http.post("/addProfile", data);
};

const update = (id, data) => {
    return http.put(`/Profile/${id}`, data);
};

const remove = id => {
    return http.delete(`/Profile/${id}`);
};


const ProfileService = {
    getAll,
    get,
    create,
    remove,
    update,
};

export default ProfileService;
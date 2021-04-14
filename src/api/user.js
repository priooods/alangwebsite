import client from "./index";
export default {
  SemuaUser() {
    return client.get("user/userall");
  },
  FindUser(name) {
    return client.post("user/me", { name: name });
  },
  TambahUser(data) {
    return client.post("user/register", data);
  },
  DetailUser(data) {
    return client.post("user/detail/add", data);
  },
  AllDepartemen() {
    return client.get("departemen/all");
  },
};

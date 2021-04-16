import "bootstrap/dist/css/bootstrap.min.css";
import AuthService from "../services/auth.service";
import { Redirect } from 'react-router-dom';

const Setting = () => {
  const currentUser = AuthService.getCurrentUser();
  if (!currentUser) {
    return <Redirect to="/login" />;
  }
  return (
    <div className="form-floating mb-3">
      <input type="password" name="oldPassword" className="form-control" placeholder="Mật khẩu hiện tại" />
      <input type="password" name="newPassword" className="form-control" placeholder="Mật khẩu mới" />
      <button type="submit" className="btn btn-primary mb-3">Confirm</button>
    </div>
  );
}
export default Setting;
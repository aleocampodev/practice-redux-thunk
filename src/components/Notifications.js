import NotificationView from "./NotificationView";
import { connect } from "react-redux";
import { setNotifications } from "../actions/notificationsActions";

const mapStateToProps = (state) => ({
  notification: state.notification,
});

const mapDispatchToProps = (dispatch) => ({
  notification: () => dispatch(setNotifications()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NotificationView);

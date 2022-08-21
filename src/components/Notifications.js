import NotificationView from "./NotificationView";
import { connect } from "react-redux";
import { setNotificationsActions } from "../actions/notificationsActions";

const mapStateToProps = (state) => ({
  notification: state.notification,
});

const mapDispatchToProps = (dispatch) => ({
  showNotification: (value) => dispatch(setNotificationsActions(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NotificationView);

import { addNotification } from "@/redux/actions/notification-action";
import notificationAction from "@/redux/actions/notification-action";
import store from "@/redux/store";
const helper = {
    addNotification: (message, type) => {
        store.dispatch(notificationAction.addNotification(message, type));
    },
};

export default helper;

const notificationAction = {
    addNotification: (message, type) => ({
        type: "ADD_NOTIFICATION",
        payload: { id: new Date().getTime(), type, message },
    }),

    removeNotification: (id) => ({
        type: "REMOVE_NOTIFICATION",
        payload: id,
    }),
};

export default notificationAction;

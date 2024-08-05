import React, { useEffect } from "react";
import { connect } from "react-redux";
import notificationAction, {
    removeNotification,
} from "@/redux/actions/notification-action";
import { Toast } from "flowbite-react";
import { IconCheck, IconX } from "@tabler/icons-react";

const Notification = ({ notifications, removeNotification }) => {
    useEffect(() => {
        const timeoutIds = [];
        notifications.forEach((notif) => {
            const timeoutId = setTimeout(() => {
                removeNotification(notif.id);
            }, 2000); // 5 detik
            timeoutIds.push(timeoutId);
        });

        // Membersihkan timeout saat komponen dibongkar
        return () => {
            timeoutIds.forEach((timeoutId) => {
                clearTimeout(timeoutId);
            });
        };
    }, [notifications, removeNotification]);
    return (
        <div className="fixed right-4 bottom-4">
            {notifications
                ? notifications.map((notif) => (
                      <div key={notif.id} className="notification">
                          <Toast>
                              {notif.type === "success" ? (
                                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-200">
                                      <div className="flex items-center justify-center h-7 w-7 rounded-full bg-green-900">
                                          <IconCheck className="h-5 w-5 text-white" />
                                      </div>
                                  </div>
                              ) : (
                                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-200">
                                      <div className="flex items-center justify-center h-7 w-7 rounded-full bg-red-900">
                                          <IconX className="h-5 w-5 text-white" />
                                      </div>
                                  </div>
                              )}

                              <div className="ml-3 text-sm font-normal">
                                  {notif.message}
                              </div>
                              <Toast.Toggle
                                  onDismiss={() => {
                                      removeNotification(notif.id);
                                  }}
                              />
                          </Toast>
                      </div>
                  ))
                : null}
        </div>
    );
};

const mapStateToProps = (state) => ({
    notifications: state.notifications.notifications,
});

const mapDispatchToProps = {
    removeNotification: notificationAction.removeNotification,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notification);

"use client";

import { ReactNode, memo, useEffect, useRef } from "react";
import { NotificationType } from "./type";
import {
  NotificationAction,
  NotificationContainer,
  NotificationContent,
  NotificationMessage,
} from "./style";
import { CloseSVG } from "@/assets/svg";

export interface NotificationProps {
  notificationType?: NotificationType;
  children?: ReactNode;
  idToFocusOnDismiss?: string;
  visible: boolean;
  setNotificationVisible: (value: boolean) => void;
}

export const NotificationComponent = (props: NotificationProps) => {
  const {
    notificationType = NotificationType.SUCCESS,
    children,
    idToFocusOnDismiss,
    visible,
    setNotificationVisible,
  } = props;

  const disableNotificationTimeout = useRef<NodeJS.Timeout>();

  const closeHandler = () => {
    setNotificationVisible(false);
    if (idToFocusOnDismiss) {
      document.getElementById(idToFocusOnDismiss)?.focus();
    }
  };

  useEffect(() => {
    if (children) {
      if (notificationType === NotificationType.ERROR) {
        document.getElementById("notification-close-button")?.focus();
      } else {
        clearTimeout(disableNotificationTimeout.current);
        disableNotificationTimeout.current = setTimeout(() => {
          setNotificationVisible(false);
        }, 40000);
      }
    }
  });

  return (
    <NotificationContainer role="status" aria-live="assertive">
      {visible ? (
        <NotificationContent
          type={
            notificationType === NotificationType.SUCCESS ? "success" : "error"
          }
        >
          <NotificationMessage id="notification-message">
            {children}
          </NotificationMessage>
          {notificationType === NotificationType.ERROR ? (
            <NotificationAction
              id="notification-close-button"
              aria-label="Close"
              onClick={closeHandler}
              aria-describedby="notification-message"
            >
              <CloseSVG />
            </NotificationAction>
          ) : null}
        </NotificationContent>
      ) : null}
    </NotificationContainer>
  );
};

export const Notification = memo(NotificationComponent);

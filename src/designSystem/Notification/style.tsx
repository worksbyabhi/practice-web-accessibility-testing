import styled from "styled-components";

export const NotificationContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export interface NotificationContentProps {
  type?: string;
}

export const NotificationContent = styled.div<NotificationContentProps>`
  display: flex;
  width: 100%;
  max-width: 600px;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 5px;
  box-shadow: 0px 4px 8px 0px ${(props) => props.theme.colors.primary};
  background-color: ${(props) =>
    props.type === "success"
      ? props.theme.colors.success
      : props.theme.colors.error};
  color: ${(props) => props.theme.colors.background};
  position: fixed;
  z-index: 100;
  width: 100%;
  top: 60px;
  animation-name: notificationOnLoad;
  animation-duration: 0.6s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;

  @keyframes notificationOnLoad {
    0% {
      transform: translateY(-100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  }
`;

export const NotificationMessage = styled.span`
  display: flex;
  flex-grow: 1;
  padding: 10px 20px;
`;

export const NotificationAction = styled.button`
  background: transparent;
  border: none;
  width: 44px;
  color: ${(props) => props.theme.colors.background};
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover,
  &:focus {
    background: rgba(0, 0, 0, 0.2);
  }

  svg {
    fill: #fff;
  }
`;

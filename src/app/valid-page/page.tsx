"use client";

import { Button } from "@/designSystem/Button";
import { Placeholder } from "@/designSystem/Placeholder";
import { GridColumn, GridContainer } from "@/designSystem/grid";
import { Notification } from "@/designSystem/Notification";
import { MainContainer } from "../style";
import { NavBar } from "@/components/NavBar";
import { InputWrapper } from "@/designSystem/InputWrapper";
import {
  StyledForm,
  FormFieldDescription,
  FormFieldError,
  MandatoryStar,
  StyledInput,
} from "@/components/FormContainer";
import { Footer } from "@/components/Footer";
import LaptopImage from "../../assets/image/laptop.jpeg";
import { StarTheProject } from "@/components/StarTheProject";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import FruitSelector from "@/components/FruitSelector";
import { NotificationType } from "@/designSystem/Notification/type";

export default function Page() {
  const [age, setAge] = useState(18);
  const [nameFormData, setNameFormData] = useState("");
  const [nameError, setNameError] = useState("");
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationType, setNotificationType] = useState<NotificationType>(
    NotificationType.SUCCESS
  );
  const [notificationMessage, setNotificationMessage] = useState("");

  const ageChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (!isNaN(parseInt(e.target.value))) {
      setAge(parseInt(e.target.value));
    } else if (e.target.value === "") {
      setAge(0);
    }
  };

  const nameChangeHandler = (value: string) => {
    setNameFormData(value);
    setNameError("");
  };

  const formSubmitAction = () => {
    setShowNotification(false);
    setTimeout(() => {
      if (!nameFormData) {
        setNameError("name must be 1 character or more");
        document.getElementById("name")?.focus();
      } else if (nameFormData === "john") {
        setShowNotification(true);
        setNotificationType(NotificationType.ERROR);
        setNotificationMessage("Something went wrong");
      } else {
        setShowNotification(true);
        setNotificationType(NotificationType.SUCCESS);
        setNotificationMessage(`User created ${nameFormData}`);
      }
    }, 100);
  };

  const setNotificationVisible = (value: boolean) => {
    setShowNotification(value);
    setNotificationMessage("");
  };

  useEffect(() => {
    h1Ref.current?.focus();
  }, []);

  return (
    <MainContainer as="div">
      <NavBar isValid />
      <Placeholder height="5rem" />
      <GridContainer as="header">
        <GridColumn style={{ alignItems: "center" }}>
          <h1 ref={h1Ref} tabIndex={-1}>
            Accessible page <span aria-hidden>:)</span>
          </h1>
        </GridColumn>
      </GridContainer>
      <MainContainer>
        <GridContainer>
          <GridColumn
            spanDesktop={6}
            spanMedium={6}
            alignItemsMedium="flex-end"
            alignItemsDesktop="flex-end"
          >
            <img
              style={{ width: "280px" }}
              src={LaptopImage.src}
              aria-hidden
              alt="laptop-wallpaper"
            />
            <span style={{ fontSize: "16px" }}>
              Photo by Ben Kolde on Unsplash
            </span>
          </GridColumn>
          <GridColumn spanDesktop={6} spanMedium={6}>
            <StyledForm action={formSubmitAction}>
              <InputWrapper>
                <label htmlFor="name">
                  Name<MandatoryStar aria-hidden>*</MandatoryStar>
                </label>
                <FormFieldDescription id="name-hint">
                  Choose any name except john
                </FormFieldDescription>
                <StyledInput
                  value={nameFormData}
                  onChange={(e) => nameChangeHandler(e.target.value)}
                  id="name"
                  aria-describedby="name-hint name-error"
                  error={!nameError}
                  aria-invalid={!!nameError}
                ></StyledInput>
                <FormFieldError id="name-error">{nameError}</FormFieldError>
              </InputWrapper>
              <InputWrapper>
                <label htmlFor="age-id">Age</label>
                <div style={{ display: "flex", gap: "24px" }}>
                  <input
                    id="age-id"
                    value={age}
                    onChange={ageChangeHandler}
                    style={{ flexGrow: "1" }}
                    aria-live="assertive"
                  ></input>
                  <Button
                    style={{ width: "24px", padding: "0" }}
                    width="24px"
                    height="24px"
                    type="button"
                    aria-label="Increment age by one"
                    aria-describedby="age-id"
                    onClick={() => setAge(age + 1)}
                  >
                    +
                  </Button>
                </div>
                <FormFieldError />
              </InputWrapper>
              <InputWrapper>
                <FruitSelector />
              </InputWrapper>
              <Placeholder height="2rem" />
              <Button id="form-submit" type="submit">
                Submit
              </Button>
            </StyledForm>
          </GridColumn>
        </GridContainer>
        <StarTheProject />
        <Notification
          setNotificationVisible={setNotificationVisible}
          visible={showNotification}
          notificationType={notificationType}
          idToFocusOnDismiss="form-submit"
        >
          {notificationMessage}
        </Notification>
      </MainContainer>
      <Footer />
    </MainContainer>
  );
}

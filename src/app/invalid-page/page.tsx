"use client";

import { Button } from "@/designSystem/Button";
import { Placeholder } from "@/designSystem/Placeholder";
import { GridColumn, GridContainer } from "@/designSystem/grid";
import { MainAndAsideContainer, MainContainer, MainWrapper } from "../style";
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
import { ChangeEvent, useState } from "react";
import FruitSelector from "@/components/FruitSelector";
import { Notification } from "@/designSystem/Notification";
import { NotificationType } from "@/designSystem/Notification/type";
import { ProjectLinksAndSocialMedia } from "@/components/ProjectLinksAndSocialMedia";

export default function Page() {
  const [age, setAge] = useState(18);
  const [nameFormData, setNameFormData] = useState("");
  const [nameError, setNameError] = useState("");
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
    console.log("here");
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

  return (
    <MainContainer as="div">
      <NavBar as="div" />
      <Placeholder height="4rem" />
      <MainAndAsideContainer>
        <MainWrapper>
          <GridContainer>
            <GridColumn style={{ alignItems: "center" }}>
              <h1>
                Inaccessible page <span aria-hidden>:(</span>
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
                <img style={{ width: "280px" }} src={LaptopImage.src} />
                <span style={{ fontSize: "16px" }}>
                  Photo by Ben Kolde on Unsplash
                </span>
              </GridColumn>
              <GridColumn spanDesktop={6} spanMedium={6}>
                <StyledForm action={formSubmitAction}>
                  <InputWrapper>
                    <label>
                      Name<MandatoryStar>*</MandatoryStar>
                    </label>
                    <FormFieldDescription id="name-hint">
                      Choose any name except john
                    </FormFieldDescription>
                    <StyledInput
                      value={nameFormData}
                      onChange={(e) => nameChangeHandler(e.target.value)}
                      error={!nameError}
                    ></StyledInput>
                    <FormFieldError>{nameError}</FormFieldError>
                  </InputWrapper>
                  <InputWrapper>
                    <label>Age</label>
                    <div style={{ display: "flex", gap: "24px" }}>
                      <input
                        value={age}
                        onChange={ageChangeHandler}
                        style={{ flexGrow: "1" }}
                      ></input>
                      <Button
                        style={{ width: "24px", padding: "0" }}
                        width="24px"
                        height="24px"
                        type="button"
                        isInaccessible
                        onClick={() => setAge(age + 1)}
                      >
                        +
                      </Button>
                    </div>
                    <FormFieldError />
                  </InputWrapper>
                  <InputWrapper>
                    <FruitSelector isInaccessible />
                  </InputWrapper>
                  <Placeholder height="2rem" />
                  <Button type="submit" isInaccessible>
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
        </MainWrapper>
        <ProjectLinksAndSocialMedia as="div" />
      </MainAndAsideContainer>
      <Footer as="div" />
    </MainContainer>
  );
}

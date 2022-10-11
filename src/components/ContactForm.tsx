import React from "react";
import { useForm } from "react-hook-form";

import { Dispatch, FC, SetStateAction } from "react";
import tw, { styled } from "twin.macro";
import Button from "./Button";
import Modal from "react-bootstrap/Modal";

const ModalWrapper = styled.div`
  ${tw`
    flex justify-center flex-col items-center overflow-hidden
    `}
`;

const StyledInput = styled.input`
  ${tw`
  bg-gray-50 border border-gray-300 text-black font-black text-sm rounded-lg focus:ring-gray-900  block w-full p-2.5
`}
`;

const StyledLabel = styled.label`
  ${tw`
  text-[#e0b24d]
`}
`;

const StyledTextarea = styled.textarea`
  ${tw`
 bg-gray-50 border border-gray-300 text-black font-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 h-32
`}
`;

const ErrorMessage = styled.p`
  ${tw`
text-sm font-semibold text-red-400
`}
`;

interface IFormInputs {
  name: string;
  email: string;
  message: string;
}

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const ContactForm: FC<Props> = ({ open, setOpen }) => {
  const handleClose = () => setOpen(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInputs>();

  const onSubmit = (data: IFormInputs) => {
    console.log(data);

    fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        message: data.message,
      }),
    });

    handleClose();
  };

  return (
    <ModalWrapper>
      <Modal show={open} onHide={handleClose}>
        <Modal.Header closeButton={true}>
          <Modal.Title>Contact form</Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            backgroundColor: "#333333",
            backgroundSize: "auto",
          }}
        >
          <form
            method="post"
            className="contactForm"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="space-y-4">
              <StyledLabel>Name</StyledLabel>
              <StyledInput
                type="text"
                placeholder="Name"
                {...register("name", { required: true })}
              />
              {errors.name?.type === "required" && (
                <ErrorMessage>Please, enter your name.</ErrorMessage>
              )}
              <StyledLabel>Email</StyledLabel>
              <StyledInput
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email?.type === "required" && (
                <ErrorMessage>Please, enter your email.</ErrorMessage>
              )}
              {errors.email?.message && (
                <ErrorMessage>Please, enter a valid email.</ErrorMessage>
              )}
              <StyledLabel>Message</StyledLabel>
              <StyledTextarea
                placeholder="Message"
                {...register("message", { required: true })}
              />
              {errors.message?.type === "required" && (
                <ErrorMessage>Please, leave me a message.</ErrorMessage>
              )}
            </div>
            <Button type="submit">Send</Button>
          </form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </ModalWrapper>
  );
};

export default ContactForm;

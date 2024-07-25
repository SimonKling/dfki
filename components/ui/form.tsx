"use client";
import React from "react";
import { Label } from "./label";
import { Input } from "./input";
import { cn } from "@/utils/cn";

export function Form() {
const [email, setEmail] = React.useState("");
const [name, setName] = React.useState("");
const [firstname, setFirstname] = React.useState("");
const [moreInfo, setMoreInfo] = React.useState("");
const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setEmail(e.target.value);
};
const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setName(e.target.value);
};
const handleFirstnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setFirstname(e.target.value);
}
const handleMoreInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setMoreInfo(e.target.value);
}

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
  e.preventDefault(); // Prevent default form submission behavior
  try {
    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: email,
        name : name,
        firstname : firstname,
        moreInfo : moreInfo 
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to send email");
    }

    console.log("Email sent successfully");
    setEmail("");
    setName("");
    setFirstname("");
    setMoreInfo("");
  
  } catch (error) {
    console.error("Error sending email:", error);
  } finally {
  }
};
  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-ki-main dark:bg-black">
      <h2 className="font-bold text-xl text-white dark:text-neutral-200">
        Hier können Sie uns kontaktieren!
      </h2>
      <p className="text-white text-sm max-w-sm mt-2 dark:text-neutral-300">
       Geben Sie uns Ihre Kontaktdaten und wir melden uns bei Ihnen.
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label className="text-white" htmlFor="firstname">Vorname</Label>
            <Input id="firstname" placeholder="Vorname" type="text" onChange={handleFirstnameChange} value={firstname}/>
          </LabelInputContainer>
          <LabelInputContainer>
            <Label className="text-white"  htmlFor="lastname">Nachname</Label>
            <Input id="lastname" placeholder="Nachname" type="text" onChange={handleNameChange} value={name}/>
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label className="text-white"  htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="email@domain.de" value={email} onChange={handleEmailChange} type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label className="text-white"  htmlFor="text">Weitere Infos</Label>
          <Input id="text" placeholder="Weitere Infos" type="text" onChange={handleMoreInfoChange} value={moreInfo}/>
        </LabelInputContainer>
       
        <button
          className="bg-gradient-to-br relative group/btn from-blue-200 dark:from-blue-400 dark:to-blue-600 to-blue-400 block dark:bg-ki-main w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"

        >
          Los! &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col space-y-4">
        
            <BottomGradient />
        </div>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

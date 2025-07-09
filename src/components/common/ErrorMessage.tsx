
import React from "react";

interface ErrorMessageProps {
  message?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  if (!message) return null;

  return <p className="text-red-600 text-sm mt-2">{message}</p>;
};

export default ErrorMessage;

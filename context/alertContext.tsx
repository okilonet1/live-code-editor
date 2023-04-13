import { SnackbarProvider, enqueueSnackbar } from "notistack";
import * as React from "react";

export const alertContext = React.createContext({
  setAlert: (
    message: string,
    variant: "default" | "error" | "success" | "warning" | "info"
  ) => {
    enqueueSnackbar(message, { variant: variant });
  },
});

export interface AuxProps {
  children: React.ReactNode;
}

export const AlertProvider = (props: AuxProps) => {
  const setAlert = (
    message: string,
    variant: "default" | "error" | "success" | "warning" | "info"
  ) => {
    enqueueSnackbar(message, { variant: variant });
  };

  return (
    <alertContext.Provider value={{ setAlert }}>
      <SnackbarProvider
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        {props.children}
      </SnackbarProvider>
    </alertContext.Provider>
  );
};

export const useAlert = () => {
  return React.useContext(alertContext);
};

export default alertContext;

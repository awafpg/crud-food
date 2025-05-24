"use client";
import { enqueueSnackbar, SnackbarProvider } from "notistack";
import { useEffect, useState } from "react";

const FooterComp = () => {
  const [year, setYear] = useState(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  const handleToast = () => {
    enqueueSnackbar("That was easy!");
  };

  return (
    <footer className="bg-gray-100 text-center p-4 text-gray-500 text-sm">
      <SnackbarProvider />
      <button
        onClick={() => {
          handleToast();
        }}
      >
        Show snackbar
      </button>
      {year && `© ${year} FoodApp by You`}
    </footer>
  );
};

export default FooterComp;

import { useEffect, useState } from "react";

export const useDate = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const handle = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(handle);
  }, []);

  return date;
};

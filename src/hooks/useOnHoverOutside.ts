import { RefObject, useEffect } from "react";

export const useOnHoverOutside = (ref: RefObject<HTMLDivElement>, handler: () => void) => {
  useEffect(
    () => {
      const listener = (event: any) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler();
      };
      document.addEventListener("mouseover", listener);
      return () => {
        document.removeEventListener("mouseout", listener);
      };
    },
    [ref, handler]
  );
}
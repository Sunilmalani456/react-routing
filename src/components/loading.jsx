/* eslint-disable react/prop-types */
// import { useEffect, useState } from "react";

// function Delayed({ children, waitBeforeShow = 1000 }) {
//   const [isShown, setIsShown] = useState(false);

//   useEffect(() => {
//     console.log("useEffect hook executed");
//     const timeout = setTimeout(() => {
//       setIsShown(true);
//       console.log("isShown set to true");
//     }, waitBeforeShow);

//     return () => clearTimeout(timeout);
//   }, [waitBeforeShow]);

//   return isShown === true ? children : null;
// }

export default function Loading() {
  return <div className="loading center" />;
}

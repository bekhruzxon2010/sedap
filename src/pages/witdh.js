// import React, { useState, useEffect } from "react";

// function MyExample() {
//     const [width, setWidth] = useState(window.innerWidth);
//     const [height, setHeight] = useState(window.innerHeight);

//     useEffect(() => {
//         const handleResize = () => {
//             setWidth(window.innerWidth);
//             setHeight(window.innerHeight);
//         };

//         window.addEventListener("resize", handleResize);

//         return () => {
//             window.removeEventListener("resize", handleResize);
//         };
//     }, []); 

//     return (
//         <>
//             <p>Window width: {width}px</p>
//             <p>Window height: {height}px</p>
//         </>
//     );
// }

// export default MyExample;

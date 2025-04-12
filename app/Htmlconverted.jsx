// import React from "react";

// // Function to clean the string
// function stripHTMLandFormat(text) {
//   const withoutTags = text.replace(/<[^>]+>/g, ""); // remove all tags
//   const withLineBreaks = withoutTags.replace(/\\n/g, "\n"); // turn \n into actual line breaks
//   return withLineBreaks;
// }

// const HtmlNotesViewer = ({ rawHtml }) => {
//   const cleanedText = stripHTMLandFormat(rawHtml);

//   return (
//     <pre style={{ whiteSpace: "pre-wrap", fontFamily: "inherit" }}>
//       {cleanedText}
//     </pre>
//   );
// };

// export default HtmlNotesViewer;

import React from "react";
import DOMPurify from "dompurify";

const HtmlRenderer = ({ rawHtml }) => {
  const decoded = rawHtml.replace(/\\n/g, "<br>"); // interpret \n as <br>
  const clean = DOMPurify.sanitize(decoded); // XSS protection

  return (
    <div
      className="prose max-w-none"
      dangerouslySetInnerHTML={{ __html: clean }}
    />
  );
};

export default HtmlRenderer;

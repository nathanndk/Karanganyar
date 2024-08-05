// import dynamic from "next/dynamic";
// import "froala-editor/css/froala_style.min.css";
// import "froala-editor/css/froala_editor.pkgd.min.css";

// import { useState, useEffect } from "react";
// // This line dynamically imports the Froala Editor component,
// // and sets it to not load on the server (ssr: false)
// const FroalaEditor = dynamic(
//     async () => {
//         const values = await Promise.all([
//             import("react-froala-wysiwyg"), // must be first import since we are doing values[0] in return
//             import("froala-editor/js/plugins.pkgd.min.js"),
//         ]);
//         return values[0];
//     },
//     {
//         loading: () => <p>LOADING!!!</p>,
//         ssr: false,
//     }
// );

// export default function TextEditor({ value, changeData, item }) {
//     const [model, setModel] = useState("");
//     const config = {
//         // Add your Froala configuration here
//         attribution: false,
//         listAdvancedTypes: true,
//         toolbarButtons: [
//             "fullscreen",
//             "bold",
//             "italic",
//             "underline",
//             "strikeThrough",
//             "subscript",
//             "superscript",
//             "|",
//             "fontFamily",
//             "fontSize",
//             "color",
//             "inlineStyle",
//             "paragraphStyle",
//             "|",
//             "paragraphFormat",
//             "align",
//             "formatOL",
//             "formatUL",
//             "outdent",
//             "indent",
//             "quote",
//             "-",
//             "insertLink",
//             "insertImage",
//             "insertVideo",
//             "insertFile",
//             "insertTable",
//             "|",
//             "emoticons",
//             "specialCharacters",
//             "insertHR",
//             "selectAll",
//             "clearFormatting",
//             "|",
//             "print",
//             "help",
//             "html",
//             "|",
//             "undo",
//             "redo",
//             "trackChanges",
//             "markdown",
//         ],
//     };

//     useEffect(() => {
//         if (value && model == "") {
//             setModel(value);
//         }
//     }, [value]);

//     return (
//         <div>
//             <FroalaEditor
//                 config={config}
//                 model={model}
//                 onModelChange={(model) => {
//                     setModel(model);
//                     changeData(item.key, model);
//                 }}
//             />
//         </div>
//     );
// }

import React, { useState, useRef, useMemo } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

/* Using dynamic import of Jodit component as it can't render in server side*/
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

/*functions*/
export default function Index({ value, changeData, item }) {
    const editor = useRef(null); //declared a null value
    const [content, setContent] = useState(""); //declare using state

    /* The most important point*/
    const config = useMemo(
        //  Using of useMemo while make custom configuration is strictly recomended
        () => ({
            //  if you don't use it the editor will lose focus every time when you make any change to the editor, even an addition of one character
            /* Custom image uploader button configuretion to accept image and convert it to base64 format */
            uploader: {
                insertImageAsBase64URI: true,
                imagesExtensions: ["jpg", "png", "jpeg", "gif", "svg", "webp"], // this line is not much important , use if you only strictly want to allow some specific image format
            },
            showPlaceholder: false,
        }),

        []
    );
    /* function to handle the changes in the editor */
    const handleChange = (value) => {
        setContent(value);
        changeData(item.key, value);
    };

    return (
        <>
            <JoditEditor
                showPlaceholder={false}
                ref={editor} //This is important
                value={value} //This is important
                config={config} //Only use when you declare some custom configs
                onChange={handleChange} //handle the changes
                className="w-full h-[70%] mt-10 bg-white"
            />
            <style>{`.jodit-wysiwyg{height:300px !important;padding-left: 20px !important;}
             .jodit-wysiwyg  ul {
                            list-style: inside;
                            list-style-type: disc;
                        }
                        .jodit-wysiwyg ol {
                            list-style: inside;
                            list-style-type: number;
                        }
            `}</style>
        </>
    );
}

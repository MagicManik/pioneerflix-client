// import React from "react";
// import { useState } from "react";
// import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import SpeechRecognition, {
//     useSpeechRecognition,
// } from "react-speech-recognition";

// const VoiceSearch = () => {
//     const { transcript, resetTranscript, browserSupportsSpeechRecognition } =
//         useSpeechRecognition();
//     const [voiceSearch, setVoiceSearch] = useState(false);

//     const navigateVoiceResultPage = useNavigate();

//     if (voiceSearch) {
//         if (transcript) {
//             const voiceSearchedValue = transcript;
//             navigateVoiceResultPage(`result/${voiceSearchedValue}`);
//         }
//     }

//     if (!browserSupportsSpeechRecognition) {
//         return <span>Browser doesn't support speech recognition.</span>;
//     }

//     return (
//         <button
//             onClick={() => {
//                 setVoiceSearch(!voiceSearch);
//             }}
//         >
//             {voiceSearch ? (
//                 <FaMicrophone
//                     className=" text-white text-xl mr-3"
//                     onClick={resetTranscript}
//                 ></FaMicrophone>
//             ) : (
//                 <FaMicrophoneSlash
//                     className=" text-white text-xl mr-3"
//                     onClick={SpeechRecognition.startListening}
//                 ></FaMicrophoneSlash>
//             )}
//         </button>
//     );
// };

// export default VoiceSearch;

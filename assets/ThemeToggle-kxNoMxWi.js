import{c as o,r as n,j as e}from"./index-VVLtEaGp.js";import{u as l}from"./useTheme-AMBNS4SD.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=o("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=o("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),h=()=>{const{theme:t,toggleTheme:a}=l(),[s,r]=n.useState(!1);return e.jsxs("div",{className:"fixed top-0 right-2 z-50 flex flex-col items-center select-none",children:[e.jsx("svg",{width:"16",height:"68",viewBox:"0 0 16 68",fill:"none",className:`block mb-[-4px] ${s?"rope-swing":""}`,style:{display:"block"},children:e.jsx("path",{id:"rope-path",d:"M8 0 Q12 12 8 24 Q4 36 8 68",stroke:"currentColor",strokeWidth:"2",className:"text-primary/60",fill:"none"})}),e.jsx("button",{"aria-label":"Toggle theme",onClick:()=>{a(),r(!0),setTimeout(()=>r(!1),1200)},className:"relative flex flex-col items-center justify-center",style:{outline:"none",border:"none",background:"none"},children:e.jsx("span",{className:"block w-12 h-12 rounded-full shadow-lg border-4 border-primary flex items-center justify-center transition-all duration-500 "+(s?"bulb-swing ":"")+(t==="dark"?"bg-primary/90 bulb-glow":"bg-secondary/90"),children:t==="dark"?e.jsx(d,{className:"h-8 w-8 text-secondary drop-shadow-lg"}):e.jsx(i,{className:"h-8 w-8 text-primary"})})}),e.jsx("div",{className:"w-6 h-2 bg-primary rounded-b-lg mt-[-2px]"}),e.jsx("style",{children:`
        .bulb-swing, .rope-swing {
          animation: swing-smooth 1.2s ease-in-out;
          transform-origin: top center;
        }
        @keyframes swing-smooth {
          0%   { transform: rotate(-10deg); }
          25%  { transform: rotate(10deg); }
          50%  { transform: rotate(-10deg); }
          75%  { transform: rotate(10deg); }
          100% { transform: rotate(0deg); }
        }
        .bulb-glow {
          box-shadow: 0 0 32px 8px #701C1C66;
        }
      `})]})};export{h as default};

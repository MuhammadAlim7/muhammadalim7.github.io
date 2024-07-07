export const cards = [
  {
    icon: Mobo,
    title: "Computer Troubleshoot",
    text: "Memperbaiki masalah pada komputer, perangkat keras maupun perangkat lunak untuk mengembalikan fungsinya seperti semula.",
  },
  {
    icon: UiUx,
    title: "UI/UX Design",
    text: "Mendesain antarmuka pengguna yang menarik memberikan pengalaman pengguna jauh lebih baik, dengan fungsional interaksi yang mulus.",
  },
  {
    icon: DataEnrty,
    title: "Data Entry",
    text: "Menginput data dan mengatur data tersebut sesuai struktur dan format yang ditentukan dalam sistem atau basis data yang digunakan.",
  },
  {
    icon: Website,
    title: "Front-end Developer",
    text: "Mengembangkan antarmuka pengguna yang menarik dan berfungsi secara kreatif, meningkatkan daya tarik dan fungsionalitas sebuah website.",
  },
];

export function Mobo({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width="100"
      height="100"
      viewBox="0 0 64 64"
    >
      <path d="M7 10a1 1 0 0 1-1-1V6a1 1 0 0 1 2 0v3a1 1 0 0 1-1 1Zm0 13a1 1 0 0 1-1-1v-3a1 1 0 0 1 2 0v3a1 1 0 0 1-1 1Zm0 9.43a1 1 0 0 1-1-1V28a1 1 0 0 1 2 0v3.43a1 1 0 0 1-1 1Zm0 9.427a1 1 0 0 1-1-1V37.43a1 1 0 0 1 2 0v3.428a1 1 0 0 1-1 1Zm0 9.429a1 1 0 0 1-1-1v-3.429a1 1 0 0 1 2 0v3.43a1 1 0 0 1-1 1Z"></path>
      <path d="M61 64H9.001A3.004 3.004 0 0 1 6 61v-4.714a1 1 0 0 1 2 0V61a1.002 1.002 0 0 0 1.001 1H61a1 1 0 0 0 1-1V3a.999.999 0 0 0-1-1H9.922a1 1 0 0 1 0-2H61a2.986 2.986 0 0 1 2.121.878A3.022 3.022 0 0 1 64 3v58a3.003 3.003 0 0 1-3 3Z"></path>
      <path d="M11.001 7h-7a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1Zm-6-2h5V2h-5Zm3.001 15h-4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-2v1a1 1 0 0 1-1 1Zm-3-2h2v-1a1 1 0 0 1 1-1h2v-4h-2a1 1 0 0 1-1-1v-1h-2Z"></path>
      <path d="M4 17H1a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1Zm-2-2h1v-2H2Zm2 5H2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm0-10H2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm7.003 19h-7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1Zm-6-2h5v-4h-5Zm5.995 11.429h-9a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1Zm-8-2h7v-4h-7Zm8 11.428h-9a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1Zm-8-2h7v-4h-7Zm8.005 11.429H5.14a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h5.862a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1Zm-4.862-2h3.862v-4H6.14Z"></path>
      <path d="M5.14 56.286H1a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h4.14a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1Zm-3.14-2h2.14v-2H2ZM19 11h-4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1Zm-3-2h2V7h-2Zm3 10h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1Zm-3-2h2v-2h-2Zm3 10h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1Zm-3-2h2v-2h-2Zm23.004 6h-16a1 1 0 0 1-1-1V14a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1Zm-15-2h14V15h-14ZM27 11h-4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1Zm-3-2h2V7h-2Zm11 2h-4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1Zm-3-2h2V7h-2Zm28.001 29h-4a1 1 0 0 1-1-1V19a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1Zm-3-2h2V20h-2Zm3 12h-4a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1Zm-3-2h2v-4h-2Zm3 12h-4a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1Zm-3-2h2v-4h-2Zm-4.999 5h-9a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1Zm-8-2h7v-2h-7Zm8.999-21h-4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v30a1 1 0 0 1-1 1Zm-3-2h2V8h-2Zm-3.999 2h-4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v30a1 1 0 0 1-1 1Zm-3-2h2V8h-2Zm5.999 13h-32a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h32a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1Zm-31-2h30v-2h-30Z"></path>
      <path d="M60 26h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2Zm0 6h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2ZM46 13h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2Zm-1.999 36a1 1 0 0 1-1-1v-4a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1Zm9-36h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2ZM46 33h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2Zm7.001 0h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2ZM51 39.999a1 1 0 0 1-1-1v-2a1 1 0 0 1 2 0v2a1 1 0 0 1-1 1ZM51 8a1 1 0 0 1-1-1V5a1 1 0 0 1 2 0v2a1 1 0 0 1-1 1Zm-7 31.999a1 1 0 0 1-1-1v-2a1 1 0 0 1 2 0v2a1 1 0 0 1-1 1ZM17.001 47h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 0 2ZM44 8a1 1 0 0 1-1-1V5a1 1 0 0 1 2 0v2a1 1 0 0 1-1 1Zm7 39h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm-3.498 14a1 1 0 0 1-1-1v-4a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1ZM18 56.999a3 3 0 1 1 3-3 3.003 3.003 0 0 1-3 3Zm0-4a1 1 0 1 0 1 1 1 1 0 0 0-1-1Z"></path>
      <path d="M18 61a3 3 0 1 1 3-3 3.003 3.003 0 0 1-3 3Zm0-4a1 1 0 1 0 1 1 1 1 0 0 0-1-1Z"></path>
      <path d="M22.001 56.999a3 3 0 1 1 3-3 3.003 3.003 0 0 1-3 3Zm0-4a1 1 0 1 0 1 1 1 1 0 0 0-1-1ZM17.503 42a4.5 4.5 0 1 1 4.5-4.5 4.505 4.505 0 0 1-4.5 4.5Zm0-7a2.5 2.5 0 1 0 2.5 2.5 2.502 2.502 0 0 0-2.5-2.5Z"></path>
      <path d="M22.001 61a3 3 0 1 1 3-3 3.003 3.003 0 0 1-3 3Zm0-4a1 1 0 1 0 1 1 1 1 0 0 0-1-1ZM40 60.999h-9a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1Zm-8-2h7v-6h-7ZM39 34H23a4.001 4.001 0 0 1-4-4v-1a1 1 0 0 1 2 0v1a2.012 2.012 0 0 0 .586 1.414A1.985 1.985 0 0 0 23 32h16a1 1 0 0 1 0 2Z"></path>
      <path d="M27.001 35a1 1 0 0 1-1-1v-4a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1Zm8 0a1 1 0 0 1-1-1v-4a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1ZM36 28H26a1 1 0 0 1-1-1v-2a1 1 0 0 1 .105-.447L26 22.764v-.528l-.895-1.789A1 1 0 0 1 25 20v-3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3a1 1 0 0 1-.105.447L36 22.236v.528l.895 1.789A1 1 0 0 1 37 25v2a1 1 0 0 1-1 1Zm-9-2h8v-.764l-.895-1.789A1 1 0 0 1 34 23v-1a1 1 0 0 1 .105-.447L35 19.764V18h-8v1.764l.895 1.789A1 1 0 0 1 28 22v1a1 1 0 0 1-.105.447L27 25.236Zm9.001 14h-9a1 1 0 0 1 0-2h9a1 1 0 0 1 0 2ZM60.02 5a1 1 0 0 1-.01-2h.01a1 1 0 0 1 0 2Zm0 56a1 1 0 0 1-.01-2h.01a1 1 0 0 1 0 2Zm-50 0a1 1 0 0 1-.01-2h.01a1 1 0 1 1 0 2Zm14-21a1 1 0 0 1-.01-2h.01a1 1 0 0 1 0 2Zm15 0a1 1 0 0 1-.01-2h.01a1 1 0 0 1 0 2Z"></path>
    </svg>
  );
}

export function UiUx({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width="100"
      height="100"
      viewBox="0 0 64 64"
    >
      <g>
        <rect x="33" y="10" width="2" height="2"></rect>
        <rect x="29" y="10" width="2" height="2"></rect>
        <rect x="31" y="52" width="2" height="2"></rect>
        <rect x="11" y="22" width="2" height="2"></rect>
        <rect x="15" y="22" width="2" height="2"></rect>
        <rect x="19" y="22" width="2" height="2"></rect>
        <rect x="23" y="22" width="2" height="2"></rect>
        <rect x="27" y="22" width="2" height="2"></rect>
        <rect x="42" y="40" width="2" height="2"></rect>
        <rect x="46" y="40" width="8" height="2"></rect>
        <rect x="42" y="44" width="12" height="2"></rect>
        <rect x="42" y="48" width="12" height="2"></rect>
        <path d="M15,7V18H8a1,1,0,0,0-1,1v8a1,1,0,0,0,1,1h7V57a1,1,0,0,0,1,1H48a1,1,0,0,0,1-1V54h8a1,1,0,0,0,1-1V37a1,1,0,0,0-1-1H49V7a1,1,0,0,0-1-1H16A1,1,0,0,0,15,7ZM9,20H31v6H9ZM47,56H17V50H38v3a1,1,0,0,0,1,1h8Zm9-4H40V38H56ZM39,36a1,1,0,0,0-1,1V48H17V28H32a1,1,0,0,0,1-1V19a1,1,0,0,0-1-1H17V16H47V36ZM47,8v6H17V8Z"></path>
        <path d="M32,31H28a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V32A1,1,0,0,0,32,31Zm-1,4H29V33h2Z"></path>
        <path d="M20,37h4a1,1,0,0,0,1-1V32a1,1,0,0,0-1-1H20a1,1,0,0,0-1,1v4A1,1,0,0,0,20,37Zm1-4h2v2H21Z"></path>
        <path d="M42.793,24.855a4,4,0,1,0-5.586,0A5,5,0,0,0,35,29v4a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V29A5,5,0,0,0,42.793,24.855ZM38,22a2,2,0,1,1,2,2A2,2,0,0,1,38,22Zm5,10H37V29a3,3,0,0,1,6,0Z"></path>
        <rect x="19" y="39" width="2" height="2"></rect>
        <rect x="23" y="39" width="10" height="2"></rect>
        <rect x="19" y="43" width="14" height="2"></rect>
        <rect x="26" y="60" width="20" height="2"></rect>
        <rect x="11" y="31" width="2" height="16"></rect>
        <path d="M53,6a4,4,0,0,0-4-4H36V4H49a2,2,0,0,1,2,2V22h2Z"></path>
        <rect x="51" y="24" width="2" height="2"></rect>
      </g>
    </svg>
  );
}
export function DataEnrty({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width="100"
      height="100"
      viewBox="0 0 64 64"
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M35,0C23.85,0,14.43,2.59,11.22,6.47c-6.55,1.6-10.33,4.3-11.07,7.04C0.06,13.66,0,13.82,0,14v0.5V26v0.5V27v11v0.5V39v12  c0,0.16,0.04,0.32,0.12,0.45C1.3,56.35,11.86,60,25,60c11.24,0,20.58-2.68,23.79-6.52c6.36-1.55,10.37-4.08,11.09-7  C59.96,46.34,60,46.17,60,46V34v-0.5V22v-0.5v-12C60,4.89,51.24,0,35,0z M47.8,39.35c-0.04,0.1-0.09,0.2-0.14,0.3  c-0.07,0.12-0.14,0.25-0.23,0.37c-0.07,0.09-0.14,0.18-0.22,0.28c-0.11,0.13-0.23,0.26-0.36,0.39c-0.08,0.08-0.17,0.16-0.26,0.24  c-0.16,0.14-0.34,0.29-0.53,0.43c-0.08,0.06-0.17,0.12-0.26,0.18c-0.23,0.16-0.46,0.31-0.72,0.46c-0.07,0.04-0.14,0.08-0.21,0.12  c-0.3,0.17-0.61,0.33-0.94,0.5c-0.04,0.02-0.09,0.04-0.13,0.06c-0.37,0.18-0.77,0.35-1.19,0.52c-0.01,0-0.02,0.01-0.04,0.01  c-2.27,0.91-5.18,1.67-8.56,2.17c-0.02,0-0.03,0-0.05,0.01c-0.66,0.1-1.33,0.18-2.03,0.26c-0.11,0.01-0.23,0.02-0.35,0.03  c-0.61,0.06-1.22,0.12-1.85,0.17c-0.29,0.02-0.59,0.03-0.88,0.05c-0.47,0.03-0.94,0.06-1.43,0.08C26.64,45.98,25.83,46,25,46  s-1.64-0.02-2.43-0.04c-0.49-0.02-0.96-0.05-1.43-0.08c-0.29-0.02-0.59-0.03-0.88-0.05c-0.63-0.05-1.24-0.1-1.85-0.17  c-0.11-0.01-0.23-0.02-0.35-0.03c-0.69-0.08-1.37-0.16-2.03-0.26c-0.02,0-0.03,0-0.05-0.01c-3.39-0.5-6.29-1.26-8.56-2.17  c-0.01,0-0.02-0.01-0.04-0.01c-0.42-0.17-0.81-0.34-1.19-0.52c-0.04-0.02-0.09-0.04-0.13-0.06c-0.34-0.16-0.65-0.33-0.94-0.5  c-0.07-0.04-0.14-0.08-0.21-0.12c-0.26-0.15-0.49-0.31-0.72-0.46c-0.09-0.06-0.18-0.12-0.26-0.18c-0.19-0.14-0.36-0.28-0.53-0.43  c-0.09-0.08-0.18-0.16-0.26-0.24c-0.13-0.13-0.25-0.26-0.36-0.39c-0.08-0.09-0.15-0.18-0.22-0.28c-0.09-0.12-0.16-0.25-0.23-0.37  c-0.05-0.1-0.1-0.2-0.14-0.3c-0.05-0.12-0.09-0.24-0.12-0.36C2.04,38.82,2,38.66,2,38.5c0-0.11,0.01-0.23,0.03-0.34  c0.02-0.14,0.01-0.28-0.03-0.42v-7.45c0.03,0.03,0.06,0.05,0.09,0.08c0.22,0.19,0.44,0.38,0.69,0.57C6.55,33.79,14.08,36,25,36  c10.87,0,18.39-2.2,22.17-5.03c0.3-0.22,0.57-0.45,0.83-0.68c0,0,0,0,0,0v7.42c-0.04,0.14-0.06,0.29-0.03,0.44  C47.99,38.27,48,38.39,48,38.5c0,0.16-0.04,0.32-0.08,0.49C47.89,39.11,47.85,39.23,47.8,39.35z M2.6,18.8  c0.3,0.24,0.62,0.47,0.98,0.7c0.07,0.05,0.16,0.09,0.23,0.14c0.29,0.18,0.6,0.36,0.93,0.54c0.12,0.06,0.24,0.13,0.37,0.19  c0.37,0.19,0.75,0.37,1.15,0.54c0.07,0.03,0.13,0.06,0.19,0.09c0.47,0.2,0.97,0.39,1.49,0.57c0.14,0.05,0.29,0.1,0.44,0.15  c0.41,0.14,0.84,0.27,1.28,0.4c0.16,0.05,0.31,0.09,0.48,0.14c0.58,0.16,1.19,0.32,1.82,0.46c0.09,0.02,0.18,0.04,0.27,0.06  c0.56,0.12,1.14,0.23,1.74,0.34c0.2,0.04,0.41,0.07,0.61,0.1c0.57,0.09,1.15,0.18,1.75,0.26c0.15,0.02,0.3,0.04,0.46,0.06  c0.74,0.09,1.51,0.17,2.3,0.23c0.2,0.02,0.4,0.03,0.6,0.04c0.63,0.05,1.28,0.08,1.94,0.11c0.24,0.01,0.48,0.02,0.73,0.03  C23.21,23.98,24.09,24,25,24s1.79-0.02,2.65-0.05c0.25-0.01,0.49-0.02,0.73-0.03c0.66-0.03,1.31-0.07,1.94-0.11  c0.2-0.01,0.4-0.03,0.6-0.04c0.79-0.07,1.56-0.14,2.3-0.23c0.16-0.02,0.3-0.04,0.46-0.06c0.6-0.08,1.18-0.16,1.75-0.26  c0.21-0.03,0.41-0.07,0.61-0.1c0.6-0.11,1.18-0.22,1.74-0.34c0.09-0.02,0.18-0.04,0.27-0.06c0.63-0.14,1.24-0.3,1.82-0.46  c0.16-0.04,0.32-0.09,0.48-0.14c0.44-0.13,0.87-0.26,1.28-0.4c0.15-0.05,0.3-0.1,0.44-0.15c0.52-0.18,1.02-0.37,1.49-0.57  c0.07-0.03,0.13-0.06,0.19-0.09c0.4-0.18,0.79-0.36,1.15-0.54c0.13-0.06,0.25-0.13,0.37-0.19c0.33-0.18,0.64-0.35,0.93-0.54  c0.08-0.05,0.16-0.09,0.23-0.14c0.35-0.23,0.67-0.46,0.98-0.7c0.08-0.06,0.14-0.12,0.21-0.18c0.13-0.11,0.27-0.21,0.39-0.32v7.42  c-0.04,0.14-0.06,0.29-0.03,0.44C47.99,26.27,48,26.39,48,26.5c0,0.16-0.04,0.32-0.08,0.49c-0.03,0.12-0.07,0.24-0.12,0.36  c-0.04,0.1-0.09,0.2-0.14,0.3c-0.07,0.12-0.14,0.25-0.23,0.37c-0.07,0.09-0.14,0.18-0.22,0.28c-0.11,0.13-0.23,0.26-0.36,0.39  c-0.08,0.08-0.17,0.16-0.26,0.24c-0.16,0.14-0.34,0.29-0.53,0.43c-0.08,0.06-0.17,0.12-0.26,0.18c-0.23,0.16-0.46,0.31-0.72,0.46  c-0.07,0.04-0.14,0.08-0.21,0.12c-0.3,0.17-0.61,0.33-0.94,0.5c-0.04,0.02-0.09,0.04-0.13,0.06c-0.37,0.18-0.77,0.35-1.19,0.52  c-0.01,0-0.02,0.01-0.04,0.01c-2.27,0.91-5.18,1.67-8.56,2.17c-0.02,0-0.03,0-0.05,0.01c-0.66,0.1-1.33,0.18-2.03,0.26  c-0.11,0.01-0.23,0.02-0.35,0.03c-0.61,0.06-1.22,0.12-1.85,0.17c-0.29,0.02-0.59,0.03-0.88,0.05c-0.47,0.03-0.94,0.06-1.43,0.08  C26.64,33.98,25.83,34,25,34s-1.64-0.02-2.43-0.04c-0.49-0.02-0.96-0.05-1.43-0.08c-0.29-0.02-0.59-0.03-0.88-0.05  c-0.63-0.05-1.24-0.1-1.85-0.17c-0.11-0.01-0.23-0.02-0.35-0.03c-0.69-0.08-1.37-0.16-2.03-0.26c-0.02,0-0.03,0-0.05-0.01  c-3.39-0.5-6.29-1.26-8.56-2.17c-0.01,0-0.02-0.01-0.04-0.01c-0.42-0.17-0.81-0.34-1.19-0.52c-0.04-0.02-0.09-0.04-0.13-0.06  c-0.34-0.16-0.65-0.33-0.94-0.5c-0.07-0.04-0.14-0.08-0.21-0.12c-0.26-0.15-0.49-0.31-0.72-0.46c-0.09-0.06-0.18-0.12-0.26-0.18  c-0.19-0.14-0.36-0.28-0.53-0.43c-0.09-0.08-0.18-0.16-0.26-0.24c-0.13-0.13-0.25-0.26-0.36-0.39c-0.08-0.09-0.15-0.18-0.22-0.28  c-0.09-0.12-0.16-0.25-0.23-0.37c-0.05-0.1-0.1-0.2-0.14-0.3c-0.05-0.12-0.09-0.24-0.12-0.36C2.04,26.82,2,26.66,2,26.5  c0-0.11,0.01-0.23,0.03-0.34c0.02-0.14,0.01-0.28-0.03-0.42v-7.45c0.12,0.11,0.26,0.22,0.39,0.32C2.46,18.68,2.53,18.74,2.6,18.8z   M50,39.09V39v-0.5V38v-8.83c0.04-0.01,0.08-0.03,0.13-0.04c0.4-0.11,0.79-0.23,1.17-0.35c0,0,0.01,0,0.01,0  c2.96-0.94,5.22-2.1,6.69-3.43v8.14c0,0.12-0.02,0.23-0.03,0.35c-0.02,0.1-0.04,0.19-0.07,0.29c-0.01,0.03-0.02,0.06-0.02,0.08  c-0.04,0.1-0.08,0.21-0.13,0.31c-0.01,0.01-0.01,0.03-0.02,0.04c-0.83,1.61-3.47,3.2-7.27,4.38C50.3,39,50.15,39.05,50,39.09z   M58,13.35v8.15c0,0.12-0.02,0.23-0.03,0.35c-0.02,0.1-0.04,0.19-0.07,0.29c-0.01,0.03-0.02,0.06-0.02,0.08  c-0.04,0.1-0.08,0.21-0.13,0.31c-0.01,0.01-0.01,0.03-0.02,0.04c-0.83,1.61-3.47,3.2-7.27,4.38C50.3,27,50.15,27.05,50,27.09V27  v-0.5V26v-8.83c0.08-0.02,0.16-0.05,0.24-0.07c0.23-0.07,0.45-0.13,0.68-0.2c0.19-0.06,0.38-0.11,0.56-0.17  c0.23-0.07,0.45-0.15,0.67-0.23c0.17-0.06,0.33-0.11,0.5-0.17c0.23-0.09,0.45-0.17,0.67-0.26c0.14-0.05,0.28-0.11,0.41-0.16  c0.26-0.11,0.5-0.22,0.74-0.33c0.09-0.04,0.18-0.08,0.26-0.12c0.32-0.16,0.64-0.32,0.93-0.48c0.03-0.02,0.06-0.03,0.09-0.05  c0.26-0.15,0.51-0.29,0.75-0.45c0.08-0.05,0.16-0.11,0.24-0.16c0.18-0.12,0.35-0.24,0.51-0.36c0.09-0.07,0.17-0.13,0.25-0.2  c0.14-0.11,0.28-0.22,0.41-0.34C57.95,13.39,57.98,13.37,58,13.35z M35,2c13.55,0,23,3.95,23,7.5c0,0.13-0.01,0.27-0.04,0.4  c-0.01,0.04-0.02,0.09-0.04,0.13c-0.02,0.09-0.05,0.18-0.08,0.27c-0.02,0.05-0.05,0.1-0.07,0.16c-0.04,0.08-0.07,0.16-0.12,0.24  c-0.03,0.06-0.07,0.11-0.1,0.17c-0.05,0.08-0.1,0.16-0.16,0.23c-0.04,0.06-0.09,0.11-0.13,0.17c-0.06,0.08-0.13,0.15-0.2,0.23  c-0.05,0.06-0.11,0.11-0.16,0.17c-0.08,0.07-0.15,0.15-0.24,0.22c-0.06,0.06-0.13,0.11-0.19,0.17c-0.09,0.07-0.18,0.15-0.28,0.22  c-0.07,0.05-0.14,0.11-0.22,0.16c-0.1,0.07-0.21,0.15-0.32,0.22c-0.08,0.05-0.16,0.11-0.24,0.16c-0.12,0.07-0.24,0.14-0.36,0.22  c-0.09,0.05-0.17,0.1-0.26,0.15c-0.13,0.07-0.27,0.15-0.41,0.22c-0.09,0.05-0.18,0.09-0.27,0.14c-0.15,0.08-0.31,0.15-0.48,0.22  c-0.09,0.04-0.17,0.08-0.26,0.12c-0.21,0.09-0.43,0.19-0.66,0.28c-0.04,0.02-0.09,0.04-0.13,0.06c-0.27,0.11-0.56,0.22-0.85,0.32  c-0.08,0.03-0.17,0.06-0.25,0.09c-0.21,0.07-0.43,0.15-0.65,0.22c-0.12,0.04-0.24,0.07-0.36,0.11c-0.16,0.05-0.32,0.1-0.49,0.15  V14.5V14c0-0.13-0.03-0.24-0.08-0.35c-0.01-0.02-0.01-0.04-0.02-0.05c-0.01-0.01-0.01-0.03-0.02-0.04c-0.28-1.18-1.12-2.28-2.4-3.28  c-0.01-0.01-0.01-0.01-0.02-0.02c-0.18-0.14-0.39-0.28-0.59-0.42c-3.55-2.51-10.08-4.48-19.33-4.79C26.71,5.02,25.86,5,25,5  c-0.85,0-1.7,0.02-2.54,0.05c-2.5,0.08-4.79,0.29-6.88,0.59C19.45,3.61,26.27,2,35,2z M13.49,8.06c0.25-0.05,0.51-0.09,0.77-0.14  c0.33-0.06,0.67-0.12,1.01-0.18c0.3-0.05,0.6-0.09,0.91-0.14c0.34-0.05,0.68-0.09,1.03-0.14c0.29-0.04,0.59-0.07,0.89-0.11  c0.6-0.06,1.21-0.12,1.83-0.17c0.24-0.02,0.48-0.03,0.72-0.05c0.48-0.03,0.97-0.06,1.47-0.08c0.24-0.01,0.47-0.02,0.71-0.03  C23.53,7.02,24.26,7,25,7c0.83,0,1.64,0.02,2.43,0.04c0.48,0.02,0.94,0.05,1.41,0.08c0.3,0.02,0.61,0.03,0.9,0.05  c0.62,0.04,1.22,0.1,1.82,0.16c0.12,0.01,0.25,0.02,0.37,0.03c0.68,0.07,1.34,0.16,1.98,0.25c0.03,0,0.07,0.01,0.1,0.01  c3.37,0.5,6.26,1.26,8.53,2.16c0.03,0.01,0.05,0.02,0.08,0.03c0.41,0.16,0.79,0.33,1.15,0.5c0.06,0.03,0.11,0.05,0.17,0.08  c0.32,0.16,0.63,0.32,0.91,0.48c0.08,0.05,0.16,0.09,0.24,0.14c0.25,0.15,0.48,0.3,0.7,0.45c0.09,0.07,0.19,0.13,0.28,0.2  c0.18,0.14,0.35,0.27,0.51,0.41c0.1,0.08,0.19,0.17,0.28,0.25c0.13,0.13,0.24,0.25,0.35,0.38c0.08,0.1,0.16,0.19,0.23,0.29  c0.09,0.12,0.16,0.24,0.22,0.36c0.06,0.1,0.1,0.2,0.15,0.3c0.05,0.12,0.09,0.24,0.11,0.36C47.96,14.18,48,14.34,48,14.5  c0,3.55-9.45,7.5-23,7.5S2,18.05,2,14.5C2,12.08,6.4,9.47,13.49,8.06z M25,58c-13.04,0-22.4-3.7-22.97-7.16  C2.02,50.79,2.01,50.75,2,50.71v-8.41c0.03,0.03,0.06,0.05,0.09,0.08c0.22,0.19,0.44,0.38,0.69,0.57C6.55,45.79,14.08,48,25,48  c10.87,0,18.39-2.2,22.17-5.03c0.3-0.22,0.57-0.45,0.83-0.68c0,0,0,0,0,0v8.41c-0.01,0.04-0.02,0.09-0.03,0.13  c-0.03,0.2-0.1,0.41-0.2,0.61c-0.04,0.08-0.09,0.16-0.14,0.24C45.83,54.88,36.97,58,25,58z M57.97,45.84  c-0.32,1.94-3.31,3.89-7.97,5.25c0-0.03,0-0.06,0-0.09v-9.83c0.04-0.01,0.08-0.03,0.13-0.04c0.4-0.11,0.79-0.23,1.17-0.35  c0,0,0.01,0,0.01,0c2.96-0.94,5.22-2.1,6.69-3.43v8.35C57.99,45.75,57.98,45.79,57.97,45.84z"
      ></path>
    </svg>
  );
}

export function Website({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width="100"
      height="100"
      viewBox="0 0 512 512"
    >
      <path d="M494.5,60H452V17.5A17.52,17.52,0,0,0,434.5,0H17.5A17.52,17.52,0,0,0,0,17.5v417A17.52,17.52,0,0,0,17.5,452H60v42.5A17.52,17.52,0,0,0,77.5,512h417A17.52,17.52,0,0,0,512,494.5V77.5A17.52,17.52,0,0,0,494.5,60Zm0,15a2.5,2.5,0,0,1,2.5,2.5V100H452V75ZM17.5,15h417a2.5,2.5,0,0,1,2.5,2.5V40H15V17.5A2.5,2.5,0,0,1,17.5,15ZM15,434.5V55H437V434.5a2.5,2.5,0,0,1-2.5,2.5H17.5A2.5,2.5,0,0,1,15,434.5ZM494.5,497H77.5a2.5,2.5,0,0,1-2.5-2.5V452H434.5A17.52,17.52,0,0,0,452,434.5V115h45V494.5A2.5,2.5,0,0,1,494.5,497Z"></path>
      <path d="M384.5,357h-60a27.5,27.5,0,0,0,0,55h60a27.5,27.5,0,0,0,0-55Zm0,40h-60a12.5,12.5,0,0,1,0-25h60a12.5,12.5,0,0,1,0,25Z"></path>
      <path d="M224.5,278.5H57.5A17.52,17.52,0,0,0,40,296v98.5A17.52,17.52,0,0,0,57.5,412h167A17.52,17.52,0,0,0,242,394.5V296A17.52,17.52,0,0,0,224.5,278.5Zm2.5,116a2.5,2.5,0,0,1-2.5,2.5H57.5a2.5,2.5,0,0,1-2.5-2.5V296a2.5,2.5,0,0,1,2.5-2.5h167A2.5,2.5,0,0,1,227,296Z"></path>
      <path d="M394.5,120H57.5A17.52,17.52,0,0,0,40,137.5v100A17.52,17.52,0,0,0,57.5,255h337A17.52,17.52,0,0,0,412,237.5v-100A17.52,17.52,0,0,0,394.5,120ZM397,237.5a2.5,2.5,0,0,1-2.5,2.5H57.5a2.5,2.5,0,0,1-2.5-2.5v-100a2.5,2.5,0,0,1,2.5-2.5h337a2.5,2.5,0,0,1,2.5,2.5Z"></path>
      <path d="M404.5,278.5h-120a7.5,7.5,0,0,0,0,15h120a7.5,7.5,0,0,0,0-15Z"></path>
      <path d="M404.5,318.5h-120a7.5,7.5,0,0,0,0,15h120a7.5,7.5,0,0,0,0-15Z"></path>
      <path d="M404.5,80H336.33a7.5,7.5,0,0,0,0,15H404.5a7.5,7.5,0,0,0,0-15Z"></path>
      <path d="M304.5,95H309a7.5,7.5,0,0,0,0-15h-4.5a7.5,7.5,0,0,0,0,15Z"></path>
      <path d="M197.43,311.39a7.5,7.5,0,0,0-10.29-2.57L141,336.5,94.86,308.82a7.5,7.5,0,1,0-7.72,12.86l39.28,23.57L87.14,368.82A7.5,7.5,0,0,0,91,382.75a7.42,7.42,0,0,0,3.85-1.07L141,354l46.14,27.68a7.42,7.42,0,0,0,3.85,1.07,7.5,7.5,0,0,0,3.87-13.93l-39.28-23.57,39.28-23.57A7.5,7.5,0,0,0,197.43,311.39Z"></path>
    </svg>
  );
}
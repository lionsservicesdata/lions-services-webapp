import React from 'react';

export const getIcon = (icon) => {
	switch(icon) {

		// mail icon - email
		case "email": 
			return(<>
			<path d="M3 1.66748H19C20.1 1.66748 21 2.56748 21 3.66748V15.6675C21 16.7675 20.1 17.6675 19 17.6675H3C1.9 17.6675 1 16.7675 1 15.6675V3.66748C1 2.56748 1.9 1.66748 3 1.66748Z" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			<path d="M21 3.66748L11 10.6675L1 3.66748" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			</>)
		break;

		// padlock in closed position
		case "lock": 
			return(<>
			<path d="M11.6667 7.33331H2.33333C1.59695 7.33331 1 7.93027 1 8.66665V13.3333C1 14.0697 1.59695 14.6666 2.33333 14.6666H11.6667C12.403 14.6666 13 14.0697 13 13.3333V8.66665C13 7.93027 12.403 7.33331 11.6667 7.33331Z" fill="none" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
			<path d="M3.66669 7.33331V4.66665C3.66669 3.78259 4.01788 2.93475 4.643 2.30962C5.26812 1.6845 6.11597 1.33331 7.00002 1.33331C7.88408 1.33331 8.73192 1.6845 9.35704 2.30962C9.98216 2.93475 10.3334 3.78259 10.3334 4.66665V7.33331" fill="none" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
			</>)
		break;

		// pen upwrite with line behind where it has been marking
		case "penLine": 
			return(<>
			<path d="M7.75 13.3654H14" fill="none" strokeWidth="1.21951" strokeLinecap="round" strokeLinejoin="round"/>
			<path d="M10.875 1.90707C11.1513 1.63081 11.526 1.4756 11.9167 1.4756C12.1101 1.4756 12.3017 1.51371 12.4804 1.58774C12.6591 1.66177 12.8215 1.77028 12.9583 1.90707C13.0951 2.04387 13.2036 2.20626 13.2777 2.38499C13.3517 2.56372 13.3898 2.75528 13.3898 2.94874C13.3898 3.14219 13.3517 3.33376 13.2777 3.51249C13.2036 3.69121 13.0951 3.85361 12.9583 3.99041L4.27778 12.671L1.5 13.3654L2.19444 10.5876L10.875 1.90707Z" fill="none" strokeWidth="1.21951" strokeLinecap="round" strokeLinejoin="round"/>
			</>)
		break;

		// triangle with explination mark inside
		case "errorTriangle": 
			return(<>
			<path d="M9.73802 1.96274L1.26802 16.1027C1.09339 16.4052 1.00099 16.748 1.00001 17.0973C0.99903 17.4465 1.08951 17.7899 1.26245 18.0933C1.43538 18.3967 1.68474 18.6495 1.98573 18.8266C2.28671 19.0037 2.62882 19.0989 2.97802 19.1027H19.918C20.2672 19.0989 20.6093 19.0037 20.9103 18.8266C21.2113 18.6495 21.4607 18.3967 21.6336 18.0933C21.8065 17.7899 21.897 17.4465 21.896 17.0973C21.8951 16.748 21.8027 16.4052 21.628 16.1027L13.158 1.96274C12.9797 1.66885 12.7287 1.42586 12.4292 1.25723C12.1297 1.08859 11.7918 1 11.448 1C11.1043 1 10.7663 1.08859 10.4668 1.25723C10.1673 1.42586 9.91629 1.66885 9.73802 1.96274V1.96274Z" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			<path d="M11.448 7.10278V11.1028" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			<path d="M11.448 15.1028H11.458" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			</>)
		break;

		// circle with explination mark inside
		case "errorCircle": 
			return(<>
			<path d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			<path d="M11 7V11" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			<path d="M11 15H11.01" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			</>)
		break;

		// circle with x inside
		case "xCircle": 
			return(<>
			<path d="M16.6 16.6L9.40001 9.4M16.6 9.4L9.40001 16.6" fill="none" strokeWidth="1.71429" strokeLinecap="round"/>
			<path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" fill="none" strokeWidth="1.71429"/>
			</>)
		break;

		// hamburger (3 lines with last 2/3 across)
		case "more": 
			return(<>
			<path d="M0 1.05882C0 0.778006 0.111554 0.50869 0.310122 0.310122C0.50869 0.111555 0.778006 0 1.05882 0H20.1176C20.3985 0 20.6678 0.111555 20.8663 0.310122C21.0649 0.50869 21.1765 0.778006 21.1765 1.05882C21.1765 1.33964 21.0649 1.60896 20.8663 1.80752C20.6678 2.00609 20.3985 2.11765 20.1176 2.11765H1.05882C0.778006 2.11765 0.50869 2.00609 0.310122 1.80752C0.111554 1.60896 0 1.33964 0 1.05882Z" stroke="none"/>
			<path d="M0 6.35277C0 6.07195 0.111554 5.80264 0.310122 5.60407C0.50869 5.4055 0.778006 5.29395 1.05882 5.29395H20.1176C20.3985 5.29395 20.6678 5.4055 20.8663 5.60407C21.0649 5.80264 21.1765 6.07195 21.1765 6.35277C21.1765 6.63359 21.0649 6.9029 20.8663 7.10147C20.6678 7.30004 20.3985 7.41159 20.1176 7.41159H1.05882C0.778006 7.41159 0.50869 7.30004 0.310122 7.10147C0.111554 6.9029 0 6.63359 0 6.35277Z" stroke="none"/>
			<path d="M1.05882 10.5884C0.778006 10.5884 0.50869 10.6999 0.310122 10.8985C0.111554 11.0971 0 11.3664 0 11.6472C0 11.928 0.111554 12.1973 0.310122 12.3959C0.50869 12.5945 0.778006 12.706 1.05882 12.706H13.7647C14.0455 12.706 14.3148 12.5945 14.5134 12.3959C14.712 12.1973 14.8235 11.928 14.8235 11.6472C14.8235 11.3664 14.712 11.0971 14.5134 10.8985C14.3148 10.6999 14.0455 10.5884 13.7647 10.5884H1.05882Z" stroke="none"/>
			</>)
		break;

		// Arrow pointing left
		case "backArrow":
			return(<>
			<path d="M15 8H1" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
			<path d="M8 15L1 8L8 1" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
			</>)
		break;

		// notification bell
		case "notificationBell":
			return(<>
			<path d="M16 7C16 5.4087 15.3679 3.88258 14.2426 2.75736C13.1174 1.63214 11.5913 1 10 1C8.4087 1 6.88258 1.63214 5.75736 2.75736C4.63214 3.88258 4 5.4087 4 7C4 14 1 16 1 16H19C19 16 16 14 16 7Z" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			<path d="M11.73 20C11.5542 20.3031 11.3019 20.5547 10.9982 20.7295C10.6946 20.9044 10.3504 20.9965 10 20.9965C9.64964 20.9965 9.30541 20.9044 9.00179 20.7295C8.69818 20.5547 8.44583 20.3031 8.27002 20" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			</>)
		break;
		
		// message bubble
		case "message": 
			return(<>
			<path d="M21 11.1119C21.0038 12.5785 20.6612 14.0251 20 15.3342C19.216 16.9028 18.0108 18.2221 16.5194 19.1445C15.0279 20.0668 13.3091 20.5557 11.5555 20.5564C10.089 20.5602 8.64234 20.2176 7.33332 19.5564L1 21.6675L3.11111 15.3342C2.44992 14.0251 2.10729 12.5785 2.11111 11.1119C2.11179 9.35834 2.60068 7.63956 3.52302 6.14812C4.44536 4.65667 5.76472 3.45147 7.33332 2.66751C8.64234 2.00632 10.089 1.66369 11.5555 1.66751H12.1111C14.427 1.79528 16.6145 2.7728 18.2546 4.41291C19.8947 6.05301 20.8722 8.24045 21 10.5564V11.1119Z" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			</>)
		break;
	
		// magnifying glass
		case "search": 
			return(<>
			<path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			<path d="M18.9999 18.9999L14.6499 14.6499" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			</>)
		break;

		// settings gear icon
		case "settings": 
			return(<>
			<path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			<path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15V15Z" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			</>)
		break;

		// four sqaures dashboard icon
		case "dashboard": 
			return(<>
			<path fillRule="evenodd" clipRule="evenodd" d="M2.90806 0H2.82728C2.45734 0 2.13909 1.20363e-08 1.85799 0.0662349C1.42284 0.170215 1.02497 0.392638 0.708461 0.708858C0.391956 1.02508 0.169175 1.42275 0.0648025 1.85781C0.000183045 2.1389 0.000183105 2.45554 0.000183105 2.8271V6.86581C0.000183105 7.23576 0.000183118 7.55401 0.066418 7.8351C0.170399 8.27026 0.392821 8.66813 0.709041 8.98463C1.02526 9.30114 1.42293 9.52392 1.85799 9.62829C2.13909 9.69291 2.45572 9.69291 2.82728 9.69291H6.866C7.23594 9.69291 7.55419 9.69291 7.83529 9.62668C8.27044 9.5227 8.66831 9.30027 8.98482 8.98405C9.30132 8.66783 9.5241 8.27016 9.62848 7.8351C9.6931 7.55401 9.6931 7.23737 9.6931 6.86581V2.8271C9.6931 2.45715 9.6931 2.1389 9.62686 1.85781C9.52288 1.42265 9.30046 1.02478 8.98424 0.708278C8.66802 0.391773 8.27035 0.168992 7.83529 0.0646193C7.55419 -6.01815e-08 7.23756 0 6.866 0H2.90806ZM2.2344 1.6381C2.30386 1.62195 2.4121 1.61549 2.90806 1.61549H6.78522C7.28279 1.61549 7.38941 1.62033 7.45888 1.6381C7.604 1.67281 7.73667 1.74703 7.84218 1.85253C7.94768 1.95804 8.0219 2.09071 8.05661 2.23583C8.07276 2.30368 8.07761 2.4103 8.07761 2.90787V6.78504C8.07761 7.28261 8.07276 7.38923 8.05499 7.4587C8.02029 7.60381 7.94607 7.73649 7.84056 7.84199C7.73505 7.9475 7.60238 8.02172 7.45726 8.05643C7.39103 8.07096 7.28441 8.07743 6.78522 8.07743H2.90806C2.41049 8.07743 2.30386 8.07258 2.2344 8.05481C2.08928 8.02011 1.95661 7.94589 1.8511 7.84038C1.74559 7.73487 1.67137 7.6022 1.63667 7.45708C1.62213 7.39085 1.61567 7.28422 1.61567 6.78504V2.90787C1.61567 2.4103 1.62051 2.30368 1.63829 2.23422C1.67299 2.0891 1.74721 1.95643 1.85272 1.85092C1.95823 1.74541 2.0909 1.67119 2.23601 1.63649L2.2344 1.6381ZM14.2165 0H14.1357C13.7657 0 13.4475 1.20363e-08 13.1664 0.0662349C12.7312 0.170215 12.3334 0.392638 12.0169 0.708858C11.7004 1.02508 11.4776 1.42275 11.3732 1.85781C11.3086 2.1389 11.3086 2.45554 11.3086 2.8271V6.86581C11.3086 7.23576 11.3086 7.55401 11.3748 7.8351C11.4788 8.27026 11.7012 8.66813 12.0174 8.98463C12.3337 9.30114 12.7313 9.52392 13.1664 9.62829C13.4475 9.69291 13.7641 9.69291 14.1357 9.69291H18.1744C18.5443 9.69291 18.8626 9.69291 19.1437 9.62668C19.5788 9.5227 19.9767 9.30027 20.2932 8.98405C20.6097 8.66783 20.8325 8.27016 20.9369 7.8351C21.0015 7.55401 21.0015 7.23737 21.0015 6.86581V2.8271C21.0015 2.45715 21.0015 2.1389 20.9353 1.85781C20.8313 1.42265 20.6089 1.02478 20.2926 0.708278C19.9764 0.391773 19.5787 0.168992 19.1437 0.0646193C18.8626 -6.01815e-08 18.546 0 18.1744 0H14.2165ZM13.5428 1.6381C13.6123 1.62195 13.7205 1.61549 14.2165 1.61549H18.0936C18.5912 1.61549 18.6978 1.62033 18.7673 1.6381C18.9124 1.67281 19.0451 1.74703 19.1506 1.85253C19.2561 1.95804 19.3303 2.09071 19.365 2.23583C19.3812 2.30368 19.386 2.4103 19.386 2.90787V6.78504C19.386 7.28261 19.3795 7.38923 19.3634 7.4587C19.3287 7.60381 19.2545 7.73649 19.149 7.84199C19.0435 7.9475 18.9108 8.02172 18.7657 8.05643C18.6978 8.07258 18.5912 8.07743 18.0936 8.07743H14.2165C13.7189 8.07743 13.6123 8.07258 13.5428 8.05481C13.3977 8.02011 13.265 7.94589 13.1595 7.84038C13.054 7.73487 12.9798 7.6022 12.9451 7.45708C12.9305 7.39085 12.9241 7.28422 12.9241 6.78504V2.90787C12.9241 2.4103 12.9289 2.30368 12.9467 2.23422C12.9814 2.0891 13.0556 1.95643 13.1611 1.85092C13.2666 1.74541 13.3993 1.67119 13.5444 1.63649L13.5428 1.6381ZM2.82728 11.3084H6.866C7.23594 11.3084 7.55419 11.3084 7.83529 11.3746C8.27044 11.4786 8.66831 11.701 8.98482 12.0173C9.30132 12.3335 9.5241 12.7311 9.62848 13.1662C9.6931 13.4473 9.6931 13.7639 9.6931 14.1355V18.1742C9.6931 18.5442 9.6931 18.8624 9.62686 19.1435C9.52288 19.5787 9.30046 19.9765 8.98424 20.293C8.66802 20.6095 8.27035 20.8323 7.83529 20.9367C7.55419 21.0013 7.23756 21.0013 6.866 21.0013H2.82728C2.45734 21.0013 2.13909 21.0013 1.85799 20.9351C1.42284 20.8311 1.02497 20.6087 0.708461 20.2925C0.391956 19.9762 0.169175 19.5786 0.0648025 19.1435C0.000183045 18.8624 0.000183105 18.5458 0.000183105 18.1742V14.1355C0.000183105 13.7656 0.000183118 13.4473 0.066418 13.1662C0.170399 12.7311 0.392821 12.3332 0.709041 12.0167C1.02526 11.7002 1.42293 11.4774 1.85799 11.373C2.13909 11.3084 2.45572 11.3084 2.82728 11.3084ZM2.90806 12.9239C2.41049 12.9239 2.30386 12.9287 2.2344 12.9465C2.08928 12.9812 1.95661 13.0554 1.8511 13.1609C1.74559 13.2664 1.67137 13.3991 1.63667 13.5442C1.62213 13.6105 1.61567 13.7171 1.61567 14.2163V18.0934C1.61567 18.591 1.62051 18.6976 1.63829 18.7671C1.67299 18.9122 1.74721 19.0449 1.85272 19.1504C1.95823 19.2559 2.0909 19.3301 2.23601 19.3648C2.30387 19.381 2.41049 19.3858 2.90806 19.3858H6.78522C7.28279 19.3858 7.38941 19.3794 7.45888 19.3632C7.604 19.3285 7.73667 19.2543 7.84218 19.1488C7.94768 19.0433 8.0219 18.9106 8.05661 18.7655C8.07276 18.6976 8.07761 18.591 8.07761 18.0934V14.2163C8.07761 13.7187 8.07276 13.6121 8.05499 13.5426C8.02029 13.3975 7.94607 13.2648 7.84056 13.1593C7.73505 13.0538 7.60238 12.9796 7.45726 12.9449C7.39103 12.9303 7.28441 12.9239 6.78522 12.9239H2.90806ZM14.2165 11.3084H14.1357C13.7657 11.3084 13.4475 11.3084 13.1664 11.3746C12.7312 11.4786 12.3334 11.701 12.0169 12.0173C11.7004 12.3335 11.4776 12.7311 11.3732 13.1662C11.3086 13.4473 11.3086 13.7639 11.3086 14.1355V18.1742C11.3086 18.5442 11.3086 18.8624 11.3748 19.1435C11.4788 19.5787 11.7012 19.9765 12.0174 20.293C12.3337 20.6095 12.7313 20.8323 13.1664 20.9367C13.4475 21.0029 13.7657 21.0029 14.1357 21.0029H18.1744C18.5443 21.0029 18.8626 21.0029 19.1437 20.9367C19.5785 20.8324 19.9761 20.6099 20.2923 20.2937C20.6085 19.9775 20.831 19.58 20.9353 19.1451C21.0015 18.864 21.0015 18.5458 21.0015 18.1758V14.1355C21.0015 13.7656 21.0015 13.4473 20.9353 13.1662C20.8313 12.7311 20.6089 12.3332 20.2926 12.0167C19.9764 11.7002 19.5787 11.4774 19.1437 11.373C18.8626 11.3084 18.546 11.3084 18.1744 11.3084H14.2165ZM13.5428 12.9465C13.6123 12.9303 13.7205 12.9239 14.2165 12.9239H18.0936C18.5912 12.9239 18.6978 12.9287 18.7673 12.9465C18.9124 12.9812 19.0451 13.0554 19.1506 13.1609C19.2561 13.2664 19.3303 13.3991 19.365 13.5442C19.3812 13.6121 19.386 13.7187 19.386 14.2163V18.0934C19.386 18.591 19.3795 18.6976 19.3634 18.7671C19.3287 18.9122 19.2545 19.0449 19.149 19.1504C19.0435 19.2559 18.9108 19.3301 18.7657 19.3648C18.6978 19.381 18.5912 19.3858 18.0936 19.3858H14.2165C13.7189 19.3858 13.6123 19.3794 13.5428 19.3632C13.3977 19.3285 13.265 19.2543 13.1595 19.1488C13.054 19.0433 12.9798 18.9106 12.9451 18.7655C12.9305 18.6992 12.9241 18.5926 12.9241 18.0934V14.2163C12.9241 13.7187 12.9289 13.6121 12.9467 13.5426C12.9814 13.3975 13.0556 13.2648 13.1611 13.1593C13.2666 13.0538 13.3993 12.9796 13.5444 12.9449L13.5428 12.9465Z" stroke="none"/>
			</>)
		break;

		// document box inbox icon
		case "inbox": 
			return(<>
			<path d="M15 7H10.8L9.4 9.1H6.6L5.2 7H1" fill="none" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
			<path d="M3.415 2.1769L1 6.9999V11.1999C1 11.5712 1.1475 11.9273 1.41005 12.1899C1.6726 12.4524 2.0287 12.5999 2.4 12.5999H13.6C13.9713 12.5999 14.3274 12.4524 14.5899 12.1899C14.8525 11.9273 15 11.5712 15 11.1999V6.9999L12.585 2.1769C12.4691 1.94365 12.2904 1.74736 12.0691 1.6101C11.8477 1.47283 11.5925 1.40004 11.332 1.3999H4.668C4.40754 1.40004 4.15228 1.47283 3.93093 1.6101C3.70958 1.74736 3.5309 1.94365 3.415 2.1769V2.1769Z" fill="none" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
			</>)
		// break;

		// clipboard icon
		case "clipboard": 
			return(<>
			<path d="M9.80015 2.3999H11.2001C11.5714 2.3999 11.9275 2.5474 12.1901 2.80995C12.4526 3.0725 12.6001 3.4286 12.6001 3.7999V13.5999C12.6001 13.9712 12.4526 14.3273 12.1901 14.5899C11.9275 14.8524 11.5714 14.9999 11.2001 14.9999H2.80015C2.42884 14.9999 2.07275 14.8524 1.8102 14.5899C1.54765 14.3273 1.40015 13.9712 1.40015 13.5999V3.7999C1.40015 3.4286 1.54765 3.0725 1.8102 2.80995C2.07275 2.5474 2.42884 2.3999 2.80015 2.3999H4.20015" fill="none" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
			<path d="M9.10013 1H4.90013C4.51353 1 4.20013 1.3134 4.20013 1.7V3.1C4.20013 3.4866 4.51353 3.8 4.90013 3.8H9.10013C9.48673 3.8 9.80013 3.4866 9.80013 3.1V1.7C9.80013 1.3134 9.48673 1 9.10013 1Z" fill="none" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
			</>)
		// break;

		// chain / link icon
		case "link": 
			return(<>
			<path d="M6.59753 8.70468C6.90016 9.10925 7.28626 9.44402 7.72964 9.68625C8.17302 9.92849 8.66331 10.0725 9.16726 10.1086C9.67121 10.1447 10.177 10.072 10.6504 9.89543C11.1238 9.71885 11.5536 9.44253 11.9108 9.0852L14.0249 6.97116C14.6667 6.30664 15.0218 5.41662 15.0138 4.49279C15.0058 3.56896 14.6352 2.68525 13.982 2.03198C13.3287 1.37871 12.445 1.00816 11.5211 1.00013C10.5973 0.992105 9.7073 1.34725 9.04278 1.98906L7.83073 3.19407" fill="none" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
			<path d="M9.4164 7.29529C9.11378 6.89071 8.72768 6.55595 8.2843 6.31371C7.84092 6.07147 7.35062 5.92742 6.84668 5.89133C6.34273 5.85523 5.83691 5.92795 5.36354 6.10453C4.89016 6.28111 4.4603 6.55744 4.10311 6.91476L1.98906 9.0288C1.34725 9.69333 0.992105 10.5833 1.00013 11.5072C1.00816 12.431 1.37871 13.3147 2.03198 13.968C2.68525 14.6212 3.56896 14.9918 4.49279 14.9998C5.41662 15.0079 6.30664 14.6527 6.97116 14.0109L8.17616 12.8059" fill="none" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
			</>)
		break;
	
		// circle with check mark inside
		case "circleChk": 
			return(<>
			<path d="M21 10.0857V11.0057C20.9988 13.1621 20.3005 15.2604 19.0093 16.9875C17.7182 18.7147 15.9033 19.9782 13.8354 20.5896C11.7674 21.201 9.55726 21.1276 7.53447 20.3803C5.51168 19.633 3.78465 18.2518 2.61096 16.4428C1.43727 14.6338 0.879791 12.4938 1.02168 10.342C1.16356 8.19029 1.99721 6.14205 3.39828 4.5028C4.79935 2.86354 6.69279 1.72111 8.79619 1.24587C10.8996 0.770634 13.1003 0.988061 15.07 1.86572" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			<path d="M21 3.00574L11 13.0157L8 10.0157" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			</>)
		break;

		// half moon icon
		case "moon": 
			return(<>
			<path d="M18.9618 10.79C18.8045 12.4922 18.1657 14.1144 17.1201 15.4668C16.0744 16.8192 14.6653 17.8458 13.0575 18.4265C11.4497 19.0073 9.7098 19.1181 8.04132 18.7461C6.37283 18.3741 4.84481 17.5345 3.63604 16.3258C2.42727 15.117 1.58775 13.589 1.21572 11.9205C0.843691 10.252 0.954531 8.51208 1.53528 6.9043C2.11602 5.29651 3.14265 3.88737 4.49503 2.84175C5.84741 1.79614 7.46961 1.15731 9.17182 1C8.17523 2.34827 7.69566 4.00945 7.82035 5.68141C7.94503 7.35338 8.66568 8.92506 9.85122 10.1106C11.0368 11.2961 12.6084 12.0168 14.2804 12.1415C15.9524 12.2662 17.6135 11.7866 18.9618 10.79Z" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			</>)
		break;

		// pen, pencil - freeResp, edit
		case "edit": 
			return(<>
			<path d="M16.1298 2.50308C16.3947 2.23816 16.7092 2.02802 17.0553 1.88464C17.4015 1.74127 17.7725 1.66748 18.1471 1.66748C18.5217 1.66748 18.8927 1.74127 19.2389 1.88464C19.585 2.02802 19.8995 2.23816 20.1644 2.50308C20.4293 2.76799 20.6395 3.08249 20.7828 3.42862C20.9262 3.77475 21 4.14573 21 4.52038C21 4.89503 20.9262 5.26601 20.7828 5.61214C20.6395 5.95827 20.4293 6.27277 20.1644 6.53769L6.54759 20.1545L1 21.6675L2.51298 16.1199L16.1298 2.50308Z" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			</>)
		break;

		// calendar, date icon
		case "calendar": 
			return(<>
			<path d="M17 3H3C1.89543 3 1 3.89543 1 5V19C1 20.1046 1.89543 21 3 21H17C18.1046 21 19 20.1046 19 19V5C19 3.89543 18.1046 3 17 3Z" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			<path d="M14 1V5" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			<path d="M6 1V5" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			<path d="M1 9H19" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			</>)
		break;
	
		// circled i, information, info icon
		case "info": 
			return(<>
			<path d="M9.5 18C14.1944 18 18 14.1944 18 9.5C18 4.80558 14.1944 1 9.5 1C4.80558 1 1 4.80558 1 9.5C1 14.1944 4.80558 18 9.5 18Z" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			<path d="M9.5 12.9V9.5" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			<path d="M9.5 6.1001H9.5085" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			</>)
		break;
		
		// squared pen, edit paper, note down
		case "SquaredEdit": 
			return(<>
			<path d="M10 3.12109H3C2.46957 3.12109 1.96086 3.33181 1.58579 3.70688C1.21071 4.08195 1 4.59066 1 5.12109V19.1211C1 19.6515 1.21071 20.1602 1.58579 20.5353C1.96086 20.9104 2.46957 21.1211 3 21.1211H17C17.5304 21.1211 18.0391 20.9104 18.4142 20.5353C18.7893 20.1602 19 19.6515 19 19.1211V12.1211" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			<path d="M17.5 1.62132C17.8978 1.2235 18.4374 1 19 1C19.5626 1 20.1022 1.2235 20.5 1.62132C20.8978 2.01915 21.1213 2.55871 21.1213 3.12132C21.1213 3.68393 20.8978 4.2235 20.5 4.62132L11 14.1213L7 15.1213L8 11.1213L17.5 1.62132Z" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			</>)
		break;
		
		// square in square, copy icon, duplicate icon
		case "copy": 
			return(<>
			<path d="M19.1211 8.12109H10.1211C9.01652 8.12109 8.12109 9.01652 8.12109 10.1211V19.1211C8.12109 20.2257 9.01652 21.1211 10.1211 21.1211H19.1211C20.2257 21.1211 21.1211 20.2257 21.1211 19.1211V10.1211C21.1211 9.01652 20.2257 8.12109 19.1211 8.12109Z" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			<path d="M4.12109 14.1211H3.12109C2.59066 14.1211 2.08195 13.9104 1.70688 13.5353C1.33181 13.1602 1.12109 12.6515 1.12109 12.1211V3.12109C1.12109 2.59066 1.33181 2.08195 1.70688 1.70688C2.08195 1.33181 2.59066 1.12109 3.12109 1.12109H12.1211C12.6515 1.12109 13.1602 1.33181 13.5353 1.70688C13.9104 2.08195 14.1211 2.59066 14.1211 3.12109V4.12109" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			</>)
		break;

		// trash icon, delete, remove
		case "delete": 
			return(<>
			<path d="M1.12109 5H3.12109H19.1211" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			<path d="M6.12109 5V3C6.12109 2.46957 6.33181 1.96086 6.70688 1.58579C7.08195 1.21071 7.59066 1 8.12109 1H12.1211C12.6515 1 13.1602 1.21071 13.5353 1.58579C13.9104 1.96086 14.1211 2.46957 14.1211 3V5M17.1211 5V19C17.1211 19.5304 16.9104 20.0391 16.5353 20.4142C16.1602 20.7893 15.6515 21 15.1211 21H5.12109C4.59066 21 4.08195 20.7893 3.70688 20.4142C3.33181 20.0391 3.12109 19.5304 3.12109 19V5H17.1211Z" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			</>)
		break;
	
		// add, plus, create - plus symbol
		case "add": 
		return(<>
		<path d="M12 2V22" fill="none" strokeWidth="2.85714" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M2 12H22" fill="none" strokeWidth="2.85714" strokeLinecap="round" strokeLinejoin="round"/>
		</>)
		break;

		// Check mark
		case "check":
			return(<>
			<path d="M32.1264 3.37931L11.7701 24.6207L2.51721 14.9655" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
			</>)
		break;

	}
}

export const getViewBox = (icon) => {
	switch(icon) {

		case "email":
		return("0 0 22 19")
		break;

		case "lock":
		return("0 0 14 16")
		break;

		case "penLine":
		return("0 0 15 14")
		break;

		case "errorTriangle":
		return("0 0 23 21")
		break;

		case "errorCircle":
		return("0 0 22 22")
		break;

		case "xCircle":
		return("0 0 26 26")
		break;

		case "more":
		return("0 0 22 13")
		break;
		
		case "backArrow":
		return("0 0 16 16")
		break;	

		case "notificationBell":
		return("0 0 20 22")
		break;	

		case "message":
		return("0 0 22 23")
		break;

		case "search":
		return("0 0 20 20")
		break;	

		case "settings":
		return("0 0 24 24")
		break;	

		case "dashboard":
		return("0 0 22 22")
		break;	

		case "inbox":
		return("0 0 16 14")
		break;	

		case "clipboard":
		return("0 0 14 16")
		break;	

		case "link":
		return("0 0 16 16")
		break;	

		case "circleChk":
		return("0 0 22 22")
		break;	

		case "moon":
		return("0 0 20 20")
		break;	

		case "edit":
		return("0 0 22 23")
		break;

		case "calendar":
		return("0 0 20 22")
		break;

		case "info":
		return("0 0 19 19")
		break;

		case "SquaredEdit":
		return("0 0 23 23")
		break;

		case "copy":
		return("0 0 23 23")
		break;

		case "delete":
		return("0 0 21 22")
		break;
	
		case "add":
		return("0 0 24 24")
		break;

		case "check":
		return("0 0 35 28")
		break;

	}
}
import styles from "./SvgStorage.module.css"

const SvgStorage = ({ id }) => {
  switch (id) {
    case "github":
      return (
        <svg
          className={styles.githubName}
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.0002 0C8.95583 0 0 9.18079 0 20.5063C0 29.5666 5.73066 37.2532 13.6773 39.9648C14.6769 40.1546 15.0438 39.5199 15.0438 38.9783C15.0438 38.4893 15.0253 36.8739 15.0167 35.1604C9.45262 36.4009 8.27853 32.7409 8.27853 32.7409C7.36874 30.3707 6.05788 29.7404 6.05788 29.7404C4.24326 28.4677 6.19466 28.4939 6.19466 28.4939C8.20302 28.6385 9.26053 30.607 9.26053 30.607C11.0443 33.742 13.9393 32.8357 15.0806 32.3117C15.2601 30.9864 15.7784 30.0817 16.3504 29.5696C11.9081 29.0511 7.23825 27.2928 7.23825 19.4353C7.23825 17.1965 8.01954 15.3672 9.29894 13.9311C9.09129 13.4146 8.40671 11.329 9.49269 8.50435C9.49269 8.50435 11.1722 7.95322 14.9942 10.6063C16.5895 10.152 18.3005 9.92412 20.0002 9.91631C21.6999 9.92412 23.4121 10.152 25.0105 10.6063C28.8278 7.95322 30.505 8.50435 30.505 8.50435C31.5936 11.329 30.9087 13.4146 30.7011 13.9311C31.9834 15.3672 32.7594 17.1965 32.7594 19.4353C32.7594 27.3115 28.0806 29.0457 23.6271 29.5533C24.3444 30.1897 24.9836 31.4376 24.9836 33.3508C24.9836 36.0946 24.9605 38.3029 24.9605 38.9783C24.9605 39.524 25.3205 40.1634 26.3343 39.962C34.2766 37.2475 40 29.5635 40 20.5063C40 9.18079 31.0455 0 20.0002 0"
            fill="#161514"
          />
          <path
            d="M7.63406 29.3019C7.59009 29.4028 7.43406 29.4331 7.29191 29.3638C7.14712 29.2976 7.0658 29.16 7.11274 29.0588C7.15571 28.9549 7.31208 28.926 7.45654 28.9956C7.60166 29.0619 7.68431 29.2007 7.63406 29.3019"
            fill="#161514"
          />
          <path
            d="M8.44264 30.2191C8.34743 30.3089 8.16132 30.2672 8.03504 30.1253C7.90446 29.9838 7.88 29.7945 7.97653 29.7033C8.07471 29.6136 8.2552 29.6556 8.38611 29.7972C8.51669 29.9404 8.54215 30.1283 8.44264 30.2191"
            fill="#161514"
          />
          <path
            d="M9.22974 31.3886C9.10743 31.475 8.90743 31.3939 8.78379 31.2134C8.66148 31.0328 8.66148 30.8163 8.78644 30.7295C8.9104 30.6428 9.10743 30.7208 9.23272 30.9C9.3547 31.0836 9.3547 31.3001 9.22974 31.3886"
            fill="#161514"
          />
          <path
            d="M10.3081 32.5183C10.1987 32.641 9.96561 32.608 9.79504 32.4406C9.62049 32.2769 9.5719 32.0445 9.68165 31.9218C9.79239 31.7987 10.0268 31.8334 10.1987 31.9995C10.3719 32.1629 10.4248 32.3969 10.3081 32.5183"
            fill="#161514"
          />
          <path
            d="M11.7957 33.1742C11.7474 33.3333 11.523 33.4056 11.2968 33.338C11.0711 33.2684 10.9233 33.0821 10.9689 32.9214C11.0158 32.7614 11.2413 32.686 11.4691 32.7583C11.6945 32.8276 11.8426 33.0125 11.7957 33.1742"
            fill="#161514"
          />
          <path
            d="M13.4294 33.296C13.4351 33.4634 13.2433 33.6023 13.006 33.6053C12.7673 33.6107 12.5742 33.4752 12.5716 33.3104C12.5716 33.1413 12.759 33.0038 12.9977 32.9998C13.2351 32.995 13.4294 33.1295 13.4294 33.296"
            fill="#161514"
          />
          <path
            d="M14.9498 33.0327C14.9782 33.1961 14.8132 33.3639 14.5775 33.4086C14.3458 33.4516 14.1313 33.3508 14.1018 33.1887C14.0731 33.0213 14.241 32.8535 14.4724 32.8101C14.7085 32.7684 14.9197 32.8666 14.9498 33.0327"
            fill="#161514"
          />
        </svg>
      )
    case "discord":
      return (
        <svg
          className={styles.discordName}
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0ZM12.421 8.66667H28.2457C29.5802 8.66667 30.6667 9.74 30.6667 11.07V32L28.1276 29.7833L26.6987 28.4767L25.187 27.0883L25.813 29.2467H12.421C11.0865 29.2467 10 28.1733 10 26.8433V11.07C10 9.74 11.0865 8.66667 12.421 8.66667Z"
            fill="black"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M23.6873 23.9033C23.6873 23.9033 23.2621 23.4016 22.9078 22.9583C24.4549 22.5266 25.0454 21.57 25.0454 21.57C24.5612 21.885 24.1006 22.1066 23.6873 22.2583C23.0968 22.5033 22.5299 22.6666 21.9749 22.76C20.8412 22.97 19.8019 22.9116 18.9162 22.7483C18.2431 22.62 17.6644 22.4333 17.1802 22.2466C16.9086 22.1416 16.6134 22.0133 16.3181 21.85C16.3004 21.8383 16.2827 21.8296 16.265 21.8208C16.2473 21.8121 16.2295 21.8033 16.2118 21.7916C16.1882 21.78 16.1764 21.7683 16.1646 21.7566C15.952 21.64 15.8339 21.5583 15.8339 21.5583C15.8339 21.5583 16.4008 22.4916 17.9006 22.935C17.5463 23.3783 17.1094 23.9033 17.1094 23.9033C14.4994 23.8216 13.5074 22.13 13.5074 22.13C13.5074 18.3733 15.208 15.3283 15.208 15.3283C16.9086 14.0683 18.5265 14.1033 18.5265 14.1033L18.6446 14.2433C16.5189 14.85 15.5387 15.7716 15.5387 15.7716C15.5387 15.7716 15.7985 15.6316 16.2354 15.4333C17.4991 14.885 18.5029 14.7333 18.9162 14.6983L18.9427 14.6939C19.0023 14.6839 19.0551 14.675 19.117 14.675C19.8374 14.5816 20.6522 14.5583 21.5025 14.6516C22.6244 14.78 23.829 15.1066 25.0572 15.7716C25.0572 15.7716 24.1242 14.8966 22.1166 14.29L22.2819 14.1033C22.2819 14.1033 23.8998 14.0683 25.6004 15.3283C25.6004 15.3283 27.301 18.3733 27.301 22.13C27.301 22.13 26.2972 23.8216 23.6873 23.9033ZM18.5284 18.6666C17.8606 18.6666 17.3334 19.2672 17.3334 20C17.3334 20.7327 17.8723 21.3333 18.5284 21.3333C19.1963 21.3333 19.7235 20.7327 19.7235 20C19.7352 19.2672 19.1963 18.6666 18.5284 18.6666ZM21.6099 20C21.6099 19.2672 22.1371 18.6666 22.8049 18.6666C23.4728 18.6666 24 19.2672 24 20C24 20.7327 23.4728 21.3333 22.8049 21.3333C22.1488 21.3333 21.6099 20.7327 21.6099 20Z"
            fill="black"
          />
        </svg>
      )
    case "telegram":
      return (
        <svg
          className={styles.telegramName}
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95431 0 0 8.95431 0 20C0 31.0457 8.95431 40 20 40Z"
            fill="url(#paint0_linear_681_49)"
          />
          <path
            d="M7.4485 20.9783C9.7865 19.6905 12.3963 18.6156 14.8348 17.5353C19.03 15.7658 23.2418 14.0269 27.4962 12.4081C28.3239 12.1323 29.8112 11.8626 29.957 13.0892C29.8771 14.8255 29.5486 16.5517 29.3233 18.2779C28.7514 22.0739 28.0904 25.8569 27.4458 29.6404C27.2237 30.9007 25.645 31.553 24.6348 30.7465C22.2072 29.1067 19.7608 27.4828 17.3642 25.805C16.5791 25.0073 17.3071 23.8617 18.0082 23.292C20.0077 21.3215 22.1282 19.6473 24.0232 17.575C24.5344 16.3407 23.0241 17.3809 22.5259 17.6997C19.7885 19.586 17.1182 21.5875 14.2322 23.2454C12.758 24.0569 11.0399 23.3634 9.56637 22.9106C8.24522 22.3636 6.3092 21.8125 7.44837 20.9784L7.4485 20.9783Z"
            fill="#6D5FFF"
          />
          <defs>
            <linearGradient
              id="paint0_linear_681_49"
              x1="26.6683"
              y1="6.668"
              x2="16.6683"
              y2="30"
              gradientUnits="userSpaceOnUse">
              <stop stop-color="#161514" />
              <stop offset="1" stop-color="#161514" />
            </linearGradient>
          </defs>
        </svg>
      )
    case "vk":
      return (
        <svg
          className={styles.vkName}
          width="41"
          height="41"
          viewBox="0 0 41 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.7768 0.916687H27.0563C38.2631 0.916687 40.9166 3.57018 40.9166 14.777V27.0564C40.9166 38.2632 38.2631 40.9167 27.0563 40.9167H14.7768C3.57006 40.9167 0.916565 38.2632 0.916565 27.0564V14.777C0.916565 3.57018 3.57006 0.916687 14.7768 0.916687Z"
            fill="#161514"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M33.6618 14.6923C33.8594 14.0713 33.6618 13.6196 32.7867 13.6196H29.8792C29.1452 13.6196 28.8065 14.0148 28.6089 14.4382C28.6089 14.4382 27.1128 18.0515 25.0239 20.3945C24.3464 21.072 24.0359 21.2978 23.6689 21.2978C23.4713 21.2978 23.2172 21.072 23.2172 20.4509V14.6641C23.2172 13.9301 22.9914 13.5914 22.3704 13.5914H17.7973C17.3457 13.5914 17.0634 13.9301 17.0634 14.2689C17.0634 14.9746 18.1078 15.1439 18.2208 17.12V21.4107C18.2208 22.3423 18.0514 22.5116 17.6844 22.5116C16.6964 22.5116 14.297 18.8701 12.8573 14.7205C12.575 13.9019 12.2927 13.5914 11.5588 13.5914H8.62301C7.77615 13.5914 7.63501 13.9866 7.63501 14.41C7.63501 15.1722 8.62301 19.0113 12.2363 24.0924C14.6357 27.5646 18.0514 29.4276 21.1283 29.4276C22.9914 29.4276 23.2172 29.0042 23.2172 28.2985V25.6732C23.2172 24.8264 23.3866 24.6852 23.9794 24.6852C24.4028 24.6852 25.165 24.9111 26.8869 26.5765C28.863 28.5526 29.2017 29.4559 30.3026 29.4559H33.2102C34.057 29.4559 34.4522 29.0324 34.2264 28.2138C33.9723 27.3952 33.0126 26.2096 31.7705 24.7981C31.093 24.0077 30.0768 23.1327 29.7663 22.7092C29.3428 22.1447 29.4558 21.9188 29.7663 21.4107C29.738 21.4107 33.2948 16.386 33.6618 14.6923Z"
            fill="#6D5FFF"
          />
        </svg>
      )
    case "cross":
      return (
        <svg
          className={styles.crossName}
          width="450"
          height="450"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_i_668_12)">
            <path
              d="M79.1667 26.7083L73.2917 20.8333L50 44.125L26.7083 20.8333L20.8333 26.7083L44.125 50L20.8333 73.2916L26.7083 79.1666L50 55.875L73.2917 79.1666L79.1667 73.2916L55.875 50L79.1667 26.7083Z"
              fill="#6D5FFF"
            />
          </g>
          <defs>
            <filter
              id="filter0_i_668_12"
              x="0"
              y="0"
              width="100"
              height="104"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_668_12"
              />
            </filter>
          </defs>
        </svg>
      )
    case "trash":
      return (
        <svg
          className={styles.trashName}
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24.1667 5L25.8334 6.66667H31.6667V10H8.33337V6.66667H14.1667L15.8334 5H24.1667ZM20 20.9833L23.5334 17.45L25.8834 19.8L22.35 23.3333L25.8834 26.8667L23.5334 29.2167L20 25.6833L16.4667 29.2167L14.1167 26.8667L17.65 23.3333L14.1 19.8L16.45 17.45L20 20.9833ZM10 31.6667C10 33.5 11.5 35 13.3334 35H26.6667C28.5 35 30 33.5 30 31.6667V11.6667H10V31.6667ZM26.6667 15H13.3334V31.6667H26.6667V15Z"
            fill="#F66D65"
          />
        </svg>
      )
    default:
      return <svg></svg>
  }
}

export default SvgStorage

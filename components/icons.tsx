import { cn } from "@/lib/utils";
import Image from "next/image";

export const Icons = {
  logo: ({ className }: { className?: string }) => (
    <svg
      width="42"
      height="24"
      viewBox="0 0 42 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-4 fill-[var(--secondary)]", className)}
    >
      <g clipPath="url(#clip0_322_9172)">
        <path
          d="M22.3546 0.96832C22.9097 0.390834 23.6636 0.0664062 24.4487 0.0664062C27.9806 0.0664062 31.3091 0.066408 34.587 0.0664146C41.1797 0.0664284 44.481 8.35854 39.8193 13.2082L29.6649 23.7718C29.1987 24.2568 28.4016 23.9133 28.4016 23.2274V13.9234L29.5751 12.7025C30.5075 11.7326 29.8472 10.0742 28.5286 10.0742H13.6016L22.3546 0.96832Z"
          fill="current"
        />
        <path
          d="M19.6469 23.0305C19.0919 23.608 18.338 23.9324 17.5529 23.9324C14.021 23.9324 10.6925 23.9324 7.41462 23.9324C0.821896 23.9324 -2.47942 15.6403 2.18232 10.7906L12.3367 0.227022C12.8029 -0.257945 13.6 0.0855283 13.6 0.771372L13.6 10.0754L12.4265 11.2963C11.4941 12.2662 12.1544 13.9246 13.473 13.9246L28.4001 13.9246L19.6469 23.0305Z"
          fill="current"
        />
      </g>
      <defs>
        <clipPath id="clip0_322_9172">
          <rect width="42" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  soc2: ({ className }: { className?: string }) => (
    <svg
      width="46"
      height="45"
      viewBox="0 0 46 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-4", className)}
    >
      <g filter="url(#filter0_ddd_1_4900)">
        <rect
          x="3"
          y="0.863281"
          width="40"
          height="40"
          rx="20"
          fill="url(#paint0_linear_1_4900)"
        />
        <g filter="url(#filter1_d_1_4900)">
          <rect
            x="6.15784"
            y="4.021"
            width="33.6842"
            height="33.6842"
            rx="16.8421"
            fill="url(#paint1_linear_1_4900)"
          />
          <path
            d="M15.0475 29.6233C13.7506 29.6233 12.9548 28.8938 12.8738 27.8033L13.8464 27.7443C13.9348 28.4222 14.3401 28.798 15.0622 28.798C15.6812 28.798 16.0348 28.5696 16.0348 28.1201C16.0348 27.7148 15.8285 27.4717 14.7601 27.2212C13.4633 26.9264 12.977 26.558 12.977 25.7033C12.977 24.7896 13.6917 24.1559 14.8633 24.1559C16.1159 24.1559 16.8012 24.8854 16.9191 25.8948L15.9538 25.9391C15.8875 25.3717 15.5117 24.9812 14.8485 24.9812C14.2959 24.9812 13.957 25.2612 13.957 25.6664C13.957 26.0938 14.2001 26.2559 15.1359 26.4696C16.5433 26.7717 17.0148 27.2875 17.0148 28.0685C17.0148 29.0264 16.2338 29.6233 15.0475 29.6233ZM19.9915 29.6233C18.4367 29.6233 17.5009 28.5843 17.5009 26.897C17.5009 25.2096 18.4367 24.1559 19.9915 24.1559C21.5536 24.1559 22.4894 25.2096 22.4894 26.897C22.4894 28.5843 21.5536 29.6233 19.9915 29.6233ZM19.9915 28.7906C20.942 28.7906 21.502 28.0906 21.502 26.897C21.502 25.7033 20.942 24.9885 19.9915 24.9885C19.0557 24.9885 18.4883 25.7033 18.4883 26.897C18.4883 28.0906 19.0557 28.7906 19.9915 28.7906ZM25.324 29.6233C23.8945 29.6233 22.8997 28.6064 22.8997 26.897C22.8997 25.2169 23.865 24.1559 25.3313 24.1559C26.665 24.1559 27.3797 24.8559 27.6082 26.0422L26.6061 26.0938C26.4734 25.4085 26.0534 24.9885 25.3313 24.9885C24.4397 24.9885 23.8871 25.7327 23.8871 26.897C23.8871 28.0759 24.4545 28.7906 25.324 28.7906C26.105 28.7906 26.5176 28.3412 26.6355 27.5896L27.6376 27.6412C27.4313 28.8717 26.6429 29.6233 25.324 29.6233ZM29.6489 29.5054C29.6489 28.238 30.1205 27.5085 31.5573 26.7569C32.2721 26.3812 32.53 26.1748 32.53 25.7327C32.53 25.298 32.2426 24.9885 31.6826 24.9885C31.0858 24.9885 30.7321 25.3348 30.651 25.9685L29.6637 25.9096C29.7668 24.8191 30.4889 24.1559 31.6826 24.1559C32.8395 24.1559 33.5173 24.7896 33.5173 25.718C33.5173 26.5212 33.1416 26.897 32.1173 27.4422C31.2479 27.9064 30.8279 28.3485 30.7984 28.6727H33.5173V29.5054H29.6489Z"
            fill="#101828"
          />
          <path
            d="M13.0537 17.8882L14.9621 12.6566H15.6253L17.5263 17.8882H16.9811L16.4211 16.3187H14.159L13.599 17.8882H13.0537ZM14.3285 15.8324H16.2516L15.2937 13.1061L14.3285 15.8324ZM18.026 17.8882V12.6566H18.5271V17.8882H18.026ZM21.5495 18.0061C20.1642 18.0061 19.2506 16.9745 19.2506 15.2798C19.2506 13.585 20.1642 12.5387 21.5495 12.5387C22.7727 12.5387 23.4506 13.2387 23.6642 14.3292L23.1337 14.3661C22.9863 13.5482 22.4632 13.0324 21.5495 13.0324C20.4811 13.0324 19.7737 13.8798 19.7737 15.2798C19.7737 16.6798 20.4811 17.5124 21.5495 17.5124C22.5074 17.5124 23.0453 16.9598 23.1779 16.0608L23.7085 16.0977C23.5242 17.2471 22.7727 18.0061 21.5495 18.0061ZM24.5062 17.8882V12.6566H26.3409C27.4904 12.6566 28.1683 13.2461 28.1683 14.2187C28.1683 15.1913 27.4904 15.7808 26.3409 15.7808H25.0072V17.8882H24.5062ZM25.0072 15.2945H26.3409C27.1957 15.2945 27.6378 14.9187 27.6378 14.2187C27.6378 13.5113 27.1957 13.1429 26.3409 13.1429H25.0072V15.2945ZM27.9425 17.8882L29.851 12.6566H30.5141L32.4152 17.8882H31.8699L31.3099 16.3187H29.0478L28.4878 17.8882H27.9425ZM29.2173 15.8324H31.1404L30.1825 13.1061L29.2173 15.8324Z"
            fill="#6A7282"
          />
          <line
            x1="10.4938"
            y1="21.2488"
            x2="34.988"
            y2="21.2488"
            stroke="#E5E7EB"
            strokeWidth="0.263158"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_ddd_1_4900"
          x="0.857143"
          y="0.148996"
          width="44.2857"
          height="44.2857"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="0.714286"
            operator="erode"
            in="SourceAlpha"
            result="effect1_dropShadow_1_4900"
          />
          <feOffset dy="0.714286" />
          <feGaussianBlur stdDeviation="0.357143" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_4900"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="0.714286"
            operator="erode"
            in="SourceAlpha"
            result="effect2_dropShadow_1_4900"
          />
          <feOffset dy="1.42857" />
          <feGaussianBlur stdDeviation="1.42857" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_1_4900"
            result="effect2_dropShadow_1_4900"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="0.714286"
            operator="dilate"
            in="SourceAlpha"
            result="effect3_dropShadow_1_4900"
          />
          <feOffset />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_dropShadow_1_4900"
            result="effect3_dropShadow_1_4900"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect3_dropShadow_1_4900"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_1_4900"
          x="5.44355"
          y="3.30671"
          width="35.1128"
          height="35.1127"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="0.714286"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_1_4900"
          />
          <feOffset />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_4900"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_4900"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1_4900"
          x1="9.88803"
          y1="6.55415"
          x2="36.0447"
          y2="35.5773"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F9FAFB" />
          <stop offset="1" stopColor="#E5E7EB" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1_4900"
          x1="11.9583"
          y1="8.8133"
          x2="33.9849"
          y2="33.2538"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E5E7EB" />
          <stop offset="1" stopColor="#F9FAFB" />
        </linearGradient>
      </defs>
    </svg>
  ),

  // Additional icons for orbiting animation - using actual client SVGs
  boat: ({ className }: { className?: string }) => (
    <Image src="/clients/chrobinson.svg" alt="C.H. Robinson" width={32} height={32} className={cn("h-8 w-auto", className)} />
  ),

  supabase: ({ className }: { className?: string }) => (
    <Image src="/clients/echo.svg" alt="ECHO" width={32} height={32} className={cn("h-8 w-auto", className)} />
  ),

  figma: ({ className }: { className?: string }) => (
    <Image src="/clients/fedex.svg" alt="FedEx" width={32} height={32} className={cn("h-8 w-auto", className)} />
  ),

  workos: ({ className }: { className?: string }) => (
    <Image src="/clients/jbhunt.svg" alt="J.B. Hunt" width={32} height={32} className={cn("h-8 w-auto", className)} />
  ),

  runwayml: ({ className }: { className?: string }) => (
    <Image src="/clients/Landstar_System_logo.svg" alt="Landstar" width={32} height={32} className={cn("h-8 w-auto", className)} />
  ),

  gemini: ({ className }: { className?: string }) => (
    <Image src="/clients/rxo.svg" alt="RXO" width={32} height={32} className={cn("h-8 w-auto", className)} />
  ),

  vercel: ({ className }: { className?: string }) => (
    <Image src="/clients/schneider.svg" alt="Schneider" width={32} height={32} className={cn("h-8 w-auto", className)} />
  ),

  replit: ({ className }: { className?: string }) => (
    <Image src="/clients/tql.svg" alt="TQL" width={32} height={32} className={cn("h-8 w-auto", className)} />
  ),

  posthog: ({ className }: { className?: string }) => (
    <Image src="/clients/ups.svg" alt="UPS" width={32} height={32} className={cn("h-8 w-auto", className)} />
  ),
};
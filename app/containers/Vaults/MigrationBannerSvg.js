import React from 'react';

/* eslint arrow-body-style: "off" */
const MigrationBannerSvg = (props) => {
  const { vaults } = props;
  const vaultTitles = vaults
    .map((v) => {
      return v.displayName;
    })
    .join(', ');
  const theseVaults = vaults.length > 1 ? 'These vaults' : 'This vault';
  return (
    <div
      style={{
        marginTop: '20px',
        marginBottom: '10px',
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="152"
        width="100%"
        fill="none"
        version="1.1"
        viewBox="0 0 1200 152"
      >
        <g clipPath="url(#clip0)">
          <path
            fill="#FFB800"
            d="M0 8a8 8 0 018-8h1184c4.42 0 8 3.582 8 8v144H0V8z"
          ></path>
          <path
            fill="#fff"
            d="M106.722 54h-4.225v-8.627H94.58V54h-4.238V34.012h4.238v7.834h7.917v-7.834h4.225zm11.06-12.605c-.884 0-1.577.282-2.078.847-.501.556-.788 1.35-.861 2.38h5.85c-.017-1.03-.286-1.824-.805-2.38-.52-.565-1.222-.847-2.106-.847zm.588 12.878c-2.461 0-4.384-.679-5.77-2.037-1.385-1.358-2.078-3.28-2.078-5.77 0-2.56.638-4.538 1.914-5.933 1.286-1.403 3.058-2.105 5.319-2.105 2.16 0 3.842.615 5.045 1.845 1.203 1.23 1.804 2.93 1.804 5.1v2.024h-9.857c.045 1.184.396 2.11 1.053 2.775.656.665 1.576.998 2.76.998.922 0 1.792-.096 2.613-.287.82-.192 1.677-.497 2.57-.916v3.226a9.577 9.577 0 01-2.338.807c-.83.182-1.841.273-3.035.273zM132.165 54h-4.17V32.727h4.17zm8.558 0h-4.17V32.727h4.17zm7.71-7.67c0 1.513.248 2.657.74 3.432.5.775 1.312 1.162 2.433 1.162 1.112 0 1.91-.383 2.393-1.149.492-.774.738-1.923.738-3.445 0-1.513-.246-2.648-.738-3.404-.492-.757-1.3-1.135-2.42-1.135-1.112 0-1.914.378-2.406 1.135-.492.747-.74 1.882-.74 3.404zm10.57 0c0 2.488-.656 4.434-1.97 5.838-1.311 1.404-3.14 2.105-5.481 2.105-1.468 0-2.762-.319-3.883-.957-1.121-.647-1.983-1.572-2.584-2.775-.602-1.203-.903-2.607-.903-4.21 0-2.498.652-4.44 1.956-5.825 1.303-1.386 3.135-2.078 5.496-2.078 1.467 0 2.76.319 3.882.957 1.122.638 1.983 1.554 2.584 2.748.602 1.194.903 2.593.903 4.197zm17.158 4.621c.729 0 1.604-.16 2.625-.478v3.103c-1.04.465-2.315.697-3.828.697-1.668 0-2.885-.419-3.651-1.257-.756-.848-1.134-2.115-1.134-3.801v-7.37h-1.996v-1.763l2.296-1.395 1.204-3.226h2.666v3.254h4.279v3.13h-4.28v7.37c0 .592.165 1.03.493 1.312.337.283.779.424 1.326.424zM195.999 54h-4.17v-8.928c0-2.206-.82-3.308-2.461-3.308-1.167 0-2.01.396-2.53 1.19-.52.792-.78 2.077-.78 3.855V54h-4.17V32.727h4.17v4.334c0 .337-.03 1.13-.094 2.378l-.096 1.23h.219c.929-1.494 2.406-2.241 4.429-2.241 1.796 0 3.159.483 4.088 1.449.93.966 1.395 2.352 1.395 4.156zm10.623-12.605c-.884 0-1.577.282-2.078.847-.502.556-.79 1.35-.862 2.38h5.852c-.018-1.03-.287-1.824-.807-2.38-.52-.565-1.221-.847-2.105-.847zm.588 12.878c-2.461 0-4.384-.679-5.77-2.037-1.385-1.358-2.078-3.28-2.078-5.77 0-2.56.638-4.538 1.914-5.933 1.285-1.403 3.058-2.105 5.319-2.105 2.16 0 3.84.615 5.044 1.845 1.204 1.23 1.805 2.93 1.805 5.1v2.024h-9.857c.045 1.184.396 2.11 1.052 2.775.657.665 1.577.998 2.762.998.92 0 1.79-.096 2.612-.287.82-.192 1.677-.497 2.57-.916v3.226a9.591 9.591 0 01-2.338.807c-.83.182-1.841.273-3.035.273zm18.156-15.845c.565 0 1.035.04 1.408.123l-.314 3.91c-.337-.091-.748-.137-1.231-.137-1.33 0-2.37.342-3.117 1.026-.738.683-1.107 1.64-1.107 2.87V54h-4.17V38.715h3.158l.615 2.57h.205a5.71 5.71 0 011.914-2.064 4.743 4.743 0 012.639-.793zm10.514 2.967c-.884 0-1.577.282-2.078.847-.502.556-.79 1.35-.862 2.38h5.852c-.018-1.03-.287-1.824-.807-2.38-.52-.565-1.221-.847-2.105-.847zm.588 12.878c-2.461 0-4.384-.679-5.77-2.037-1.385-1.358-2.078-3.28-2.078-5.77 0-2.56.638-4.538 1.914-5.933 1.285-1.403 3.058-2.105 5.318-2.105 2.16 0 3.842.615 5.045 1.845 1.203 1.23 1.805 2.93 1.805 5.1v2.024h-9.857c.045 1.184.396 2.11 1.052 2.775.657.665 1.577.998 2.762.998.92 0 1.79-.096 2.61-.287a13.071 13.071 0 002.572-.916v3.226a9.591 9.591 0 01-2.338.807c-.83.182-1.841.273-3.035.273zm13.125-6.904h-3.336l-.698-13.357h4.73zm-4.088 4.676c0-.766.205-1.344.615-1.736.41-.392 1.007-.588 1.79-.588.757 0 1.34.2 1.75.601.42.401.63.976.63 1.723 0 .72-.21 1.29-.63 1.709-.418.41-1.002.615-1.75.615-.765 0-1.357-.2-1.776-.601-.42-.41-.63-.985-.63-1.723z"
          ></path>
          <g clipPath="url(#clip1)" opacity="0.3">
            <path
              fill="#fff"
              d="M1133.46 109.956c-11.94 11.942-31.3 11.942-43.25 0-11.94-11.943-11.94-31.306 0-43.248l42.54-42.548H995.166C979.058 24.16 966 11.102 966-5.006s13.058-29.166 29.166-29.166h137.584l-42.54-42.536c-11.94-11.942-11.94-31.305 0-43.248 11.95-11.942 31.31-11.942 43.25 0L1244.29-9.124a5.828 5.828 0 010 8.248l-110.83 110.832z"
            ></path>
          </g>
          <g clipPath="url(#clip2)" opacity="0.3">
            <path
              fill="#fff"
              d="M885.539 197.956c11.943 11.942 31.305 11.942 43.248 0 11.942-11.943 11.942-31.306 0-43.248l-42.536-42.548h137.579c16.11 0 29.17-13.058 29.17-29.166s-13.06-29.166-29.17-29.166H886.251l42.536-42.536c11.942-11.942 11.942-31.305 0-43.248-11.943-11.942-31.305-11.942-43.248 0L774.707 78.876a5.834 5.834 0 000 8.248l110.832 110.832z"
            ></path>
          </g>
          <g clipPath="url(#clip3)" opacity="0.8">
            <path
              fill="#fff"
              d="M873.73 162.478c-5.971 5.971-15.652 5.971-21.623 0-5.972-5.971-5.972-15.653 0-21.624l21.267-21.274h-68.791c-8.054 0-14.583-6.529-14.583-14.583s6.529-14.583 14.583-14.583h68.791l-21.267-21.268c-5.972-5.971-5.972-15.653 0-21.624 5.971-5.971 15.652-5.971 21.623 0l55.416 55.416a2.916 2.916 0 010 4.124l-55.416 55.416z"
            ></path>
          </g>
          <g clipPath="url(#clip4)" opacity="0.8">
            <path
              fill="#fff"
              d="M737.27 114.478c5.971 5.971 15.652 5.971 21.623 0 5.972-5.971 5.972-15.653 0-21.624L737.626 71.58h68.791c8.054 0 14.583-6.53 14.583-14.583 0-8.054-6.529-14.583-14.583-14.583h-68.791l21.267-21.268c5.972-5.971 5.972-15.653 0-21.624-5.971-5.971-15.652-5.971-21.623 0l-55.416 55.416a2.916 2.916 0 000 4.124l55.416 55.416z"
            ></path>
          </g>
          <g fill="#fff" clipPath="url(#clip5)">
            <path d="M63.565 56.933L46.779 27.859c-1.235-2.14-4.322-2.14-5.558 0L24.435 56.933c-1.235 2.14.307 4.813 2.78 4.813h33.57c2.472 0 4.016-2.673 2.78-4.813zm-2.78 1.873h-33.57a.267.267 0 01-.233-.403l16.786-29.074a.267.267 0 01.464 0l16.786 29.074a.267.267 0 01-.232.403z"></path>
            <path d="M44 38.453a1.47 1.47 0 00-1.47 1.47v8.429a1.47 1.47 0 002.94 0v-8.43a1.47 1.47 0 00-1.47-1.47z"></path>
            <path d="M44 51.733a1.47 1.47 0 00-1.47 1.47v.878a1.47 1.47 0 102.94 0v-.878a1.47 1.47 0 00-1.47-1.47z"></path>
          </g>
          <text
            xmlSpace="preserve"
            style={{ lineHeight: '1.25' }}
            x="89.421"
            y="92.965"
            fill="#fff"
            fillOpacity="1"
            stroke="none"
            fontFamily="sans-serif"
            fontSize="15.333"
            fontStyle="normal"
            fontWeight="normal"
          >
            <tspan x="89.421" y="92.965" fill="#fff" fontSize="15.333">
              Looks like you still have funds in {vaultTitles}.
            </tspan>
            <tspan x="89.421" y="112.131" fill="#fff" fontSize="15.333">
              {theseVaults} will retire soon and if you want to keep making
              gains,{' '}
            </tspan>
            <tspan x="89.421" y="131.297" fill="#fff" fontSize="15.333">
              <tspan fill="#fff" fontSize="15.333" fontWeight="bold">
                we recommend migrating
              </tspan>
            </tspan>
          </text>
        </g>
        <defs id="defs52">
          <clipPath id="clip0">
            <path
              id="path34"
              fill="#fff"
              d="M0 8a8 8 0 018-8h1184c4.42 0 8 3.582 8 8v144H0V8z"
            ></path>
          </clipPath>
          <clipPath id="clip1">
            <path
              id="rect37"
              fill="#fff"
              d="M0 0H280V280H0z"
              transform="matrix(1 0 0 -1 966 135)"
            ></path>
          </clipPath>
          <clipPath id="clip2">
            <path
              id="rect40"
              fill="#fff"
              d="M0 0H280V280H0z"
              transform="rotate(-180 526.5 111.5)"
            ></path>
          </clipPath>
          <clipPath id="clip3">
            <path
              id="rect43"
              fill="#fff"
              d="M0 0H140V140H0z"
              transform="matrix(1 0 0 -1 790 175)"
            ></path>
          </clipPath>
          <clipPath id="clip4">
            <path
              id="rect46"
              fill="#fff"
              d="M0 0H140V140H0z"
              transform="rotate(-180 410.5 63.5)"
            ></path>
          </clipPath>
          <clipPath id="clip5">
            <path
              id="rect49"
              fill="#fff"
              d="M0 0H40V40H0z"
              transform="translate(24 24)"
            ></path>
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default MigrationBannerSvg;

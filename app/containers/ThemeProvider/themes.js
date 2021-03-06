export const common = {
  dafidaoBlue: '#3FBFBF',
  white: '#fff',
  black: '#000',
  offBlack: '#363640',
  offWhite: '#D8D8D8',
};

export const lightTheme = {
  background: '#fff',
  text: common.offBlack,
  toggleBorder: common.white,
  vaultBackground: '#171D23',
  vaultBackgroundAlt: '#0746C2',
  vaultBackgroundActive: '#171D23',
  vaultBorderActive: '#0657F9',
  blocksGreen: '#23D198',
  blocksRed: '#EF1E02',
  blocksMidnight: '#02153C',
  modalBackground: common.white,
  vaultText: common.white,
  inputBorder: common.black,
  inputText: common.black,
  inputOutline: common.white,
  link: 'blue',
  ...common,
};

const newDarkTheme = {
  primary: '#006AE3',
  secondary: '#01E2A0',
  surface: '#0A1D3F',
  background: '#1F255F',
  onPrimary: '#FFF',
  onSecondary: '#FFF',
  onSurface: '#FFF',
  onBackground: '#FFF',
  black: '#000',
  white: '#FFF',
  text: '#FFF',
  fontFamily: 'Open Sans',
  fonts: ['Open Sans'],
  fontSizes: [12, 14, 16, 18, 20, 24, 28, 32],
  fontWeights: [400, 600, 700],
  space: [0, 2, 4, 6, 8, 12, 16, 32],
};

export const darkTheme = {
  background: '#141920',
  text: common.offWhite,
  toggleBorder: '#6B8096',
  vaultBackground: '#102C61',
  vaultBackgroundAlt: '#0746C2',
  vaultBackgroundActive: '#011130',
  vaultBackgroundMiddle: '#0b1a35',
  infoCardBackground: '#21262b',
  infoCardValue: '#fff',
  infoCardLabel: '#9cabbb',
  blocksGreen: '#23D198',
  blocksRed: '#EF1E02',
  blocksMidnight: '#0d234e',
  vaultText: common.offWhite,
  buttonBackground: '#21262b',
  buttonColor: '#9cabbb',
  vaultBorderActive: '#0657F9',
  modalBackground: '#333',
  inputBorder: common.white,
  inputText: common.white,
  inputOutline: common.dafidaoBlue,
  tableBorder: '#2d3237',
  link: 'antiquewhite',
  ...common,
  ...newDarkTheme,
};

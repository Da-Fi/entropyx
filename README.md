<span>
    <img align="right" src="app/images/transparent_color_text.png" height="100" />
</span>

# Da-Fi DAO EntropyX
# Special thanks to yearn.finance & Andre Cronje, IOHK, Emurgo, & Cardano community!
# Da-Fi DAO is developing a widely interoperable data agnostic nueral network and arbitrage framework. Da-Fi DAO's Nueral Arbitrage Valve (NAV) will allow users to stream arbitrage opportunites as they occur much like tickers stream sports, news, & stock information. In order to "open the valve", a user must deposit DA-FI token  to begin the stream 

[![Production Build Deployment](https://github.com/Da-Fi/entropyx/workflows/Production%20Build%20Deployment/badge.svg)](https://github.com/Da-Fi/entropyx/actions?query=workflow%3A%22Production+Build+Deployment%22)
[![Styled With Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/)

## Helpful links

- 🌐 [Live site](https://da-fi.com)
- ⚖️ [DApp ](https://da-fi.io)
- 📑 [Token](https://etherscan.io/token/0xeaad65885fea47a3b1258935f4ce83aab06fdd3a)

## Setup

```
cp .env.sample .env
```

And then populate .env with your endpoints

## Development

```
$ yarn dev
```

## Testing on mainnet fork

To test the webapp with a local mainnet fork with some pre-filled tokens you can run:

```bash
./run_mainnet_fork.sh
```

The webapp will start in DEV mode and will be available at: `http://localhost:3000`

The local RPC client (ganache-cli) will be available at: `http://localhost:8545`

**[Important]**:

- SET `WEB3_INFURA_PROJECT_ID` and `ETHERSCAN_TOKEN` variables in the .env file.
- SET `WEB3_PROVIDER_HTTPS` and `WEB3_PROVIDER_WSS` variables in the .env file with your alchemy key
- Set `USE_LOCAL_RPC` variable to TRUE on .env file.
- Change Metamask to Localhost RPC endpoint :)

### Brownie + dockerized ganache-cli

Install brownie >= 1.13.2

```bash
pip install "eth-brownie>=1.13.2"
```

Connect to your local mainnet-fork:

```bash
brownie console
```

## Production

```
$ yarn build
$ yarn start
```

## Contributing

Code style follows prettier conventions (`yarn prettier`). Commit messages follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) spec.

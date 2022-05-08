# What's this

alert tools when apple has new refurbished with 16GB ram on sale.

# How to use

## Frontend

open website: https://www.apple.com.cn/shop/refurbished/mac/macbook-air

install greaseMonkey with the script in `greaseMonkey`

it will fetch `localhost:3000` when new machine available.

## Backend

### Export env vars

`USER_ID` may be list seperated by `,`


```
 export TELEGRAM_TOKEN=xxxxxxxxxx:yyyyyyyyyyyyyy USER_ID=1111111,222222 && echo $TELEGRAM_TOKEN && echo $USER_ID
```

run node server

```
node src/server.js
```

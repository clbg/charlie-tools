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

## Road map

Current logic to assert model available is checking certian price in the offer list.
But ambiguity exists as different models can have the same price. eg. 16G 256 macbook air and 8G 512 macbook air both priced at 8069 rmb.

I fond a list of refurbished macbook, you can find the SKU of your target model
and go to it's detail page to check the ordor button is active.
link: https://www.refurbstore.com/zh-cn/mac/%E7%BF%BB%E6%96%B0macbook-air

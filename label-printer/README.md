# Introduction

This tool is a node cmd program to generate PDF files to print labels with my printer.

![page photo](assets/IMG_9148.jpg)

# Setup log

```
yarn init
yarn add xxx
```

[support chinese font](https://github.com/parallax/jsPDF#use-of-unicode-characters--utf-8)
download [source-han-sans](https://github.com/be5invis/source-han-sans-ttf/releases)

add to `assets` folder

//TODO telegrambot

# Usage

## setup printer 
```
lpstat -p -d #list available printers
lpoptions -d FUJI_XEROX_DocuPrint_xxx #set default printer
```

```
yarn install
export TELEGRAM_TOKEN={replace with your own token}
node src/messageHandler.js
```

text in telegram:

```
/label 0 0 测试标签
```




# Useful links

[jsPDF document](http://raw.githack.com/MrRio/jsPDF/master/docs/index.html)

[jsPDF node examples](https://github.com/parallax/jsPDF/tree/master/examples/node)

[jsPDF online demo](https://parall.ax/products/jspdf)

[validator](https://github.com/validatorjs/validator.js)

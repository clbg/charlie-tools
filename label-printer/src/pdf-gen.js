const fs = require("fs");
const { jsPDF } = require("jspdf");

// test args to support cmd args
const args = process.argv.slice(2);
args.forEach((arg) => {
    console.log(arg);
});

// 8.4mm x 17.6mm is page size of 2x8 label chunk, each label is 4.0mm(width) x 2.0mm (height), and each border for each label have 0.1mm margin.
const doc = new jsPDF({
    orientation: "p",
    unit: "mm",
    format: [8.4, 17.6],
    putOnlyUsedFonts: true,
    floatPrecision: 16, // or "smart", default is 16
});

var i = 3;
var j = 1;

var SourceHans = fs.readFileSync("assets/SourceHanSansSC-Medium.ttf", {
    encoding: "latin1",
});

doc.addFileToVFS("SourceHanSansSC-Medium.ttf", SourceHans);
doc.addFont("SourceHanSansSC-Medium.ttf", "SourceHanSansSC", "medium");

doc.setFont("SourceHanSansSC", "medium"); // set font
doc.setFontSize(20);

doc.setFontSize(2);
doc.text("打印机", 1, 3, {}, 0);

doc.setLineWidth(1);
doc.setDrawColor(255, 0, 0);
doc.setFillColor(0, 0, 255);
doc.triangle(100, 100, 110, 100, 120, 130, "FD");
doc.save("test.pdf");

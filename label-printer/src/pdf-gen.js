const fs = require("fs");
const { jsPDF } = require("jspdf");

// test args to support cmd args
const args = process.argv.slice(2);
args.forEach((arg) => {
    console.log(arg);
});

const setupFonts = (doc) => {
    var SourceHans = fs.readFileSync("assets/SourceHanSansSC-Medium.ttf", {
        encoding: "latin1",
    });

    doc.addFileToVFS("SourceHanSansSC-Medium.ttf", SourceHans);
    doc.addFont("SourceHanSansSC-Medium.ttf", "SourceHanSansSC", "medium");

    doc.setFont("SourceHanSansSC", "medium"); // set font
    doc.setFontSize(2);
};

const setText = (doc, i, j, text) => {
    const x = j * 4.2 + 2.1;
    const y = i * 2.2 + 1.1;
    doc.text(
        text,
        x,
        y,
        { baseline: "middle", align: "center", maxWidth: "4.0" },
        0
    );
};

// 8.4mm x 17.6mm is page size of 2x8 label chunk, each label is 4.0mm(width) x 2.0mm (height), and each border for each label have 0.1mm margin.
const doc = new jsPDF({
    orientation: "p",
    unit: "mm",
    format: [8.4, 17.6],
    putOnlyUsedFonts: true,
    floatPrecision: 16, // or "smart", default is 16
});

setupFonts(doc);
for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 2; j++) {
        setText(doc, i, j, "打印机测试");
    }
}
doc.save("test.pdf");

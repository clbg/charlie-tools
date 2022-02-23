const fs = require("fs");
const { jsPDF } = require("jspdf");

module.exports = class pdfGenerator {
    constructor() {
        // 8.4mm x 17.6mm is page size of 2x8 label chunk, each label is 4.0mm(width) x 2.0mm (height), and each border for each label have 0.1mm margin.
        this.doc = new jsPDF({
            orientation: "p",
            unit: "mm",
            format: [84, 176],
            putOnlyUsedFonts: true,
            floatPrecision: 16, // or "smart", default is 16
        });

        var SourceHans = fs.readFileSync("assets/SourceHanSansSC-Medium.ttf", {
            encoding: "latin1",
        });

        this.doc.addFileToVFS("SourceHanSansSC-Medium.ttf", SourceHans);
        this.doc.addFont(
            "SourceHanSansSC-Medium.ttf",
            "SourceHanSansSC",
            "medium"
        );

        this.doc.setFont("SourceHanSansSC", "medium"); // set font
        this.doc.setFontSize(20);
    }

    setText(i, j, text) {
        const x = j * 42 + 21;
        const y = i * 22 + 11;
        this.doc.text(
            text,
            x,
            y,
            { baseline: "middle", align: "center", maxWidth: "40" },
            0
        );
    }

    save(fileName) {
        this.doc.save(fileName);
    }
};

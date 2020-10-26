const fs = require("fs");
const PDFDocument = require("pdfkit");

const crearPedido = (invoice, path) => {
    let doc = new PDFDocument({ size: "A4", margin: 50 });
    generateHeader(doc);
    generateCustomerInformation(doc, invoice);
    generateInvoiceTable(doc, invoice);
    generateFooter(doc);

    doc.end();
    doc.pipe(fs.createWriteStream(path));
}

const generateHeader = (doc) => {
    doc
        .image("backend/public/img/logo-districaribe-logo.png", 50, 45, { width: 150 })
        .fillColor("#444444")
        // .fontSize(20)
        // .text("Big Chef", 110, 57)
        .fontSize(10)
        .text("Districaribe SAS.", 200, 50, { align: "right" })
        .text("Cra 10 No 5 - 18 Bodega 57", 200, 65, { align: "right" })
        .text("Corregimiento la Playa - Barranquilla", 200, 80, { align: "right" })
        .moveDown();
}

const generateCustomerInformation = (doc, invoice) => {
    doc
        .fillColor("#444444")
        .fontSize(20)
        .text("Orden de Pedido", 50, 160);

    generateHr(doc, 185);

    const customerInformationTop = 200;

    doc
        .fontSize(10)
        .text("Orden de Pedido No:", 50, customerInformationTop)
        .font("Helvetica-Bold")
        .text(invoice.invoice_nr, 150, customerInformationTop)
        .font("Helvetica")
        .text("fecha:", 50, customerInformationTop + 15)
        .text(formatDate(new Date()), 150, customerInformationTop + 15)
        // .text("Balance Due:", 50, customerInformationTop + 30)
        // .text(
        //   formatCurrency(invoice.subtotal - invoice.paid),
        //   150,
        //   customerInformationTop + 30
        // )

    .font("Helvetica-Bold")
        .text("Cliente:", 375, customerInformationTop)
        .font("Helvetica")
        .text(invoice.direccion.nombrePedido, 425, customerInformationTop)
        .font("Helvetica-Bold")
        .text("Empresa:", 375, customerInformationTop + 15)
        .font("Helvetica")
        .text(invoice.direccion.empresa, 425, customerInformationTop + 15)
        .font("Helvetica-Bold")
        .text("Dirección:", 375, customerInformationTop + 30)
        .font("Helvetica")
        .text(invoice.direccion.direccionPedido, 425, customerInformationTop + 30)
        .moveDown();

    generateHr(doc, 252);
}

const generateInvoiceTable = (doc, invoice) => {
    let i;
    const invoiceTableTop = 330;

    doc.font("Helvetica-Bold");
    generateTableRow(
        doc,
        invoiceTableTop,
        "Item",
        "Description",
        "Cantidad"
    );
    generateHr(doc, invoiceTableTop + 20);
    doc.font("Helvetica");

    for (i = 0; i < invoice.items.length; i++) {
        const item = invoice.items[i];
        const position = invoiceTableTop + (i + 1) * 30;
        generateTableRow(
            doc,
            position,
            item.item,
            item.producto,
            item.cantidad
        );

        generateHr(doc, position + 20);
    }

    // const subtotalPosition = invoiceTableTop + (i + 1) * 30;
    // generateTableRow(
    //   doc,
    //   subtotalPosition,
    //   "",
    //   "",
    //   "Subtotal",
    //   "",
    //   formatCurrency(invoice.subtotal)
    // );

    // const paidToDatePosition = subtotalPosition + 20;
    // generateTableRow(
    //   doc,
    //   paidToDatePosition,
    //   "",
    //   "",
    //   "Paid To Date",
    //   "",
    //   formatCurrency(invoice.paid)
    // );

    // const duePosition = paidToDatePosition + 25;
    // doc.font("Helvetica-Bold");
    // generateTableRow(
    //   doc,
    //   duePosition,
    //   "",
    //   "",
    //   "Balance Due",
    //   "",
    //   formatCurrency(invoice.subtotal - invoice.paid)
    // );
    // doc.font("Helvetica");
}

const generateFooter = (doc) => {
    doc
        .fontSize(10)
        .text(
            "Gracias por su orden!! la familia BIG CHEF le contactará para revisar y confirmar su pedido antes de generarlo.",
            50,
            780, { align: "center", width: 500 }
        )
        .image("backend/public/img/logo-districaribe-logo.png", 220, 780 + 15, { align: "center", width: 150 })
}

const generateTableRow = (
    doc,
    y,
    item,
    description,
    quantity
) => {
    doc
        .fontSize(10)
        .text(item, 50, y)
        .text(description, 150, y)
        .text(quantity, 370, y, { width: 90, align: "right" })
}

const generateHr = (doc, y) => {
    doc
        .strokeColor("#aaaaaa")
        .lineWidth(1)
        .moveTo(50, y)
        .lineTo(550, y)
        .stroke();
}

// const formatCurrency = (cents) => {
//   return "$" + (cents / 100).toFixed(2);
// }

const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return day + "/" + month + "/" + year;
}

module.exports = {
    crearPedido
};
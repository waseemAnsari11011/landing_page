const express = require("express");
const path = require("path");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
let cors = require("cors");
app.use(cors());
var nodemailer = require("nodemailer");
const publicDirectoryPath = path.join(__dirname, "./client");
app.use(express.static(publicDirectoryPath));
const port = process.env.PORT || 3600;

mongoose.connect(
  "mongodb+srv://eshop-user:1234567Ww@cluster0.m7qgjqu.mongodb.net/?retryWrites=true&w=majority"
);

const Emails = mongoose.model("Emails", {
  name: {
    type: String,
  },

  email: {
    type: String,
  },
});

//form_data

app.post("/formdata", async (req, res) => {
  console.log("req.body.scriptname", req.body);

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "waseemahm05@gmail.com",
       pass: "gwppalxvtifivfvi",
    },
  });

  var mailOptions = {
    from: "waseemahm05@gmail.com",
    to: req.body.email,
    subject: "your free audiobook",
    html: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Download your audiobook!</title>
  </head>

  <body>
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html
      xmlns="http://www.w3.org/1999/xhtml"
      xmlns:o="urn:schemas-microsoft-com:office:office"
      style="
        width: 100%;
        font-family: Arial, sans-serif;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        padding: 0;
        margin: 0;
      "
    >
      <head>
        <meta charset="UTF-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="x-apple-disable-message-reformatting" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta content="telephone=no" name="format-detection" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <title></title>
        <!--[if (mso 16)]>
          <style type="text/css">
            a {
              text-decoration: none;
            }
          </style>
        <![endif]-->
        <!--[if gte mso 9
          ]><style>
            sup {
              font-size: 100% !important;
            }
          </style><!
        [endif]-->
        <!--[if gte mso 9]>
          <xml>
            <o:OfficeDocumentSettings>
              <o:AllowPNG></o:AllowPNG>
              <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
          </xml>
        <![endif]-->
        <!--[if gt mso 15]>
          <style type="text/css" media="all">
            /* Outlook 2016 Height Fix */
            table,
            tr,
            td {
              border-collapse: collapse;
            }
            tr {
              font-size: 0px;
              line-height: 0px;
              border-collapse: collapse;
            }
          </style>
        <![endif]-->
        <!--[if gte mso 9]>
          <style type="text/css" media="all">
            .signature-email-id a {
              color: #4f4f4f !important;
            }
          </style>
        <![endif]-->
        <style type="text/css">
          .gallery2-left-column {
            margin-right: 20px;
          }
          @media only screen and (max-width: 628px) {
            .discount-temp1-card {
              max-width: 172px !important;
            }
          }
          @media only screen and (max-width: 605px) {
            .full-width-btn2 {
              padding: 12px 130px !important;
            }
          }
          @media only screen and (max-width: 515px) {
            .full-width-btn2 {
              padding: 12px 45px !important;
            }
          }
          @media only screen and (max-width: 613px) {
            .discount-temp1-card {
              max-width: 168px !important;
            }
          }
          @media only screen and (max-width: 608px) {
            .ecommerce-4-right-column,
            .ecommerce-4-left-column,
            .ecommerce-4-left-column table,
            .ecommerce-4-right-column table,
            .ecommerce-4-right-column td,
            .ecommerce-4-left-column td {
              float: none !important;
              text-align: left;
              margin: 0 auto;
            }
            .ecommerce-2-btn {
              float: left !important;
              margin: 0 !important;
            }
            .ecommerce-4-adjust {
              padding-bottom: 20px !important;
            }
          }
          @media only screen and (max-width: 605px) {
            .content-9-text {
              padding-bottom: 20px !important;
            }
            .content-9-text-adjust {
              padding-top: 20px !important;
            }
          }
          @media only screen and (max-width: 600px) {
            .mb-padd {
              padding: 20px !important;
            }
            .rm-padd {
              padding: 0 !important;
            }
            .restaurent-temp1-padd {
              padding-top: 20px !important;
            }
            .restaurent-temp1-footer {
              float: none !important;
              text-align: left !important;
              margin: 0 auto 0 0 !important;
            }
            .right-new-column,
            .left-new-column {
              float: none !important;
              text-align: left;
              margin: 0 auto;
            }
            .discount-temp1-right-column,
            .discount-temp1-left-column {
              float: none !important;
              margin: 0 auto 20px !important;
            }
            .welcome-temp2-margin {
              margin: 0 auto !important;
              margin-bottom: 20px !important;
            }
            .testimonial-sect {
              padding-bottom: 20px !important;
            }
            .discount-temp1-card {
              max-width: 100% !important;
              width: 200px !important;
            }
            .newsletter-temp1-right-column,
            .newsletter-temp1-left-column,
            .newsletter-temp1-column table,
            .newsletter-temp1-column table,
            .newsletter-temp1-column td,
            .newsletter-temp1-column td,
            .newsletter-temp1-btn {
              float: none !important;
              text-align: center;
              margin: 0 auto !important;
            }
            .newsletter-template1-text-column h1,
            .newsletter-template1-text-column p {
              text-align: center !important;
            }
            .newsletter-template1-text-column,
            .newsletter-pro-img,
            .gr-temp-3-img,
            .restaurent-temp1-img {
              max-width: 100% !important;
            }
            .blog-post1-padd {
              padding-bottom: 20px !important;
            }
            .footer-2-link-padd {
              padding-top: 20px !important;
            }
            .gallery-card {
              max-width: 250px !important;
            }
            .right-column .social-link {
              margin-top: 10px !important;
            }
            .content-14-right-column,
            .content-14-left-column,
            .content-14-left-column table,
            .content-14-right-column table,
            .content-14-right-column td,
            .content-14-left-column td {
              float: left !important;
              text-align: left;
              margin: 0 auto;
            }
            .content-10-card-img,
            .content-10-left-column,
            .content-10-right-column {
              float: none !important;
              text-align: left;
              margin: 0 auto;
            }
            .footer-1-right-column,
            .footer-1-left-column,
            .footer-1-left-column table,
            .footer-1-right-column table,
            .center-column td,
            .footer-1-right-column td,
            .footer-1-left-column td {
              float: none !important;
              text-align: center;
              margin: 0 auto !important;
            }
            .cta3-btn-padd {
              padding-top: 20px !important;
            }
            .gr-internal-temp-2-card,
            .gr-internal-temp-2-card table,
            .gr-internal-temp-2-card td,
            .gr-internal-temp-2-card img {
              max-width: 100% !important;
            }
            .newsletter-right-bg-col {
              margin-top: 20px !important;
            }
            .center-column,
            .right-column,
            .left-column,
            .center-column table,
            .left-column table,
            .right-column table,
            .center-column td,
            .right-column td,
            .left-column td,
            .ecommerce-5-right-column,
            .ecommerce-5-left-column,
            .ecommerce-5-left-column table,
            .ecommerce-5-right-column table,
            .center-column td,
            .ecommerce-5-right-column td,
            .ecommerce-5-left-column td,
            .footer-two-col-text {
              float: none !important;
              text-align: center;
              margin: 0 auto !important;
            }
            .content-9-text {
              padding-bottom: 20px !important;
            }
            .content-9-text-adjust {
              padding-bottom: 0 !important;
            }
            .gr-internal-temp-1-row-head,
            .gr-internal-temp-2-card.right-column td,
            .content-10-card-padding,
            .content-12-text-adjust,
            .content-14-text-adjust,
            .cta3-btn-padd,
            .ecommerce-4-adjust {
              padding-top: 20px !important;
            }
            .content14-card-adjust-width {
              max-width: 100% !important;
            }
            .ecommerce-2-btn {
              float: left !important;
              margin: 0 !important;
            }
            .ecommerce-5-card img {
              display: inline-block !important;
            }
            .ecommerce-5-left-column h1,
            .ecommerce-5-left-column p,
            .ecommerce-5-right-column h1,
            .ecommerce-5-right-column p {
              text-align: center !important;
            }
            .gallery-5-card-lg-img {
              max-width: 330px !important;
            }
            .gallery-5-card-sm-img .adapt-img {
              max-height: 158px !important;
            }
            .feature1-right-infoblock-mb-img,
            .feature1-right-infoblock-mb-adjust,
            .feature2-extra-padd,
            .features-4-card {
              padding-top: 30px !important;
            }
            .ecommerce-5-card {
              padding: 0 !important;
            }
            .features-3-text {
              padding-bottom: 20px !important;
            }
            .features-3-text-adjust {
              padding-bottom: 0 !important;
            }
            .gallery2-card {
              max-width: 170px !important;
            }
            .header-2-text {
              float: none !important;
              text-align: center;
              padding-top: 15px;
            }
            .left-column .left-infoblock img {
              display: inline-block !important;
            }
            .header-3-link-padd {
              padding-top: 20px !important;
            }
            .gr-internal-temp-3-card,
            .gr-internal-temp-3-card table,
            .gr-internal-temp-3-card td,
            .gr-internal-temp-3-card img {
              max-width: 100% !important;
            }
            .gr-internal-temp-3-card-top-pad {
              padding-top: 40px !important;
            }
            .gr-internal-temp-3-card-btm-pad {
              padding-bottom: 40px !important;
            }
            .ecommerce-2-btn {
              margin: 0 !important;
            }
          }
          @media only screen and (max-width: 590px) {
            .gallery2-card {
              max-width: 165px !important;
            }
          }
          @media only screen and (max-width: 585px) {
            .features-1-card,
            .gallery-card {
              max-width: 245px !important;
            }
          }
          @media only screen and (max-width: 574px) {
            .gallery2-card {
              max-width: 150px !important;
            }
          }
          @media only screen and (max-width: 570px) {
            .full-width-btn {
              padding: 12px 180px !important;
            }
          }
          @media only screen and (max-width: 560px) {
            .footer-3-card {
              max-width: 200px !important;
            }
            .features-1-card,
            .features-2-card,
            .features-4-card {
              max-width: 225px !important;
            }
            .gallery-card {
              max-width: 235px !important;
            }
          }
          @media only screen and (max-width: 556px) {
            .gallery-5-card-lg-img {
              max-width: 310px !important;
            }
            .gallery-5-card-sm-img .adapt-img {
              max-height: 148px !important;
            }
          }
          @media only screen and (max-width: 550px) {
            .gallery-card {
              max-width: 225px !important;
            }
          }
          @media only screen and (max-width: 600px) {
            .restaurent-temp1-text {
              text-align: left !important;
            }
            .full-width-btn {
              padding: 12px 150px !important;
            }
          }
          @media only screen and (max-width: 526px) {
            .gallery-5-card-lg-img {
              max-width: 290px !important;
            }
            .gallery-5-card-sm-img .adapt-img {
              max-height: 138px !important;
            }
            .features-1-card,
            .features-2-card,
            .features-4-card {
              max-width: 210px !important;
            }
            .gallery-card {
              max-width: 200px !important;
            }
            .gallery2-card {
              max-width: 140px !important;
            }
          }
          @media only screen and (max-width: 520px) {
            .galley-4-card {
              max-width: 200px !important;
            }
          }
          @media only screen and (max-width: 510px) {
            .transaction-1-text {
              font-size: 15px !important;
              line-height: 21px !important;
            }
            .transaction-1-item-data-td {
              max-width: 150px !important;
            }
            .transaction-1-item-price-td,
            .transaction-3-item-price-td {
              max-width: 50px;
            }
            .transaction-1-item-qty-td,
            .transaction-3-item-qty-td {
              max-width: 35px;
            }
            .transaction-1-img {
              width: 70px !important;
              height: 70px !important;
            }
          }
          @media only screen and (max-width: 500px) {
            .newsletter-tem2-head {
              font-size: 40px !important;
              line-height: 50px !important;
            }
            .discount-text1 {
              font-size: 130px !important;
            }
            .discount-text2 {
              font-size: 50px !important;
            }
            .feature4-right-column,
            .feature4-left-column,
            .feature4-left-column table,
            .feature4-right-column table,
            .center-column td,
            .feature4-right-column td,
            .feature4-left-column td {
              text-align: center;
            }
            .feature1-right-column-view {
              float: left !important;
            }
            .feature1-right-column-view .right-infoblock {
              padding-top: 20px !important;
            }
            .gallery2-right-column,
            .gallery2-left-column,
            .gallery2-left-column table,
            .gallery2-right-column table,
            .center-column td,
            .gallery2-right-column td,
            .gallery2-left-column td,
            .feature-right-column,
            .feature-left-column,
            .feature-left-column table,
            .feature-right-column table,
            .center-column td,
            .feature-right-column td,
            .feature-left-column td,
            .feature2-right-column,
            .feature2-left-column,
            .feature2-left-column table,
            .feature2-right-column table,
            .center-column td,
            .feature2-right-column td,
            .feature2-left-column td {
              float: none !important;
              text-align: center;
              margin: 0 auto !important;
            }
            .features-4-card img,
            .features-1-card img,
            .features-2-card img,
            .gallery2-card img {
              display: inline-block !important;
            }
            .gallery2-left-column h1,
            .gallery2-left-column p,
            .gallery2-right-column h1,
            .gallery2-right-column p,
            .feature4-left-column h1,
            .feature4-left-column p,
            .feature4-right-column h1,
            .feature4-right-column p,
            .feature-left-column h1,
            .feature-left-column p,
            .feature-right-column h1,
            .feature-right-column p,
            .feature2-left-column h1,
            .feature2-left-column p,
            .feature2-right-column h1,
            .feature2-right-column p {
              text-align: center !important;
            }
            .features-1-card,
            .features-2-card,
            .features-4-card,
            .gallery2-card {
              max-width: 330px !important;
            }
            .feature1-right-infoblock-mb-img,
            .gallery2-right-infoblock-mb-img {
              padding-top: 30px !important;
            }
          }
          @media only screen and (max-width: 476px) {
            .gr-temp-3-mult-head {
              width: 100% !important;
              max-width: 100% !important;
            }
            .signature-2-left-column,
            .signature-2-left-column table,
            .signature-2-left-column td,
            .signature-2-right-column,
            .signature-2-right-column table,
            .signature-2-right-column td {
              float: none !important;
              text-align: center !important;
              margin: 0 auto !important;
            }
            .signature-2-card {
              padding-left: 0 !important;
            }
            .gallery-5-card-lg-img {
              max-width: 270px !important;
            }
            .gallery-5-card-sm-img .adapt-img {
              max-height: 128px !important;
            }
            .gallery-6-lg-img {
              max-height: 172px !important;
              max-width: 175px !important;
            }
          }
          @media only screen and (max-width: 465px) {
            .full-width-btn {
              padding: 12px 100px !important;
            }
            .gallery-card {
              max-width: 180px !important;
            }
          }
          @media only screen and (max-width: 457px) {
            .text-container {
              padding: 0 !important;
            }
            .gallery-card,
            .footer-3-card {
              max-width: 180px !important;
            }
            .gallery-5-card-lg-img {
              max-width: 250px !important;
            }
            .gallery-5-card-sm-img .adapt-img {
              max-height: 118px !important;
            }
          }
          @media only screen and (max-width: 425px) {
            .gallery-second-img,
            .gallery-4-img-padd,
            .gallery-second-img {
              padding-top: 20px !important;
            }
            .gallery-card {
              max-width: 275px !important;
            }
            .gallery-right-column,
            .gallery-left-column,
            .gallery-right-column img,
            .gallery-left-column img,
            .gallery-5-right-column,
            .gallery-5-left-column,
            .gallery-5-right-column img,
            .gallery-5-left-column img {
              float: none !important;
              margin: 0 auto;
            }
            .gallery-5-card-lg-img,
            .gallery-5-card-sm-img {
              max-width: 100% !important;
            }
            .gallery-5-card-sm-img tr {
              display: inline;
            }
            .gallery-5-sm-2-img {
              margin-left: 10px !important;
            }
            .gallery-5-card-sm-img .adapt-img {
              max-height: 160px !important;
            }
          }
          @media only screen and (max-width: 418px) {
            .footer-3-card {
              max-width: 160px !important;
            }
            .gallery-card {
              max-width: 275px !important;
            }
            .gallery-right-column,
            .gallery-left-column,
            .gallery-right-column img,
            .gallery-left-column img {
              float: none !important;
              margin: 0 auto;
            }
            .gallery-second-img {
              padding-top: 20px !important;
            }
          }
          @media only screen and (max-width: 400px) {
            .newsletter-template1-text-column h1,
            .newsletter-template1-text-column p {
              text-align: left !important;
            }
            .newsletter-temp1-head {
              font-size: 33px !important;
              line-height: 44px !important;
            }
            .feature2-right-column,
            .feature2-left-column,
            .feature2-left-column table,
            .feature2-right-column table,
            .center-column td,
            .feature2-right-column td,
            .feature2-left-column td {
              float: left !important;
              text-align: left;
              margin: 0 auto !important;
            }
            .feature2-left-column h1,
            .feature2-left-column p,
            .feature2-right-column h1,
            .feature2-right-column p,
            .features-3-card td {
              text-align: left !important;
            }
            .content-7-btn {
              float: left !important;
              margin: 0 !important;
            }
            .content-9-card,
            .content-9-card table,
            .content-9-card td,
            .content-9-card img,
            .gr-internal-temp-1-card,
            .gr-internal-temp-1-card table,
            .gr-internal-temp-1-card td,
            .gr-internal-temp-1-card img {
              float: left !important;
              max-width: 100% !important;
              text-align: left !important;
              margin: 0 auto;
            }
            .feature-right-column,
            .feature-left-column,
            .feature-left-column table,
            .feature-right-column table,
            .center-column td,
            .feature-right-column td,
            .feature-left-column td {
              float: left !important;
              text-align: left;
              margin: 0 auto;
            }
            .gr-internal-temp-2-card,
            .gr-internal-temp-2-card table,
            .gr-internal-temp-2-card td,
            .gr-internal-temp-2-card img,
            .feature-left-column h1,
            .feature-left-column p,
            .feature-right-column h1,
            .feature-right-column p {
              text-align: left !important;
            }
          }
          @media only screen and (max-width: 390px) {
            .location-block1 {
              padding-left: 20px !important;
            }
            .gallery-5-card-sm-img .adapt-img {
              max-height: 140px !important;
            }
          }
          @media only screen and (max-width: 384px) {
            .transaction-4-text-head {
              font-size: 15px !important;
              line-height: 19px !important;
            }
            .transaction-4-text-para {
              font-size: 13px !important;
            }
            .transaction-1-item-data-td {
              max-width: 110px !important;
            }
            .transaction-3-item-data-td {
              max-width: 150px !important;
            }
          }
          @media only screen and (max-width: 400px) {
            .transaction-detail-right-td,
            .transaction-detail-left-td {
              max-width: 100% !important;
            }
            .transaction-detail-right-padd {
              padding-top: 20px !important;
            }
            .transaction-detail-right-column {
              float: left !important;
            }
          }
          @media only screen and (max-width: 364px) {
            .event-temp-loc-text {
              font-size: 12px !important;
            }
          }
          @media only screen and (max-width: 360px) {
            .gallery-5-card-sm-img .adapt-img {
              max-height: 120px !important;
            }
            .gr-internal-temp-1-heading {
              font-size: 42px !important;
              line-height: 52px !important;
            }
          }
          @media only screen and (max-width: 350px) {
            .full-width-btn {
              padding: 12px 60px !important;
            }
            .discount-temp1-heading {
              font-size: 34px !important;
              line-height: 49px !important;
            }
            .transaction-1-text {
              font-size: 14px !important;
              line-height: 18px !important;
            }
            .transaction-1-img {
              width: 50px !important;
              height: 50px !important;
            }
            .footer-3-detail-right-column {
              float: left !important;
            }
            .footer-3-detail-right-padd {
              padding-top: 20px !important;
            }
            .footer-3-card {
              width: 300px !important;
            }
          }
          @media only screen and (max-width: 333px) {
            .header-3-link a {
              font-size: 12px !important;
            }
          }
          @media only screen and (max-width: 327px) {
            .transaction-1-item-data-td {
              padding-left: 10px !important;
            }
          }
          @media only screen and (max-width: 320px) {
          }
          @media only screen and (max-width: 300px) {
            .gallery-5-card-sm-img .adapt-img {
              max-height: 100% !important;
            }
            .gallery-5-sm-2-img {
              margin-left: 0 !important;
            }
            .gallery-5-card-sm-img tr {
              display: block !important;
            }
          }
        </style>
        <style type="text/css">
          .restuarent-cta:hover {
            background-color: #f4dcd8;
          }
          @media only screen and (max-width: 600px) {
            .features-4-card:last-child,
            .ecommerce-5-card:last-child,
            .gallery2-card:last-child {
              padding-top: 30px !important;
            }
            .ecommerce-5-card:last-child {
              padding-top: 0 !important;
            }
          }
          @media only screen and (max-width: 500px) {
            .header-3-link td:not(:last-child) {
              padding-right: 20px !important;
            }
            .features-4-card:last-child,
            .features-2-card:last-child,
            .gallery2-card:last-child {
              padding-top: 0 !important;
            }
          }
        </style>
      </head>

      <body
        style="
          width: 100%;
          font-family: sans-serif;
          -webkit-text-size-adjust: none;
          -ms-text-size-adjust: none;
          padding: 0;
          margin: 0;
        "
      >
        <!--Background color div and vml code-->
        <div class="wrapper-color" style="background-color: #ffffff">
          <!--[if gte mso 9]>
            <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
              <v:fill type="tile" color="#ffffff"> </v:fill>
            </v:background>
          <![endif]-->

          <!--Wrapper table div-->

          <table
            class="wrapper"
            width="100%"
            cellspacing="0"
            cellpadding="0"
            style="
              -mso-table-lspace: 0;
              mso-table-rspace: 0;
              border-collapse: collapse;
              border-spacing: 0px;
              padding: 0;
              margin: 0;
              background-repeat: repeat;
              background-position: center top;
            "
          >
            <tr style="border-collapse: collapse">
              <td style="padding: 0; margin: 0" valign="top">
                <!--content table goes here-->
                <!--this table defines the layout of the content-->
                <table
                  class="content"
                  cellspacing="0"
                  cellpading="0"
                  align="center"
                  style="
                    mso-table-rspace: 0;
                    mso-table-lspace: 0;
                    border-collapse: collapse;
                    border-spacing: 0px;
                    padding: 0;
                    margin: 0;
                    table-layout: fixed !important;
                    width: 100%;
                  "
                >
                  <tr style="border-collapse: collapse">
                    <td align="center" style="padding: 0; margin: 0">
                      <!--in this table cell we make body table that allow us to make in this table cell we make body table that allow us to make background color and add padding -->
                      <span style="display: none"> </span>
                      <table
                        cellspacing="0"
                        cellpadding="0"
                        align="center"
                        id="i9ve"
                        width="100%"
                        class="gr-wrapper content-body"
                        style="
                          box-sizing: border-box;
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          border-collapse: collapse;
                          border-spacing: 0px;
                          padding: 0;
                          margin: 0 auto;
                          width: 100%;
                          max-width: 600px;
                        "
                      >
                        <tbody id="ivtk" style="box-sizing: border-box">
                          <tr
                            id="iuui"
                            style="
                              box-sizing: border-box;
                              border-collapse: collapse;
                            "
                          >
                            <td
                              align="center"
                              bgcolor="#F4F4F4"
                              id="ia7u"
                              class="gr-structure"
                              style="
                                box-sizing: border-box;
                                margin: 0;
                                padding: 20px;
                                background-color: #f4f4f4;
                              "
                            >
                              <table
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                id="iny3"
                                style="
                                  box-sizing: border-box;
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tbody id="i2wv" style="box-sizing: border-box">
                                  <tr
                                    id="itvp"
                                    style="
                                      box-sizing: border-box;
                                      border-collapse: collapse;
                                    "
                                  >
                                    <td
                                      align="center"
                                      id="i9ng"
                                      width="100%"
                                      class="gr-container"
                                      style="
                                        box-sizing: border-box;
                                        padding: 10px 0 30px;
                                        margin: 0;
                                        width: 100%;
                                        max-width: 560px;
                                      "
                                    >
                                      <table
                                        width="101"
                                        cellspacing="0"
                                        cellpadding="0"
                                        role="presentation"
                                        id="i8hg"
                                        style="
                                          box-sizing: border-box;
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                          width: 101px;
                                        "
                                      >
                                        <tbody
                                          id="i1jo2"
                                          style="box-sizing: border-box"
                                        >
                                          <tr
                                            id="ihvus"
                                            style="
                                              box-sizing: border-box;
                                              border-collapse: collapse;
                                            "
                                          >
                                            <td
                                              align="center"
                                              id="i4kal"
                                              class="gr-element"
                                              style="
                                                box-sizing: border-box;
                                                padding: 0;
                                                margin: 0;
                                              "
                                            >
                                              <img
                                                src="https://islamic-audiobook.s3.amazonaws.com/Image/317580222_102357756053392_4089963224214013943_n.jpg"
                                                alt="placeholder"
                                                title="Image"
                                                width="101"
                                                height="auto"
                                                id="i9b43"
                                                class="adapt-img"
                                                style="
                                                  box-sizing: border-box;
                                                  display: block;
                                                  border: 0;
                                                  outline: none;
                                                  text-decoration: none;
                                                  -ms-interpolation-mode: bicubic;
                                                  width: 100%;
                                                  max-width: 101px;
                                                "
                                              />
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr
                                    id="i8a5m"
                                    style="
                                      box-sizing: border-box;
                                      border-collapse: collapse;
                                    "
                                  >
                                    <td
                                      align="center"
                                      bgcolor="#ffffff"
                                      id="iecl7"
                                      width="100%"
                                      class="gr-container"
                                      style="
                                        box-sizing: border-box;
                                        padding: 40px 20px 0;
                                        margin: 0;
                                        width: 100%;
                                        max-width: 560px;
                                        background-color: #ffffff;
                                        border-top-left-radius: 8px;
                                        border-top-right-radius: 8px;
                                      "
                                    >
                                      <table
                                        role="presentation"
                                        cellpadding="0"
                                        cellspacing="0"
                                        width="100%"
                                        id="i5b5a"
                                        style="
                                          box-sizing: border-box;
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                          width: 100%;
                                          max-width: 202px;
                                        "
                                      >
                                        <tbody
                                          id="i311a"
                                          style="box-sizing: border-box"
                                        >
                                          <tr
                                            id="imd52"
                                            style="
                                              box-sizing: border-box;
                                              border-collapse: collapse;
                                            "
                                          >
                                            <td
                                              align="center"
                                              id="ichxd"
                                              class="gr-element"
                                              style="
                                                box-sizing: border-box;
                                                padding: 0;
                                              "
                                            >
                                              <img
                                                src="https://islamic-audiobook.s3.amazonaws.com/Image/Confirmed-cuate.png"
                                                title="Image"
                                                alt="Image"
                                                width="202"
                                                id="i8doy"
                                                class="img-fluid"
                                                style="
                                                  box-sizing: border-box;
                                                  display: inline-block;
                                                  width: 100%;
                                                  max-width: 202px;
                                                  border: 0;
                                                  outline: none;
                                                  text-decoration: none;
                                                  -ms-interpolation-mode: bicubic;
                                                "
                                              />
                                              <p
                                                id="ihdfi"
                                                style="
                                                  box-sizing: border-box;
                                                  line-height: 2px;
                                                  font-size: 2px;
                                                  margin: 0;
                                                "
                                              >
                                                 
                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr
                                    id="ievwg"
                                    style="
                                      box-sizing: border-box;
                                      border-collapse: collapse;
                                    "
                                  >
                                    <td
                                      align="center"
                                      bgcolor="#ffffff"
                                      id="ic15k"
                                      width="100%"
                                      class="gr-container"
                                      style="
                                        box-sizing: border-box;
                                        padding: 20px 20px 0;
                                        margin: 0;
                                        width: 100%;
                                        max-width: 560px;
                                        background-color: #ffffff;
                                      "
                                    >
                                      <table
                                        role="presentation"
                                        cellpadding="0"
                                        cellspacing="0"
                                        id="izn8l"
                                        style="
                                          box-sizing: border-box;
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                        "
                                      >
                                        <tbody
                                          id="ic0on"
                                          style="box-sizing: border-box"
                                        >
                                          <tr
                                            id="iqyih"
                                            style="
                                              box-sizing: border-box;
                                              border-collapse: collapse;
                                            "
                                          >
                                            <td
                                              align="center"
                                              id="iq318"
                                              class="gr-element"
                                              style="
                                                box-sizing: border-box;
                                                padding: 0;
                                              "
                                            >
                                              <h1
                                                id="iwhbk"
                                                style="
                                                  box-sizing: border-box;
                                                  margin: 0;
                                                  -webkit-text-size-adjust: none;
                                                  -ms-text-size-adjust: none;
                                                  mso-line-height-rule: exactly;
                                                  font-family: Open Sans,
                                                    sans-serif;
                                                  line-height: 33px;
                                                  color: #1DB954;
                                                  font-size: 24px;
                                                  font-weight: 700;
                                                "
                                              >
                                                Here&#039;s your audiobook!
                                              </h1>
                                            </td>
                                          </tr>
                                          <tr
                                            id="im3zf"
                                            style="
                                              box-sizing: border-box;
                                              border-collapse: collapse;
                                            "
                                          >
                                            <td
                                              align="center"
                                              id="izkny"
                                              class="gr-element"
                                              style="
                                                box-sizing: border-box;
                                                padding: 0;
                                                padding-top: 15px;
                                              "
                                            >
                                              <p
                                                id="idfk4"
                                                style="
                                                  box-sizing: border-box;
                                                  margin: 0;
                                                  -webkit-text-size-adjust: none;
                                                  -ms-text-size-adjust: none;
                                                  mso-line-height-rule: exactly;
                                                  font-family: Open Sans,
                                                    sans-serif;
                                                  line-height: 19px;
                                                  color: #4f4f4f;
                                                  font-size: 14px;
                                                  font-weight: 400;
                                                "
                                              >
                                                Thanks for subscribing to our
                                                emails.<br
                                                  style="box-sizing: border-box"
                                                />Here&#039;s your audiobook as
                                                promised!
                                              </p>
                                            </td>
                                          </tr>
                                          <tr
                                            id="iunjn"
                                            style="
                                              box-sizing: border-box;
                                              border-collapse: collapse;
                                            "
                                          >
                                            <td
                                              align="center"
                                              id="ie4dw"
                                              class="gr-element"
                                              style="
                                                box-sizing: border-box;
                                                padding: 0;
                                                padding-top: 15px;
                                              "
                                            >
                                              <p
                                                id="il4vp"
                                                style="
                                                  box-sizing: border-box;
                                                  margin: 0;
                                                  -webkit-text-size-adjust: none;
                                                  -ms-text-size-adjust: none;
                                                  mso-line-height-rule: exactly;
                                                  font-family: Open Sans,
                                                    sans-serif;
                                                  line-height: 21px;
                                                  color: #4f4f4f;
                                                  font-size: 14px;
                                                  font-weight: 600;
                                                "
                                              >
                                                Click on the link below to
                                                download the audiobook.
                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr
                                    id="ipv7t"
                                    style="
                                      box-sizing: border-box;
                                      border-collapse: collapse;
                                    "
                                  >
                                    <td
                                      align="center"
                                      bgcolor="#ffffff"
                                      id="inyba"
                                      width="100%"
                                      class="gr-container"
                                      style="
                                        box-sizing: border-box;
                                        padding: 0 20px;
                                        margin: 0;
                                        width: 100%;
                                        max-width: 560px;
                                        background-color: #ffffff;
                                      "
                                    >
                                      <table
                                        role="presentation"
                                        cellpadding="0"
                                        cellspacing="0"
                                        id="i9tjr"
                                        style="
                                          box-sizing: border-box;
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                        "
                                      >
                                        <tbody
                                          id="ij2qf"
                                          style="box-sizing: border-box"
                                        >
                                          <tr
                                            id="ihi1l"
                                            style="
                                              box-sizing: border-box;
                                              border-collapse: collapse;
                                            "
                                          >
                                            <td
                                              align="center"
                                              id="iqbk6"
                                              class="gr-element"
                                              style="
                                                box-sizing: border-box;
                                                padding: 0;
                                                padding-top: 30px;
                                                margin: 0;
                                                line-height: 14px;
                                                font-size: 12px;
                                                color: #cccccc;
                                              "
                                            >
                                              <table
                                                role="presentation"
                                                cellpadding="0"
                                                cellspacing="0"
                                                align="center"
                                                id="i8quo"
                                                style="
                                                  box-sizing: border-box;
                                                  mso-table-lspace: 0pt;
                                                  mso-table-rspace: 0pt;
                                                  border-collapse: collapse;
                                                  border-spacing: 0px;
                                                "
                                              >
                                                <tbody
                                                  id="ihk19"
                                                  style="box-sizing: border-box"
                                                >
                                                  <tr
                                                    id="irk7f"
                                                    style="
                                                      box-sizing: border-box;
                                                      border-collapse: collapse;
                                                    "
                                                  >
                                                    <td
                                                      bgcolor="#1DB954"
                                                      id="iwfre"
                                                      style="
                                                        box-sizing: border-box;
                                                        border-radius: 4px;
                                                        padding: 0;
                                                        margin: 0;
                                                        font-size: 16px;
                                                        line-height: 24px;
                                                        font-family: Open Sans,
                                                          sans-serif;
                                                        color: #ffffff;
                                                      "
                                                    >
                                                      <a
                                                        href="https://drive.google.com/drive/folders/1AcLrI7V_JFH4XXHlgRk6Cp6nncWRcDvv"
                                                        target="_blank"
                                                        id="i05mf"
                                                        class="view"
                                                        style="
                                                          box-sizing: border-box;
                                                          -webkit-text-size-adjust: none;
                                                          -ms-text-size-adjust: none;
                                                          display: inline-block;
                                                          padding: 12px 30px;
                                                          border: 1px solid
                                                            #1DB954;
                                                          mso-line-height-rule: exactly;
                                                          text-decoration: none;
                                                          color: #ffffff;
                                                          border-radius: 4px;
                                                          font-size: 14px;
                                                          line-height: 24px;
                                                          font-family: Open Sans,
                                                            sans-serif;
                                                          font-weight: 600;
                                                        "
                                                        >Download Audiobook</a
                                                      >
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr
                                    id="iatwc"
                                    style="
                                      box-sizing: border-box;
                                      border-collapse: collapse;
                                    "
                                  >
                                    <td
                                      align="center"
                                      bgcolor="#ffffff"
                                      id="itogw"
                                      width="100%"
                                      class="gr-container"
                                      style="
                                        box-sizing: border-box;
                                        padding: 0 20px;
                                        margin: 0;
                                        width: 100%;
                                        max-width: 560px;
                                        background-color: #ffffff;
                                      "
                                    >
                                      <table
                                        role="presentation"
                                        cellpadding="0"
                                        cellspacing="0"
                                        id="i51an"
                                        style="
                                          box-sizing: border-box;
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                        "
                                      >
                                        <tbody
                                          id="ic6gl"
                                          style="box-sizing: border-box"
                                        >
                                          <tr
                                            id="iovzo"
                                            style="
                                              box-sizing: border-box;
                                              border-collapse: collapse;
                                            "
                                          >
                                            <td
                                              align="center"
                                              bgcolor="#FFFFFF"
                                              id="ibz44"
                                              class="gr-column"
                                              style="
                                                box-sizing: border-box;
                                                font-size: 0;
                                                background-color: #ffffff;
                                                padding: 30px 0 20px;
                                              "
                                            >
                                              <table
                                                border="0"
                                                width="100%"
                                                height="100%"
                                                cellpadding="0"
                                                cellspacing="0"
                                                id="iron2"
                                                style="box-sizing: border-box"
                                              >
                                                <tbody
                                                  id="itn81"
                                                  style="box-sizing: border-box"
                                                >
                                                  <tr
                                                    id="ibufy"
                                                    style="
                                                      box-sizing: border-box;
                                                    "
                                                  >
                                                    <td
                                                      id="ivg3h"
                                                      width="540"
                                                      height="1"
                                                      class="gr-line-breaker"
                                                      style="
                                                        box-sizing: border-box;
                                                        border-bottom: 1px solid
                                                          #e3e7ea;
                                                        background: none;
                                                        height: 1px;
                                                        width: 540px;
                                                        margin: 0px 0px 0px 0px;
                                                      "
                                                    ></td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr
                                    id="ii247"
                                    style="
                                      box-sizing: border-box;
                                      border-collapse: collapse;
                                    "
                                  >
                                    <td
                                      align="center"
                                      bgcolor="#ffffff"
                                      id="io9w4"
                                      width="100%"
                                      class="gr-container"
                                      style="
                                        box-sizing: border-box;
                                        padding: 0 20px 40px;
                                        margin: 0;
                                        width: 100%;
                                        max-width: 560px;
                                        background-color: #ffffff;
                                        border-bottom-left-radius: 8px;
                                        border-bottom-right-radius: 8px;
                                      "
                                    >
                                      <table
                                        role="presentation"
                                        cellpadding="0"
                                        cellspacing="0"
                                        id="ibr0e"
                                        style="
                                          box-sizing: border-box;
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                        "
                                      >
                                        <tbody
                                          id="iq4xg"
                                          style="box-sizing: border-box"
                                        >
                                          <tr
                                            id="ifr4o"
                                            style="
                                              box-sizing: border-box;
                                              border-collapse: collapse;
                                            "
                                          >
                                            <td
                                              align="center"
                                              id="iwndc"
                                              class="gr-element"
                                              style="
                                                box-sizing: border-box;
                                                padding: 0;
                                              "
                                            >
                                              <p
                                                id="id2zn"
                                                style="
                                                  box-sizing: border-box;
                                                  margin: 0;
                                                  -webkit-text-size-adjust: none;
                                                  -ms-text-size-adjust: none;
                                                  mso-line-height-rule: exactly;
                                                  font-family: Open Sans,
                                                    sans-serif;
                                                  line-height: 16px;
                                                  color: #828282;
                                                  font-size: 12px;
                                                  font-weight: 400;
                                                "
                                              >
                                                You are receiving this email
                                                because you have signed up to
                                                our platform.
                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr
                                    id="ieha5"
                                    style="
                                      box-sizing: border-box;
                                      border-collapse: collapse;
                                    "
                                  >
                                    <td
                                      align="center"
                                      id="iyyqb"
                                      width="100%"
                                      class="gr-container"
                                      style="
                                        box-sizing: border-box;
                                        padding: 0;
                                        padding-top: 40px;
                                        margin: 0;
                                        width: 100%;
                                        max-width: 560px;
                                      "
                                    >
                                      <table
                                        role="presentation"
                                        cellpadding="0"
                                        border="0"
                                        cellspacing="0"
                                        id="irsph"
                                        style="
                                          box-sizing: border-box;
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                        "
                                      >
                                        <tbody
                                          id="i5n75"
                                          style="box-sizing: border-box"
                                        >
                                          <tr
                                            id="ihvwt"
                                            style="
                                              box-sizing: border-box;
                                              border-collapse: collapse;
                                            "
                                          >
                                            <td
                                              id="ifx5m"
                                              class="gr-social-links"
                                              style="
                                                box-sizing: border-box;
                                                padding: 0;
                                                margin: 0;
                                                border: 0;
                                              "
                                            >
                                              <table
                                                cellspacing="0"
                                                cellpadding="0"
                                                role="presentation"
                                                align="center"
                                                id="i2e3q"
                                                class="social-link"
                                                style="
                                                  box-sizing: border-box;
                                                  mso-table-lspace: 0pt;
                                                  mso-table-rspace: 0pt;
                                                  border-collapse: collapse;
                                                  border-spacing: 0px;
                                                "
                                              >
                                                <tbody
                                                  id="i1n35"
                                                  style="box-sizing: border-box"
                                                >
                                                  <tr
                                                    id="ihgyg"
                                                    style="
                                                      box-sizing: border-box;
                                                      border-collapse: collapse;
                                                    "
                                                  >
                                                    <td
                                                      valign="top"
                                                      id="iv8q6"
                                                      class="gr-element"
                                                      style="
                                                        box-sizing: border-box;
                                                        padding: 0;
                                                        margin: 0;
                                                        padding-right: 10px;
                                                      "
                                                    >
                                                      <!-- <a
                                                        target="_blank"
                                                        href="https://www.grorapid.com/"
                                                        id="ig4q8"
                                                        style="
                                                          box-sizing: border-box;
                                                          display: block;
                                                          padding: 2px;
                                                          -webkit-text-size-adjust: none;
                                                          -ms-text-size-adjust: none;
                                                          mso-line-height-rule: exactly;
                                                          text-decoration: none;
                                                          color: #586087;
                                                          font-size: 13px;
                                                          mso-ansi-font-size: 14px;
                                                        "
                                                        ><img
                                                          src="https://grorapidassets.s3.amazonaws.com/eassets/social-links/nblack-fb.png"
                                                          title="Facebook"
                                                          alt="fb"
                                                          width="32"
                                                          id="izi34"
                                                          class="img-fluid"
                                                          style="
                                                            box-sizing: border-box;
                                                            display: block;
                                                            border: 0;
                                                            outline: none;
                                                            text-decoration: none;
                                                            -ms-interpolation-mode: bicubic;
                                                          "
                                                      /></a> -->
                                                    </td>
                                                    <td
                                                      valign="top"
                                                      id="igto6"
                                                      class="gr-element"
                                                      style="
                                                        box-sizing: border-box;
                                                        padding: 0;
                                                        margin: 0;
                                                        padding-right: 10px;
                                                      "
                                                    >
                                                      <!-- <a
                                                        target="_blank"
                                                        href="https://www.grorapid.com/"
                                                        id="i9ahs"
                                                        style="
                                                          box-sizing: border-box;
                                                          display: block;
                                                          padding: 2px;
                                                          -webkit-text-size-adjust: none;
                                                          -ms-text-size-adjust: none;
                                                          mso-line-height-rule: exactly;
                                                          text-decoration: none;
                                                          color: #586087;
                                                          font-size: 13px;
                                                          mso-ansi-font-size: 14px;
                                                        "
                                                        ><img
                                                          src="https://grorapidassets.s3.amazonaws.com/eassets/social-links/nblack-tw.png"
                                                          title="Twitter"
                                                          alt="tw"
                                                          width="32"
                                                          id="iidvr"
                                                          class="img-fluid"
                                                          style="
                                                            box-sizing: border-box;
                                                            display: block;
                                                            border: 0;
                                                            outline: none;
                                                            text-decoration: none;
                                                            -ms-interpolation-mode: bicubic;
                                                          "
                                                      /></a> -->
                                                    </td>
                                                    <td
                                                      valign="top"
                                                      id="ictre"
                                                      class="gr-element"
                                                      style="
                                                        box-sizing: border-box;
                                                        padding: 0;
                                                        margin: 0;
                                                      "
                                                    >
                                                      <!-- <a
                                                        target="_blank"
                                                        href="https://www.grorapid.com/"
                                                        id="ifvpv"
                                                        style="
                                                          box-sizing: border-box;
                                                          display: block;
                                                          padding: 2px;
                                                          -webkit-text-size-adjust: none;
                                                          -ms-text-size-adjust: none;
                                                          mso-line-height-rule: exactly;
                                                          text-decoration: none;
                                                          color: #586087;
                                                          font-size: 13px;
                                                          mso-ansi-font-size: 14px;
                                                        "
                                                        ><img
                                                          src="https://grorapidassets.s3.amazonaws.com/eassets/social-links/nblack-in.png"
                                                          title="Instagram"
                                                          alt="in"
                                                          width="32"
                                                          id="i7owu"
                                                          class="img-fluid"
                                                          style="
                                                            box-sizing: border-box;
                                                            display: block;
                                                            border: 0;
                                                            outline: none;
                                                            text-decoration: none;
                                                            -ms-interpolation-mode: bicubic;
                                                          "
                                                      /></a> -->
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                          <tr
                                            id="iu9h7"
                                            style="
                                              box-sizing: border-box;
                                              border-collapse: collapse;
                                            "
                                          >
                                            <td
                                              align="center"
                                              id="ik2eg"
                                              class="gr-element"
                                              style="
                                                box-sizing: border-box;
                                                padding: 0;
                                                margin: 0;
                                                padding-top: 10px;
                                                border: 0;
                                              "
                                            >
                                              <p
                                                id="i7fcq"
                                                style="
                                                  box-sizing: border-box;
                                                  margin: 0;
                                                  padding: 0;
                                                  -webkit-text-size-adjust: none;
                                                  -ms-text-size-adjust: none;
                                                  mso-line-height-rule: exactly;
                                                  font-family: Open Sans,
                                                    sans-serif;
                                                  line-height: 16px;
                                                  color: #828282;
                                                  font-size: 12px;
                                                  font-weight: normal;
                                                "
                                              >
                                                2022 © All Rights Reserved
                                              </p>
                                            </td>
                                          </tr>
                                          <tr
                                            id="izkon"
                                            style="
                                              box-sizing: border-box;
                                              border-collapse: collapse;
                                            "
                                          >
                                            <td
                                              align="center"
                                              id="ipfmx"
                                              class="gr-element"
                                              style="
                                                box-sizing: border-box;
                                                padding: 0;
                                                margin: 0;
                                                padding-top: 10px;
                                                border: 0;
                                              "
                                            >
                                              <p
                                                id="i21x4"
                                                style="
                                                  box-sizing: border-box;
                                                  margin: 0;
                                                  padding: 0;
                                                  -webkit-text-size-adjust: none;
                                                  -ms-text-size-adjust: none;
                                                  mso-line-height-rule: exactly;
                                                  font-family: Open Sans,
                                                    sans-serif;
                                                  line-height: 16px;
                                                  color: #828282;
                                                  font-size: 12px;
                                                  font-weight: 400;
                                                "
                                              >
                                                Saheeh Ilm
                                              </p>
                                            </td>
                                          </tr>
                                          <tr
                                            id="i6q1z"
                                            style="
                                              box-sizing: border-box;
                                              border-collapse: collapse;
                                            "
                                          >
                                            <td
                                              align="center"
                                              id="imazx"
                                              class="gr-element"
                                              style="
                                                box-sizing: border-box;
                                                padding: 0;
                                                margin: 0;
                                                border: 0;
                                                padding-top: 30px;
                                              "
                                            >
                                              <p
                                                id="iqczl1"
                                                style="
                                                  box-sizing: border-box;
                                                  margin: 0;
                                                  -webkit-text-size-adjust: none;
                                                  -ms-text-size-adjust: none;
                                                  mso-line-height-rule: exactly;
                                                  font-family: Open Sans,
                                                    sans-serif;
                                                  line-height: 18px;
                                                  color: #1DB954;
                                                  font-size: 12px;
                                                "
                                              >
                                                <!-- <a
                                                  href="*|unsubscribelink|*"
                                                  target="_blank"
                                                  id="inkehl"
                                                  class="view"
                                                  style="
                                                    box-sizing: border-box;
                                                    -webkit-text-size-adjust: none;
                                                    -ms-text-size-adjust: none;
                                                    mso-line-height-rule: exactly;
                                                    text-decoration: underline;
                                                    color: #1DB954;
                                                    font-size: 12px;
                                                    line-height: 18px;
                                                    font-family: Open Sans,
                                                      sans-serif;
                                                    font-weight: 600;
                                                  "
                                                  >Unsubscribe</a
                                                > -->
                                              </p>
                                              <p
                                                id="ijkjpo"
                                                style="
                                                  box-sizing: border-box;
                                                  line-height: 2px;
                                                  font-size: 2px;
                                                  margin: 0;
                                                "
                                              >
                                                 
                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
      </body>
    </html>
    <center>
      <div
        class="outlook-group-fix"
        style="text-align;center;font-size:13px;background-color:#ffffff;Margin:0px auto;max-width:600px;"
      >
        <!--[if mso | IE]>
            <table role="presentation" border="0" cellpadding="0" cellspacing="0" align="center">
            <tr><td style="vertical-align:bottom;width:600px;"><![endif]-->
        <table
          align="center"
          style="
            background-color: #ffffff;
            border-collapse: collapse;
            color: #545454;
            font-family: 'Helvetica Neue', Arial, sans-serif;
            font-size: 13px;
            letter-spacing: 0.02em;
            line-height: 20px;
            margin: 0 auto;
            max-width: 100%;
            width: 100%;
          "
          bgcolor="#ffffff"
        >
          <tbody>
            <tr>
              <!-- <td
                align="center"
                class="m_5460308902562696986powered-by-text"
                style="
                  color: #969696;
                  font-size: 11px;
                  padding: 8px 0;
                  text-align: center;
                  width: 100%;
                "
                align="center"
              >
                Powered by
                <a
                  href="https://www.grorapid.com?source=cemail"
                  style="
                    color: #6b6b6b;
                    font-weight: bold;
                    text-decoration: none;
                  "
                  target="_blank"
                  ><span class="il"><u>Grorapid</u></span></a
                ><br />
              </td> -->
            </tr>
          </tbody>
          <!--[if mso | IE]></td></tr></table><![endif]-->
        </table>
      </div>
    </center>
  </body>
</html>
`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  const mails = new Emails({
    name: req.body.name,
    email: req.body.email,
  });
  mails.save();
  res.send("done");
});

app.get("/getemails", async (req, res) => {
  let emails = await Emails.find({}).exec();
  console.log(emails);
  res.send(emails);
});

app.listen(port);

const smtpTransport = require("../utils/mailer");


const a=`<!DOCTYPE html
PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
xmlns:o="urn:schemas-microsoft-com:office:office" lang="ru">

<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<!-- <meta name="color-scheme" content="light dark" />
<meta name="supported-color-schemes" content="light dark" /> -->
<title>Signature</title>
<style type="text/css">
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

  table {
    border-spacing: 0;
    mso-cellspacing: 0;
    mso-padding-alt: 0;
  }

  td {
    padding: 0;
  }

  #outlook a {
    padding: 0;
  }

  a {
    text-decoration: none;
    color: #e8fbfa;
    font-size: 16px;
  }

  @media screen and (max-width: 599.98px) {}

  @media screen and (max-width: 399.98px) {
    .mobile-padding {
      padding-right: 10px !important;
      padding-left: 10px !important;
    }

    .mobile-col-padding {
      padding-right: 0 !important;
      padding-left: 0 !important;
    }

    .two-columns .column {
      width: 100% !important;
      max-width: 100% !important;
    }

    .two-columns .column img {
      width: 100% !important;
      max-width: 100% !important;
    }

    .three-columns .column {
      width: 100% !important;
      max-width: 100% !important;
    }

    .three-columns .column img {
      width: 100% !important;
      max-width: 100% !important;
    }
  }

  /* Custom Dark Mode Colors */
  /* :root {
    color-scheme: light dark;
    supported-color-schemes: light dark;
  }

  @media (prefers-color-scheme: dark) {

    table,
    td {
      background-color: #06080B !important;
    }

    h1,
    h2,
    h3,
    p {
      color: #ffffff !important;
    }
  } */
</style>

<!--[if (gte mso 9)|(IE)]>
  <style type="text/css">
    table {border-collapse: collapse !important;}
  </style>
<![endif]-->

<!--[if (gte mso 9)|(IE)]>
<xml>
  <o:OfficeDocumentSettings>
    <o:AllowPNG/>
    <o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]-->
</head>

<body style="Margin:0;padding:0;min-width:100%;background-color:#dde0e1;">

<!--[if (gte mso 9)|(IE)]>
    <style type="text/css">
       body {background-color: #dde0e1!important;}
       body, table, td, p, a {font-family: sans-serif, Arial, Helvetica!important;}
    </style>
 <![endif]-->



    <!-- Preheader (remove comment) -->
  
    <!-- End Preheader (remove comment) -->

    <!--[if (gte mso 9)|(IE)]>
      <table width="600" align="center" border="0" cellspacing="0" cellpadding="0" role="presentation"
        style="color:#1C1E23;">
      <tr>
      <td>
    <![endif]-->

    <table align="center" border="0" cellspacing="0" cellpadding="0" role="presentation"
      style="color:#1C1E23;font-family: 'Poppins',sans-serif, Arial, Helvetica;background-color: #ffffff;Margin:0;padding:0;width: 100%;max-width: 600px;"
      >
      <tr>
        <td style="width: 100%;">
          <table align="center" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin: 0; width: 100%;">
            <tr>
              <td width="170" height="190" style="margin: 0;padding: 0;"><p style="margin: 0; padding: 0; font-size: 0; line-height: 0; width: 170px; height: 100%;"><img width="170" height="100%" src="https://thumbsnap.com/i/jmxE42dT.png" style="width: 170px; height: 100%; display: block;"></p></td>
              <td>
              <table align="center" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin: 0; width: 100%;">
                <tr>
                  <td style="height: 10px;"></td>
                </tr>
                <tr>
                  <td>
                    <table align="center" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin: 0; width: 100%;">
                      <tr>
                        <td style="width: 4px; background-color: #c23e38; color: #c23e38;">1</td>
                        <td style="width: 10px;"></td>
                        <td>
                          <table align="center" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin: 0; width: 100%;">
                            <tr>
                              <td><p style="margin: 0;font-size: 18px; font-weight: 600; color: #c23e38;">Mercy</p></td>
                            </tr>
                            <tr>
                              <td><p style="margin: 0;font-size: 18px; font-weight: 600; color: #c23e38;">Taylor</p></td>
                            </tr>
                            <tr>
                              <td><p style="margin: 0;font-size: 9px; font-weight: 500; color: #570e0e; white-space: nowrap;">Customer Success Specialist</p></td>
                            </tr>
                            <tr>
                              <td style="height: 25px;font-size: 12px; font-weight: 400;"></td>
                            </tr>
                            <tr>
                              <td><p style="margin: 0;font-size: 12px; font-weight: 400;"><a href="tel:4554646" style="color: #000000;font-size: 12px; font-weight: 400;">tel: 230 XXX 452</a></p></td>
                            </tr>
                            <tr>
                              <td><p style="margin: 0;font-size: 12px; font-weight: 400;"><a href="mailto:sksk@ds.ss" style="color: #000000;font-size: 12px; font-weight: 400;">e-mail: mercytailor@mail&#173;.xxx</a></p></td>
                            </tr>
                            <tr>
                              <td><p style="margin: 0;font-size: 12px; font-weight: 400;">ul.Warszawska 6c, 02-953 Warszawa</p></td>
                            </tr>
                          </table>
                        </td>
                        <td style="width: 10px;"></td>
                        <td>
                          <table align="center" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin: 0; width: 100%;">
                            <tr>
                              <td align="center" style=" width: 100%;"><p style="margin: 0; font-size: 16px; font-weight: 400; color: #000000;">Company</p></td>
                            </tr>
                            <tr>
                              <td align="center" style="height: 100px; text-align: center;"></td>
                            </tr>
                            <tr>
                              <td>
                                <table width="100%" align="center" style="text-align: center ;width: 100%;" align="center" border="0" cellspacing="0" cellpadding="0" role="presentation" >
                                  <tr>
                                    <td style="width: 35px;" ><a href="#"><img width="20" height="20" src="https://thumbsnap.com/i/zRnpJQGX.png" style="width: 20px; height: 20px;"/></a></td>
                                    <td style="width: 35px;"><a href="#"><img width="20" height="20" src="https://thumbsnap.com/i/sF7eRmMf.png" style="width: 20px; height: 20px;"/></a></td>
                                    <td style="width: 35px;"><a href="#"><img width="20" height="20" src="https://thumbsnap.com/i/bwbNK28g.png" style="width: 20px; height: 20px;"/></a></td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="height: 10px;"></td>
                </tr>
              </table>
              </td>
              <td></td>
            </tr>
          </table>
        </td>
      </tr>
    </table>

    <!--[if (gte mso 9)|(IE)]>
      </td>
      </tr>
      </table>
    <![endif]-->
 

</body>

</html>`

const b =`<!DOCTYPE html
PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
xmlns:o="urn:schemas-microsoft-com:office:office" lang="ru">

<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<!-- <meta name="color-scheme" content="light dark" />
<meta name="supported-color-schemes" content="light dark" /> -->
<title>Signature</title>
<style type="text/css">
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

  table {
    border-spacing: 0;
    mso-cellspacing: 0;
    mso-padding-alt: 0;
  }

  td {
    padding: 0;
  }

  #outlook a {
    padding: 0;
  }

  a {
    text-decoration: none;
    color: #e8fbfa;
    font-size: 16px;
  }

  @media screen and (max-width: 599.98px) {}

  @media screen and (max-width: 399.98px) {
    .mobile-padding {
      padding-right: 10px !important;
      padding-left: 10px !important;
    }

    .mobile-col-padding {
      padding-right: 0 !important;
      padding-left: 0 !important;
    }

    .two-columns .column {
      width: 100% !important;
      max-width: 100% !important;
    }

    .two-columns .column img {
      width: 100% !important;
      max-width: 100% !important;
    }

    .three-columns .column {
      width: 100% !important;
      max-width: 100% !important;
    }

    .three-columns .column img {
      width: 100% !important;
      max-width: 100% !important;
    }
  }

  /* Custom Dark Mode Colors */
  /* :root {
    color-scheme: light dark;
    supported-color-schemes: light dark;
  }

  @media (prefers-color-scheme: dark) {

    table,
    td {
      background-color: #06080B !important;
    }

    h1,
    h2,
    h3,
    p {
      color: #ffffff !important;
    }
  } */
</style>

<!--[if (gte mso 9)|(IE)]>
  <style type="text/css">
    table {border-collapse: collapse !important;}
  </style>
<![endif]-->

<!--[if (gte mso 9)|(IE)]>
<xml>
  <o:OfficeDocumentSettings>
    <o:AllowPNG/>
    <o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]-->
</head>

<body style="Margin:0;padding:0;min-width:100%;background-color:#dde0e1;">

<!--[if (gte mso 9)|(IE)]>
    <style type="text/css">
       body {background-color: #dde0e1!important;}
       body, table, td, p, a {font-family: sans-serif, Arial, Helvetica!important;}
    </style>
 <![endif]-->

    <!-- Preheader (remove comment) -->
    
    <!-- End Preheader (remove comment) -->

    <!--[if (gte mso 9)|(IE)]>
      <table width="600" align="centre" border="0" cellspacing="0" cellpadding="0" role="presentation"
        style="color:#1C1E23;">
      <tr>
      <td>
    <![endif]-->

    <table align="center" border="0" cellspacing="0" cellpadding="0" role="presentation"
      style="color:#1C1E23;font-family: 'Poppins',sans-serif, Arial, Helvetica;background-color: #ffffff;Margin:0;padding:0;width: 100%;max-width: 600px;"
      >
      <tr>
        <td style="width: 100%;">
          <table align="center" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin: 0;">
            <tr>
              <td width="30" style=" width:30px ;background-color: #d9d9d9; color:#d9d9d9 ; height: 190px;">1</td>
              <td style="background-color: #d9d9d9; height: 190px;">
                <table align="center" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin: 0;">
                  <tr>
                    <td><p style="margin: 0;font-size: 18px; font-weight: 600; color: #000000;">Joanna Smit</p></td>
                  </tr>
                  <tr>
                    <td><p style="margin: 0;font-size: 10px; font-weight: 500; color: #000000; white-space: nowrap;">Customer Success Specialist</p></td>
                  </tr>
                  <tr>
                    <td style="height: 25px;font-size: 12px; font-weight: 400;"></td>
                  </tr>
                  <tr>
                    <td><p style="margin: 0;font-size: 12px; font-weight: 400;"><a href="tel:23054466" style="margin: 0;font-size: 12px; font-weight: 400; color: #000000;">tel: 230 XXX 452</a></p></td>
                  </tr>
                  <tr>
                    <td><p style="margin: 0;font-size: 12px; font-weight: 400;"><a href="mailto:ssk@gjk.nh"style="margin: 0;font-size: 12px; font-weight: 400; color: #000000;">e-mail: mercytailor@mail&#173;.xxx</a></p></td>
                  </tr>
                  <tr>
                    <td><p style="margin: 0;font-size: 12px; font-weight: 400;">ul.Warszawska 6c, 02-953 Warszawa</p></td>
                  </tr>
                </table>
              </td>
              <td style="margin: 0;padding: 0;"><p style="margin: 0; padding: 0; font-size: 0; line-height: 0; "><img width="200" height="190" src="https://thumbsnap.com/i/sy1gnpYL.png" style="width: 200px; height: 190px; display: block;"></p></td>
              <td style="width: 40px;"></td>
              <td style="vertical-align: middle;">
                <table align="center" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin: 0;">
                  <tr>
                    <td style="width: 40px;"><p style="margin: 0;"><a href="#"><img width="30" height="30" src="https://thumbsnap.com/i/qiLCdmTh.png" style="width: 30px; height: 30px;"/></a></p></td>
                    </tr>
                    <tr>
                      <td style="height: 20px;"></td>
                    </tr>
                    <tr>
                    <td style="width: 40px;"><p style="margin: 0;"><a href="#"><img width="30" height="30" src="https://thumbsnap.com/i/BnLTj4xt.png" style="width: 30px; height: 30px;"/></a></p></td>
                  </tr>
                  <tr>
                    <td style="height: 20px;"></td>
                  </tr>
                  <tr>
                    <td style="width: 40px;"><p style="margin: 0;"><a href="#"><img width="30" height="30" src="https://thumbsnap.com/i/2DXLjSuk.png" style="width: 30px; height: 30px;"/></a></p></td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>

    <!--[if (gte mso 9)|(IE)]>
      </td>
      </tr>
      </table>
    <![endif]-->

 

</body>

</html>`

const c =`<!DOCTYPE html
PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
xmlns:o="urn:schemas-microsoft-com:office:office" lang="ru">

<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<!-- <meta name="color-scheme" content="light dark" />
<meta name="supported-color-schemes" content="light dark" /> -->
<title>signature</title>
<style type="text/css">
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

  table {
    border-spacing: 0;
    mso-cellspacing: 0;
    mso-padding-alt: 0;
  }

  td {
    padding: 0;
  }

  #outlook a {
    padding: 0;
  }

  a {
    text-decoration: none;
    color: #e8fbfa;
    font-size: 16px;
  }

  @media screen and (max-width: 599.98px) {}

  @media screen and (max-width: 399.98px) {
    .mobile-padding {
      padding-right: 10px !important;
      padding-left: 10px !important;
    }

    .mobile-col-padding {
      padding-right: 0 !important;
      padding-left: 0 !important;
    }

    .two-columns .column {
      width: 100% !important;
      max-width: 100% !important;
    }

    .two-columns .column img {
      width: 100% !important;
      max-width: 100% !important;
    }

    .three-columns .column {
      width: 100% !important;
      max-width: 100% !important;
    }

    .three-columns .column img {
      width: 100% !important;
      max-width: 100% !important;
    }
  }

  /* Custom Dark Mode Colors */
  /* :root {
    color-scheme: light dark;
    supported-color-schemes: light dark;
  }

  @media (prefers-color-scheme: dark) {

    table,
    td {
      background-color: #06080B !important;
    }

    h1,
    h2,
    h3,
    p {
      color: #ffffff !important;
    }
  } */
</style>

<!--[if (gte mso 9)|(IE)]>
  <style type="text/css">
    table {border-collapse: collapse !important;}
  </style>
<![endif]-->

<!--[if (gte mso 9)|(IE)]>
<xml>
  <o:OfficeDocumentSettings>
    <o:AllowPNG/>
    <o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]-->
</head>

<body style="Margin:0;padding:0;min-width:100%;background-color:#dde0e1;">

<!--[if (gte mso 9)|(IE)]>
    <style type="text/css">
       body {background-color: #dde0e1!important;}
       body, table, td, p, a {font-family: sans-serif, Arial, Helvetica!important;}
    </style>
 <![endif]-->



    <!-- Preheader (remove comment) -->
    
    <!-- End Preheader (remove comment) -->

    <!--[if (gte mso 9)|(IE)]>
      <table width="600" align="center" border="0" cellspacing="0" cellpadding="0" role="presentation"
        style="color:#1C1E23;">
      <tr>
      <td>
    <![endif]-->

    <table align="center" border="0" cellspacing="0" cellpadding="0" role="presentation"
      style="color:#1C1E23;font-family: 'Poppins',sans-serif, Arial, Helvetica;background-color: #fafdfe;Margin:0;padding:0;width: 100%;max-width: 600px;"
      >
      <tr>
        <td style="width: 100%;">
          <table  align="center" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin: 0; padding: 0; text-align: center; ">
            <tr>
              <td><p style="margin: 0;"><img width="100%" style="max-width: 100%;" src="https://thumbsnap.com/i/UkHi5G3J.png"/></p></td>
            </tr>
            <tr>
              <td>

                <table  align="center" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin: 0; padding: 0; text-align: center; ">
                  <tr>
                    <td width="30"></td>
                    <td>
                    <table  align="center" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin: 0; padding: 0; text-align: center; ">
                      <tr>
                        <td><p style="margin: 0; color: #3bcadd; font-size: 25px;font-weight: 600; ">Your <span style="color: #000000; font-size: 25px; font-weight: 500;">Name</span></p></td>
                      </tr>
                      <tr>
                        <td><p style="margin: 0; font-size: 14px; font-weight: 500;">Graphic Designer</p></td>
                      </tr>
                      <tr>
                        <td align="center">
                          <table align="center" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin: 0; padding: 0; text-align: center; ">
                            <tr>
                              <td>-</td>
                              <td style="width: 25px;"><a href="#"><img width="15" height="15" src="https://thumbsnap.com/i/TgvfM6kX.png" style="width: 15px; height: 15px;"/></a></td>
                              <td style="width: 25px;"><a href="#"><img width="15" height="15" src="https://thumbsnap.com/i/LNsE7U4A.png" style="width: 15px; height: 15px;"/></a></td>
                              <td style="width: 25px;"><a href="#"><img width="15" height="15" src="https://thumbsnap.com/i/De551D7A.png" style="width: 15px; height: 15px;"/></a></td>
                              <td style="width: 25px;"><a href="#"><img width="15" height="15" src="https://thumbsnap.com/i/A9gGmxJ1.png" style="width: 15px; height: 15px;"/></a></td>
                              <td>-</td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                    </td>
                    <td width="20"></td>
                    <td>
                      <p style="margin: 0;"><img width="150" height="150" style="width: 150px; height: 150px;" src="https://thumbsnap.com/i/oD1mwnw5.png"/></p>
                    </td>
                    <td width="20"></td>
                    <td>
                      <table>
                        <tr>
                          <td>

                            <table align="center" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin: 0; padding: 0;">
                              <tr>
                                <td align="left" style="width: 45px;">
                                  <p style="margin: 0;">
                                  <img width="25" height="25" src="https://thumbsnap.com/i/UiUjJus8.png" style="width: 25px; height: 25px;"/>
                                </p>
                                </td>
                                <td >
                                 <table align="left" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin: 0; padding: 0;">
                                  <tr>
                                    <td><p  style="margin: 0;"><a href="tel:45646666" style="color: #000000;">+5802XX55966</a></p></td>
                                  </tr>
                                  <tr>
                                    <td><p  style="margin: 0;"><a href="tel:45646666" style="color: #000000;">+5802XX55966</a></p></td>
                                  </tr>
                                 </table>
                                </td>
                              </tr>
                              <tr>
                                <td align="left" style="width: 45px;">
                                  <p style="margin: 0;">
                                  <img width="25" height="25" src="https://thumbsnap.com/i/roVC62KK.png" style="width: 25px; height: 25px;"/>
                                </p>
                                </td>
                                <td>
                                 <table align="left" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin: 0; padding: 0;">
                                  <tr>
                                    <td align="left"><p  style="margin: 0;"><a href="mailto:sgd@gbk.kk" style="color: #000000;">name@your.xxx</a></p></td>
                                  </tr>
                                  <tr>
                                    <td align="left"><p  style="margin: 0;"><a href="#" style="color: #000000;">www.your.xxx</a></p></p></td>
                                  </tr>
                                 </table>
                                </td>
                              </tr>
                              <tr>
                                <td align="left" style="width: 45px;">
                                  <p style="margin: 0;">
                                  <img width="25" height="25" src="https://thumbsnap.com/i/9vk4ZjiL.png" style="width: 25px; height: 25px;"/>
                                </p>
                                </td>
                                <td>
                                 <table align="left" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin: 0; padding: 0;">
                                  <tr>
                                    <td align="left"><p  style="margin: 0;">ul.koperbika,55</p></td>
                                  </tr>
                                  <tr>
                                    <td align="left"><p  style="margin: 0;">Los Angeles</p></td>
                                  </tr>
                                 </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td><p style="margin: 0;"><img width="100%" style="max-width: 100%;" src="https://thumbsnap.com/i/nroa8kNj.png"/></p></td>
            </tr>
          </table>
        </td>
      </tr>

    </table>

    <!--[if (gte mso 9)|(IE)]>
      </td>
      </tr>
      </table>
    <![endif]-->
 

</body>

</html>`

const d =`<!DOCTYPE html
PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
xmlns:o="urn:schemas-microsoft-com:office:office" lang="ru">

<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<!-- <meta name="color-scheme" content="light dark" />
<meta name="supported-color-schemes" content="light dark" /> -->
<title>Signature</title>
<style type="text/css">
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

  table {
    border-spacing: 0;
    mso-cellspacing: 0;
    mso-padding-alt: 0;
  }

  td {
    padding: 0;
  }

  #outlook a {
    padding: 0;
  }

  a {
    text-decoration: none;
    color: #e8fbfa;
    font-size: 16px;
  }

  @media screen and (max-width: 599.98px) {}

  @media screen and (max-width: 399.98px) {
    .mobile-padding {
      padding-right: 10px !important;
      padding-left: 10px !important;
    }

    .mobile-col-padding {
      padding-right: 0 !important;
      padding-left: 0 !important;
    }

    .two-columns .column {
      width: 100% !important;
      max-width: 100% !important;
    }

    .two-columns .column img {
      width: 100% !important;
      max-width: 100% !important;
    }

    .three-columns .column {
      width: 100% !important;
      max-width: 100% !important;
    }

    .three-columns .column img {
      width: 100% !important;
      max-width: 100% !important;
    }
  }

  /* Custom Dark Mode Colors */
  /* :root {
    color-scheme: light dark;
    supported-color-schemes: light dark;
  }

  @media (prefers-color-scheme: dark) {

    table,
    td {
      background-color: #06080B !important;
    }

    h1,
    h2,
    h3,
    p {
      color: #ffffff !important;
    }
  } */
</style>

<!--[if (gte mso 9)|(IE)]>
  <style type="text/css">
    table {border-collapse: collapse !important;}
  </style>
<![endif]-->

<!--[if (gte mso 9)|(IE)]>
<xml>
  <o:OfficeDocumentSettings>
    <o:AllowPNG/>
    <o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]-->
</head>

<body style="Margin:0;padding:0;min-width:100%;background-color:#dde0e1;">

<!--[if (gte mso 9)|(IE)]>
    <style type="text/css">
       body {background-color: #dde0e1!important;}
       body, table, td, p, a {font-family: sans-serif, Arial, Helvetica!important;}
    </style>
 <![endif]-->


    <!-- Preheader (remove comment) -->
    <div
      style="font-size: 0px;color: #fafdfe;line-height: 1px;mso-line-height-rule:exactly;display: none;max-width: 0px;max-height: 0px;opacity: 0;overflow: hidden;mso-hide:all;">
      Стартовое описание
    </div>
    <!-- End Preheader (remove comment) -->

    <!--[if (gte mso 9)|(IE)]>
      <table width="600" align="center" border="0" cellspacing="0" cellpadding="0" role="presentation"
        style="color:#1C1E23;">
      <tr>
      <td>
    <![endif]-->

    <table align="center" border="0" cellspacing="0" cellpadding="0" role="presentation"
      style="color:#1C1E23;font-family: 'Poppins',sans-serif, Arial, Helvetica;background-color: #fafdfe;Margin:0;padding:0;width: 100%;max-width: 600px;"
      >
      <tr>
        <td style="width: 100%; padding-bottom: 20px;">
          <table align="center" border="0" cellspacing="0" cellpadding="0" role="presentation">
            <tr>
              <td style="padding-right: 10px;"><p style="margin: 0;"><img width="180"  style="width: 180px; height: 250px;" src="https://thumbsnap.com/i/UQtkbBnw.jpg" /></p></td>
              <td style="vertical-align: top;" >
                <table align="center" border="0" cellspacing="0" cellpadding="0" role="presentation">
                  <tr>
                    <td style="height: 30px;"></td>
                  </tr>
                  <tr>
                    <td><p style="margin: 0; color: #097409; font-size: 16px; font-weight: 600;" >Amy Blare - <span style="color: #48a348; font-weight: 400;">Nutritionist at HealthyLife</span></p></td>
                  </tr>
                  <tr>
                    <td style="height: 30px;"></td>
                  </tr>
                  <tr>
                    <td><p style="margin: 0; color: #097409; font-size: 14px; font-weight: 600; line-height: 30px;" >Website: <span style="color: #000000; font-weight: 400; text-decoration: none;"><a href="#" style="color: #000000;">www.amyblare.healthylife­&#173;.xxx</a></span></p></td>
                  </tr>
                  <tr>
                    <td><p style="margin: 0; color: #097409; font-size: 14px; font-weight: 600; line-height: 30px;" >Email: <span style="color: #000000; font-weight: 400; text-decoration: none;"><a href="mailto:gjygj@vhj.jjj" style="color: #000000;">info@healthylife­&#173;.xxx</a></span></p></td>
                  </tr>
                  <tr>
                    <td><p style="margin: 0; color: #097409; font-size: 14px; font-weight: 600; line-height: 30px;" >Phone: <span style="color: #000000; font-weight: 400;"><a href="tel:45465" style="color: #000000;">46545XXX65</a></span></p></td>
                  </tr>
                  <tr>
                    <td><p style="margin: 0; color: #097409; font-size: 14px; font-weight: 600; line-height: 30px;" >Adress: <span style="color: #000000; font-weight: 400;">1448, Theodore Dr., Los Angeles., CA</span></p></td>
                  </tr>
                  <tr>
                    <td style="height: 30px;"></td>
                  </tr>
                  <tr>
                    <td><p style="margin: 0; color: #000000; font-size: 12px; font-weight: 500; line-height: 30px;" >Have any questions - call me at any time !</p></td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td></td>
              <td align="center" style="padding-top: 10px;" >
                <table align="center" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin: 0; padding: 0; ">
                  <tr>
                    <td style="width: 40px;"><a href="#"><img width="25" height="25" src="https://thumbsnap.com/i/wVh6fbzg.png" style="width: 25px; height: 25px;"/></a></td>
                    <td style="width: 40px;"><a href="#"><img width="25" height="25" src="https://thumbsnap.com/i/XLkp9gwc.png" style="width: 25px; height: 25px;"/></a></td>
                    <td style="width: 40px;"><a href="#"><img width="25" height="25" src="https://thumbsnap.com/i/WPKFAYcn.png" style="width: 25px; height: 25px;"/></a></td>
                    <td style="width: 40px;"><a href="#"><img width="25" height="25" src="https://thumbsnap.com/i/DLMJuHpQ.png" style="width: 25px; height: 25px;"/></a></td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>

    <!--[if (gte mso 9)|(IE)]>
      </td>
      </tr>
      </table>
    <![endif]-->
 

</body>

</html>`

const e =`<!DOCTYPE html
PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
xmlns:o="urn:schemas-microsoft-com:office:office" lang="ru">

<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<!-- <meta name="color-scheme" content="light dark" />
<meta name="supported-color-schemes" content="light dark" /> -->
<title>Signature</title>
<style type="text/css">
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

  table {
    border-spacing: 0;
    mso-cellspacing: 0;
    mso-padding-alt: 0;
  }

  td {
    padding: 0;
  }

  #outlook a {
    padding: 0;
  }

  a {
    text-decoration: none;
    color: #e8fbfa;
    font-size: 16px;
  }

  @media screen and (max-width: 599.98px) {}

  @media screen and (max-width: 399.98px) {
    .mobile-padding {
      padding-right: 10px !important;
      padding-left: 10px !important;
    }

    .mobile-col-padding {
      padding-right: 0 !important;
      padding-left: 0 !important;
    }

    .two-columns .column {
      width: 100% !important;
      max-width: 100% !important;
    }

    .two-columns .column img {
      width: 100% !important;
      max-width: 100% !important;
    }

    .three-columns .column {
      width: 100% !important;
      max-width: 100% !important;
    }

    .three-columns .column img {
      width: 100% !important;
      max-width: 100% !important;
    }
  }

  /* Custom Dark Mode Colors */
  /* :root {
    color-scheme: light dark;
    supported-color-schemes: light dark;
  }

  @media (prefers-color-scheme: dark) {

    table,
    td {
      background-color: #06080B !important;
    }

    h1,
    h2,
    h3,
    p {
      color: #ffffff !important;
    }
  } */
</style>

<!--[if (gte mso 9)|(IE)]>
  <style type="text/css">
    table {border-collapse: collapse !important;}
  </style>
<![endif]-->

<!--[if (gte mso 9)|(IE)]>
<xml>
  <o:OfficeDocumentSettings>
    <o:AllowPNG/>
    <o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]-->
</head>

<body style="Margin:0;padding:0;min-width:100%;background-color:#dde0e1;">

<!--[if (gte mso 9)|(IE)]>
    <style type="text/css">
       body {background-color: #dde0e1!important;}
       body, table, td, p, a {font-family: sans-serif, Arial, Helvetica!important;}
    </style>
 <![endif]-->


    <!-- Preheader (remove comment) -->
   
    <!-- End Preheader (remove comment) -->

    <!--[if (gte mso 9)|(IE)]>
      <table width="600" align="center" border="0" cellspacing="0" cellpadding="0" role="presentation"
        style="color:#1C1E23;">
      <tr>
      <td>
    <![endif]-->

    <table align="center" border="0" cellspacing="0" cellpadding="0" role="presentation"
      style="color:#1C1E23;font-family: 'Poppins',sans-serif, Arial, Helvetica;background-color: #ffffff;Margin:0;padding:0;width: 100%;max-width: 600px;"
      >
      <tr>
        <td style="width: 100%;">
          <table align="center" border="0" cellspacing="0" cellpadding="0" role="presentation" style="width: 100%;">
            <tr>
              <td align="center" style=" width:170px; height: 170px; text-align: center;">
                <img width="150" height="150" src="https://thumbsnap.com/i/dZfXcSss.png" style="width: 150px; height: 150px;"/>
              </td>
              <td align="left" style=" padding-right: 20px;">
                <table align="center" border="0" cellspacing="0" cellpadding="0" role="presentation" style="Margin: 0; padding: 0;">
                  <tr>
                    <td align="left">
                      <p style="margin: 0; font-size: 16px; font-weight: 600;">Johan<span style="font-size: 16px; font-weight: 400;">Smith</span></p>
                    </td>
                  </tr>
                  <tr>
                     <td align="left"><p  style="font-size: 14px; font-weight: 400; margin: 0;">Ceo & Founder</p></td>
                  </tr>
                </table>
              </td>
              <td style="width: 1px; background-color: #969393 ;"></td>
              <td style="width: 50px; "></td>
              <td >

                <table align="center" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin: 0; padding: 0;">
                              <tr>
                                <td align="left" style="width: 45px;">
                                  <p style="margin: 0;">
                                  <img width="25" height="25" src="https://thumbsnap.com/i/UiUjJus8.png" style="width: 25px; height: 25px;"/>
                                </p>
                                </td>
                                <td >
                                 <table align="left" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin: 0; padding: 0;">
                                  <tr>
                                    <td><p  style="margin: 0;"><a href="tel:45646666" style="color: #000000;">+5802XX55966</a></p></td>
                                  </tr>
                                  <tr>
                                    <td><p  style="margin: 0;"><a href="tel:45646666" style="color: #000000;">+5802XX55966</a></p></td>
                                  </tr>
                                 </table>
                                </td>
                              </tr>
                              <tr>
                                <td align="left" style="width: 45px;">
                                  <p style="margin: 0;">
                                  <img width="25" height="25" src="https://thumbsnap.com/i/roVC62KK.png" style="width: 25px; height: 25px;"/>
                                </p>
                                </td>
                                <td>
                                 <table align="left" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin: 0; padding: 0;">
                                  <tr>
                                    <td align="left"><p  style="margin: 0;"><a href="mailto:sgd@gbk.kk" style="color: #000000;">name@your.xxx</a></p></td>
                                  </tr>
                                  <tr>
                                    <td align="left"><p  style="margin: 0;"><a href="#" style="color: #000000;">www.your.xxx</a></p></p></td>
                                  </tr>
                                 </table>
                                </td>
                              </tr>
                              <tr>
                                <td align="left" style="width: 45px;">
                                  <p style="margin: 0;">
                                  <img width="25" height="25" src="https://thumbsnap.com/i/9vk4ZjiL.png" style="width: 25px; height: 25px;"/>
                                </p>
                                </td>
                                <td>
                                 <table align="left" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin: 0; padding: 0;">
                                  <tr>
                                    <td align="left"><p  style="margin: 0;">ul.koperbika,55</p></td>
                                  </tr>
                                  <tr>
                                    <td align="left"><p  style="margin: 0;">Los Angeles</p></td>
                                  </tr>
                                 </table>
                                </td>
                              </tr>
                            </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td style="height: 1px; background-color: #969393;"></td>
      </tr>
      <tr>
        <td style="width: 100%; ">
          <table border="0" cellspacing="0" cellpadding="0" role="presentation" style="width: 100%;">
            <tr>
              <td width="300" style="width: 300px; padding-left: 40px;padding-top: 10px; padding-bottom: 10px;" >
                <p style="margin: 0 ; color: #0571D3;">Logo Here</p>
              </td>
              <td align="center" width="300" style="width: 300px; padding-left: 30px; padding-top: 10px; padding-bottom: 10px;" >
                <table align="center" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin: 0; padding: 0; text-align: center; ">
                  <tr>
                    <td style="width: 30px;"><a href="#"><img width="25" height="25" src="https://thumbsnap.com/i/TgvfM6kX.png" style="width: 25px; height: 25px;"/></a></td>
                    <td style="width: 30px;"><a href="#"><img width="25" height="25" src="https://thumbsnap.com/i/LNsE7U4A.png" style="width: 25px; height: 25px;"/></a></td>
                    <td style="width: 30px;"><a href="#"><img width="25" height="25" src="https://thumbsnap.com/i/De551D7A.png" style="width: 25px; height: 25px;"/></a></td>
                    <td style="width: 30px;"><a href="#"><img width="25" height="25" src="https://thumbsnap.com/i/A9gGmxJ1.png" style="width: 25px; height: 25px;"/></a></td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
          <!-- <table align="center" border="0" cellspacing="0" cellpadding="0" role="presentation" style="width: 100%; margin: 0; padding: 0;  background-color: #00ffff;">
            <tr>
              <td  style=" width: 100%;padding-left: 40px; padding-top: 10px; padding-bottom: 10px;"><p style="margin: 0;  color: #0571D3;">Logo Here</p></td>
              <td  align="center" style="width: 100%;">
                <table align="center" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin: 0; padding: 0; ">
                  <tr>
                    <td style="width: 30px;"><img width="25" height="25" src="https://thumbsnap.com/i/TgvfM6kX.png" style="width: 25px; height: 25px;"/></td>
                    <td style="width: 30px;"><img width="25" height="25" src="https://thumbsnap.com/i/swYCY8W8.png" style="width: 25px; height: 25px;"/></td>
                    <td style="width: 30px;"><img width="25" height="25" src="https://thumbsnap.com/i/RKJkAhLs.png" style="width: 25px; height: 25px;"/></td>
                    <td style="width: 30px;"><img width="25" height="25" src="https://thumbsnap.com/i/A9gGmxJ1.png" style="width: 25px; height: 25px;"/></td>
                  </tr>
                </table>
              </td>
            </tr>
          </table> -->
        </td>
      </tr>
      <!-- <tr>
        <td style=" width: 100%;">ddddddddddd</td>
      </tr> -->

    </table>

    <!--[if (gte mso 9)|(IE)]>
      </td>
      </tr>
      </table>
    <![endif]-->
 

</body>

</html>`

const f =`<!DOCTYPE html
PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
xmlns:o="urn:schemas-microsoft-com:office:office" lang="ru">

<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<!-- <meta name="color-scheme" content="light dark" />
<meta name="supported-color-schemes" content="light dark" /> -->
<title>Signature</title>
<style type="text/css">
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

  table {
    border-spacing: 0;
    mso-cellspacing: 0;
    mso-padding-alt: 0;
  }

  td {
    padding: 0;
  }

  #outlook a {
    padding: 0;
  }

  a {
    text-decoration: none;
    color: #e8fbfa;
    font-size: 16px;
  }

  @media screen and (max-width: 599.98px) {}

  @media screen and (max-width: 399.98px) {
    .mobile-padding {
      padding-right: 10px !important;
      padding-left: 10px !important;
    }

    .mobile-col-padding {
      padding-right: 0 !important;
      padding-left: 0 !important;
    }

    .two-columns .column {
      width: 100% !important;
      max-width: 100% !important;
    }

    .two-columns .column img {
      width: 100% !important;
      max-width: 100% !important;
    }

    .three-columns .column {
      width: 100% !important;
      max-width: 100% !important;
    }

    .three-columns .column img {
      width: 100% !important;
      max-width: 100% !important;
    }
  }

  /* Custom Dark Mode Colors */
  /* :root {
    color-scheme: light dark;
    supported-color-schemes: light dark;
  }

  @media (prefers-color-scheme: dark) {

    table,
    td {
      background-color: #06080B !important;
    }

    h1,
    h2,
    h3,
    p {
      color: #ffffff !important;
    }
  } */
</style>

<!--[if (gte mso 9)|(IE)]>
  <style type="text/css">
    table {border-collapse: collapse !important;}
  </style>
<![endif]-->

<!--[if (gte mso 9)|(IE)]>
<xml>
  <o:OfficeDocumentSettings>
    <o:AllowPNG/>
    <o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]-->
</head>

<body style="Margin:0;padding:0;min-width:100%;background-color:#dde0e1;">

<!--[if (gte mso 9)|(IE)]>
    <style type="text/css">
       body {background-color: #dde0e1!important;}
       body, table, td, p, a {font-family: sans-serif, Arial, Helvetica!important;}
    </style>
 <![endif]-->


    <!-- Preheader (remove comment) -->
   
    <!-- End Preheader (remove comment) -->

    <!--[if (gte mso 9)|(IE)]>
      <table width="600" align="center" border="0" cellspacing="0" cellpadding="0" role="presentation"
        style="color:#1C1E23;">
      <tr>
      <td>
    <![endif]-->

    <table align="center" border="0" cellspacing="0" cellpadding="0" role="presentation"
      style="color:#1C1E23;font-family: 'Poppins',sans-serif, Arial, Helvetica;background-color: #fafdfe;Margin:0;padding:0;width: 100%;max-width: 600px;"
      >
      <tr>
        <td style="width: 100%;">
        <table align="center" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin: 0;">
          <tr>
            <td width="30" style="width: 10px; background-color: #f5f0ea;">
            </td>
            <td style="background-color: #f5f0ea;">
              <table align="center" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin: 0;">
                <tr>
                  <td align="center" style="width: 100%;"><p style="margin: 0; font-size: 20px; font-weight: 400; color: #850606;">Company</p></td>
                </tr>
                <tr>
                  <td style="height: 20px;"></td>
                </tr>
                <tr>
                  <td align="center" style="width: 100%;">
                    <table align="center" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin: 0; text-align: center;">
                      <tr>
                        <td style="width: 40px;"><a href="#"><img width="20" height="20" src="https://thumbsnap.com/i/45tvdNeW.png" style="width: 20px; height: 20px;"/></a></td>
                        <td style="width: 40px;"><a href="#"><img width="20" height="20" src="https://thumbsnap.com/i/2R72Tb2y.png" style="width: 20px; height: 20px;"/></a></td>
                        <td style="width: 40px;"><a href="#"><img width="20" height="20" src="https://thumbsnap.com/i/s3iHGegR.png" style="width: 20px; height: 20px;"/></a></td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
            <td style="margin: 0;padding: 0;"><p style="margin: 0; padding: 0; font-size: 0; line-height: 0;"><img width="170" height="190" src="https://thumbsnap.com/i/vJRr11yc.png" style="width: 170px; height: 190px; display: block;"></p></td>
            <td style="width: 10px;"></td>
            <td>
              <table>
                <tr>
                  <td>
                    <p style="margin: 0; font-size: 20px; font-weight: 600; color: #000000;">Mercy Taylor</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p style="margin: 0; font-size: 10px; font-weight: 400; color: #850606;">Customer Success Specialist</p>
                  </td>
                </tr>
                <tr>
                  <td style="height: 20px;"></td>
                </tr>
                <tr>
                  <td><p style="margin: 0;font-size: 12px; font-weight: 400;"><a href="tel:4554646" style="color: #000000;font-size: 12px; font-weight: 400;">tel: 230 XXX 452</a></p></td>
                </tr>
                <tr>
                  <td><p style="margin: 0;font-size: 12px; font-weight: 400;"><a href="mailto:sksk@ds.ss" style="color: #000000;font-size: 12px; font-weight: 400;">e-mail: mercytailor@mail&#173;.xxx</a></p></td>
                </tr>
                <tr>
                  <td><p style="margin: 0;font-size: 12px; font-weight: 400;">ul.Warszawska 6c, 02-953 Warszawa</p></td>
                </tr>
              </table>
            </td>
            <td width="10" style="width: 10px;">
            </td>
          </tr>
        </table>
        </td>
      </tr>
    </table>

    <!--[if (gte mso 9)|(IE)]>
      </td>
      </tr>
      </table>
    <![endif]-->
  

</body>

</html>`

const g =`<!DOCTYPE html
PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
xmlns:o="urn:schemas-microsoft-com:office:office" lang="ru">

<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<!-- <meta name="color-scheme" content="light dark" />
<meta name="supported-color-schemes" content="light dark" /> -->
<title>Signature</title>
<style type="text/css">
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

  table {
    border-spacing: 0;
    mso-cellspacing: 0;
    mso-padding-alt: 0;
  }

  td {
    padding: 0;
  }

  #outlook a {
    padding: 0;
  }

  a {
    text-decoration: none;
    color: #e8fbfa;
    font-size: 16px;
  }

  @media screen and (max-width: 599.98px) {}

  @media screen and (max-width: 599.98px) {
    .mobile-padding {
      padding-right: 10px !important;
      padding-left: 10px !important;
    }

    .mobile-col-padding {
      padding-right: 0 !important;
      padding-left: 0 !important;
    }

    .two-columns .column {
      width: 100% !important;
      max-width: 100% !important;
    }

    .two-columns .column img {
      width: 100% !important;
      max-width: 100% !important;
    }

    .three-columns .column {
      width: 100% !important;
      max-width: 100% !important;
    }

    .three-columns .column img {
      width: 100% !important;
      max-width: 100% !important;
    }

    /* * [lang=x-outer]{
      width: 100% !important;
      max-width: 100% !important;
  }
  .outer.outer{
    width: 100% !important;
    max-width: 100% !important;
  }    */
  }

  /* Custom Dark Mode Colors */
  /* :root {
    color-scheme: light dark;
    supported-color-schemes: light dark;
  }

  @media (prefers-color-scheme: dark) {

    table,
    td {
      background-color: #06080B !important;
    }

    h1,
    h2,
    h3,
    p {
      color: #ffffff !important;
    }
  } */
</style>

<!--[if (gte mso 9)|(IE)]>
  <style type="text/css">
    table {border-collapse: collapse !important;}
  </style>
<![endif]-->

<!--[if (gte mso 9)|(IE)]>
<xml>
  <o:OfficeDocumentSettings>
    <o:AllowPNG/>
    <o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]-->
</head>

<body style="Margin:0;padding:0;min-width:100%;background-color:#dde0e1;">

<!--[if (gte mso 9)|(IE)]>
    <style type="text/css">
       body {background-color: #dde0e1!important;}
       body, table, td, p, a {font-family: sans-serif, Arial, Helvetica!important;}
    </style>
 <![endif]-->



    <!-- Preheader (remove comment) -->
    <div
      style="font-size: 0px;color: #fafdfe;line-height: 1px ; mso-line-height-rule:exactly;display: none;max-width: 0px;max-height: 0px;opacity: 0;overflow: hidden;mso-hide:all;">
    </div>
    <!-- End Preheader (remove comment) -->

    <!--[if (gte mso 9)|(IE)]>
      <table width="600" align="center" border="0" cellspacing="0" cellpadding="0" role="presentation"
        style="color:#1C1E23;">
      <tr>
      <td>
    <![endif]-->

    <table align="center" border="0" cellspacing="0" cellpadding="0" role="presentation"
      style="margin: 0; color:#1C1E23;font-family: 'Poppins',sans-serif, Arial, Helvetica;background-color: #fafdfe;Margin:0;padding:0;width: 100%;max-width: 600px;"
      >
      <tr>
        <td style="width: 100%;">
          <table align="center" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin: 0; width: 100%;">
            <tr>
              <td align="left" width="200">
              <p style="margin: 0;"><img width="200" height="230" src="https://thumbsnap.com/i/pNCwcXwZ.png"/></p>
              </td>
              <td style="width: 30px;"></td>
              <td>
                <table  align="left" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin: 0; width: 100%;">
                  <tr>
                    <td  align="right" style="width: 100%;">
                      <table align="right" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin: 0; width: 100%;">
                        <tr>
                          <td style="width: 100%;" >
                            <!-- ///////////////////////////////icons//////////////////// -->
                            <table  align="right" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin: 0;">
                            <tr>
                              <td style="width: 25px;"><a href="#"><img width="20" height="15" src="https://thumbsnap.com/i/UhXZXa6i.png" style="width: 20px; height: 15px;"/></a></td>
                              <td style="width: 25px;"><a href="#"><img width="20" height="15" src="https://thumbsnap.com/i/tMQTkiPg.png" style="width: 20px; height: 15px;"/></a></td>
                              <td style="width: 25px;"><a href="#"><img width="20" height="15" src="https://thumbsnap.com/i/aa2c8yer.png" style="width: 20px; height: 15px;"/></a></td>
                              <td style="width: 25px;"><a href="#"><img width="20" height="15" src="https://thumbsnap.com/i/mp3oCU6E.png" style="width: 20px; height: 15px;"/></a></td>
                            </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-top: 40px; padding-bottom: 2px; width: 100%;"><p style="margin: 0; color:#838688 ;font-size: 18px;font-weight: 500; ">Mercy Taylor</p></td>
                  </tr>
                  <tr>
                    <td style="padding-bottom: 10px;"><p style="margin: 0;  width: 100%; color:#96999b; font-size: 16px;font-weight: 400;">Customer Success Specialist</p></td>
                  </tr>
                  <tr>
                    <td style="width: 100%; height: 2px; background-color: #dfebf0;"></td>
                  </tr>
                  <tr>
                    <td style="margin: 0; width: 100%;" >
                      <table style="margin: 0; width: 100%;" align="left" border="0" cellspacing="0" cellpadding="0" role="presentation" class="two-columns"  >
                        <tr>
                          <td style="width: 100%;">
                          <!-- <td style=" padding-top: 10px; padding-right: 15px;  width: 150px;    display: inline-block; " class="column "> -->
                            <table style="  padding-top: 10px; padding-right: 15px;  width: 140px;    display: inline-block; margin: 0; " align="left" border="0" cellspacing="0" cellpadding="0" role="presentation" >
                              <tr>
                                <td  style="padding-right: 5px; vertical-align: middle;"><p style="margin: 0;  line-height: 10px;  vertical-align: middle;"><img width="15" height="20" src="https://thumbsnap.com/i/ZRYKXSQr.png" style="width: 15px; height: 20px; display: block;"/></p></td>
                                <td align="left" style="vertical-align: middle;"><p style="display: inline-block; margin: 0; vertical-align: middle; font-size: 12px;font-weight: 400; line-height: 12px;"><a href="tel:54641" style="color: #000000;font-size: 12px;font-weight: 400; line-height: 12px;">+58 XXX 580 465</a></p></td>
                              </tr>
                            </table>
                          <!-- </td> -->
                          <!-- <td   style="padding-top: 10px; width: 150px;  display: inline-block;" class="column" > -->
                            <table style="padding-top: 10px; width: 50%;  display: inline-block; margin: 0; " align="left" border="0" cellspacing="0" cellpadding="0" role="presentation">
                              <tr>
                                <td  style="padding-right: 5px; vertical-align: middle;"><p style="margin: 0;  line-height: 12px;  vertical-align: middle; "><img width="20" height="15" src="https://thumbsnap.com/i/hjw1mb3M.png" style="width: 20px; height: 15px; display: block;"/></p></td>
                                <td align="left" style="vertical-align: middle; "><p style="margin: 0; vertical-align: middle; font-size: 12px;font-weight: 400; line-height: 12px;"><a href="mailto:cdd@jgj.bb" style="color: #000000;font-size: 12px;font-weight: 400; line-height: 12px;">mercytailor@gmail&#173;.xxx</a></p></td>
                              </tr>
                            </table>
                          <!-- </td> -->
                        </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-top: 10px;">
                      <table align="left" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin: 0;">
                        <tr>
                          <td style="padding-right: 5px; vertical-align: middle;"><p style="margin: 0;  line-height: 10px; vertical-align: middle;"><img width="15" height="20" src="https://thumbsnap.com/i/gFG5JmEW.png" style="width: 15px; height: 20px; display: block;"/></p></td>
                          <td style="vertical-align: middle;"><p style="margin: 0; vertical-align: middle; font-size: 12px;font-weight: 400; line-height: 12px;">ul.Warszawska 6c, 02-953 Warszawa</p></td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
              <td>
              </td>
              <td style="width: 30px;"></td>
            </tr>
          </table>
        </td>
      </tr>

    </table>

    <!--[if (gte mso 9)|(IE)]>
      </td>
      </tr>
      </table>
    <![endif]-->


</body>

</html>`

const k =`<!DOCTYPE html
PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
xmlns:o="urn:schemas-microsoft-com:office:office" lang="ru">

<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<!-- <meta name="color-scheme" content="light dark" />
<meta name="supported-color-schemes" content="light dark" /> -->
<title>Signature</title>
<style type="text/css">
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

  table {
    border-spacing: 0;
    mso-cellspacing: 0;
    mso-padding-alt: 0;
  }

  td {
    padding: 0;
  }

  #outlook a {
    padding: 0;
  }

  a {
    text-decoration: none;
    color: #e8fbfa;
    font-size: 16px;
  }

  @media screen and (max-width: 599.98px) {}

  @media screen and (max-width: 399.98px) {
    .mobile-padding {
      padding-right: 10px !important;
      padding-left: 10px !important;
    }

    .mobile-col-padding {
      padding-right: 0 !important;
      padding-left: 0 !important;
    }

    .two-columns .column {
      width: 100% !important;
      max-width: 100% !important;
    }

    .two-columns .column img {
      width: 100% !important;
      max-width: 100% !important;
    }

    .three-columns .column {
      width: 100% !important;
      max-width: 100% !important;
    }

    .three-columns .column img {
      width: 100% !important;
      max-width: 100% !important;
    }
  }

  /* Custom Dark Mode Colors */
  /* :root {
    color-scheme: light dark;
    supported-color-schemes: light dark;
  }

  @media (prefers-color-scheme: dark) {

    table,
    td {
      background-color: #06080B !important;
    }

    h1,
    h2,
    h3,
    p {
      color: #ffffff !important;
    }
  } */
</style>

<!--[if (gte mso 9)|(IE)]>
  <style type="text/css">
    table {border-collapse: collapse !important;}
  </style>
<![endif]-->

<!--[if (gte mso 9)|(IE)]>
<xml>
  <o:OfficeDocumentSettings>
    <o:AllowPNG/>
    <o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]-->
</head>

<body style="Margin:0;padding:0;min-width:100%;background-color:#dde0e1;">

<!--[if (gte mso 9)|(IE)]>
    <style type="text/css">
       body {background-color: #dde0e1!important;}
       body, table, td, p, a {font-family: sans-serif, Arial, Helvetica!important;}
    </style>
 <![endif]-->



    <!-- Preheader (remove comment) -->
    <div
      style="font-size: 0px;color: #fafdfe;line-height: 1px;mso-line-height-rule:exactly;display: none;max-width: 0px;max-height: 0px;opacity: 0;overflow: hidden;mso-hide:all;">
      Стартовое описание
    </div>
    <!-- End Preheader (remove comment) -->

    <!--[if (gte mso 9)|(IE)]>
      <table width="600" align="center" border="0" cellspacing="0" cellpadding="0" role="presentation"
        style="color:#1C1E23;">
      <tr>
      <td>
    <![endif]-->

    <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0" role="presentation" 
      style="color:#1C1E23;font-family: 'Poppins',sans-serif, Arial, Helvetica;background-color: #ffffff;Margin:0;padding:0;width: 100%;max-width: 600px;"
      >
        <tr>
          <td width="100%" style="width: 100%;">
            <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin: 0; width: 100%;">
             <tr>
              <td>
                  <p style="margin: 0;"><img width="100" height="100" style="width: 100px; height: 100px; display: block;" src="https://thumbsnap.com/i/A4NgRRun.png"></p>
              </td>
              <td width="15" style="width: 15px;"><p style="width: 15px; margin: 0; color: #ffffff;">1</p></td>
              <td style="width: 100%;">
                <table align="center" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin: 0; width: 100%;">
                  <tr>
                    <td><p style="margin: 0; color: #cb9600; font-size: 16px; font-weight: 600; line-height: 22px;">Joe Richardson</p></td>
                  </tr>
                  <tr>
                    <td><p style="margin: 0; color: #000000; font-size: 14px; font-weight: 400; line-height: 22px;">Broker Associate | RREG, LLC</p></td>
                  </tr>
                  <tr>
                    <td style="width: 100%; height: 1px; background-color:#333238 ;"></td>
                  </tr>
                  <tr>
                    <td >
                      <table  align="left" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin: 0;">
                        <tr>
                          <td style="padding-right: 7px;"><p style="margin: 0;"><img width="15" height="15" style="width: 15px; height: 15px;display: block;" src="https://thumbsnap.com/i/CWdCgatd.png"></p></td>
                          <td><p style="margin: 0; font-size: 14px; font-weight: 400; line-height: 22px;"><a href="#" style="margin: 0; font-size: 14px; font-weight: 400; line-height: 22px; color: #000000;">262.470.3515</a></p></td>
                        </tr>
                        <tr>
                          <td style="padding-right: 7px;"><p style="margin: 0;"><img width="15" height="15" style="width: 15px; height: 15px;display: block;" src="https://thumbsnap.com/i/wZdZG8AG.png"></p></td>
                          <td style="padding-right: 7px;"><p style="margin: 0; font-size: 14px; font-weight: 400; line-height: 22px;"><a href="#" style="margin: 0; font-size: 14px; font-weight: 400; line-height: 22px; color: #000000;">joerichardsonre@gmail&#173;.com</a></p></td>
                        </tr>
                        <tr>
                          <td style="padding-right: 7px;"><p style="margin: 0;"><img width="15" height="15" style="width: 15px; height: 15px;display: block;" src="https://thumbsnap.com/i/1r3ujm2X.png"></p></td>
                          <td><p style="margin: 0; font-size: 14px; font-weight: 400; line-height: 22px;"><a href="#" style="margin: 0; font-size: 14px; font-weight: 400; line-height: 22px; color: #000000;">www.SearchWIHomes&#173;.xxx</a></p></td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
             </tr> 
            </table>
          </td>
        </tr>  
        <tr>
          <td style="background-color: #000000;" >
            <table   align="center" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin: 0; width: 100%;  border-spacing: 0px; border-collapse: collapse; ">
              <tr>
                <td width="120" height="75"  style=" height: 75px; width: 120px;  margin: 0; border: 0;"><p width="120" height="75" style="margin: 0; border: 0;padding: 0;height: 75px; width: 120px; font-size: 0; line-height: 0; " ><img width="120" height="75" display="block"  src="https://thumbsnap.com/i/pb4XBVBi.png" style="width: 120px; height: 75px; display: block; "/></p></td>
                <td valign="top"   style="width: 100%; background-color: #000000; vertical-align: top; ">
                  <table align="right"   border="0" cellspacing="0" cellpadding="0" role="presentation" style="text-align:center; margin: 0; border: 0; height: 100%; ">
                    <tr>
                      <td height="25" style="height: 30px;"></td>
                    </tr>
                    <tr>
                      <td style="width: 40px; "><p style="margin: 0; "><a href="#"><img display="block" width="20" height="20" src="https://thumbsnap.com/i/XaZDKNzQ.png" style="width: 20px; height: 20px;display: block;"/></a></p></td>
                      <td style="width: 40px;"><p style="margin: 0;"><a href="#"><img display="block" width="20" height="20" src="https://thumbsnap.com/i/mB7AVNHK.png" style="width: 20px; height: 20px;display: block;"/></a></p></td>
                      <td style="width: 40px;"><p style="margin: 0;"><a href="#"><img display="block" width="20" height="20" src="https://thumbsnap.com/i/gkGoHasG.png" style="width: 20px; height: 20px;display: block;"/></a></p></td>
                      <td style="width: 40px;"><p style="margin: 0;"><a href="#"><img display="block" width="20" height="20" src="https://thumbsnap.com/i/9yqu9e1g.png" style="width: 20px; height: 20px;display: block;"/></a></p></td>
                    </tr>
                    <tr>
                      <td height="25" style="height: 30px;"></td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="width: 100%; background-color: #cb9600; height: 3px;"></td>
        </tr>            
    </table>

    <!--[if (gte mso 9)|(IE)]>
      </td>
      </tr>
      </table>
    <![endif]-->
  

</body>

</html>`

const l =`<!DOCTYPE html
PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
xmlns:o="urn:schemas-microsoft-com:office:office" lang="ru">

<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<!-- <meta name="color-scheme" content="light dark" />
<meta name="supported-color-schemes" content="light dark" /> -->
<title>Signature</title>
<style type="text/css">
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

  table {
    border-spacing: 0;
    mso-cellspacing: 0;
    mso-padding-alt: 0;
  }

  td {
    padding: 0;
  }

  #outlook a {
    padding: 0;
  }

  a {
    text-decoration: none;
    color: #e8fbfa;
    font-size: 16px;
  }

  @media screen and (max-width: 599.98px) {}

  @media screen and (max-width: 399.98px) {
    .mobile-padding {
      padding-right: 10px !important;
      padding-left: 10px !important;
    }

    .mobile-col-padding {
      padding-right: 0 !important;
      padding-left: 0 !important;
    }

    .two-columns .column {
      width: 100% !important;
      max-width: 100% !important;
    }

    .two-columns .column img {
      width: 100% !important;
      max-width: 100% !important;
    }

    .three-columns .column {
      width: 100% !important;
      max-width: 100% !important;
    }

    .three-columns .column img {
      width: 100% !important;
      max-width: 100% !important;
    }
  }

  /* Custom Dark Mode Colors */
  /* :root {
    color-scheme: light dark;
    supported-color-schemes: light dark;
  }

  @media (prefers-color-scheme: dark) {

    table,
    td {
      background-color: #06080B !important;
    }

    h1,
    h2,
    h3,
    p {
      color: #ffffff !important;
    }
  } */
</style>

<!--[if (gte mso 9)|(IE)]>
  <style type="text/css">
    table {border-collapse: collapse !important;}
  </style>
<![endif]-->

<!--[if (gte mso 9)|(IE)]>
<xml>
  <o:OfficeDocumentSettings>
    <o:AllowPNG/>
    <o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]-->
</head>

<body style="Margin:0;padding:0;min-width:100%;background-color:#dde0e1;">

<!--[if (gte mso 9)|(IE)]>
    <style type="text/css">
       body {background-color: #dde0e1!important;}
       body, table, td, p, a {font-family: sans-serif, Arial, Helvetica!important;}
    </style>
 <![endif]-->


    <!-- Preheader (remove comment) -->
    
    <!-- End Preheader (remove comment) -->

    <!--[if (gte mso 9)|(IE)]>
      <table width="600" align="center" border="0" cellspacing="0" cellpadding="0" role="presentation"
        style="color:#1C1E23;">
      <tr>
      <td>
    <![endif]-->

    <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0" role="presentation" 
      style="color:#1C1E23;font-family: 'Poppins',sans-serif, Arial, Helvetica;background-color: #ffffff;Margin:0;padding:0;width: 100%;max-width: 600px;"
      >
        <tr>
          <td width="100%" style="width: 100%;">
            <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin: 0; width: 100%;">
             <tr>
              <td>
                  <p style="margin: 0;"><img width="100" height="100" style="width: 100px; height: 100px; display: block;" src="https://thumbsnap.com/i/VbgLLX6F.png"></p>
              </td>
              <td width="15" style="width: 15px;"><p style="width: 15px; margin: 0; color: #ffffff;">1</p></td>
              <td style="width: 100%;">
                <table align="center" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin: 0; width: 100%;">
                  <tr>
                    <td><p style="margin: 0; color: #0dad0d; font-size: 16px; font-weight: 600; line-height: 22px;">Joe Richardson</p></td>
                  </tr>
                  <tr>
                    <td><p style="margin: 0; color: #000000; font-size: 14px; font-weight: 400; line-height: 22px;">Broker Associate | RREG, LLC</p></td>
                  </tr>
                  <tr>
                    <td style="width: 100%; height: 1px; background-color:#333238 ;"></td>
                  </tr>
                  <tr>
                    <td >
                      <table  align="left" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin: 0;">
                        <tr>
                          <td style="padding-right: 7px;"><p style="margin: 0;"><img width="15" height="15" style="width: 15px; height: 15px;display: block;" src="https://thumbsnap.com/i/CWdCgatd.png"></p></td>
                          <td><p style="margin: 0; font-size: 14px; font-weight: 400; line-height: 22px;"><a href="#" style="margin: 0; font-size: 14px; font-weight: 400; line-height: 22px; color: #000000;">262.470.3515</a></p></td>
                        </tr>
                        <tr>
                          <td style="padding-right: 7px;"><p style="margin: 0;"><img width="15" height="15" style="width: 15px; height: 15px;display: block;" src="https://thumbsnap.com/i/wZdZG8AG.png"></p></td>
                          <td style="padding-right: 7px;"><p style="margin: 0; font-size: 14px; font-weight: 400; line-height: 22px;"><a href="#" style="margin: 0; font-size: 14px; font-weight: 400; line-height: 22px; color: #000000;">joerichardsonre@gmail&#173;.com</a></p></td>
                        </tr>
                        <tr>
                          <td style="padding-right: 7px;"><p style="margin: 0;"><img width="15" height="15" style="width: 15px; height: 15px;display: block;" src="https://thumbsnap.com/i/1r3ujm2X.png"></p></td>
                          <td><p style="margin: 0; font-size: 14px; font-weight: 400; line-height: 22px;"><a href="#" style="margin: 0; font-size: 14px; font-weight: 400; line-height: 22px; color: #000000;">www.SearchWIHomes&#173;.xxx</a></p></td>
                        </tr>
                        <tr>
                          <td style="padding-right: 7px;"><p style="margin: 0;"><img width="15" height="15" style="width: 30px; height: 20px;display: block;" src="https://thumbsnap.com/i/84rNHK48.jpg"></p></td>
                          <td><p style="margin: 0; font-size: 16px; font-weight: 600; line-height: 24px; color: #0b3a0b;">Green <span style="color:#0dad0d">life</span></p></td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
             </tr> 
            </table>
          </td>
        </tr>  
        <tr>
          <td width="100%" style="background-color: #0b3a0b ; width: 100%;" >
            <table   align="center" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin: 0; width: 100%;  border-spacing: 0px; border-collapse: collapse; ">
              <tr>
                <td style="height: 20px; width: 100%;">
                  <p style="margin: 0;"></p>
                </td>
              </tr>
              <tr>
                <td style="width: 100%;">
                  <table align="left"   border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin: 0; width: 100%;  border-spacing: 0px; border-collapse: collapse; width: 100%; ">
                    <tr>
                      <td  align="left" style="width: 50%; text-align: left; padding-left: 10px; padding-right: 10px; vertical-align: middle;" ><p style=" margin: 0; padding: 0; color:#ffffff ; font-size: 6px; font-weight: 400; line-height: 10px;"><a style="text-decoration:underline #ffffff; margin: 0; padding: 0; color: #ffffff;" href="https://vladimirmartinenko.github.io/portfolio-email/"><img display="block" width="100" height="20" src="https://thumbsnap.com/i/3eFT9DHv.png" style="width: 190px; height: 20px;display: block; font-size: 6px; line-height: 10px;  margin: 0; padding: 0;"/></a></p></td>
                      <td valign="top" align="right"   style="width: 50%; padding-right: 10px; vertical-align: top; margin: 0;   text-align: right; ">
                        <table align="right"   border="0" cellspacing="0" cellpadding="0" role="presentation" style="text-align:center; margin: 0; border: 0; padding: 0;  text-align: right; ">
                          <tr>
                            <td style="width: 35px;  margin: 0; padding: 0; "><p style="margin: 0; font-size: 6px; line-height: 10px; padding: 0; "><a href="#"><img display="block" width="20" height="20" src="https://thumbsnap.com/i/w1s4CQHb.png" style="width: 20px; height: 20px;display: block; font-size: 6px; line-height: 10px;  margin: 0; padding: 0;"/></a></p></td>
                            <td style="width: 35px;  margin: 0; padding: 0;"><p style="margin: 0; font-size: 6px; line-height: 10px;  padding: 0;"><a href="#"><img display="block" width="20" height="20" src="https://thumbsnap.com/i/mibdFj3f.png" style="width: 20px; height: 20px;display: block; font-size: 6px; line-height: 10px;  margin: 0; padding: 0;"/></a></p></td>
                            <td style="width: 35px;  margin: 0; padding: 0;"><p style="margin: 0; font-size: 6px; line-height: 10px;  padding: 0;"><a href="#"><img display="block" width="20" height="20" src="https://thumbsnap.com/i/MqvAsWeM.png" style="width: 20px; height: 20px;display: block; font-size: 6px; line-height: 10px;  margin: 0; padding: 0;"/></a></p></td>
                            <td style="width: 35px;  margin: 0; padding: 0;"><p style="margin: 0; font-size: 6px; line-height: 10px;  padding: 0;"><a href="#"><img display="block" width="20" height="20" src="https://thumbsnap.com/i/Hkjb6YCP.png" style="width: 20px; height: 20px;display: block; font-size: 6px; line-height: 10px;  margin: 0; padding: 0;"/></a></p></td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="height: 20px; width: 100%;">
                  <p style="margin: 0;"></p>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="width: 100%; background-color: #0dad0d; height: 3px;"></td>
        </tr>            
    </table>

    <!--[if (gte mso 9)|(IE)]>
      </td>
      </tr>
      </table>
    <![endif]-->
 

</body>

</html>`

const m = `<!DOCTYPE html
PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
xmlns:o="urn:schemas-microsoft-com:office:office" lang="ru">

<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<!-- <meta name="color-scheme" content="light dark" />
<meta name="supported-color-schemes" content="light dark" /> -->
<title>Signature</title>
<style type="text/css">
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

  table {
    border-spacing: 0;
    mso-cellspacing: 0;
    mso-padding-alt: 0;
  }

  td {
    padding: 0;
  }

  #outlook a {
    padding: 0;
  }

  a {
    text-decoration: none;
    color: #e8fbfa;
    font-size: 16px;
  }

  @media screen and (max-width: 599.98px) {}

  @media screen and (max-width: 399.98px) {
    .mobile-padding {
      padding-right: 10px !important;
      padding-left: 10px !important;
    }

    .mobile-col-padding {
      padding-right: 0 !important;
      padding-left: 0 !important;
    }

    .two-columns .column {
      width: 100% !important;
      max-width: 100% !important;
    }

    .two-columns .column img {
      width: 100% !important;
      max-width: 100% !important;
    }

    .three-columns .column {
      width: 100% !important;
      max-width: 100% !important;
    }

    .three-columns .column img {
      width: 100% !important;
      max-width: 100% !important;
    }
  }

  /* Custom Dark Mode Colors */
  /* :root {
    color-scheme: light dark;
    supported-color-schemes: light dark;
  }

  @media (prefers-color-scheme: dark) {

    table,
    td {
      background-color: #06080B !important;
    }

    h1,
    h2,
    h3,
    p {
      color: #ffffff !important;
    }
  } */
</style>

<!--[if (gte mso 9)|(IE)]>
  <style type="text/css">
    table {border-collapse: collapse !important;}
  </style>
<![endif]-->

<!--[if (gte mso 9)|(IE)]>
<xml>
  <o:OfficeDocumentSettings>
    <o:AllowPNG/>
    <o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]-->
</head>

<body style="Margin:0;padding:0;min-width:100%;background-color:#dde0e1;">

<!--[if (gte mso 9)|(IE)]>
    <style type="text/css">
       body {background-color: #dde0e1!important;}
       body, table, td, p, a {font-family: sans-serif, Arial, Helvetica!important;}
    </style>
 <![endif]-->



    <!-- Preheader (remove comment) -->
    
    <!-- End Preheader (remove comment) -->

    <!--[if (gte mso 9)|(IE)]>
      <table width="600" align="center" border="0" cellspacing="0" cellpadding="0" role="presentation"
        style="color:#1C1E23;">
      <tr>
      <td>
    <![endif]-->

    <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0" role="presentation" 
      style="color:#1C1E23;font-family: 'Poppins',sans-serif, Arial, Helvetica;background-color: #ffffff;Margin:0;padding:0;width: 100%;max-width: 600px;"
      >
        <tr>
          <td width="100%" style="width: 100%;">
            <table width="100%" align="left" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin: 0; width: 100%;">
             <tr>
              <!-- <td>
                  <p style="margin: 0;"><img width="100" height="100" style="width: 100px; height: 100px; display: block;" src="https://thumbsnap.com/i/VbgLLX6F.png"></p>
              </td> -->
              <td width="15" style="width: 15px;"><p style="width: 15px; margin: 0; color: #ffffff;">1</p></td>
              <td style="width: 100%;">
                <table align="center" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin: 0; width: 100%;">
                  <tr>
                    <td><p style="margin: 0; color: #dd9954; font-size: 16px; font-weight: 600; line-height: 22px;">Kieran Thompson</p></td>
                  </tr>
                  <tr>
                    <td><p style="margin: 0; color: #000000; font-size: 14px; font-weight: 400; line-height: 22px;">Managing Director</p></td>
                  </tr>
                  <tr>
                    <td style="width: 100%; height: 1px; background-color:#ddc2a7 ;"></td>
                  </tr>
                  <tr>
                    <td >
                      <table  align="left" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin: 0;">
                        <tr>
                          <td style="padding-right: 7px;"><p style="margin: 0;"><img width="15" height="15" style="width: 15px; height: 15px;display: block;" src="https://thumbsnap.com/i/CWdCgatd.png"></p></td>
                          <td><p style="margin: 0; font-size: 14px; font-weight: 400; line-height: 22px;"><a href="tel:54564" style="color: #000000; font-size: 14px;">03-X37118</a></p></td>
                        </tr>
                        <tr>
                          <td style="padding-right: 7px;"><p style="margin: 0;"><img width="15" height="15" style="width: 15px; height: 15px;display: block;" src="https://thumbsnap.com/i/CWdCgatd.png"></p></td>
                          <td><p style="margin: 0; font-size: 14px; font-weight: 400; line-height: 22px;"><a href="tel:54564" style="color: #000000; font-size: 14px;">08XX637118</a></p></td>
                        </tr>
                        <tr>
                          <td style="padding-right: 7px;"><p style="margin: 0;"><img width="15" height="15" style="width: 15px; height: 15px;display: block;" src="https://thumbsnap.com/i/wZdZG8AG.png"></p></td>
                          <td style="padding-right: 7px;"><p style="margin: 0; font-size: 14px; font-weight: 400; line-height: 22px;"><a href="#" style="color: #000000; font-size: 14px;">info@&#173;alphafireprotection.xx</a></p></td>
                        </tr>
                        <tr>
                          <td style="padding-right: 7px;"><p style="margin: 0;"><img width="15" height="15" style="width: 15px; height: 15px;display: block;" src="https://thumbsnap.com/i/1r3ujm2X.png"></p></td>
                          <td><p style="margin: 0; font-size: 14px; font-weight: 400; line-height: 22px;"><a href="#" style="color: #000000; font-size: 14px;">www.alphafireprotection&#173;.xx</a></p></td>
                        </tr>
                        <!-- <tr>
                          <td style="padding-right: 7px;"><p style="margin: 0;"><img width="15" height="15" style="width: 30px; height: 20px;display: block;" src="https://thumbsnap.com/i/84rNHK48.jpg"></p></td>
                          <td><p style="margin: 0; font-size: 16px; font-weight: 600; line-height: 24px; color: #0b3a0b;">Green <span style="color:#0dad0d">life</span></p></td>
                        </tr> -->
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
             </tr> 
            </table>
          </td>
        </tr>  
        <tr>
          <td width="100%" style="background-color: #ddc2a7 ; width: 100%;" >
            <table   align="center" border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin: 0; width: 100%;  border-spacing: 0px; border-collapse: collapse; ">
              <tr>
                <td style="height: 20px; width: 100%;">
                  <p style="margin: 0;"></p>
                </td>
              </tr>
              <tr>
                <td style="width: 100%;">
                  <table align="left"   border="0" cellspacing="0" cellpadding="0" role="presentation" style="margin: 0; width: 100%;  border-spacing: 0px; border-collapse: collapse; width: 100%; ">
                    <tr>
                      <td>
                        <table>
                          <tr>
                            <td  align="left" style=" text-align: left; padding-left: 10px;  vertical-align: middle;" ><p style=" margin: 0; padding: 0; color:#ffffff ; font-size: 6px; font-weight: 400; line-height: 10px;"><a style="text-decoration:underline #ffffff; margin: 0; padding: 0; color: #ffffff;" href="https://vladimirmartinenko.github.io/portfolio-email/"><img display="block" width="25" height="40" src="https://thumbsnap.com/i/aqSLpSZx.jpg" style="width: 25px; height: 40px;display: block; font-size: 6px; line-height: 10px;  margin: 0; padding: 0;"/></a></p></td>
                            <td  align="left" style=" text-align: left; padding-left: 10px;  vertical-align: middle;" ><p style=" margin: 0; padding: 0; color:#ffffff ; font-size: 6px; font-weight: 400; line-height: 10px;"><a style="text-decoration:underline #ffffff; margin: 0; padding: 0; color: #ffffff;" href="https://vladimirmartinenko.github.io/portfolio-email/"><img display="block" width="25" height="40" src="https://thumbsnap.com/i/AUUoyGvD.png" style="width: 25px; height: 40px;display: block; font-size: 6px; line-height: 10px;  margin: 0; padding: 0;"/></a></p></td>
                            <td  align="left" style=" text-align: left; padding-left: 10px;  vertical-align: middle;" ><p style=" margin: 0; padding: 0; color:#ffffff ; font-size: 6px; font-weight: 400; line-height: 10px;"><a style="text-decoration:underline #ffffff; margin: 0; padding: 0; color: #ffffff;" href="https://vladimirmartinenko.github.io/portfolio-email/"><img display="block" width="50" height="30" src="https://thumbsnap.com/i/Rhw294eV.jpg" style="width: 50px; height: 30px;display: block; font-size: 6px; line-height: 10px;  margin: 0; padding: 0;"/></a></p></td>
                            <td  align="left" style=" text-align: left; padding-left: 10px;  vertical-align: middle;" ><p style=" margin: 0; padding: 0; color:#ffffff ; font-size: 6px; font-weight: 400; line-height: 10px;"><a style="text-decoration:underline #ffffff; margin: 0; padding: 0; color: #ffffff;" href="https://vladimirmartinenko.github.io/portfolio-email/"><img display="block" width="50" height="30" src="https://thumbsnap.com/i/G9UkSUBu.jpg" style="width: 50px; height: 30px;display: block; font-size: 6px; line-height: 10px;  margin: 0; padding: 0;"/></a></p></td>
                            <td  align="left" style=" text-align: left; padding-left: 10px;  vertical-align: middle;" ><p style=" margin: 0; padding: 0; color:#ffffff ; font-size: 6px; font-weight: 400; line-height: 10px;"><a style="text-decoration:underline #ffffff; margin: 0; padding: 0; color: #ffffff;" href="https://vladimirmartinenko.github.io/portfolio-email/"><img display="block" width="50" height="30" src="https://thumbsnap.com/i/VKHGnodz.png" style="width: 50px; height: 30px;display: block; font-size: 6px; line-height: 10px;  margin: 0; padding: 0;"/></a></p></td>
                          </tr>
                        </table>
                      </td>
                      <td valign="middle" align="right"   style="width: 50%; padding-right: 10px; vertical-align: middle; margin: 0;   text-align: right; ">
                        <table align="right"   border="0" cellspacing="0" cellpadding="0" role="presentation" style="text-align:center; margin: 0; border: 0; padding: 0;  text-align: right; ">
                          <tr>
                            <td style="width: 35px;  margin: 0; padding: 0; "><p style="margin: 0; font-size: 6px; line-height: 10px; padding: 0; "><a href="#"><img display="block" width="20" height="20" src="https://thumbsnap.com/i/GuXXafwa.png" style="width: 20px; height: 20px;display: block; font-size: 6px; line-height: 10px;  margin: 0; padding: 0;"/></a></p></td>
                            <td style="width: 35px;  margin: 0; padding: 0;"><p style="margin: 0; font-size: 6px; line-height: 10px;  padding: 0;"><a href="#"><img display="block" width="20" height="20" src="https://thumbsnap.com/i/vRytpJy6.png" style="width: 20px; height: 20px;display: block; font-size: 6px; line-height: 10px;  margin: 0; padding: 0;"/></a></p></td>
                            <td style="width: 35px;  margin: 0; padding: 0;"><p style="margin: 0; font-size: 6px; line-height: 10px;  padding: 0;"><a href="#"><img display="block" width="20" height="20" src="https://thumbsnap.com/i/GuXXafwa.png" style="width: 20px; height: 20px;display: block; font-size: 6px; line-height: 10px;  margin: 0; padding: 0;"/></a></p></td>
                            <td style="width: 35px;  margin: 0; padding: 0;"><p style="margin: 0; font-size: 6px; line-height: 10px;  padding: 0;"><a href="#"><img display="block" width="20" height="20" src="https://thumbsnap.com/i/vRytpJy6.png" style="width: 20px; height: 20px;display: block; font-size: 6px; line-height: 10px;  margin: 0; padding: 0;"/></a></p></td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="height: 20px; width: 100%;">
                  <p style="margin: 0;"></p>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="width: 100%; background-color: #dd9954; height: 3px;"></td>
        </tr>            
    </table>

    <!--[if (gte mso 9)|(IE)]>
      </td>
      </tr>
      </table>
    <![endif]-->
  

</body>

</html>`
const n =`
<!DOCTYPE html
  PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:o="urn:schemas-microsoft-com:office:office" lang="ru">

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <!-- <meta name="color-scheme" content="light dark" />
  <meta name="supported-color-schemes" content="light dark" /> -->
  <title>Signature</title>
  <style type="text/css">
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

    table {
      border-spacing: 0;
      mso-cellspacing: 0;
      mso-padding-alt: 0;
    }

    td {
      padding: 0;
    }

    #outlook a {
      padding: 0;
    }

    a {
      text-decoration: none;
      color: #e8fbfa;
      font-size: 16px;
    }

    @media screen and (max-width: 599.98px) {}

    @media screen and (max-width: 399.98px) {
      .mobile-padding {
        padding-right: 10px !important;
        padding-left: 10px !important;
      }

      .mobile-col-padding {
        padding-right: 0 !important;
        padding-left: 0 !important;
      }

      .two-columns .column {
        width: 100% !important;
        max-width: 100% !important;
      }

      .two-columns .column img {
        width: 100% !important;
        max-width: 100% !important;
      }

      .three-columns .column {
        width: 100% !important;
        max-width: 100% !important;
      }

      .three-columns .column img {
        width: 100% !important;
        max-width: 100% !important;
      }
    }

    /* Custom Dark Mode Colors */
    /* :root {
      color-scheme: light dark;
      supported-color-schemes: light dark;
    }

    @media (prefers-color-scheme: dark) {

      table,
      td {
        background-color: #06080B !important;
      }

      h1,
      h2,
      h3,
      p {
        color: #ffffff !important;
      }
    } */
  </style>

  <!--[if (gte mso 9)|(IE)]>
    <style type="text/css">
      table {border-collapse: collapse !important;}
    </style>
  <![endif]-->

  <!--[if (gte mso 9)|(IE)]>
  <xml>
    <o:OfficeDocumentSettings>
      <o:AllowPNG/>
      <o:PixelsPerInch>96</o:PixelsPerInch>
  </o:OfficeDocumentSettings>
  </xml>
  <![endif]-->
</head>

<body style="Margin:0;padding:0;min-width:100%;background-color:#dde0e1;">

  <!--[if (gte mso 9)|(IE)]>
      <style type="text/css">
         body {background-color: #dde0e1!important;}
         body, table, td, p, a {font-family: sans-serif, Arial, Helvetica!important;}
      </style>
   <![endif]-->
  

      <!-- Preheader (remove comment) -->
      <!-- End Preheader (remove comment) -->

      <!--[if (gte mso 9)|(IE)]>
        <table width="600" align="center" border="0" cellspacing="0" cellpadding="0" role="presentation"
          style="color:#1C1E23;">
        <tr>
        <td>
      <![endif]-->

      <table align="center" border="0" cellspacing="0" cellpadding="0" role="presentation"
        style="color:#1C1E23;font-family: 'Poppins',sans-serif, Arial, Helvetica;background-color: #ffffff;Margin:0;padding:0;width: 100%;max-width: 600px;"
        >
        <tr>
          <td style="width: 100%;">
            <table>
              <tr>
                <!-- <td width="200" height="190" style="margin: 0;padding: 0;"><p style="margin: 0; padding: 0; font-size: 0; line-height: 0; width: 200px; height: 100%;"><img width="200" height="100%" src="https://thumbsnap.com/i/jmxE42dT.png" style="width: 200px; height: 100%; display: block;"></p></td> -->
                <td>
                <table>
                  <tr>
                    <td style="height: 10px;"></td>
                  </tr>
                  <tr>
                    <td>
                      <table>
                        <tr>
                          <td style="width: 4px; background-color: #c23e38; color: #c23e38;">1</td>
                          <td style="width: 10px;"></td>
                          <td>
                            <table>
                              <tr>
                                <td><p style="margin: 0;font-size: 18px; font-weight: 600; color: #c23e38;">Kieran</p></td>
                              </tr>
                              <tr>
                                <td><p style="margin: 0;font-size: 18px; font-weight: 600; color: #c23e38;">Thompson</p></td>
                              </tr>
                              <tr>
                                <td><p style="margin: 0;font-size: 12px; font-weight: 500; color: #570e0e; white-space: nowrap;">Managing Director</p></td>
                              </tr>
                              <tr>
                                <td style="height: 25px;font-size: 12px; font-weight: 400;"></td>
                              </tr>
                              <tr>
                                <td><p style="margin: 0;font-size: 12px; font-weight: 400;"><a href="tel:" style="color: #000000; font-size: 12px;">tel: 01-9610087</a></p></td>
                              </tr>
                              <tr>
                                <td><p style="margin: 0;font-size: 12px; font-weight: 400;"><a href="tel:" style="color: #000000; font-size: 12px;">tel: 0851637118</a></p></td>
                              </tr>
                              <tr>
                                <td><p style="margin: 0;font-size: 12px; font-weight: 400;"><a href="mailto:" style="color: #000000; font-size: 12px;">e-mail: info@&#173;alphafireprotection.xx</a></p></td>
                              </tr>
                              <tr>
                                <td><p style="margin: 0;font-size: 12px; font-weight: 400;"><a href="#" style="color: #000000; font-size: 12px;">www.alphafireprotection&#173;.xx</a></p></td>
                              </tr>
                            </table>
                          </td>
                          <td style="width:5px;"></td>
                          <td style="width: 2px; background-color: #c23e38;"></td>
                          <td style="width:5px;"></td>
                          <td>
                            <table >
                              <tr>
                                <td align="center" style=" width: 100%;"><p style="margin: 0; font-size: 20px; font-weight: 400; color: #000000;"><img width="100" height="40" src="https://thumbsnap.com/i/qHBwmKxm.jpg" style="width: 100px; height: 40px;"/></p></td>
                              </tr>
                              <tr>
                                <td align="center" style=" width: 100%;"><p style="margin: 0; font-size: 20px; font-weight: 400; color: #000000;"><img  width="100" height="30" src="https://thumbsnap.com/i/gCk439pE.png" style="width: 100px; height: 30px;"/></p></td>
                              </tr>
                              <tr>
                                <td align="center" style=" width: 100%;"><p style="margin: 0; font-size: 20px; font-weight: 400; color: #000000;"><img  width="100" height="35" src="https://thumbsnap.com/i/rhVpALvB.png" style="width: 100px; height: 35px;"/></p></td>
                              </tr>
                              <tr>
                                <td align="center" style=" width: 100%;"><p style="margin: 0; font-size: 20px; font-weight: 400; color: #000000;"><img  width="100" height="35" src="https://thumbsnap.com/i/dY1LTyr7.png" style="width: 100px; height: 35px;"/></p></td>
                              </tr>
                              <tr>
                                <td align="center" style=" width: 100%;"><p style="margin: 0; font-size: 20px; font-weight: 400; color: #000000;"><img  width="100" height="35" src="https://thumbsnap.com/i/sRHNFhqb.png" style="width: 100px; height: 35px;"/></p></td>
                              </tr>
                              <tr>
                                <td align="center" style="height: 10px; text-align: center;"></td>
                              </tr>
                            </table>
                          </td>
                          <td style="width: 15px;"></td>
                          <td>
                            <table>
                              <tr>
                                <td style="width: 40px;"><a href="#"><img width="20" height="20" src="https://thumbsnap.com/i/zRnpJQGX.png" style="width: 20px; height: 20px;"/></a></td>
                              </tr>
                              <tr>
                                <td style="height: 15px;"></td>
                              </tr>
                              <tr>
                                <td style="width: 40px;"><a href="#"><img width="20" height="20" src="https://thumbsnap.com/i/sF7eRmMf.png" style="width: 20px; height: 20px;"/></a></td>
                              </tr>
                              <tr>
                                <td style="height: 15px;"></td>
                              </tr>
                              <tr>
                                <td style="width: 40px;"><a href="#"><img width="20" height="20" src="https://thumbsnap.com/i/bwbNK28g.png" style="width: 20px; height: 20px;"/></a></td>
                              </tr>
                              <!-- <tr>
                                <td>
                                  <table align="center" style="text-align: center ;">
                                    <tr>
                                      <td style="width: 40px;"><img width="20" height="20" src="https://thumbsnap.com/i/zRnpJQGX.png" style="width: 20px; height: 20px;"/></td>
                                      <td style="width: 40px;"><img width="20" height="20" src="https://thumbsnap.com/i/sF7eRmMf.png" style="width: 20px; height: 20px;"/></td>
                                      <td style="width: 40px;"><img width="20" height="20" src="https://thumbsnap.com/i/bwbNK28g.png" style="width: 20px; height: 20px;"/></td>
                                    </tr>
                                  </table>
                                </td>
                              </tr> -->
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style="height: 10px;"></td>
                  </tr>
                </table>
                </td>
                <td></td>
              </tr>
            </table>
          </td>
        </tr>
      </table>

      <!--[if (gte mso 9)|(IE)]>
        </td>
        </tr>
        </table>
      <![endif]-->
   

</body>

</html>`
const s= `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
  lang="en"
>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- <meta name="color-scheme" content="light dark" />
  <meta name="supported-color-schemes" content="light dark" /> -->
    <title>Signature</title>
    <style type="text/css">
      @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");

      table {
        border-spacing: 0;
        mso-cellspacing: 0;
        mso-padding-alt: 0;
      }

      td {
        padding: 0;
      }

      #outlook a {
        padding: 0;
      }

      a {
        text-decoration: none;
        color: #e8fbfa;
        font-size: 16px;
      }

      @media screen and (max-width: 599.98px) {
      }

      @media screen and (max-width: 399.98px) {
        .mobile-padding {
          padding-right: 10px !important;
          padding-left: 10px !important;
        }

        .mobile-col-padding {
          padding-right: 0 !important;
          padding-left: 0 !important;
        }

        .two-columns .column {
          width: 100% !important;
          max-width: 100% !important;
        }

        .two-columns .column img {
          width: 100% !important;
          max-width: 100% !important;
        }

        .three-columns .column {
          width: 100% !important;
          max-width: 100% !important;
        }

        .three-columns .column img {
          width: 100% !important;
          max-width: 100% !important;
        }
      }

      /* Custom Dark Mode Colors */
      /* :root {
      color-scheme: light dark;
      supported-color-schemes: light dark;
    }

    @media (prefers-color-scheme: dark) {

      table,
      td {
        background-color: #06080B !important;
      }

      h1,
      h2,
      h3,
      p {
        color: #ffffff !important;
      }
    } */
    </style>

    <!--[if (gte mso 9)|(IE)]>
      <style type="text/css">
        table {
          border-collapse: collapse !important;
        }
      </style>
    <![endif]-->

    <!--[if (gte mso 9)|(IE)]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG />
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    <![endif]-->
  </head>

  <body
    style="
      margin: 0;
      padding: 0;
      min-width: 100%;
      background-color: #dde0e1;
      width: 100%;
    "
  >
    <!--[if (gte mso 9)|(IE)]>
      <style type="text/css">
        body {
          background-color: #dde0e1 !important;
        }
        body,
        table,
        td,
        p,
        a {
          font-family: sans-serif, Arial, Helvetica !important;
        }
      </style>
    <![endif]-->

    <!--[if (gte mso 9)|(IE)]>
        <table width="100%" align="left" border="0" cellspacing="0" cellpadding="0" role="presentation"
          style="color:#1C1E23; width:100%">
        <tr>
        <td>
      <![endif]-->

    <table
      align="left"
      border="0"
      cellspacing="0"
      cellpadding="0"
      role="presentation"
      style="
        color: #1c1e23;
        font-family: 'Poppins', sans-serif, Arial, Helvetica;
        background-color: #2c3e50;
        margin: 0.1;
        padding: 0;
        width: 100%;
        max-width: 600px;
      "
    >
      <tr>
        <td>
          <table
            align="center"
            border="0"
            cellspacing="0"
            cellpadding="0"
            role="presentation"
            style="margin: 0.1; width: 100%"
          >
            <tr>
              <td style="font-size: 0; line-height: 0px; height: 170px">
                <p style="margin: 0.1px; text-align: center">
                  <img
                    width="170"
                    height="170"
                    src="https://thumbsnap.com/i/kuBsrye4.png"
                    alt="foto"
                    style="width: 170px; height: 170px; display: block"
                  />
                </p>
              </td>
              <td style="font-size: 0; line-height: 0px; height: 83px">
                <p style="margin: 0.1px; text-align: center">
                  <img
                    width="190"
                    height="83"
                    src="https://thumbsnap.com/i/hHWAEb3B.png"
                    alt="text"
                    style="width: 190px; height: 83px; display: block"
                  />
                </p>
              </td>
            </tr>
          </table>
        </td>
        <td width="4" height="230" style="width: 4px; height: 230px">
          <p style="margin: 0.1px">&nbsp;</p>
        </td>
        <td
          width="7"
          height="230"
          style="width: 7px; height: 230px; background-color: #fad960"
        >
          <p style="margin: 0.1px">&nbsp;</p>
        </td>
        <td width="4" height="230" style="width: 4px; height: 230px">
          <p style="margin: 0.1px">&nbsp;</p>
        </td>
        <td>
          <table
            align="center"
            border="0"
            cellspacing="0"
            cellpadding="0"
            role="presentation"
            style="margin: 0.1; width: 100%"
          >
            <tr>
              <td
                width="100%"
                height="10"
                style="height: 10px; width: 100%"
              ></td>
            </tr>
            <tr>
              <td>
                <table
                  align="center"
                  border="0"
                  cellspacing="0"
                  cellpadding="0"
                  role="presentation"
                  style="margin: 0.1; width: 100%"
                >
                  <tr>
                    <td width="30" style="width: 30px">
                      <p style="margin: 0.1px">&nbsp;</p>
                    </td>
                    <td
                      height="40"
                      style="font-size: 30px; line-height: 30px; height: 45px"
                    >
                      <p style="margin: 0.1px; text-align: center">
                        <img
                          width="150"
                          height="40"
                          src="https://thumbsnap.com/i/8WcXwfkT.png"
                          alt="logo"
                          style="width: 150px; height: 40px"
                        />
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td
                width="100%"
                height="65"
                style="height: 65px; width: 100%"
              ></td>
            </tr>
            <tr style="border-collapse: collapse">
              <td style="font-size: 17px; line-height: 20px">
                <p style="margin: 0.1px">
                  <a href="tel:+41792893025" style="text-decoration: none"
                    ><img
                      width="140"
                      src="https://thumbsnap.com/i/EbMv6dJK.png"
                      alt="telephone"
                      style="width: 140px"
                  /></a>
                </p>
              </td>
            </tr>
            <tr>
              <td
                width="100%"
                height="10"
                style="height: 10px; width: 100%"
              ></td>
            </tr>
            <tr style="border-collapse: collapse">
              <td style="font-size: 17px; line-height: 20px">
                <p style="margin: 0.1px">
                  <a
                    href="mailto:deniz@momoha.org"
                    style="text-decoration: none"
                    ><img
                      width="160"
                      src="https://thumbsnap.com/i/rnxBThp1.png"
                      alt="email"
                      style="width: 160px"
                  /></a>
                </p>
              </td>
            </tr>
            <tr>
              <td
                width="100%"
                height="10"
                style="height: 10px; width: 100%"
              ></td>
            </tr>
            <tr>
              <td align="center">
                <table
                  align="center"
                  border="0"
                  cellspacing="0"
                  cellpadding="0"
                  role="presentation"
                  style="margin: 0.1px; text-align: center; width: 100%"
                >
                  <tr>
                    <td
                      style="
                        width: 30px;
                        text-align: left;
                        font-size: 14px;
                        line-height: 14px;
                      "
                    >
                      <p
                        style="
                          margin: 0.1px;
                          font-size: 0px;
                          line-height: 0px;
                          text-align: left;
                        "
                      >
                        <a
                          href=" https://www.instagram.com/mondaymorninghappiness/"
                          ><img
                            width="25"
                            height="25"
                            src="https://thumbsnap.com/i/94fx9WEP.png"
                            alt="instagram"
                            style="width: 25px; height: 25px"
                        /></a>
                      </p>
                    </td>
                    <td
                      style="
                        width: 30px;
                        text-align: left;
                        font-size: 14px;
                        line-height: 14px;
                      "
                    >
                      <p
                        style="
                          margin: 0.1px;
                          font-size: 0px;
                          line-height: 0px;
                          text-align: left;
                        "
                      >
                        <a
                          href="https://www.facebook.com/profile.php?id=61563313324882"
                          ><img
                            width="25"
                            height="25"
                            src="https://thumbsnap.com/i/ZjPyy2Ur.png"
                            alt="facebook"
                            style="width: 25px; height: 25px"
                        /></a>
                      </p>
                    </td>
                    <td
                      style="
                        width: 30px;
                        text-align: left;
                        font-size: 14px;
                        line-height: 14px;
                      "
                    >
                      <p
                        style="
                          margin: 0.1px;
                          font-size: 0px;
                          line-height: 0px;
                          text-align: left;
                        "
                      >
                        <a
                          href=" https://www.linkedin.com/in/deniz-rickli-9143981b5/"
                          ><img
                            width="25"
                            height="25"
                            src="https://thumbsnap.com/i/B27nvJD8.png"
                            alt="linkedin"
                            style="width: 25px; height: 25px"
                        /></a>
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
        <td width="12" height="230" style="width: 12px; height: 230px">
          <p style="margin: 0.1px">&nbsp;</p>
        </td>
      </tr>
    </table>

    <!--[if (gte mso 9)|(IE)]>
        </td>
        </tr>
        </table>
      <![endif]-->
  </body>
</html>
`
module.exports.send = async (req, res, next) => {
  const { body } = req;
  console.log(body.body.select);
  let email= body.body.email
  try {
    let sel = body.body.select;
    let bodyItem;
    if(sel==="1"){
      bodyItem=a 
    };if(sel==="2"){
      bodyItem=b 
    };if(sel==="3"){
    bodyItem=c
  };if(sel==="4"){
    bodyItem=d
  };if(sel==="5"){
    bodyItem=e
  };if(sel==="6"){
    bodyItem=f
  };if(sel==="7"){
    bodyItem=g
  };if(sel==="8"){
    bodyItem=k
  };if(sel==="9"){
    bodyItem=l
  };if(sel==="10"){
    bodyItem=m
  };if(sel==="11"){
    bodyItem=n
  };if(sel==="12"){
    bodyItem=s
  };





    // const {
    //   body: { lastName, firstName, phone, email, order, products },
    // } = req;
    // console.log(req);
    // var info = JSON.parse(products);
    // console.log(info);
    // var arrayItems = "";
    // info.forEach(
    //   (i) =>
    //     (arrayItems +=
    //       "<li>" +
    //       "назва:" +
    //       i.name +
    //       "," +
    //       "ціна:" +
    //       i.price +
    //       "," +
    //       "кількість:" +
    //       i.count +
    //       "</li>")
    // );

    let message = await smtpTransport.sendMail({
      from:"Medimplant <medimplant2023@ukr.net>",
      to: email,
      subject: `signature `,
      html: bodyItem
    });

    if(!message){
      const err = createError(404, 'Message not created');
      return next(err);
      console.log(err);
    }

    res.send({ data: message });
    console.log(message);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

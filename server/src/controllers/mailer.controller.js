const smtpTransport = require("../utils/mailer");

module.exports.send = async (req, res, next) => {
  try {
    const {
      body: { lastName, firstName, phone, email, order, products },
    } = req;
    console.log(req);
    info = JSON.parse(products);
    console.log(info);
    var arrayItems = "";
    info.forEach(
      (i) =>
        (arrayItems +=
          "<li>" +
          "name:" +
          i.name +
          "," +
          "price:" +
          i.price +
          "," +
          "count:" +
          i.count +
          "</li>")
    );

    let message = await smtpTransport.sendMail({
      from:"medimplant <medimplant2023@gmail.com>",
      to: "medimplant2023@gmail.com", // sender address
      subject: `Заказ от ${lastName}`,
      html: `<h2>Order </h2>
             <ul>
             <li>firstName:${firstName}</li>
             <li>lastName:${lastName}</li>
             <li>phone:${phone}</li>
             <li>email:${email}</li
             </ul>
             <h2>order:${order}</h2>
              <ul>${arrayItems},</ul>`
    });

    if(!message){
      const err = createError(404, 'Message not created');
      return next(err);
    }

    res.send({ data: message });
  } catch (error) {
    next(error);
  }
};

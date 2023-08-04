const smtpTransport = require("../utils/mailer");

module.exports.send = async (req, res, next) => {
  try {
    const {
      body: { lastName, firstName, phone, email, order, products },
    } = req;
    console.log(req);
    console.log(JSON.parse(products));
    // info = JSON.parse(products);
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
      from:"medimplant <medimplant2023@ukr.net>",
      to: "teslabest87@gmail.com",
      subject: `Замовлення від ${lastName}`,
      // html: `<h2>Замовник </h2>
      //        <ul>
      //        <li>Ім'я:${firstName}</li>
      //        <li>Фамілія:${lastName}</li>
      //        <li>Телефон:${phone}</li>
      //        <li>email:${email}</li
      //        </ul>
      //        <h2>Замовлення:${order}</h2>
      //         <ul>${arrayItems},</ul>`
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

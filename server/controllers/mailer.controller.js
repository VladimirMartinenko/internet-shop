const smtpTransport = require ("../utils/mailer");

module.exports.send = async(req,res,next) =>{
  try {  
    const {body:{lastName,firstName,phone,email,order,products}}=req;
    console.log(req);

    
    // let content = products.reduce((a, b)=> {
    //    a + '<tr><td>' + b.name + '</a></td><td>' + b.price + '</td><td>' + b.count + '</td><td>' 
    // }, '');
    // console.log(content);

  //   var sendUpdatedMerch = smtpTransport.sendMail({
  //     // from: 'teslabest87 <teslabest87@gmail.com>', // sender address
  //     subject: 'Test Updates', // Subject line
  //     html: `<div><table><thead><tr><th>ASIN</th><th>Url</th><th>Favourite</th><th>createdAt</th></tr></thead><tbody></tbody></table></div>` // html body
  // });


  // sendUpdatedMerch({
  //   to: 'teslabest87@gmail.com'
  // }, {products}, function(err, info){
  //   if(err){
  //     console.log(err);
  //   } else {
  //     console.log('Done');
  //   }
  // })
    
  // const message = await sendEmail({
  //   to:'teslabest87@gmail.com',
  //   subject: `Заказ от ${lastName}`,
  //   text:`имя:${lastName},
  //   телефон:${phone},
  //   E-mail:${email}`,
  //   html: "<b>Hello world?</b>", // html body
  // });
  info = JSON.parse(products);
  console.log(info);
var arrayItems = "";
info.forEach(i =>
 arrayItems +="<li>"+ "name:"+ i.name+','+
 "price:"+ i.price+","+
 "count:" +i.count+
"</li>"
)


  let message = await smtpTransport.sendMail({
    from: 'teslabest87 <teslabest87@gmail.com>',
    to:'teslabest87@gmail.com', // sender address
    subject: `Заказ от ${lastName}`,
      text:`имя:${lastName},
      телефон:${phone},
      E-mail:${email}`,
    html:  `<h2>Your order confirmation is below</h2>
             <div>firstName:${firstName},lastName:${lastName},phone:${phone},email:${email}</div>
             <div>order:${order}</div>
              <ul>${arrayItems},</ul>`, // html body
  });

  res.send({data:message});
} catch (error){
  next(error);
}
};
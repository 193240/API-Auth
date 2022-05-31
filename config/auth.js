const jwt = require("jsonwebtoken");

const config = process.env;



const verifyToken = (req, res, next) => {
  const token =req.body.token || req.query.token || req.headers.authorization;
    //console.log(req.headers.authorization);
  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
      
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    console.log(decoded);
    // jwt.verify(token, config.TOKEN_KEY, function(err, decoded) {
    //     console.log(decoded.foo) // bar
    //   });
    req.user = decoded;
    
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};
// const verifyAuth = async (req,res,next) => {
//     Console.log ('authentication authorization middleware ');
//     let authorization = req.headers['Authorization']
//     console.log(authorization); //  This has always been undefined
    
//     try{
//       //Get token
//       let token = authorization.replace('Bearer ','')
//       //Validate token
//       let result = jwt.verify(token,config.PUBLIC_KEY,{
//         algorithms:['RS256']
//       })
//       req.user = result
//       await next()
//     } catch (e) {
//       await next(new Error(errorTypes.INVALID_TOKEN))
//     }
//   }
module.exports = verifyToken;
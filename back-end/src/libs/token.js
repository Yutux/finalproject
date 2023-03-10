import jwt  from "jsonwebtoken";


const secret = "jwtPrivateKey";

//sign token
function signToken(payload) {
    const token = jwt.sign(payload, secret, {expiresIn: '8d'});
    return token;
}

//verify token
function verifyToken(HeaderToken, callback) {
    const token = HeaderToken.replace('Bearer ', '');
    jwt.verify(token, secret, (err, payload)=>{
        callback(err, payload);
    }
    );
}
const token = {
    signToken: signToken,
    verifyToken: verifyToken
}

export default token;
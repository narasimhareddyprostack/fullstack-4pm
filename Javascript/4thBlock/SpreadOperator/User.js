let user = {
  name: "Narasimha",
  loc: "Bangalore",
};

let info = {
  loc: "Chennai",
};

let userinfo = { ...user, ...info };

console.log(userinfo);

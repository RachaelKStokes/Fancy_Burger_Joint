const format_date = (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
  };
  
 
  const format_time = (date) => {
    return date.toLocaleTimeString();
  };
  
  
  const withAuth = (req, res, next) => {
    if (!req.session.loggedIn) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = {
    format_date,
    format_time,
    withAuth
  };
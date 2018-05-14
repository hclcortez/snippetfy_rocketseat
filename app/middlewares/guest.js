const guest = (req, res, next) => {
  if (!req.session.user) {
    return next()
  }

  return res.redirect('/app/dashboard')
}

export default guest

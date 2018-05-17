const auth = (req, res, next) => {
  if (req.session && req.session.user) {
    console.log('Sesions##')
    console.log(req.session)
    return next(req.session.user)
  }
  req.flash('error', 'Não autorizado')
  return res.redirect('/')
}

export default auth

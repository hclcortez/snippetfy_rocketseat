import { Category } from '../models'

const store = async (req, res, next) => {
  try {
    const category = await Category.create({
      ...req.body,
      UserId: req.session.user.id,
    })
    req.flash('seccess', 'Categorua criada com sucesso.')
    return res.redirect(`/app/categories/${category.id}`)
  } catch (err) {
    return next(err)
  }
}


export default { store }

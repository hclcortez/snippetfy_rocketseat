import { Category, Snippet } from '../models'

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

const show = async (req, res, next) => {
  try {
    const categories = await Category.findAll({
      where: {
        UserId: req.session.user.id,
      },
      include: [Snippet],
    })

    const snippets = await Snippet.findAll({
      where: { CategoryId: req.params.id },
    })

    return res.render('categories/show', {
      categories,
      snippets,
      categoryId: req.params.id,
    })
  } catch (err) {
    return next(err)
  }
}


export default { store, show }

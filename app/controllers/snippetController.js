import { Snippet, Category } from '../models'

const store = async (req, res, next) => {
  try {
    const { categoryId } = req.params
    const snippet = await Snippet.create({
      ...req.body,
      CategoryId: categoryId,
    })

    req.flash('success', 'Snippet criada com sucesso')
    return res.redirect(`/app/categories/${categoryId}/snippets/${snippet.id}`)
  } catch (error) {
    return next(error)
  }
}

const show = async (req, res, next) => {
  try {
    const { categoryId, id } = req.params

    const snippet = await Snippet.findById(id)

    const categories = await Category.findAll({
      where: {
        UserId: req.session.user.id,
      },
      include: [Snippet],
    })

    const snippets = await Snippet.findAll({
      where: { CategoryId: categoryId },
    })

    res.render('snippets/show', {
      snippet,
      categories,
      snippets,
      categoryId,
    })
  } catch (error) {
    next(error)
  }
}

export default { store, show }

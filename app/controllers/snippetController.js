import { Snippet } from '../models'

const store = async (req, res, next) => {
  try {
    const { categoryId } = req.params
    const snippet = await Snippet.create({
      ...req.body,
      CategoryId: categoryId,
    })

    req.flash('success', 'Snippet criada com sucesso')
    return res.redirect(`app/category/${categoryId}/snippets/${snippet.id}`)
  } catch (error) {
    return next(error)
  }
}

export default { store }

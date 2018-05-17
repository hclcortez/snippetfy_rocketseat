import { Category, Snippet } from '../models'

const index = async (req, res, next) => {
  try {
    const categories = await Category.findAll({
      where: {
        UserId: req.session.user.id,
      },
      include: [Snippet],
    })
    return res.render('dashboard/index', { categories })
  } catch (err) {
    return next(err)
  }
}

export default { index }

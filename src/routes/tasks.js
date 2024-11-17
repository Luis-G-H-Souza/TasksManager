module.exports = (app) => {
  const create = async (req, res) => {
    try {
      const result = await app.services.task.save(req.body)
      if (result.error) {
        res.status(400).json(result)
      } else {
        res.status(201).json(result)
      }
    } catch (error) {
      res.status(500).json(error)
    }
  }

  const find = async (req, res) => {
    // TODO Adicionar paginação depois

    const car = await app.services.task.find()
    res.status(200).json(car)
  }
  return { create, find }
}

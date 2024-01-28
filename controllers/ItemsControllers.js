import PizzasModel from "../models/Pizzas.js";

export const postPizzas = async (req, res) => {
  try {
    const pizzas = new PizzasModel({
      imageURL: `/uploads/${req.file.originalname}`,
      title: req.body.title,
      desc: req.body.desc,
      fillings: req.body.fillings,
      price: req.body.price,
      new: req.body.new,
      popular: req.body.popular,
    });

    const docPizzas = await pizzas.save();
    res.json(docPizzas);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Не удалось создать пиццу" });
  }
};
export const getPizzas = async (req, res) => {
  try {
    const pizzasRes = await PizzasModel.find();
    res.json(pizzasRes);
  } catch (error) {
    console.log(error);
  }
};
export const getPizzasId = async (req, res) => {
  try {
    const pizzaId = req.params.id;
    const pizzasRes = await PizzasModel.findById(pizzaId);
    res.json(pizzasRes);
  } catch (error) {
    console.log(error);
  }
};

export const patchPizzas = async (req, res) => {
  try {
    const { id } = req.params; // Получаем ID пиццы из запроса
    const { size, recommended } = req.body; // Получаем новые поля из запроса

    // Проверяем, были ли переданы новые поля size и recommended
    if (size === undefined && recommended === undefined) {
      return res.status(400).json({ message: "Нет данных для обновления" });
    }

    // Создаем объект, который содержит только поля, которые нужно обновить
    const updateFields = {};
    if (size !== undefined) {
      updateFields.size = size;
    }
    if (recommended !== undefined) {
      updateFields.recommended = recommended;
    }

    // Используем метод findByIdAndUpdate для обновления записи
    const updatedPizza = await PizzasModel.findByIdAndUpdate(
      id,
      { $set: updateFields }, // $set используется для обновления только указанных полей
      { new: true } // Опция new возвращает обновленный документ
    );

    if (!updatedPizza) {
      return res.status(404).json({ message: "Пицца не найдена" });
    }

    res.json(updatedPizza);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Не удалось обновить пиццу" });
  }
};

export const getRoundPizzas = async (req, res) => {
  try {
    const allRoundPizzas = await PizzasModel.findById({
      id,
    });
    res.status(200).json(allRoundPizzas);
  } catch (error) {
    console.log(error);
  }
};

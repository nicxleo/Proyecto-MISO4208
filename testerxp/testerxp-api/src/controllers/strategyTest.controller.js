const StrategyTest = require('../models/estrategiaPrueba');
const Test = require('../models/prueba');
const Strategy = require('../models/estrategia');

//Create and Save a new StrategyTest
exports.create = async (strategy, test) => {
  console.log('***** Create StrategyTest *****');
  try {
    await StrategyTest.create(
      { id_estrategia: strategy, id_prueba: test },
      {
        raw: true,
      }
    );
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

// Retrieve all StrategyTests from the database.
exports.findAll = async (req, res) => {
  console.log('***** FindAll StrategyTests *****');
  try {
    const { range, sort, filter } = req.query;
    console.log(filter);
    const [from, to] = range ? JSON.parse(range) : [0, 100];
    const parsedFilter = filter ? parseFilterStrategy(filter) : {};
    const { count, rows } = await StrategyTest.findAndCountAll({
      include: [
        { model: Test, as: 'prueba' },
        { model: Strategy, as: 'estrategia' },
      ],
      offset: from,
      limit: to - from + 1,
      order: [sort ? JSON.parse(sort) : ['id_estrategia', 'ASC']],
      where: parsedFilter,
      raw: true,
    });
    res.set('Content-Range', `${from}-${from + rows.length}/${count}`);
    res.set('X-Total-Count', `${count}`);
    res.json(rows.map((resource) => ({ ...resource, id: resource.id_prueba })));
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'error retrieving StrategyTests' });
  }
};

//Retrieve a StrategyTest identified by the strategyId and the testId in the request
exports.findOne = async (req, res) => {
  console.log('***** FindOne StrategyTest *****');
  try {
    const record = await StrategyTest.findAll({
      where: {
        id_estrategia: req.params.strategyId,
      },
      include: [
        { model: Test, as: 'prueba' },
        { model: Strategy, as: 'estrategia' },
      ],
      raw: true,
    });
    if (!record) {
      return res.status(404).json({ error: 'StrategyTest not found' });
    }
    res.status(200).json(record);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Error retrieving StrategyTest' });
  }
};

function parseFilterStrategy(filter) {
  console.log('Strategy Filter --->' + filter);

  if (JSON.parse(filter).hasOwnProperty('id')) {
    filter = filter.replace('id', 'id_estrategia');
  }
  console.log('Strategy Replace Filter --->' + filter);

  const filters = JSON.parse(filter);

  return Object.keys(filters)
    .map((key) => {
      if (
        typeof filters[key] === 'string' &&
        filters[key].indexOf('%') !== -1
      ) {
        return {
          [key]: { [Op.like]: filters[key] },
        };
      }
      return {
        [key]: filters[key],
      };
    })
    .reduce(
      (whereAttributes, whereAttribute) => ({
        ...whereAttributes,
        ...whereAttribute,
      }),
      {}
    );
}

const lunisolar = require("lunisolar");

module.exports = (req, res) => {

  const birth = req.query.birth;

  if (!birth) {
    return res.status(400).json({
      error: "Missing birth date"
    });
  }

  const solar = lunisolar(birth);

  const char8 = solar.char8;

  res.status(200).json({
    year: char8.year.toString(),
    month: char8.month.toString(),
    day: char8.day.toString(),
    hour: char8.hour.toString()
  });

};

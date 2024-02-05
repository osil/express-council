const models = require("../models/index");
const bcrypt = require("bcrypt");

exports.index = async (req, res, next) => {
  const users = await models.User.findAll({
    attributes: ["id", "name", ["email", "username"], "created_at"],
    order: [["id", "desc"]],
    // attributes: { exclude: ["password"] },
  });
  res.status(200).json({
    message: "แสดงข้อมูล Users",
    data: users,
  });
};

exports.show = async (req, res, next) => {
  try {
    const { id } = req.params;

    const sql = "SELECT * FROM users where id = :id";
    const user = await models.sequelize.query(sql, {
      replacements: { id: id },
      type: models.sequelize.QueryTypes.SELECT,
    });

    if (user.length === 0) {
      const error = new Error("ไม่พบข้อมูล");
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({
      message: "แสดงข้อมูล User By ID",
      data: user,
    });
  } catch (error) {
    res.status(error.statusCode).json({
      error: {
        message: "Error: " + error.message,
      },
    });
  }
};

exports.studentstatus = async (req, res, next) => {
  const sql = "SELECT * FROM studentstatus";
  const dt1 = await models.sequelize.query(sql, {
    type: models.sequelize.QueryTypes.SELECT,
  });
  res.status(200).json({
    message: "แสดงข้อมูล Student Status",
    length: dt1.length,
    data: dt1,
  });
};

exports.insert = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    // hash bcrypt
    const saltRounds = 10;
    const hash = await bcrypt.hash(password, saltRounds);

    const sql =
      "INSERT INTO users (name,email,password) VALUES (:name,:email,:password)";
    const user = await models.sequelize.query(sql, {
      replacements: {
        name: name,
        email: email,
        password: hash,
      },
      type: models.sequelize.QueryTypes.INSERT,
    });

    res.status(201).json({
      message: "Insert ข้อมูล User",
      data: user[0],
    });
  } catch (error) {}
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const sql = "SELECT * FROM users where email = :email";
    const users = await models.sequelize.query(sql, {
      replacements: { email: email },
      type: models.sequelize.QueryTypes.SELECT,
    });
    const user = users[0];
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      res.status(200).json({
        message: "login สำเร็จ",
        data: {
          name: user.name,
          email: user.email,
        },
      });
    } else {
      const error = new Error("ชื่อผู้ใช้และรหัสผ่านไม่ถูกต้อง");
      error.statusCode = 404;
      throw error;
    }
  } catch (error) {
    res.status(error.statusCode).json({
      error: {
        message: "Error: " + error.message,
      },
    });
  }
};

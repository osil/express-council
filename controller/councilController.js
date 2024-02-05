const models = require("../models/index");

exports.index = (req, res, next) => {
  res.status(200).json({
    message: "แสดงข้อมูล Council",
  });
};

exports.getRegularity = async (req, res, next) => {
  const sql = `SELECT
                r.name_regularity_admin AS namefile,
                r.year_regularity_admin,
                CONCAT( 'https://council.rmu.ac.th/admin/upload_file/', URLENCODE(r.file_regularity_admin) ) AS urlfile
                
                FROM
                regularity r 
                ORDER BY
                r.year_regularity_admin DESC,
                r.datetime DESC`;
  const dt1 = await models.sequelize.query(sql, {
    type: models.sequelize.QueryTypes.SELECT,
  });
  res.status(200).json(dt1);
};

exports.getRules = async (req, res, next) => {
  const sql = `SELECT
                r.name_rules_admin AS namefile,
                r.year_rules_admin,
                CONCAT( 'https://council.rmu.ac.th/admin/upload_file/', URLENCODE(r.file_rules_admin) ) AS urlfile
                
                FROM
                rules r 
                ORDER BY
                r.year_rules_admin DESC,r.datetime DESC`;
  const dt1 = await models.sequelize.query(sql, {
    type: models.sequelize.QueryTypes.SELECT,
  });
  res.status(200).json(dt1);
};

exports.getDictation = async (req, res, next) => {
  const sql = `SELECT
                r.name_order_admin AS namefile,
                r.year_order_admin,
                CONCAT( 'https://council.rmu.ac.th/admin/upload_file/', URLENCODE(r.file_order_admin) ) AS urlfile
                
                FROM
                order_c r 
                ORDER BY
                r.year_order_admin DESC , r.datetime DESC`;
  const dt1 = await models.sequelize.query(sql, {
    type: models.sequelize.QueryTypes.SELECT,
  });
  res.status(200).json(dt1);
};

exports.getAnnounce = async (req, res, next) => {
  const sql = `SELECT
                r.name_announce_admin AS namefile,
                r.year_announce_admin,
                CONCAT( 'https://council.rmu.ac.th/admin/upload_file/', URLENCODE ( r.file_announce_admin ) ) AS urlfile 
                FROM
                announce r 
                ORDER BY
                r.year_announce_admin DESC,r.datetime DESC`;
  const dt1 = await models.sequelize.query(sql, {
    type: models.sequelize.QueryTypes.SELECT,
  });
  res.status(200).json(dt1);
};

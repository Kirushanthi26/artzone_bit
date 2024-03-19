const db = require("../util/database");

const getAllEvents = async (req, res, next) => {
  try {
    const [rows] = await db.execute("SELECT * FROM art_event");
    res.json(rows);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching the Events." });
  }
};

const createAttentEvent = async (req, res, next) => {

};

const createEvent = async (req, res, next) => {
  const userId = req.params.uid;

  const {
    eName,
    eDate,
    eTime,
    eAddress,
    eDescription,
    eLatitude,
    eLongitude,
  } = req.body; 

  try {
    if (
      !eName ||
      !eDate ||
      !eTime ||
      !eDescription ||
      !eLatitude ||
      !eLongitude ||
      !eAddress
    ) {
      return res.status(400).json({ error: "All fields are required." });
    }

    await db.execute(
      "INSERT INTO art_event( uid, e_name, e_date, e_time, e_latitude, e_longitude, e_address, e_description) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [
        userId,
        eName,
        eDate,
        eTime,
        eLatitude,
        eLongitude,
        eAddress,
        eDescription,
      ]
    );
    res.status(201).json({ message: "Event created successfully" });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ error: "An error occurred while creating the Event." });
  }
};

const UpdateEvent = async (req, res, next) => {
  const eventId = req.params.eid; 

  const {
    eName,
    eDate,
    eTime,
    eAddress,
    eDescription,
    eLatitude,
    eLongitude,
  } = req.body;

  try {
    if (
      !eName ||
      !eDate ||
      !eTime ||
      !eDescription ||
      !eLatitude ||
      !eLongitude ||
      !eAddress
    ) {
      return res.status(400).json({ error: "All fields are required." });
    }

    await db.execute(
      "UPDATE art_event SET e_name=?, e_date=?, e_time=?, e_latitude=?, e_longitude=?, e_address=?, e_description=? WHERE eid=?",
      [
        eName,
        eDate,
        eTime,
        eLatitude,
        eLongitude,
        eAddress,
        eDescription,
        eventId,
      ]
    );
    res.status(200).json({ message: "Event updated successfully" });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ error: "An error occurred while updating the Event." });
  }
};

const deleteEvent = async (req, res, next) => {
  const eventId = req.params.eid; 

  try {
    const result = await db.execute("DELETE FROM art_event WHERE eid=?", [
      eventId,
    ]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Event not found." });
    }

    res.status(200).json({ message: "Event deleted successfully" });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ error: "An error occurred while deleting the Event." });
  }
};

exports.getAllEvents = getAllEvents;
exports.createAttentEvent = createAttentEvent;
exports.createEvent = createEvent;
exports.UpdateEvent = UpdateEvent;
exports.deleteEvent = deleteEvent;

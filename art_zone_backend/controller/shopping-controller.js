const db = require("../util/database");

const getAllShops = async (req, res, next) => {
  try {
    const [rows] = await db.execute("SELECT * FROM user_tb WHERE role = 3");
    res.json(rows);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ error: "An error occurred while fetching the Shops." });
  }
};

const getShopAndProductsByShopId = async (req, res, next) => {
  const userId = req.params.uid;

  try {
    const [shopRow] = await db.execute("SELECT * FROM user_tb WHERE uid = ?", [
      userId,
    ]);
    if (shopRow.length === 0) {
      return res.status(404).json({ error: "Shop not found." });
    }

    const [productRows] = await db.execute(
      "SELECT * FROM product WHERE uid = ?",
      [userId]
    );
    // if (productRows.length === 0) {
    //   return res
    //     .status(404)
    //     .json({ error: "No products found for this shop." });
        
    // }

    res.json({ shop: shopRow[0], products: productRows });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: "An error occurred while fetching the shop and its products.",
    });
  }
};

const createProduct = async (req, res, next) => {
  const userId = req.params.uid;
  const {
    product_name,
    product_price,
    product_description,
    product_active,
  } = req.body;

  try {
    if (
      !product_name ||
      !product_price ||
      !product_description ||
      !product_active
    ) {
      return res.status(400).json({ error: "All fields are required." });
    }

    await db.execute(
      "INSERT INTO product(uid, product_name, product_price, product_image, product_description, product_active) VALUES (?, ?, ?, ?, ?, ?)",
      [
        userId,
        product_name,
        product_price,
        req.file.path,
        product_description,
        product_active,
      ]
    );
    res.status(201).json({ message: "Product created successfully" });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ error: "An error occurred while creating the product." });
  }
};

const updateProduct = async (req, res, next) => {
  const productId = req.params.pid;

  const {
    product_name,
    product_price,
    product_description,
  } = req.body;

  try {
    if (
      !product_name ||
      !product_price ||
      !product_description 
    ) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const [product] = await db.execute(
      "SELECT product_image FROM product WHERE pid = ?",
      [productId]
    );

    let existingImagePath = "";
    if (product && product.length > 0) {
      existingImagePath = product[0].product_image;
    }

    let imagePath;
    if (req.file) {
      imagePath = req.file.path;
    } else {
      imagePath = existingImagePath; 
    }

    await db.execute(
      "UPDATE product SET product_name=?, product_price=?, product_image=?, product_description=? WHERE pid = ?",
      [
        product_name,
        product_price,
        imagePath,
        product_description,
        productId,
      ]
    );
    res.status(200).json({ message: "Product updated successfully" });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ error: "An error occurred while updating the product." });
  }
};

const deleteProduct = async (req, res, next) => {
  const productId = req.params.pid;

  try {
    const result = await db.execute("DELETE FROM product WHERE pid=?", [
      productId,
    ]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Product not found." });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ error: "An error occurred while deleting the product." });
  }
};


const finalCheckout = async (req, res) => {
  const { userID, data, items } = req.body;

  if (!userID || !items || items.length === 0) {
    return res.status(400).json({ error: "Invalid request" });
  }

  let totalPrice = 0;
  items.forEach((item) => {
    totalPrice += item.price * item.quantity;
  });

  try {
    const [results] = await db.execute(
      "INSERT INTO final_purchase (uid, total_amount, purchase_date, d_name, d_address, d_email, d_phone, d_status, payment_method) VALUES (?,?,?,?,?,?,?,?,?)",
      [
        userID,
        totalPrice,
        new Date(),
        data.username,
        data.userAddress,
        data.userEmail,
        data.userPhoneNo,
        0,
        data.userPayment
      ]
    );

    const purchaseId = results.insertId;

    //console.log(purchaseId);

    const purchaseDetails = items.map((item) => [
      purchaseId,
      item.id,
      item.quantity
    ]);
    //console.log("Purchase details:", purchaseDetails);

    for (const detail of purchaseDetails) {
      await db.execute(
        "INSERT INTO purchase_detail (fp_id, pid, quantity) VALUES (?,?,?)",
        detail
      );
    }

    res.status(200).json({ message: "Order placed successfully" });
  } catch (error) {
    console.error("Error placing order:", error);
    return res.status(500).json({ error: "Error placing order" });
  }
};


exports.getAllShops = getAllShops;
exports.getShopAndProductsByShopId = getShopAndProductsByShopId;
exports.createProduct = createProduct;
exports.updateProduct = updateProduct;
exports.deleteProduct = deleteProduct;
exports.finalCheckout = finalCheckout;

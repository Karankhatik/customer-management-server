const Customer = require("../models/customer");

// Create a new customer (sign up)
module.exports.addCustomer = async function (req, res) {
  try {
    const { email } = req.body;

    // Finding Customer into the database using the email
    const customer = await Customer.findOne({ email });

    // If Customer is not present in the database, create a new Customer
    if (!customer) {
      const newCustomer = await Customer.create(req.body);

      // Sending the response to the client
      return res.json({
        success: true,
        message: "Customer added successfully",
        newCustomer,
      });
    } else {
      return res.json({
        success: false,
        message: "Customer with this email already exists",
      });
    }
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

// Get all customers
module.exports.getAllCustomers = async function (req, res) {
  try {
    const customers = await Customer.find();

    return res.json({
      success: true,
      message: "Customers retrieved successfully",
      customers,
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

// View a particular customer by email
module.exports.viewCustomer = async function (req, res) {
  try {
    const { email } = req.params;

    const customer = await Customer.findOne({ email });

    if (customer) {
      return res.json({
        success: true,
        message: "Customer retrieved successfully",
        customer,
      });
    } else {
      return res.json({
        success: false,
        message: "Customer not found",
      });
    }
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

// Update Customer by email
module.exports.updateCustomer = async function (req, res) {
  try {
    const { email } = req.params;
    const updatedData = req.body;

    const updatedCustomer = await Customer.findOneAndUpdate(
      { email },
      updatedData,
      { new: true }
    );

    if (updatedCustomer) {
      return res.json({
        success: true,
        message: "Customer updated successfully",
        updatedCustomer,
      });
    } else {
      return res.json({
        success: false,
        message: "Customer not found",
      });
    }
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

// Delete customer by email
module.exports.deleteCustomer = async function (req, res) {
  try {
    const { email } = req.params;

    const deletedCustomer = await Customer.findOneAndDelete({ email });

    if (deletedCustomer) {
      return res.json({
        success: true,
        message: "Customer deleted successfully",
        deletedCustomer,
      });
    } else {
      return res.json({
        success: false,
        message: "Customer not found",
      });
    }
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

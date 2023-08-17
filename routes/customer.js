const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customer');

// Create a new customer 
router.post("/add-customer", customerController.addCustomer);

// Get all customers
router.get("/customers", customerController.getAllCustomers);

// View a particular customer by email
router.get("/view-customer/:email", customerController.viewCustomer);

// Update customer by email
router.put("/update-customer/:email", customerController.updateCustomer);

// Delete customer by email
router.delete("/delete-customer/:email", customerController.deleteCustomer);

module.exports = router;
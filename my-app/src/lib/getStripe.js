const { loadStripe } = require("@stripe/stripe-js");

async function getStripe() {
  const stripe = await loadStripe("pk_test_51NFb0NHo0XtniAaJpxVNhZDfQyET3wo8u6fTsbrcjIUxAOGk37SnIrLJ5hE7TxhvJJhmeCiX1NrUjRjFG6KdOjU800EmkQ9iLC");
  return stripe;
}

module.exports = getStripe;

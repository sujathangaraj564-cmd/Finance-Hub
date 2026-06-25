const express = require("express");
const router = express.Router();

const dashboardPayload = {
  stats: {
    totalMembers: 54,
    totalInvestments: 248000,
    totalTransactions: 118,
    monthlyProfit: 18400,
    pendingPayments: 5400
  },
  updates: [
    {
      title: "Weekly market review",
      description: "Equity and debt sectors ended the week with solid momentum across the portfolio."
    },
    {
      title: "Member onboarding",
      description: "Three new premium clients joined the Finance Hub network today."
    }
  ],
  chart: [64, 78, 92, 87, 105, 118]
};

router.get("/overview", (req, res) => {
  res.json({ success: true, data: dashboardPayload });
});

module.exports = router;

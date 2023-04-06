module.exports = {
  viewDashboard: (req, res) => {
    res.render("admin/dashboard/view_dashboard", { title: " Dashboard Admin" });
  },
  viewCategory: (req, res) => {
    res.render("admin/category/view_category", { title: " Category" });
  },
  viewBank: (req, res) => {
    res.render("admin/bank/view_bank", { title: " Bank" });
  },
  viewItem: (req, res) => {
    res.render("admin/item/view_item", { title: " Item" });
  },
  viewBooking: (req, res) => {
    res.render("admin/booking/view_booking", { title: "Booking" });
  },
};

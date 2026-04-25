const stephenRoute = ('/', (req, res) => {
  res.send("Stephen Rollins");
});

const bobRoute = ('/leroy', (req, res) => {
  res.send("Leroy Jenkins");
});

module.exports = {
    stephenRoute,
    bobRoute
}
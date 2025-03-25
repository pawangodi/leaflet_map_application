export const getDashboard = (req, res) => {
  const cards = [
    "Delhi", "Mumbai", "Chennai", "Kolkata", 
    "Bangalore", "Hyderabad", "Ahmedabad", 
    "Pune", "Jaipur", "Lucknow"
  ].map((city, i) => ({
    id: i + 1, // Using index + 1 as ID
    title: city
  }));

  res.status(200).json({ cards });
};
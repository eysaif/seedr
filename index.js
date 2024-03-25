import express from "express";
import Seedr from "seedr";
import cors from 'cors'; 
const PORT = process.env.PORT || 5000;
const app = express();

// CORS is enabled for all origins 
app.use(cors()); 

//TO READ THE REQUEST BODY
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Initialize SEEDER
const  seedr = new Seedr();

app.get("/api/add", async (req, res) => {
try {
    await seedr.login("hclsez41@gmail.com", "kaplan123");
    await seedr.addMagnet("magnet:?xt=urn:btih:7468FAA53E10E822EDB38DB01DD56ECA730E7E6E&dn=Breathe+Into+the+Shadows+%282020%29+Hindi+S01+Complete+720p+AMZN+WEB-DL+-+3.3+GB+-+DD-5.1+ESub+x265+-+Shadow+%28BonsaiHD%29&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.cyberia.is%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.nyap2p.com%3A8080%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.moeking.me%3A6969%2Fannounce&tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.zer0day.to%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fcoppersurfer.tk%3A6969%2Fannounce");
    res.status(200).send({ message: "Magnet added Successfully." });
} catch (error) {
    res.status(500).send({ message: "Internal server error.",error:error });
}

});

app.listen(PORT, () => {
  console.log("App listening at port", PORT);
});

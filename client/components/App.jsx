const { useState, useEffect } = require("react");

function App () {
   const [toys, setToys] = useState([]);
   const [searchText, setSearchText] = useState("");
   const [selectedAge, setSelectedAge] = useState("all");
   
   useEffect(() => {
    fetch("http://localhost:5001/toys")
        .then(response => response.json())
        .then(data => setToys(data));
   }, []);a
}
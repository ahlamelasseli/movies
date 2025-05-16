import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const movies = [
  {
    id: "1",
    title: "Barbie",
    subtitle: "She's everything. He's just Ken.",
    description: "A colorful journey through Barbie Land where Barbie discovers the real world.",
    poster: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcROuK_Bl8jrLUP7fo3hsDC4XC2AC1WR1CAXS3G1SVqDPZE0pgFTQKnr8P2_cKmRuXg03nPE",
    date: "TUE 4 JULY - 05:00PM",
    screen: "01",
    row: "H",
    seat: "15",
    imax: true,
  },
  {
    id: "2",
    title: "Oppenheimer",
    subtitle: "The world forever changes.",
    description: "A historical drama that explores the life and work of J. Robert Oppenheimer.",
    poster: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ8FFJNBaIXvhEwqXXw40rYYDci8jPlYxWfy9082flliYoZ-SqqZjy0az-G5rIWuSJp2pn7xQ",
    date: "WED 5 JULY - 06:30PM",
    screen: "02",
    row: "G",
    seat: "10",
    imax: true,
  },
  {
    id: "3",
    title: "The Batman",
    subtitle: "Unmask the truth.",
    description: "Batman ventures into Gotham's underworld when a sadistic killer leaves behind a trail of clues.",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIMCpS3OjmxGAhuR99vetHATrUSMK2Cih6TB10Dnk9op5yB-y4DEVQsw9h3814Z8MirrCe",
    date: "THU 6 JULY - 08:00PM",
    screen: "03",
    row: "C",
    seat: "05",
    imax: false,
  },
  {
    id: "4",
    title: "Spider-Man: No Way Home",
    subtitle: "The multiverse unleashed.",
    description: "Peter Parker tries to undo a spell gone wrong, unleashing multiverse chaos.",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJXG-39ax_uSWVuU05XI2eynuf0D9rcrNmFBJfCDIm_K9A2SUdFTMRREZ7JVqliTX3NodG9A",
    date: "FRI 7 JULY - 04:00PM",
    screen: "01",
    row: "D",
    seat: "12",
    imax: true,
  },
  {
    id: "5",
    title: "Dune: Part Two",
    subtitle: "Long live the fighters.",
    description: "Paul Atreides unites with the Fremen to rise against the empire and avenge his family.",
    poster: "https://upload.wikimedia.org/wikipedia/en/d/d2/Don_2_poster.jpg",
    date: "SAT 8 JULY - 09:00PM",
    screen: "02",
    row: "F",
    seat: "07",
    imax: true,
  },
];

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Search movies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md px-4 py-2 rounded-md text-black bg-white"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie) => (
              <div
                key={movie.id}
                onClick={() => navigate(`/about/${movie.id}`)}
                className="cursor-pointer bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition-transform"
              >
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full h-96 object-cover rounded-t-xl"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold">{movie.title}</h2>
                  <p className="text-gray-400 text-sm">{movie.subtitle}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-400">
              No movies found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;

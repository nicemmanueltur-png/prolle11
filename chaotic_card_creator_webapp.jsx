export default function ChaoticCardCreator() {
  const [name, setName] = React.useState("");
  const [tribe, setTribe] = React.useState("OverWorld");
  const [power, setPower] = React.useState(50);
  const [wisdom, setWisdom] = React.useState(50);
  const [speed, setSpeed] = React.useState(50);
  const [courage, setCourage] = React.useState(50);
  const [ability, setAbility] = React.useState("");
  const [image, setImage] = React.useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const shareUrl = `${window.location.origin}?name=${encodeURIComponent(name)}&tribe=${encodeURIComponent(tribe)}&power=${power}&wisdom=${wisdom}&speed=${speed}&courage=${courage}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-black text-white p-6 flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-8 text-center tracking-wide">
        Chaotic Card Creator
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-7xl">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 shadow-2xl border border-white/20">
          <h2 className="text-2xl font-semibold mb-4">Editor</h2>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Creature Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded-xl bg-black/40 border border-white/20"
            />

            <select
              value={tribe}
              onChange={(e) => setTribe(e.target.value)}
              className="w-full p-3 rounded-xl bg-black/40 border border-white/20"
            >
              <option>OverWorld</option>
              <option>UnderWorld</option>
              <option>Mipedian</option>
              <option>Danian</option>
              <option>Triballess</option>
            </select>

            <textarea
              placeholder="Special Ability"
              value={ability}
              onChange={(e) => setAbility(e.target.value)}
              className="w-full p-3 rounded-xl bg-black/40 border border-white/20 h-28"
            />

            <div>
              <label className="block mb-2">Upload Creature Image</label>
              <input type="file" accept="image/*" onChange={handleImageUpload} />
            </div>

            {[ 
              ["Power", power, setPower],
              ["Wisdom", wisdom, setWisdom],
              ["Speed", speed, setSpeed],
              ["Courage", courage, setCourage],
            ].map(([label, value, setter]) => (
              <div key={label}>
                <div className="flex justify-between mb-1">
                  <span>{label}</span>
                  <span>{value}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={value}
                  onChange={(e) => setter(Number(e.target.value))}
                  className="w-full"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="relative w-[350px] h-[520px] rounded-[30px] overflow-hidden shadow-2xl border-4 border-yellow-400 bg-gradient-to-b from-zinc-800 to-black">
            {image ? (
              <img
                src={image}
                alt="Creature"
                className="absolute inset-0 w-full h-full object-cover opacity-80"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-xl">
                Upload an Image
              </div>
            )}

            <div className="absolute inset-0 bg-black/40" />

            <div className="relative z-10 p-5 flex flex-col h-full justify-between">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-3xl font-bold drop-shadow-lg">
                    {name || "Unnamed Creature"}
                  </h2>
                  <span className="bg-yellow-500 text-black px-3 py-1 rounded-full font-bold text-sm">
                    {tribe}
                  </span>
                </div>

                <div className="mt-56 bg-black/60 rounded-2xl p-4 border border-white/20">
                  <h3 className="font-bold mb-2 text-yellow-300">Ability</h3>
                  <p className="text-sm leading-relaxed">
                    {ability || "No special ability added."}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-4">
                <StatBox label="Power" value={power} />
                <StatBox label="Wisdom" value={wisdom} />
                <StatBox label="Speed" value={speed} />
                <StatBox label="Courage" value={courage} />
              </div>
            </div>
          </div>

          <div className="bg-white/10 rounded-2xl p-4 w-full max-w-xl border border-white/20">
            <h3 className="text-xl font-semibold mb-2">Share URL</h3>
            <input
              readOnly
              value={shareUrl}
              className="w-full p-3 rounded-xl bg-black/40 border border-white/20 text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function StatBox({ label, value }) {
  return (
    <div className="bg-black/60 rounded-2xl p-3 border border-white/20 text-center">
      <div className="text-yellow-300 font-bold">{label}</div>
      <div className="text-2xl font-extrabold">{value}</div>
    </div>
  );
}

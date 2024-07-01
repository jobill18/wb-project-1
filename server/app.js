import express from "express";
import morgan from "morgan";
import ViteExpress from "vite-express";
import generateId from "../src/utils/idGenerator.js";

const app = express();
const port = "8000";

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

ViteExpress.config({ printViteDevServerHost: true });

const TEST_MONSTERS = [
  {
    id: 0,
    name: "Goblin",
    cr: "1/4",
    ac: 15,
    hp: 7,
    str: 10,
    dex: 10,
    con: 10,
    int: 10,
    wis: 10,
    cha: 10,
    prof: "Skill: Stealth +6",
    action:
      "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) slashing damage. Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
  },
];

app.get("/api/monsters", (req, res) => {
  res.json(TEST_MONSTERS);
});

app.post("/api/monsters", (req, res) => {
  const { name, cr, ac, hp } = req.body;

  const newEntry = {
    id: generateId(),
    name: name || "",
    cr: cr || "",
    ac: ac || "",
    hp: hp || "",
  };

  TEST_MONSTERS.push(newEntry);
  res.json(newEntry);
});

app.put("/api/monsters/:id", (req, res) => {
  const { id } = req.params;
  const { name, cr, ac, hp } = req.body;

  const index = TEST_MONSTERS.findIndex((entry) => entry.id === +id);

  if (index === -1) {
    res.status(404).json({ error: `Item with ID ${id} not found.` });
  } else {
    const entry = TEST_MONSTERS[index];

    entry.name = name || entry.name;
    entry.cr = cr || entry.cr;
    entry.ac = ac || entry.ac;
    entry.hp = hp || entry.hp;

    res.json(entry);
  }
});

app.delete("/api/monsters/:id/delete", (req, res) => {
  const { id } = req.params;

  const index = TEST_MONSTERS.findIndex((entry) => entry.id === +id);
  if (index === -1) {
    res.status(404).json({ error: `Item with ID ${id} not found.` });
  } else {
    TEST_MONSTERS.splice(index, 1);
    res.json({ id: +id });
  }
});

ViteExpress.listen(app, port, () =>
  console.log(`Server is listening on http://localhost:${port}`)
);

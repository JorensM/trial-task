const app = require('express')();
const cors = require('cors');

app.use(cors())

const PORT = process.env.PORT || 4444;

const items = [
    {
        id: 0,
        name: "Item 0"
    },
    {
        id: 1,
        name: "Item 1"
    },
    {
        id: 2,
        name: "Item 2"
    },
    {
        id: 3,
        name: "Item 3"
    },
    {
        id: 4,
        name: "Item 4"
    }
]

app.get('/api/items', (req, res) => {
    res.json(items);
})

app.listen(PORT, () => {
    console.log('API listening on ' + PORT);
})
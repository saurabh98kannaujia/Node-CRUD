const Note = require('../model/product')


const insertData = async (req, res) => {
    try {
        console.log("OKOKO", req.body)
        const data = {
            'name': "abc",
            'contact_number': 123431,
            'address': "asdsd"
        }
        console.log(data)
        const temp = await Note.create(data)
        console.log("data");
        res.status(201).json({ message: 'Data received successfully!' });
    } catch (error) {
        console.log("Error", error)
        res.status(401).json({ message: 'Data received successfully!' });
    }
}

const getData = async (req, res) => {
    try {
        const result = await Note.find();
        res.status(201).json({
            "result": result
        })
    } catch (error) {
        console.log("Error", error)
    }
}

const updateData = async (req, res) => {
    try {
        const query = await Note.find().where('name', req.body.name);
        if (query.length > 0) {
            console.log(query)
            const temp = Object.keys(req.body.update)
            temp.forEach(async (ele) => {
                const latestData = await Note.findById(query[0]['_id'])
                latestData[ele] = req.body.update[ele]
                latestData.save()
                console.log("latestData", latestData)
            })
            console.log(temp)

            res.status(200).json({ result: query });
        } else {
            res.status(404).json({ message: 'No notes found with name "abc"' }); // Inform client of no results
        }
    } catch (err) {
        // Handle errors appropriately, e.g., logging, sending error response
    }

}

const deletData = async(req, res) => {
    try {
        const query = await Note.find().where('name', req.body.name);
        
        if (query.length > 0) {
            let resp = await Note.findByIdAndDelete(query[0]['_id'])
            console.log(resp)
            res.status(200).json({
                "result":resp
            })
        }
    } catch(error) {
        console.log("Error",error)
    }
}

module.exports = { insertData, getData, updateData,deletData }


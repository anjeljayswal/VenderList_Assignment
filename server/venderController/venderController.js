const venderdb = require("../venderModel/venderSchema");

// Route for Save a new vender
const createVender = async (request, response) => {
    try {
        if (
            !request.body.vname ||
            !request.body.accountNumber ||
            !request.body.bname ||
            !request.body.addresLine1 ||
            !request.body.addresLine2 ||
            !request.body.city ||
            !request.body.zipcode
        ) {
            return response.status(400).send({
                message: 'Send all required fields: title, author, publishYear',
            });
        }
        const {vname,accountNumber,bname,addresLine1,addresLine2,city,zipcode} = request.body; 
        
        console.log("hjk11");
        
        const venders = await venderdb.create({vname,accountNumber,bname,addresLine1,addresLine2,city,zipcode});

        return response.status(201).send(venders);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
};

// Route for Get All venders from database
const getVenders = async (request, response) => {
    try {
        const venderss = await venderdb.find({});

        return response.status(200).json({
            count: venderss.length,
            data: venderss,
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
};

// Route for Get one vender from database by id
const getOneVender = async (request, response) => {
    try {
        const { id } = request.params;

        const vend = await venderdb.findById(id);

        return response.status(200).json(vend);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
};

// Route for Update a vender
const updateVender = async (request, response) => {
    const { id } = request.params;
    try {
        if (
            !request.body.vname ||
            !request.body.accountNumber ||
            !request.body.bname ||
            !request.body.addresLine1 ||
            !request.body.addresLine2 ||
            !request.body.city ||
            !request.body.zipcode
        ) {
            return response.status(400).send({
                message: 'Send all required fields: title, author, publishYear',
            });
        }        

        const result = await venderdb.findByIdAndUpdate(id, {$set:request.body});

        if (!result) {
            return response.status(404).json({ message: 'vender not found' });
        }

        return response.status(200).send({ message: 'vender updated successfully' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
};

// Route for Delete a vender
const deletVender = async (request, response) => {
    try {
        const { id } = request.params;

        const result = await venderdb.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).json({ message: 'vender not found' });
        }

        return response.status(200).send({ message: 'vender deleted successfully' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
};

module.exports = {createVender,deletVender,getOneVender,updateVender,getVenders}


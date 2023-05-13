// api route code will never ends up on client side, it always runs only on server

import { MongoClient } from 'mongodb';

// nextJS triggers this function when a request is reaches this '/api/new-meetup' path
const handler = async (req, res) => {
    if(req.method === 'POST') {
        try {
            const data = req.body;
            console.log("data", data);
        
            // expect fields from the newMeetupForm on this API
            // const { title, image, address, desc } = data;
    
            const client = await MongoClient.connect('mongodb+srv://jsnext:js123123@nextjsdemo.olsk22u.mongodb.net/test');

            const db = client.db();
    
            // insert new document into the collection
            const meetupsCollection = db.collection('meetups');
            const result = await meetupsCollection.insertOne({ ...data });
    
            console.log(result);
    
            await client.close();
    
            res.status(201).json({ message: 'Meetup inserted.' });
        }
        catch(err) {
            return res.status(500).json({ message: err.message });
        }
    }
}

export default handler;
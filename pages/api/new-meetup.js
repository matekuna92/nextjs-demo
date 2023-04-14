// api route code will never ends up on client side, it always runs only on server

import { MongoClient } from 'mongodb';

const handler = async (req, res) => {
    if(req.method === 'POST') {
        const data = req.body;
        
        // expect fields from the newMeetupForm on this API
        // const { title, image, address, desc } = data;

        const client = await MongoClient.connect('mongodb+srv://nextjsdemo.olsk22u.mongodb.net/meetups?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority');
        const db = client.db();

        // insert new document into the collection
        const meetupsCollection = db.collection('meetups');
        const result = await meetupsCollection.insertOne({ data });

        console.log(result);

        await client.close();

        res.status(201).json({message: 'Meetup inserted.'});
    }
}

export default handler;
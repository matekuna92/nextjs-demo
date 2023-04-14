

const handler = (req, res) => {
    if(req.method === 'POST') {
        const data = req.body;
        
        // expect fields from the newMeetupForm on this API
        const { title, image, address, desc } = data;
    }
}

export default handler;
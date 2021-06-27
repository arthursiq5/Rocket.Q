module.exports = {
    create(req, res){
        let roomId = ''

        for (let index = 0; index < 6; index++) {
            roomId += Math.floor(Math.random() * 10).toString()
            
        }

        res.redirect(`/room/${roomId}`)
    }
}
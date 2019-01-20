const functions = require("firebase-functions");
const cors = require('cors')({ origin: true });
const admin = require('firebase-admin');

admin.initializeApp();

const database = admin.database().ref('/panels');


exports.addPanel = functions.https.onRequest((req, res) => {
  return cors(req, res, () => {
    if(req.method !== 'POST') {
      return res.status(401).json({
        message: 'Not allowed'
      })
    }
    console.log(req.body)
  
    const cat = req.body

    database.push( cat );

    let items = [];

    return database.on('value', (snapshot) => {
    //   snapshot.forEach((item) => {
    //     items.push({
    //       id: item.key,
    //       item: key


    //     });
    //   });
      
      res.status(200).json(items)
    }, (error) => {
      res.status(error.code).json({
        message: `Something went wrong. ${error.message}`
      })
    })
  })
})




exports.getPanel = functions.https.onRequest((req, res) => {
    return cors(req, res, () => {
      if(req.method !== 'GET') {
        return res.status(404).json({
          message: 'Not allowed'
        })
      }
  
      let items = [];
  
      return database.on('value', (snapshot) => {
        let Asum = 0;
        let Bsum = 0;
        let Csum = 0;
        let length = 0;

        var A1picture = null;
        var B1picture = null;
        var C1picture = null;
        var A2picture = null;
        var B2picture = null;
        var C2picture = null;

        snapshot.forEach((item) => {
            length += 1;
            Asum += item.val().a;
            Bsum += item.val().b;
            Csum += item.val().c;
        })
        a1Index = Math.floor(Math.random() * Math.floor(Asum))
        b1Index = Math.floor(Math.random() * Math.floor(Bsum))
        c1Index = Math.floor(Math.random() * Math.floor(Csum))

        a2Index = Math.floor(Math.random() * Math.floor(Asum))
        b2Index = Math.floor(Math.random() * Math.floor(Bsum))
        c2Index = Math.floor(Math.random() * Math.floor(Csum))

        snapshot.forEach((item) => {

        a1Index -= item.val().a;
        console.log(a1Index)
        a2Index -= item.val().a;

        b1Index -= item.val().b;
        b2Index -= item.val().b;

        c1Index -= item.val().c;
        c2Index -= item.val().c;


        if (a1Index <= 0 ){
            A1picture = {id:item.key, items:item.val().filename};
            console.log("A point reached")
            a1Index = 999999999999
        }
        if (a2Index <= 0 ){
            A2picture = {id:item.key, items:item.val().filename};
            a2Index = 999999999999
        }
        if (b1Index <= 0 ){
            B1picture = {id:item.key, items:item.val().filename};
            b1Index = 999999999999
        }
        if (b2Index <= 0 ){
            B2picture = {id:item.key, items:item.val().filename};
            b2Index = 999999999999
        }
        if (c1Index <= 0 ){
            C1picture = {id:item.key, items:item.val().filename};
            c1Index = 999999999999
        }
        if (c2Index <= 0 ){
            C2picture = {id:item.key, items:item.val().filename};
            c2Index = 999999999999
        }


        //   items.push({
        //     id: item.key,
        //     items: item.val().filename
        //   });
        });
        let panels = [
            A1picture,
            B1picture,
            C1picture,
            A2picture,
            B2picture,
            C2picture
        ];


        res.status(200).json(panels)
      }, (error) => {
        res.status(error.code).json({
          message: `Something went wrong. ${error.message}`
        })
      })
    })
  })
  
  
exports.panelUpdate = functions.https.onRequest((req, res) => {
   return cors(req, res, () => {
     if(req.method !== 'POST') {
       return res.status(401).json({
         message: 'Not allowed'
       })
     }


      console.log(req.body);
      req.body



     }, (error) => {
       res.status(error.code).json({
         message: `Something went wrong. ${error.message}`
       
     })
   })
 })

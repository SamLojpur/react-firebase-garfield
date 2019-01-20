const functions = require("firebase-functions");
const cors = require('cors')({ origin: true });
const admin = require('firebase-admin');

admin.initializeApp();

const database = admin.database().ref('/panels');

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from a Severless Database!");
});

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
        snapshot.forEach((item) => {
          items.push({
            id: item.key,
            items: item.val().filename
          });
        });
        let panels = [];

        for (let i = 0; i<6; i++){
            panels[i] = items[Math.floor(Math.random() * Math.floor(300))];

        }
        
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
     }, (error) => {
       res.status(error.code).json({
         message: `Something went wrong. ${error.message}`
       })
     })
   })
 })

const LinksController={
    getList: async(req, res)=>{
        console.log("ok get all");
        try {
            const links = await Link.find();
            res.json({ links });
          } catch (e) {
            res.status(400).json({ message: e.message });
          }
    },
    getById:async(req, res)=>{
        console.log("ok getById");
        try {
            redirect()
          } catch (e) {
            res.status(400).json({ message: e.message });
          }
    },
    add:async(req, res)=>{
        console.log("ok add");
        console.log(req);
      
          try {  const { url } = req.body;            
          const nweLink = await Link.create({ url });//הוספת חדש
          res.json(`http://localhost:8787/links/${nweLink.id}`);
        } catch (e) {
          res.status(400).json({ message: e.message });
        }
    },
    update:async(req, res)=>{
        console.log("ok update");
        const { id } = req.params;
        try {
          const updatedLink = await Link.findByIdAndUpdate(id, req.body, {
            new: true,
          });
          res.json(updatedLink);
        } catch (e) {
          res.status(400).json({ message: e.message });
        }
    },
    delete:async(req, res)=>{
        console.log("ok delete");
        const { id } = req.params;
        try {
          const deleted = await Link.findByIdAndDelete(id);
          res.json(deleted);
        } catch (e) {
          res.status(400).json({ message: e.message });
        }
    },

    redirect :async (req, res) => {
      const { id } = req.params;
      try {
        const originalUrl = Link.findById(id);
        const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  
        // הוסף לחיצה למערך clicks
        originalUrl.clicks.push({ insertedAt: new Date(), ipAddress: ipAddress });
    
        // שמור את העדכונים במסד הנתונים
        await originalUrl.save();
        res.redirect(originalUrl.url).status(301);
      }
      catch (err) {
        res.status(500).json({ "massage": err.message })
      }
  
    },
    getClicksByTarget: async (req, res) => {
      const { id } = req.params;
      try {
          const link = await Link.findById(id);
          if (!link) {
              return res.status(404).json({ message: "Link not found" });
          }

          const clicksByTarget = link.clicks.reduce((acc, click) => {
              const target = click.targetParamValue || 'unknown';
              if (!acc[target]) {
                  acc[target] = 0;
              }
              acc[target]++;
              return acc;
          }, {});

          res.json({ clicksByTarget });
      } catch (err) {
          res.status(500).json({ message: err.message });
      }
  }
}





export default LinksController;
const path = require('path');
const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const { errorHandler } = require('./middleware/errorMiddleware');
const port = process.env.PORT || 8000;
const cors = require('cors')
const config = require('./config');

//const UserRoutes = require('/routes/user-route');
//const ProjectRoutes = require('/routes/project-route');
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(cors({ origin: true }));

app.use('/api/users/',  require('./routes/auth-route'));
app.use('/api/projects/', require('./routes/project-route'));
app.use('/api/people/', require('./routes/user-route.js'));
//app.use('/api', UserRoutes.routes);
//app.use('/api', ShopRoutes.routes);

// Serve frontend
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, './frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, './', 'frontend', 'build', 'index.html')
    )
  );
} else {
  app.get('/', (req, res) => res.send('Please set to production'));
}

app.use(errorHandler);

app.listen(config.port, () => console.log('App is listening on ' + config.port))

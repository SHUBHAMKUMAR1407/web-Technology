const express =require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').strategy;
const session = require('express-session');
const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.unlencoded({extended: false}));
app.use(bodyparser.json());

app.use(session({
    secret : 'secret',
    resave : false,
    saveUninitialized : false
}));


app.use(passport.initialize());
app.use(passport.session());

const isers = [

    {
        id :1, username : 'user', password : 'passsword1', role : 'user'
    }
    
    {
        id :2, username : 'admin', password : 'adminpasssword', role : 'admin'
    }
];

passport.serializeuser((user, done) =>{
    done(null, user.id)
});

passport.deserializer((id, done) =>
{
    const user = users.find (user => user.id === id);
    done(null, user);
});

passport.use(new LocalStrategy((username, password, done) =>{
    const user = users.find(user => user.username && user.password === password);
    if(user){
        return done(null, user);

    }
    else{
        return done(null, false, {message: 'incorrect username or password'
        });
    }
}));

const isAuthenticated = (req,res,next) =>{
    if(req.isAuthenticated()){
        return next();
    }
    else{
        res.redirect('/login');
    }
};

app.post('/login',
passport.authenticate('local', {
    successRedirect: '/p;rofile',
    failureRedirect : '/login',
    failureFlash : true
}));
app.get('/logout', (req, res)={
    req.logout();
    res.redirect('/');
});


app.get('/profile', isAuthenticated, (req, res) =>{
    res.send(`wlcome ${req.user.username}, your role is ${req.user.role}`);
});

app.get('/login', (req,res) =>{
    res.send('login Page');
});
app.get('/', (req, res)=>{
    res.send('home page')
});
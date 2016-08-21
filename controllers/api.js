var express = require('express');
var router = express.Router();
var db = require('../models');

router.route('/').get(function(req, res) {
    db.joke.findAll({}).then(function(jokes) {
        res.send(jokes);
    })
})

router.get('/setup', function(req,res) {
db.joke.create({setup: 'What is the preferred hot beverage of British whales?', punchline:'manatea'}).then(function(){
db.joke.create({setup: 'What is the top mobile carrier under the sea?', punchline:'manatee mobile'}).then(function(){
db.joke.create({setup: 'What is really grinding the gears of Old Man Sole these days?', punchline:'manateens'}).then(function(){
db.joke.create({setup: 'Before the big game against Starfish U, what did the Searhorse College coach stress?', punchline:'manateamwork'}).then(function(){
db.joke.create({setup: 'Meanwhile, in the Starfish U locker room, what did their coach kept repeating?', punchline: 'There is no I in manateam'}).then(function(){
db.joke.create({setup: 'What is the top youth sport in the Sargasso Sea?', punchline:'Manatee ball'}).then(function(){
db.joke.create({setup: 'Where did the ancient undersea hunters sleep while tracking water buffalo?', punchline:'manateepees'}).then(function(){
db.joke.create({setup: "What is AC/DC's number one hit on the bottom of the sea?', punchline:'manaTNT"}).then(function(){
db.joke.create({setup: 'How do Japanese fish prefer their rice?', punchline:'mansteamed'}).then(function(){
db.joke.create({setup: 'What does Miss Pacfic Ocean where on her head?', punchline:'a manatiara'}).then(function(){
db.joke.create({setup: 'What is the most popular item on undersea playgrounds?', punchline:'manateetertotters'}).then(function(){
db.joke.create({setup: 'What does Bart Simpson say when submerged?', punchline:'Dont have a cow, manatee'}).then(function(){
db.joke.create({setup: 'whats the hardest part of raising a baby eel?', punchline:'manateething'}).then(function(){
db.joke.create({setup: 'Fish: why you so mean to me turtle?', punchline:'Turtle: im just manateasing'}).then(function(){
db.joke.create({setup: 'What is the key to underwater architechture?', punchline:'cross manabeams'}).then(function(){
db.joke.create({setup: 'What happens when sea urchins see sad movies?', punchline:'manatears'}).then(function(){
db.joke.create({setup: 'What is the national color of the atlantic ocean?', punchline:'manateal'}).then(function(){
db.joke.create({setup: 'what do wet hobos eat?', punchline:'cans of manabeans'}).then(function(){
db.joke.create({setup: 'what do fish wear on casual fridays?', punchline:'manajeans'}).then(function(){
db.joke.create({setup: 'where do fish get honey?', punchline:'manabees'}).then(function(){
db.joke.create({setup: 'what is the most commonly injured body part in the ocean?', punchline:'manaknees'}).then(function(){
db.joke.create({setup: 'who raises kids under the sea?', punchline:'manateachers'}).then(function(){
db.joke.create({setup: 'where do urban seals live?', punchline:'manacities'}).then(function(){
db.joke.create({setup: 'what do seal kids watch cartoons?', punchline:'manaTV'}).then(function(){
db.joke.create({setup: 'where do fish get finacial advice?', punchline:'manaCNBC'}).then(function(){
db.joke.create({setup: 'what do hip fish say before they go to bed?', punchline:'im gonna go catch some manazs'}).then(function(){
db.joke.create({setup: 'who saves cats caught in seaweed?', punchline:'firemanatees'}).then(function(){
db.joke.create({setup: 'what do kids shoot their eyes out with on the seafloor?', punchline:'manabbs'}).then(function(){
db.joke.create({setup: 'what do frat boys drink in the ocean?', punchline:'manabeers'}).then(function(){
db.joke.create({setup: 'what do you call a brownnosing sea cow?', punchline:'an overmanateever'}).then(function(){
db.joke.create({setup: 'what do you call a weak seal?', punchline:'manafeeble'}).then(function(){
db.joke.create({setup: 'what is the top mobile game under the sea?', punchline:'pokemanatee go'}).then(function(){
db.joke.create({setup: 'what do you call a whale who drones on and on and on and on?', punchline:'manatenous'}).then(function(){
db.joke.create({setup: 'whats for dinner in the sea?', punchline:'manabeef'}).then(function(){
db.joke.create({setup: 'what sound do trucks make while they back up in the ocean?', punchline:'manabeeps'}).then(function(){
db.joke.create({setup: 'what is the best part of Festivus in the Ocean?', punchline:'the manafeats of strength'}).then(function(){
db.joke.create({setup: 'how many wheels are on an undersea tricycle?', punchline:'manathree'}).then(function(){
db.joke.create({setup: 'who stole the sunken treasure?', punchline:'manatheives'}).then(function(){
db.joke.create({setup: 'what was benedict arnold guilty of on the sea floor?', punchline:'manatreason'}).then(function(){
db.joke.create({setup: 'what do you watch movies on if your a fish?', punchline:'a manascreen'}).then(function(){
db.joke.create({setup: 'what do you call a group of ships on the ocean floor?', punchline:'a manafleet'}).then(function(){
db.joke.create({setup: 'who rules the sea bed?', punchline:'the manaqueen'}).then(function(){
db.joke.create({setup: 'how do you put a seal pup to bed?', punchline:'by saying manasweet manadreams'}).then(function(){
db.joke.create({setup: 'what happens when you mix pepper and sea turtles?', punchline:'they manasneeze'}).then(function(){
db.joke.create({setup: 'who hosts the news under the sea?', punchline:'the anchormanatee'}).then(function(){
db.joke.create({setup: 'what is the best tax haven in the ocean?', punchline:'the caymanatee islands'}).then(function(){
db.joke.create({setup: 'what country makes the best seaweed sausages?', punchline:'germanatee'}).then(function(){
db.joke.create({setup: 'what is the stripiest undersea creature?', punchline:'the manazebra'}).then(function(){
db.joke.create({setup: 'where dooes the ocean get its oxygen?', punchline:'manatrees'}).then(function(){
db.joke.create({setup: 'what is the top snack food in the everglades?', punchline:'manacheetos'}).then(function(){
db.joke.create({setup: 'who is the FIERCEST undersea creature?', punchline:'manabeyonce'}).then(function(){
db.joke.create({setup: 'who is her husband?', punchline:'jay mana-z'}).then(function(){
db.joke.create({setup: 'who is currently topping the bilboard top 100 in the ocean?', punchline:'justin manatieber'}).then(function(){
db.joke.create({setup: 'who played the role of Jack in the undersea version of Titanic?', punchline:'manateeonardo dicaprio'}).then(function(){
db.joke.create({setup: 'what do you call it when you reach a buisness deal under the sea?', punchline:'a managreement'}).then(function(){
db.joke.create({setup: 'if you believe you are wrongly convicted in seaweed court, what are your options?', punchline:'manappeal'}).then(function(){
db.joke.create({setup: 'what do parrotfish eat with?', punchline:'their manabeak'}).then(function(){
db.joke.create({setup: 'what is the top indie pop duo under the sea?', punchline:'manategan and sara'}).then(function(){
db.joke.create({setup: 'who is the star of the hit amc zombie show the swimming dead?', punchline:'normanatee reedus'}).then(function(){
db.joke.create({setup: 'what do you call really happy seals?', punchline:'manaelated'}).then(function(){
db.joke.create({setup: 'what animal builds the best dams in the ocean?', punchline:'manabeavers'}).then(function(){
db.joke.create({setup: 'what insects rule the seven seas?', punchline:'manabeetles'}).then(function(){
db.joke.create({setup: 'the fastest animal under the sea?', punchline:'the manacheetah'}).then(function(){
db.joke.create({setup: 'what is the smartest undersea creature?', punchline:'the chimpanatee'}).then(function(){
db.joke.create({setup: 'What is the top musical under the sea?', punchline:'ManaGrease'}).then(function(){
db.joke.create({setup: 'What is radioheads top hit in the everglades?', punchline:'manacreep'}).then(function(){
db.joke.create({setup: 'what did the evangelical pastor call the unconverted?', punchline:'manaheathens'}).then(function(){
db.joke.create({setup: 'what undersea holiday usually falls in April?', punchline:'manaeaster'}).then(function(){
db.joke.create({setup: 'which part of the face is responsible for hearing?', punchline:'the manaear'}).then(function(){
db.joke.create({setup: 'what is the top digital media format for music in the ocean?', punchline:'manaCDs'}).then(function(){
db.joke.create({setup: 'what about for films?', punchline:'manaDVDs'}).then(function(){
db.joke.create({setup: 'what are most of these jokes?', punchline:'a manareach'}).then(function(){
db.joke.create({setup: 'what is the strongest oceanic meta?', punchline:'manasteel'}).then(function(){
db.joke.create({setup: 'where do you go to get married in the ocean?', punchline:'the manasteeple'}).then(function(){
db.joke.create({setup: 'how do fish freshen their breath?', punchline:'manaspearamint'}).then(function(){
db.joke.create({setup: "what is the most vulnearable part of a fish's foot?", punchline:'the manaheel'}).then(function(){
db.joke.create({setup: 'how often do dolphins get paid?', punchline:'every 2 manaweeks'}).then(function(){
db.joke.create({setup: 'what are the most popular sea cow milk products?', punchline:'manacheese and ice manacream'}).then(function(){
db.joke.create({setup: 'what languague do first year computer science students learn in the Sargasso Sea?', punchline:'manaC++'}).then(function(){
db.joke.create({setup: 'when do fish go golfing?', punchline:'manatee time'}).then(function(){
db.joke.create({setup: 'whats on the outside of sea bananas?', punchline:'manapeels'}).then(function(){
db.joke.create({setup: 'who won the academy award for best undersea performance?', punchline:'the rainmanatee, dustin hoffmanatee'}).then(function(){
db.joke.create({setup: 'who ruled Ancient Undersea Greece?', punchline:'the manaceasar'}).then(function(){
db.joke.create({setup: "what do you call marine mammals from Italy's largest city?", punchline:'Romanatees'}).then(function(){
db.joke.create({setup: 'what do you get when you rub a magic lamp in the ocean?', punchline:'a managenie'}).then(function(){
db.joke.create({setup: 'who is the strongest X-man in the ocean?', punchline:'manaJean Grey'}).then(function(){
db.joke.create({setup: 'who is the leader of an undersea church?', punchline:'the manapriest'}).then(function(){
db.joke.create({setup: 'what do you call a drunk whale?', punchline:'manatanked'}).then(function(){
db.joke.create({setup: 'what do you call a lady marine mammal?', punchline:'a manashe'}).then(function(){
db.joke.create({setup: 'what sound do sheep make when submurged?', punchline:'a manableat'}).then(function(){
db.joke.create({setup: 'what club do ambitious, musically inclined college students most often join?', punchline:'the managlee club'}).then(function(){
db.joke.create({setup: 'who leads the fortune 500 companies based in the ocean?', punchline:'chairmanatees and manaCEOs'}).then(function(){
db.joke.create({setup: 'what planet do fish aspire to visit?', punchline:'manavenus'}).then(function(){
db.joke.create({setup: 'how do fish lose weight?', punchline:'by hiring a manatrainer'}).then(function(){
db.joke.create({setup: 'what is elton johns biggest undersea hit?', punchline:'rocket manatee'}).then(function(){
db.joke.create({setup: 'what about billy joel?', punchline:'piano manatee'}).then(function(){
db.joke.create({setup: 'and mumford and sons?', punchline:'hey little lion manatee'}).then(function(){
db.joke.create({setup: 'black sabbath?', punchline:'Iron manatee'}).then(function(){
db.joke.create({setup: 'and zz top?', punchline:'sharp dressed manatee'}).then(function(){
db.joke.create({setup: 'what do you call a traditional chinese instrument when its all wet?', punchline:'a dew gong'}).then(function(){
    res.redirect('/api');
})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})

module.exports = router;
